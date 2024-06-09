import promiseFs from 'node:fs/promises'
import fs from 'node:fs'
import path from 'node:path';
import { generateValueMap,getExportObject } from './util';
type filePathArray = string[];
type fileRecord = [string,string]
function readAllFilePathInDir(dir: string):filePathArray {
    const files = fs.readdirSync(dir);
    const result: filePathArray = [];
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            result.push(...readAllFilePathInDir(fullPath))
        } else {
            result.push(fullPath)
        }
    })
    return result
}

function readFileContext(filePathList:filePathArray):Promise<fileRecord[]>;
function readFileContext(filePathList:string):Promise<fileRecord[]>;
async function readFileContext(filePathList:string|filePathArray):Promise<fileRecord[]>{
    if(!Array.isArray(filePathList)){
        filePathList = [filePathList]
    }
    const files = await Promise.all(filePathList.map(path=>promiseFs.readFile(path)));
    return files.map((file,idx)=>([filePathList[idx],file.toString()])) ;
}

async function generateFileValueMap(directoryPath:string){
    const pathList = readAllFilePathInDir(directoryPath);
    const contextList = await readFileContext(pathList);
    
    const m:Map<string,Map<string,string>> = new Map();
    contextList.forEach(([fullPath,context])=>{
         const exportObject = getExportObject(context);
         const {root,dir} = path.parse(fullPath.replace(directoryPath,''))
         const map = generateValueMap(exportObject,undefined,dir.replace(root,'').split(path.sep).join('.')+'.');
         m.set(fullPath,map);
    })
    return m
}
export {
    readAllFilePathInDir,
    readFileContext,
    generateFileValueMap,
}
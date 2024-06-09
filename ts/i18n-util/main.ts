import path from "node:path";
import http from "node:http"
import fs from "node:fs"
import { generateFileValueMap} from "./core/readFile"
import { searchKey } from "./core/search";
const currentPath: string = process.cwd();

import { createSever } from "./server";
import { matchChinese } from "./core/util";
generateFileValueMap(path.join(currentPath,'static/')).then(map=>{
    // createSever(map)
    const filePath = path.resolve(currentPath,'../type.ts');
    let fileContent = fs.readFileSync(filePath).toString();
    const match = matchChinese(fileContent) || []
    for(let c of match){
        const key = searchKey(c,map);
        if(key.length === 0) break;
        fileContent = fileContent.replaceAll(new RegExp(`['"]${c}['"]`,'g'),`$t('${key[0].key}')`);
    }
    fs.writeFileSync(filePath,fileContent,'utf-8')
})

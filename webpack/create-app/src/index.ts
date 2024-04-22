#!/usr/bin/env node 
import path from 'node:path'
import fs from 'node:fs'

import prompts from 'prompts';
async function bootStrap(name:string){
    const {projectName} = await prompts([
        {
            type: 'text',
            name: 'projectName',
            message: '请输入你的项目名称'
        }
    ]);
    const targetPath = path.resolve(process.cwd(),projectName);
    const sourcePath = path.resolve(process.cwd(), 'template')
    fs.cpSync(sourcePath, targetPath, {
        recursive: true,
    })
    console.log(`${projectName} create success 😊`);
    console.log(`cd ${projectName}`);
    console.log(`npm i`);
    console.log(`npm run dev`);
    
    
}
bootStrap('chris')

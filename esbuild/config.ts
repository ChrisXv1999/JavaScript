import esbuild from 'esbuild'
import swc from '@swc/core'
//@ts-ignore
import fs from 'node:fs'
await esbuild.build({
    entryPoints:['./index.ts'],
    treeShaking: true,
    // 独立打包
    bundle: true,
    loader:{
        ".js":"js",
        ".ts":"ts"
    },
    plugins:[
        {
            name: "swc-loader",
            setup(build){
                build.onLoad({filter: /\.(js|ts)$/},(args)=>{
                    const content = fs.readFileSync(args.path,"utf-8");
                    const {code} = swc.transformSync(content,{
                        filename: args.path
                    })
                    console.log(content);
                    console.log(code);
                    return {
                        contents: ""
                    }
                })
            },
        }
    ],
    outdir: "dist"
})
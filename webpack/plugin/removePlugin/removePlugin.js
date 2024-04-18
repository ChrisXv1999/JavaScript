const PLUGIN_NAME = 'RemovePlugin';
const commentRegRex = /\/\*[\s\S]*?\*\//g;
export default class RemovePlugin {
    constructor(){

    }
    apply(compiler) {
        compiler.hooks.emit.tap(PLUGIN_NAME,(compilation)=>{
           for(const filename of Object.keys(compilation.assets)) {
                if(filename.endsWith('.js')){
                    const source = compilation.assets[filename].source().replaceAll(commentRegRex,'')
                    compilation.assets[filename] = {
                        source:()=>source,
                        size: ()=>source.length,
                    }
                }
           }
        })
    }
}
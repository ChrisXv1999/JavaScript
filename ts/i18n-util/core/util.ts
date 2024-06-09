export function getExportObject(str:string):object{
    str = str.replace('export default','');
    const fn = new Function(`return ${str}`)
    return fn()
}

export function generateValueMap(obj:object,m:Map<string,string>=new Map(),prefix:string=''):Map<string,string>{
    Object.entries(obj).reduce((m,[k,v])=>{
        if(typeof v === 'object'){
            generateValueMap(v,m,prefix+k+'.')
        }else {
            m.set(v,prefix+k)
        }
        return m
    },m)
    return m
}

export function matchChinese(str:string) {
    const regex = /[\u4e00-\u9fa5]+/g;
    return str.match(regex);
  }


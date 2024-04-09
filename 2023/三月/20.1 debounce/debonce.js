// handlerParam 默认只传递最后一次调用的参数
function debounce(fn,interval=300,handlerParam=param=>param.pop()){
    let timer = 0;
    const params = [];
    return (param)=>{
        params.push(param);
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(handlerParam(params))
            params.length = 0;
        },interval)
    }
}
function say(s){
    console.log(s);
}
const debounceSay = debounce(say,1000,(params)=>params.reduce((t,c)=>{t.id.push(c.id);return t},{id:[]}));


let child = {}
let parent= {name:'parent'};
Object.setPrototypeOf(child,parent);
const proxyConfig = {
    get(...rest){
        console.log(rest);
        return Reflect.get(...rest)
    },
    set(...rest){
        console.log(rest,'---set');
        return Reflect.set(...rest)
    }
}
const proxyC =new Proxy(child,proxyConfig);
const proxyP =new Proxy(parent,proxyConfig);
// proxyC.name
const closure = (()=>{
    let obj = {
        name: 1
    }
    return {
        get(key){
            return obj[key]
        }
    }
})()
Object.defineProperty(Object.prototype,'$getInstance',{
    get(){
        return this
    }
})
const target =  closure.get('$getInstance');
target.age = 18;
// console.log(closure.get('age'))
//数字proxy
const arr = [5,2,3,1,4];
const proxyA = new Proxy(arr,proxyConfig);
for(key in child) {
    console.log(key);
}
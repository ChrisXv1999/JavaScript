export default function defineReactive(vm,data,namespace){
    return new Proxy(vm,{
        get(target,key){
            return Reflect.get(data,key)
        },
        set(target,key,newValue){
            return Reflect.set(data,key,newValue)
        }
    })
}
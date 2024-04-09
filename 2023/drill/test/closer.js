const o = (function() {
    const obj = {
        a:1
    }
    return {
        get(key){
            return obj[key]
        }
    }
})();
Object.defineProperty(Object.prototype,'$getO',{
    get(){
        return this
    }
})
console.log(o.get('$getO'));
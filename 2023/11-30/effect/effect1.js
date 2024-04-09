function effect() {
    console.log(1);
    document.body.innerText = person.name
}
let person = {
    name: 'effect'
}
let buckets = new Set();
let proxyPerson = new Proxy(person, {
    get(...rest){
        buckets.add(effect);
       return Reflect.get(...rest);
    },
    set(...rest){
        Reflect.set(...rest)
        buckets.forEach(effect=>effect())
    }
})
proxyPerson.name //收集依赖
proxyPerson.name = 'effect1'
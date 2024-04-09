function _new(func,...rest){
    const obj = Object.create(func.prototype);
    const res = func.apply(obj,rest);
    return typeof res === 'object' && res !== null ? res : obj
}
function Person(name){
    this.name = name;
    return {}
}
Person.prototype.say = function(){
    console.log(this.name);
}
//return 引用类型将无法继承原型方法
new Person('chris').say()
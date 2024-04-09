// 构造函数
// 构造函数不能使用箭头函数
const Person = function(name, age) {
  this.name = name
  this.age = age;
}
console.log(Person);
const chris = new Person('chris',18);
// chris.sayName();
let z = new Object();
// 原型上的不能使用
Person.call(z, 'z',18);

// 原型模式
Person.prototype.sayName = function(){
  console.log(this.name)
}
chris.sayName();
const x = new Person('X',18);
// 共用同一个函数 原型方法不能使用箭头函数 会影响this指向
// prototype = {} 修改前构造的对象不会拥有新定义的方法 .不会受影响
console.log(x.sayName === chris.sayName)
console.log(Person.prototype.__proto__)
console.log(Object.getPrototypeOf(chris));// Person{sayName(){}}
console.log(Person.prototype.isPrototypeOf(chris));//true
// hasOwnProperty 是否是当前对象的属性 getOwnPropertyNames

const SuperType = function() {
  this.super = [true, false];
}
const SubType = function() {
  this.sub = false;
}
SuperType.prototype.logType = function (){
  console.log(this.super);
}
const Super = new SuperType();
// SuperType.prototype = {};
Super.logType();
const Super1 = new SuperType();
// Super1.logType();// error
console.log(Super instanceof SuperType)//false isPrototypeOf
console.log(Super1 instanceof SuperType);//true
const Super2  = new SuperType();
Super2.super.push(0);
Super2.logType();
Super1.logType();
// Object.create 可以接收两个参数 一个是原型对象 第二个参数 与defineProperties的第二个参数一样 配置同名属性会覆盖原型对象上的属性
let a = {
  name: 'chris',
  girls: [1,2,3,4,5]
}

// class 受快作用域限制 且无法提升
class Vehicle {
  constructor() {
    if(new.target === Vehicle) throw new Error('Vehicle cannot be directly instantiated')
    console.log(this);
  }
}
class Bus extends Vehicle {}
let bus = new Bus();
console.log(bus instanceof Vehicle);
// new.target 可以限制实例化 
// Symbol.species 决定创建返回实例时使用的类

// 组合模式优于继承模式

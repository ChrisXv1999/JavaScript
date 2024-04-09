// let num:Object = 1;
// let v1:void = undefined
// let u1:unknown = 1;
// let u2:unknown = 2;
// console.log(num);
// any unknown 顶级类型 unknown 不能赋值给其他类型 对象即使有属性 方法也无法使用
//Object
var fn = function (name) {
    return [1];
};
fn();
// 函数重载 实现函数必须实现所有声明
// 联合类型 交叉类型 | & 类型断言 as <>
// 内置对象 NodeList[Of<TYPE>]  Promise <> 必须指定返回类型 
var num1 = new Number(1);

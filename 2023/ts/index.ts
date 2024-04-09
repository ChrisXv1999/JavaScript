// let num:Object = 1;
// let v1:void = undefined
// let u1:unknown = 1;
// let u2:unknown = 2;
// console.log(num);
// any unknown 顶级类型 unknown 不能赋值给其他类型 对象即使有属性 方法也无法使用
//Object

// 重名interface 会合并
interface Person {
    name: string,
}
interface Person {
    // 可选
    age?: number,
    //只读属性
    readonly id:string,
    // 任意key
    [propName:string]:any,
}
// extends 继承
interface son extends Person {}
// 对函数进行约束
interface Fn{
    (name?:string):number[]
}
const fn:Fn = (name?:string)=>{
    return [1]
}
fn()
// 函数重载 实现函数必须实现所有声明

// 联合类型 交叉类型 | & 类型断言 as <>

// 内置对象 NodeList[Of<TYPE>]  Promise <> 必须指定返回类型 
let num1:Number = new Number(1);
//  implements 类型约束 readonly private protected public super get set static
// 抽象类 abstract 继承类必须实现抽象类的 抽象方法

// 元组
const y:[number,boolean] = [0,false];
y.push(1);

// 枚举 enum   keyof
interface P  {
    name: string
    age: number
}
type Options<T extends Object>={
    readonly [Key in keyof T]:T[Key]
}
type O = Options<P>
const chris:O = {
    name: 'chris',
    age: 18
}

// 命名空间 namespace
namespace a {
    export interface Person {
        
    }
}
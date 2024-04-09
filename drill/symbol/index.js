let s1 = Symbol('key');
let s2 = Symbol('key');
console.log(s1,s2,s1===s2);
// Symbol是基本数据类型 无法作为构造函数使用

// 全局符号注册表
// Symbol.for() 没有就生成新实例 有就返回实例
let s3 = Symbol.for('key');
let s4 = Symbol.for('key');
console.log(s3,s4,s3===s4, Symbol.keyFor(s4));

// Object.getOwnPropertyNames 不能获取对象Symbol类型的key
// Object.getOwnPropertySymbols 获取symbol类型的key
let obj = {
  [s1]: '1',
  [s4]: '2',
  string: '3'
} 
console.log(Object.keys(obj)); //[ 'string' ]
console.log(Object.values(obj)); // [ '3' ]

// 获取字符类型和符号类型的key Reflect.ownKey()

console.log( Object.getOwnPropertyDescriptors(obj))


// 常用内置符号
// Symbol.iterator
console.log(obj.hasOwnProperty(s1))
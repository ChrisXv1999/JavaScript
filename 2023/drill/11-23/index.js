const person = {
  name: 'chris',
  age: 18,
}
// console.log(Object.getOwnPropertyDescriptor(person,'age'));
// console.log(Object.defineProperty)

/**
 *  数据属性
 *  configurable  是否可以删除或者重新定义 以及改为访问器属性
 *  enumerable 是否可枚举 
 *  writable 是否可修改  
 *  value 值
 * 
 *  Object.defineProperty 设置数据属性描述
 *  getOwnPropertyDescriptor 查看数据属性描述
 * 
 *  访问器属性
 *  get
 *  set
 *  使用get set 不能一起配置 writable 和 value 否则将报错 分开配置先配置的会失效或造成其他问题
*/
Object.defineProperty(person,'name', {
  configurable: false,
  writable: false,
  enumerable: false,
})
person.name = 'xvxv';
// delete person.name
// console.log(Object.keys(person));

// 
Object.defineProperty(person, 'age', {
  configurable: true,
  enumerable: true,
  get() {
    return this._age || 0
  },
  set(value) {
    if(typeof value !== 'number')  console.error(`${value} is not a number`);
    this._age = value;
  }
})
Object.defineProperty(person, 'age', {
  value: 18,
})
person.age = 100;
console.log(person);
console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.assign({},person));
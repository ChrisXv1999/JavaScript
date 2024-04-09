// const numbers1 = [1,2,4,5,3];
// const numbers2 = [1,3,4,11,12];
// console.log(numbers1.sort()) // [1,2,3,4,5]
// console.log(numbers2.sort())  

const s1 = new Set([1,2,2,3,4,NaN]);
const s2 = new Set({ 
  [Symbol.iterator]: function*() { 
  yield "value1"; 
  yield "value2"; 
  yield "value3"; 
  } 
 });
/**
 *  Set
 *  size 获取长度
 *  add 末尾添加一个元素
 *  has 是否包含
 *  delete 删除对应值
 *  clear 销毁集合里的所有值
 * 
 *  weakSet 值只能是object或继承自object的类型
 * */  
const ws = new WeakSet();
const oValue = {name: 'chris'};
const aValue = [1,2,3];
ws.add(oValue);
ws.add(aValue);
console.log(ws);
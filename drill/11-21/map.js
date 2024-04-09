let examplePerson = {
  name: 'chris',
  age: 18,
  wealth: 1000000000000000000
}
const m = new Map(Object.entries(examplePerson));
console.log(...m);
/*
 * Map
 * methods   
 * size 获取长度 => number
 * has 是否存在该属性 => boolean
 * get 获取对应键的值
 * set 设置  set返回结果为当前映射实力 可以链式调用
 * clear 清空
 * delete 删除一个键
 * 
 * map 可以使用任意JavaScript数据类型作为键  NAN
 * 
 * 如何选择使用map和object
 * 相同内存下 map大约可以比object多存储50%的键值对
 * map插入性能略优于object
 * 少量键值对时 有时object略优于map
 * 删除操作map优势很大
 * 
 * weakMap 弱映射
 * weakMap 的键只能是Object 或继承自Object的类型   键没有引用时会被释放
 * 
*/
let wm = new WeakMap();
let oKey = {name: 'chris'};
wm.set(oKey,'姓名');
console.log(wm);

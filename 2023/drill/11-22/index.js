// console.log(({})[Symbol.iterator]);//undefined  number也没有迭代器
// 拥有迭代器的类型  string array map set arguments NodeList
let stringIterator = "123"[Symbol.iterator]().next();

//生成器 function*
function* generatorFn(value) {
  yield value;
  yield value;
  true;
}
const g = generatorFn("123");

function* numbers(n,m) {
  while (n < m) {
    n++;
    yield n;
  }
}
// console.log(Array.from(numbers(0,99)));
// yield* 生成可迭代的对象

// yield*最有用的地方是实现递归操作
function* nTimes(n) { 
  if (n > 0) { 
  yield* nTimes(n - 1); 
  yield n - 1; 
  } 
 } 
 for (const x of nTimes(3)) { 
  console.log(x); 
 }
//  return() 强制结束迭代  throw() 注入一个错误 未处理就会结束迭代
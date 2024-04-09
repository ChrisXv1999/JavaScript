// function curry(fn, ...arg) {
//   func.prototype[Symbol.toPrimitive] = () => {
//     return func();
//   };
//   function func(...rest) {
//     let newArg = [...arg, ...rest];
//     if (rest.length === 0) return fn.apply(null, newArg);
//     return curry(fn, ...newArg);
//   };
//   return func
// }
// function sum(...rest) {
//   return rest.reduce((a, b) => a + b, 0);
// }
// let add = curry(sum);
// let b = add(1)(2)(3,4);
function say() {

}
say[Symbol.toPrimitive] = () => {
  console.log('toPrimitive');
  return 1
}
say.toString = ()=> {
  console.log('toString');
  return 1
}
say.valueOf = ()=> {
  console.log('valueOf');
  return 1
}
a = say
console.log(a);
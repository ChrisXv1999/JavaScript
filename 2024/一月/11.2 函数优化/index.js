function fn1(a) {
  return a + 1 + "1" + "1";
}
let arr1 = Array.from({ length: 10000 }).fill(1);
let arr2 = Array.from({ length: 10000 }).fill(Math.random > 0.5 ? "1" : 1);
console.time("fn2");
arr2.map((item) => {
  fn2(item);
});
console.timeEnd("fn2");
console.time("fn1");
arr1.map((item) => {
  fn1(item);
});
console.timeEnd("fn1");
function fn2(a) {
  return a + 1 + "1" + "1";
}

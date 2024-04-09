// function Cat(){
//    return ({touchCat(){
//         console.log(this);
//         return function() {
//             console.log(this);
//         }
//     }})
// }
// let cat = new Cat();
// cat.touchCat()();

// let a = [1,2]
// let b = [3,4]
// a.concat(b)
// console.log(JSON.stringify({a,b:/a/g}));

// 'use strict';
// let isStaticModule = ()=> {
//     let flag = true;
//     try{
//         with({}) {
//             flag = false;
//         }
//     }catch(e){

//     }
//     return flag;
// }
// console.log(isStaticModule());

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// let forEachArr = [...arr];
// forEachArr.forEach(function(i){
//     console.log(i);
//     if(i === 3) {
//         forEachArr.length = 0;
//     }
// })
// var i = 11
// for(var i = 0; i < 10; i++);
// console.log(i);

// const arr = [{ a: 1 }, { b: 1 }, { a: 1 }, { a: 2 }, { b: 1 },{c:1}];
// let keyIndexMap = {};
// for (let i = 0; i < arr.length; i++) {
//   const [key,val] = Object.entries(arr[i])[0];
//   if (keyIndexMap[key] === undefined) {
//     keyIndexMap[key] = i;
//   } else {
//     arr[keyIndexMap[key]][key] += val;
//     arr.splice(i, 1);
//     i--;
//   }
// }
// console.log(arr);
const observe = (target,handler = {
  get(target,key,receiver){
    return  target[key]
  },
  set(target,key,value,receiver){
    return  Reflect.set(target,key,value,receiver)
  },
})=> {
  return new Proxy(target,handler)
}
const obj = {name:'chris'};
const ob = observe(obj);
ob.name
console.log(ob,obj);
for(let key in ob){
  console.log(key);
}

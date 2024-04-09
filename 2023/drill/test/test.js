
// let obj2 = {
//     valueOf() {
//         return 1
//     },
//     toString() {
//         return '2'
//     },
//     [Symbol.toPrimitive]() {
//         return 3
//     }
// }

// 判断对象和类的关系
class Person{
    constructor(name) {
        this.name = name;
    }
}
let chris = new Person('chris');
// console.log(chris.constructor === Person);
// 数组遍历方法
/**
 * forEach
 * map
 * reduce
 * reduceRight
 * flatMap
 * for of 
 * filter 
 * every
 * some
 * find
 * findIndex
 * 
 */

//对比forEach 和map
/**
 *  共同点
 *  都会遍历数组的每一项
 *  无法使用break打断
 *  不同点
 *  map有返回值
*/

// const arr = [1,2,3,,4]
// delete arr[0];
// console.log(arr,arr.length);
// arr.forEach(item => {
//     console.log(item);
// })
// console.log('map start');
// arr.map(item => {
//     console.log(item);
// })
//遍历empty节点的数组方法
//find for of
let emptyArr = [,,];
let loopMethods = ['map','forEach','find','some','every','flatMap','findIndex'];
let loopEmptyMethods = [];
loopMethods.forEach(method => {
    emptyArr[method](item => {
        loopEmptyMethods.push(method);
    })
})
// for(let i of emptyArr) {
//     console.log(i);
// }
console.log(loopEmptyMethods);
emptyArr.reduce((t,c)=> {
    console.log(c);
},[])
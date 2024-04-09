// function isPrimitive(v) {
//     return true;
// }
// isPrimitive(true);



// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.length = 1;
//     return Person
// }
// Person.length = 1;
// console.log(Person.length);

// class Person {
//     constructor(name) {
//         this.name = name;
//         return {}
//     }
// }

// console.log(new Person('a').name);
// console.log(function name(params,...rest) {

// }.length);

// class Observer{
//     constructor(){
//         this.subscribers  = {};
//     }

//     on(type,fn) {
//         (this.subscribers[type] || (this.subscribers[type] = [])).push(fn);
//     }
//     emit(type) {
//         (this.subscribers[type] || []).forEach(fn => {
//             fn()
//         });
//     }

// }
// let ob = new Observer();
// ob.on('say',()=>{console.log('say')})
// ob.on('say',()=>{console.log('say1')})
// ob.emit('say')
function countedNames(version1, version2) {
    const v1 = version1.split("."); //==> [1,9,9,9]
    const v2 = version2.split(".");//===> [1,2,2,2]
    for (let i = 0; i < v1.length; i++) {
        for (let j = 0; i < v2.length; j++) {
            //1 1  false
            //next  i==>0 j==>1  v1[i] ==>1 v2[j]===2
            if (v1[i] != v2[j]) {
                // 1<2  return -1 函数终止
                if (v1[i] > v2[j]) {
                    return 1
                } else {
                    return -1
                }
            }
        }
    }
    // 函数跳出
    return 0
}
function countedNames1(version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
   return v1[0] > v2[0] ? 1 : v1[0] === v2[0] ? 0 : -1
}
console.log(countedNames('1.9.9.9','1.2.0.0') ,countedNames1('1.9.9.9','1.2.0.0'));
console.log(countedNames('1.3.7.9','2.2.0.0') ,countedNames1('1.3.7.9','2.2.0.0'));
console.log(countedNames('3.9.9.9','1.3.7.9'),countedNames1('3.9.9.9','1.3.7.9'));

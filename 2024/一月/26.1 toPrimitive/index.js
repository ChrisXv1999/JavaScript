
[1,2,3] + 4  === 10
[1,2,3,4] + 6 === 16
Array.prototype[Symbol.toPrimitive] = function(){
    console.log(1);
    return this.reduce((total,current)=>total+current,0)
}
Array.prototype[Symbol.toString] = function(){
    console.log(2);
    return this.reduce((total,current)=>total+current,0)
}
console.log([1,2,3]+4 === 10);
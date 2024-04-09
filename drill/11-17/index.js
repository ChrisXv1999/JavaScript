// Date
let date = new Date('2020-11-10')
console.log(+date);  
const stringObject = new Object('some text');
console.log(stringObject);

//Number
// let number = 1.111;

// console.log(number.toPrecision(1)); // 保留几位数字 
// console.log(Number.isInteger(number))// 是否是证书
// console.log(Number.isSafeInteger(2**111111));

console.log(0x0061 === 97);
let strZH = 0x1F60A;
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(0x1234));
let strArr = [' hello', ' chris'];
let message = '---';
console.log(message.concat(strArr));

function htmlEscape(text) { 
  return text.replace(/[<>"&]/g, function(match, pos, originalText) { 
      switch(match) { 
        case "<": 
        return "&lt;"; 
        case ">": 
        return "&gt;"; 
        case "&": 
        return "&amp;"; 
        case "\"": 
        return "&quot;"; 
     } 
  }); 
 }
//  encodeURI 只会替换空格
// encodeURIComponent 会将 # 空格 ： 下划线替换掉

// let numberList = [1,312,412,342,123,412,123,523,413];
// console.log(Math.max.apply(null,numberList));
const arrayLikeObject = { 
  0: 1, 
  4: 2, 
  2: 3, 
  3: 4, 
  length: 4 
 }; 
 console.log(Array.from(arrayLikeObject));


//  instanceof 方法存在的问题  如果存在iframe 这个方法就不一定准确
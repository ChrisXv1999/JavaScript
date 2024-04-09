let numberStr = '30CAC0040';
// 匹配最后的数字
const endNumReg = /\d+$/;
console.log(endNumReg.exec(numberStr));

let phoneNumReg = /^0*(?:13|15)\d{9}$/;
console.log(phoneNumReg.exec('13511111111'));

let decimalReg = /^\d*\.{0,1}\d{0,2}$/
console.log(decimalReg.test("1111.2"));

let chineseReg = /[\u4E00-\u9FA5\uf900-\ufa2d]/g
let str = '伺服器驗證';
console.log( str = str.replace(chineseReg,'cc'));
console.log(str.length);
let fileNameReg = /[^\\\/]*[\\\/]/g
console.log('c:\\images\\tupian\\abc.jpg'.replace(fileNameReg,''));
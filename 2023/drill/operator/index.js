// 操作符 一元操作符 -- ++    ++a => a+1 a++=>a
let num1 = 10;
let num2 = 20;
let num3 = num1++ + num2;   
let num4 = num1 + num2;
console.log(num3,num4)

// 标签语句 跳出特定循环 
let num = 0;
outermost:
for (let i = 0; i < 10; i++) {
 for (let j = 0; j < 10; j++) {
 if (i == 5 && j == 5) {
 break outermost;
 }
 num++;
 }
}
console.log(num); // 55
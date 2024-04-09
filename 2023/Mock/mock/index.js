const { mock } = require("mockjs");
//字符串
const data1 = mock({
    'data1|1-10': 'chris',
    'data2|3':'暴富'
})
console.log('====================================');
console.log(data1);
console.log('====================================');

//数字
const data2 = mock({
    'data1|+1': 100,
    'data2|1-100': 18,
    'data3|1-100.2-5': 18,
    'data4|1.2-5': 18,
    'data5|1.2': 18,
})
console.log('====================================');
console.log(data2);
console.log('====================================');

//布尔值
const data3 = mock({
    //各一半
    'data1|1': false,
    //false 1/1+5
    'data2|1-5': false,
})
console.log('====================================');
console.log(data3);
console.log('====================================');

//对象
const data4 = mock({
    'num1|1-3': {a:1,b:2,c:3},
    'num2|2': {a:1,b:2,c:3},
})
console.log('====================================');
console.log(data4);
console.log('====================================');


//数组
const data5 = mock({
    //随机重复
    'arr1|1-3': [1,2,3,4,5],
    //1 随机取一个 >1 重复指定次数
    'arr2|2': [1,2,3,4,5],
})
console.log('====================================');
console.log(data5);
console.log('====================================');

//Function
const data6 = mock({
    'r': ()=>1+2,
})
console.log('====================================');
console.log(data6);
console.log('====================================');

//正则表达式
const data7 = mock({
    'reg1': /[a-z][0-9]/,
    'reg2': /\w\W\s\d\D/,
    'reg3': /\d{5,10}/,
})
console.log('====================================');
console.log(data7);
console.log('====================================');
console.log(mock('@CITY'));
console.log('====================================');
console.log('====================================');
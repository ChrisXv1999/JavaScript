const {Random} = require('mockjs');
console.log('====================================');
// console.log(Object.keys(Random));
console.log('====================================');
console.log('====================================');
console.log(Random.boolean(1,9,true));
console.log('====================================');
console.log('====================================');
//自然数 0-
console.log(Random.natural(1,9));
console.log(Random.integer());
// {
//     lower:'a',
//     upper:'A',
//     number:1,
//     symbol:'@'
// }
console.log(Random.character('symbol'));
console.log(Random.string(4));
console.log(Random.range(5));
console.log('====================================');
console.log(Random.image(100,'#fff','#09f','png','chris'));
console.log(Random.color())
console.log(Random.county())
console.log(Random.paragraph())
console.log(Random.cparagraph())
console.log('====================================');
console.log('====================================');
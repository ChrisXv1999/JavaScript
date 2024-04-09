let  name1:string = 'chris';
let name2 = undefined;
// 依然会复制成功 只是不报错
name1 = name2!;
console.log(name1);


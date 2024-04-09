// 数组方法
// let  disorderArray = [1,2,3,4,5,11,22,432,1111];
// console.log(disorderArray.sort().join()) //1,11,1111,2,22,3,4,432,5     sort默认会把所有元素转换成字符串进行比较

// let colors = ["red", "green", "blue"]; 
// let newColors = ["black", "brown"]; 
// let moreNewColors = { 
//  [Symbol.isConcatSpreadable]: true, 
//  length: 2, 
//  0: "pink", 
//  1: "cyan" 
// }; 
// newColors[Symbol.isConcatSpreadable] = false; 
// 强制不打平数组
// let colors2 = colors.concat("yellow", newColors); 
// 强制打平类数组对象
// let colors3 = colors.concat(moreNewColors); 
// console.log(colors); // ["red", "green", "blue"] 
// console.log(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"]] 
// console.log(colors3); // ["red", "green", "blue", "pink", "cyan"]
// slice 不会改变原数组  splice 会改变原数组

// 查找数组是否包含某个元素  indexOf lastIndexOf   es7 includes           find  findIndex

// 迭代方法 every filter forEach map some
// 归并方法 reduce reduceRight

//定型数组
// Float32Array
// ArrayBuffer 定义大小之后 不允许再进行改变 类似于c

// dataview  数组 缓冲起点 限制字节长度
const buf = new ArrayBuffer(16);
const fullDataView = new DataView(buf);
fullDataView.setUint16(0,1111);
console.log(fullDataView.byteOffset);
console.log(fullDataView.buffer === buf);
console.log(fullDataView.byteLength)
console.log(buf)
console.log(fullDataView.getUint8(0));
// 定长数组 Int32Array.BYTES_PER_ELEMENT
// 定长数组 不支持改变数组的方法  concat  pop push shift splice unshift
//  set   subarray

//  a++  会强制转成数字 并不只是+1
// 立即执行函数
// let test1 = 1;
// (function test(){
//test =1;
// console.log(test1); //function
// })()
// console.log(test1);//1

// ts flow 都只存在编译阶段

// 包装类 string number boolean 在严格模式下会报错
// "use strict" 只能放在第一句
let str = '123';
let num = 1;
// 基本类型不可变 任何对基本类型的api操作都不会改变原始变量 
// num.length = 2; 无效
// str.length = 1; 无效
// str[1] = '3' 无效
console.log(str);
// 常量 一个不能被重新赋值的变量
// const 尽量声明一个不会被改变的值 即使是引用类型
const PI = 3.1415926;
let arr = [1,2,3,4,5];
// freeze 只是浅层冻结 
// 相当于给每一个key 设置 writable = fals configurable = false 
const ARR = Object.freeze([1,2]);
// console.log(Object.getOwnPropertyDescriptors(ARR));
/**
 * {
    '0': { value: 1, writable: false, enumerable: true, configurable: false },
    '1': { value: 2, writable: false, enumerable: true, configurable: false },
    length: { value: 2, writable: false, enumerable: false, configurable: false }
    }
 */
// ARR.pop(1) //error
const obj = {name:'chris',age:18}
// 不可扩展
Object.preventExtensions(obj)
// obj.a =1;
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(obj);
// 数组长度最大为 2^32-1

// immutable.js

/**
 * 单线程
 * 异步任务 队列执行 存在阻塞
 * 微任务属于当前宏任务的子节点
 */

/**
 * 同步任务执行时 是会影响异步任务的执行
 * 2 4 AA  5  7 9 6 3 8 1 
 * 1 2 4 10 12 5 3 11 6 8 9
 * promise1 undefined end promise2 undefined afer1 promise3 afer2 promise4
 */
let a;
a = (async ()=>{
    console.log(a); //undefind
    await 1
    console.log(a);
    return 1
})()
// await 必须等promise 里面的所有then执行完毕 才会继续执行
/**
 * 进程 被分配的内存空间 杀死进程 就是释放内存空间
 * 线程  一个进程至少有一个线程 跟随进程启动的线程是主线程 主进程结束 进程也会结束
 * 一个进程中会有多个线程
 * 浏览器有多个进程 避免连环崩溃的概率
 * 
 * 每个标签页都有专属的渲染进程
 */
/**
 * 1.解析html
 * 2.样式树
 * 内容必须放在行盒内（行级元素）
 * 行盒不能和块盒相邻
 * 3.布局 layout
 * 4.分层 layer 提高渲染效率 这也是为什么要把操作的元素脱离文本流的原因 
 * 滚动条自己一层 优化渲染
 * 分层过多未必是件好事
 * will-change（更大程度） z-index 堆叠上下文 transform opacity 可能会影响分层结果
 * 5.绘制 绘制指令 canvans  渲染主线程只解析到这里
 * 6. 分块 tiling 合成线程 
 * 7. 光栅化 raster 将每个块变成位图 优先处理近视口的块 GPU
 * 8 draw
 *  transform 会在这一步完成
 *  reflow 影响到几何信息的操作 
 * 设置几何信息是异步reflow
 * 获取会立即reflow
 * repaint 重新绘制指令 颜色之列的与位置无关的
 * animation transform 可能都不会触发 在合成线程进行 主线程卡死也不会影响 滚动条也是如此
 */
/**
 * window open 第二个参数 存在同名tab 打开 没有 新建 缺点 会刷新
 * 使用标签页之间的通信去解决
 * BroadcastChannel 广播
 * 同源 名称一致1 
 */
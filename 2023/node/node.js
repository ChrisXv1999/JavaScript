global.name = 'chris'
//全局
//globalThis 根据环境自动判断 es2020 
// console.log(globalThis.name);
/**
 * node 内置
 * __dirname 绝对路径
 * __filename 到文件
 * Buffer 处理二进制数据
 * process c处理进程
 * process.cwd() === __dirname
 * exit 退出进程
 */
// console.log(__dirname); //D:\desktop\javascript\node
// console.log(process.avg)
// setTimeout(()=>{
//     console.log('5s');
// },5000)

// setTimeout(()=>{
//     process.exit();
// },2000)
// process.on('exit',()=>{
//     console.log('exit');
// })


//借助jsdom 调用dom 模拟

//ssr 服务端渲染 首屏 seo更友好
//csr 客户端渲染 

//seo tdk title descript keyword 更加语义化的标签 a  img h1 main 最好只有一个
//fetch node18+支持

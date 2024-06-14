### 导入导出
#### commonjs
导入 require
1. 引入自己编写的模块
2. 引入第三方模块
3. 引入nodejs内置模块 
>exp: require('node:fs') 高版本建议这样引入 
4. C++扩展 addon napi node-gyp .node
5. 引入json文件
导出 module.exports 
#### module
导入 import from
import()
导入json assert {type:"json"}
导出 export default 默认导出

#### 区别
1. this 指向 common 指向文件本身 es undefined
2. cjs 运行时 esm 编译时
3. cjs 可以修改 esm 只读
4. cjs不支持tree shaking esm支持
如何实现变量隔离的
每一个被引入的js 都会被转换成字符串放进函数体中 

### 全局变量
global 
globalThis es2020 
#### node 内置全局变量
1. __dirname 执行脚本的目录  绝对路径
2. __filename 执行脚本的目录 + 文件 绝对路径 **<font color='red'>esm 模式下无法使用</font>**
3. Buffer
4. process 
    1. 属性 argv 获取执行脚本的参数 @return []
    2. 方法 cwd 获取当前进程的目录
    3. 方法 exit 退出进程
    4. 方法 on 
        exit 监听退出     
### CSR SSR SEO

SSR 客户端渲染
jsdom 可以在node中操作dom 
exp:
```js
const {JSDOM} = require('jsdom');
const root = new JSDOM(`<div id='app'></div>`);
const {window:{document}} = root;
//转换成字符串
root.serialize()

//支持dom操作
fetch //node v18
```
CSR 客户端渲染 vue react SPA（单页面应用）
#### 区别
SSR          CSR
首屏加载快
对SEO友好

#### SEO
必做三件事 TDK
title
description
keywords
更加语意化对标签

CSR TOB
SSR TOC 

### POSIX
可以指操作系统接口
路径分隔符 标准正斜/ window 反斜杠 \


### node内置模块

#### path
区分操作系统 posix  win32
1. basename 文件名
2. dirname 路径
3. extname 后缀
4. join 拼接路径
5. resolve 返回绝对路径
6. parse 解析成对象
```js
{ root: '/', dir: '/c/d', base: 'index.js', ext: '.js', name: 'index' }
```
7. format 对象解析成路径

属性
1. sep 返回文件分割符 
#### os
1. platform 操作平台
2. release 版本
3. type 
4. version 版本
5. homedir 用户所在目录 %userprofile% mac $HOME
6. arch cpu架构
7. cpus
8. networkInterfaces  网络信息
//打开浏览器
//mac open  win32 start linux xdg-open
#### process 
控制进程 不需要引入
1. arch <=> os.arch()
2. argv 返回数组
3. cwd() <=> __dirname 
4. memoryUsage() 
    返回值
    + rss 常驻集打下 物理内存的存量
    + heapTotal v8分配的内存总量
    + heapUsed 已使用的内存
    + external 外部的内存
    + arrayBuffers 二进制的总量
5. exit() 退出程序 
6. kill 杀死进程 需要进程id pid
7. pid 进程id
8. env 获取操作系统的多有环境变量  第三方库 cross-env
    可以临时修改 但不会影响操作系统
#### child_process
1. exec 执行命令 有上限
2. execSync 适合执行比较小的命令
3. spawn 没有上限 实时返回 是流  参数一 命令 参数二数组 参数三配置项
4. execFile 执行可执行文件
5. fork 只能接受js文件 耗时任务 放入子进程 通讯基于IPC libuv
#### fs 
              异步        同步            promise/ 
+  读取文件 readFile    readFileSync   node:fs/promise
+ 可读流   createReadStream
    处理大文件 
        event  data      
               end 读取结束
+ 创建文件夹 mkdir   
        递归创建需要参数 recursive = true
+ 删除文件  rm
+ 重命名    rename
+ watch 
    监听文件变化 
+ writeFileSync 写入文件 默认是覆盖
    flag a 追加
+ appendFileSync 追加
+ createWriteStream
    end 关闭
    write 写入   
    on finish 写入完成 error 写入失败
+ link  硬链接 会共享内存地址  原始文件被删除不受影响
+ symlink 软链接 需要管理员权限 类似于快捷方式    
#### crypto
1. 对称加密 createCipheriv
2. 非对称加密 generateKeyPairSync
3. hash加密 不可解  createHash
#### zlib
解压缩
1. createGzip() 压缩 .gz lz777 哈夫曼算法 适合压缩文件 无损
2. createGunzip()  解压
3. createDeflate 压缩 .deflate 更小更快
4. createInflate() 解压
5. gzip()
6. deflate()
#### 
this === module.exports === exports
模块最终导出的事module.exports
#### net 通信模块
http
三次握手
请求 
响应
四次挥手

长连接模式
connection keep-alive
三次握手
各种数据传输
四次挥手

1. 进程间的通信 ipc
2. 网络通信tcp/ip

socket 特殊的文件
双工流 可读可写
[例子](./src/net.js)

[http](#http) 模块建立在net模块基础上

#### http
1. request 
+ url 
+ {method: [post|get]}
+ callback

#### https
https 保证数据在传输过程不被窃取和篡改
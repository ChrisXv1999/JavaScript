/**
 * common.js
 * require 
 * exp:require('./pre')
 * 使用node自身模块 高版本最好加上node
 * exp: require('node:fs')
 * 引入json文件
 * 到处使用 module.exports
 * esm 需要type改为 module
 * import * as => {var,defalut:{}}
 * 导出 export default export var
 * as 别名
 * import 不支持引入json
 * 
 * import 函数模式 promise
 * 
 * this 指向
 * common.js 指向模块本身 运行时 会阻塞代码 可修改
 * esm undefined 编译时 强行提到最顶层  不可修改 支持tree shaking
 */
// import a from './pre.js'
//强行引入 实验性
// import b from './package.json' assert {type: "json"}
b = require('./pre.js')
console.log(b);
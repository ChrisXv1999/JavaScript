/**
 * compiler 启动时创建一次
 * compilation 编译过程产物 会随着编译输入源改变而更新
 * loader 是转换器 webpack 默认支持js json格式文件  loader将其他格式的文件转换成commonjs规范的文件 webpack才能解析
 * plugin 是扩展器 丰富webpack的功能 是在特定节点 执行特定任务
 *  独立模块
 *  对外暴露一个apply方法
 *  apply函数通过complier实例对象的事件钩子 钩子的回调能拿到当前的compilation 异步可以拿到cb
 * webpack 会把未使用变量删除
 */
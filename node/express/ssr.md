## SSR
server side render  服务端渲染
利与seo 直接渲染 首屏加载快
csr client side render 客户端渲染
> 页面内容通过js执行完成
#### 基本api
创建渲染器 支持模版 需要一个注释节点
1. createRender 
参数 {template} 页面模版
// {{}} 会被转译  {{{}}} 不转译
2. renderToString   createRender返回值的方法
参数一 vue 实例
参数二 配置对象 主要是模版里面的差值 

页面失活
组件如何写
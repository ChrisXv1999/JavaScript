fixtures：测试用例
packages：主要部分，包含 scheduler，reconciler 等
scripts：react 构建相关
其中，主要的包在 packages 目录下，主要包含以下模块：

react：核心 Api 所在，如 React.createElement、React.Component
react-reconclier：协调器，react 的核心逻辑所在，在 render 阶段用来构建 fiber 节点，宿主环境无关
scheduler：调度器相关
react-server: ssr 相关
react-fetch: 请求相关
react-interactions: 和事件如点击事件相关
各种宿主环境的包：
react-dom：浏览器环境
react-native-renderer：原生环境
react-art：canvas & svg 渲染
react-noop-renderer：调试或 fiber 用
辅助包：
shared：公用辅助方法，宿主环境无关
react-is : 判断类型
react-client: 流相关
react-fetch: 数据请求相关
react-refresh: 热加载相关
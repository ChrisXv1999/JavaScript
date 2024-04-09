#####源码优化
1. 更好的代码管理方式 monorepo
2. 引入typescript 
3. 移除冷门的feature  
4. 引入tree-shaking 通过静态检测 不会打包未引入的内容
5. 数据劫持 使用proxy 代替defineProperty 进行数据响应式 
6. patch优化   
  + vue2 组件级  diff性能和组件模板大小正相关 和 动态节点无关
  + vue3 通过对模板进行分析 block tree   
7. slot 的编译优化 事件侦听函数缓存优化 重写diff算法
8. 引入composition  Api vue2 Options Api 
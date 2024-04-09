### react中的事件
react有自己的事件系统
reactDOM 宿主环境 这套系统有两个部分
1. 合成事件对象
 syntheticEvent 是对浏览器事件对象的封装 兼容了主流的浏览器 同时拥有和浏览器原生事件相同的API
 exp: stopPropagation 停止冒泡 preventDefault 禁止默认行为
 消除不同浏览器事件的差异
2. 模拟实现事件传播机制
 利用事件委托 react会基于FiberTree来实现事件的捕获 目标 以及冒泡的过程 类似于元素DOM事件的传递过程
 并且加入了一些新的特性
  不同的事件对应不同的优先级
  定制事件名 react统一采用onXxx驼峰写法
  定制事件的行为 onChange 和 原生的oninput是相同的
### 回顾事件循环
先同步 后异步 
异步会先放入异步队列 执行完毕后会将结果放入（task queue）任务队列 同步队列执行完毕会执行任务队列中的任务
微任务在每一次循环中都会被清空 会把所有的执行完毕
如果某一个任务花费时间过长 就会导致占用下一帧的渲染时间 导致下一帧不能及时渲染出来 这就是所谓的掉帧
requestAnimationFrame就不会有这个问题 会在渲染之前执行 它和浏览器渲染是同频的
#### MessageChannel
MessageChannel接口本身是用来做消息通信的 允许我们创建一个消息通道 通过postMessage onmessage两个方法进行消息的发送和接收
```javascript 
    const {port1,port2} = new MessageChannel();
    port1.postMessage('你好')
    port2.onmessage = (event)=>{
        event.data //你好
    }
```
MessageChannel可以产生一个宏任务 将暂停的任务推入任务队列 
#### 为什么不使用setTimeout
由于setTimeout嵌套层级超过五层后 如果延时小于4ms 那么则会设置为4ms
#### requestAnimationFrame
requestAnimationFrame存在兼容性问题 safari edge实在渲染之后执行
### scheduler调度普通任务
scheduler的核心源码位于package/scheduler/src/forks/scheduler.js
```js
currentTime  会先用performance.now() 降级使用Date
```
任务存在优先级
scheduler存在两个队列
//采用了一种小顶堆的算法 保证每次从队列里取出来的都是时间即将过期的
taskQueue 普通任务 
调用 requestHostCallback 》 schedulePerformWorkUntilDeadline 会通过 setImmediate（nodejs ie） MessageChannel setTimeout将任务推入队列中 浏览器端使用MessageChannel
performWorkUntilDeadline
workLoop 
advanceTimers 会将延时任务到期的插入普通任务中
### scheduler调度延时任务
timerQueue 延时任务
requestHostTimeout
handleTimeout 
advanceTimers 将即将到期的推入到普通队列
 判斷是否有到期的 有執行requestHostCallback（） 沒有繼續延時
### 最小堆 heap（二叉堆）
#### 二叉堆基本知识
  + 二叉树 一个父节点最多有两个子节点
  + 完全二叉树 一棵树在进行填写的时候 遵循从上往下 从左往右 除了最后一层节点都有两个子节点
    + 最大堆 父节点的数值大于等于所有的子节点
    + 最小堆 父节点的数值小于等于所有的子节点
    + 无论最大堆 还是最小堆 都是堆中最大或者最小的
    + 数字不一定是连续的 只是满足子节点大于或小于子节点 子节点之间并没有什么实际关联 
  + 利用数组比较容易找到直系节点 
  + 父节点 当前下标-1 >>> 1
  + 左分支 当前小标 <<<2 + 1
  + 右分支 当前小标 <<<2 + 2
#### react中对最小堆的应用
 SchedulerMinHeap.js
 method
+ push 推入
+ pop 弹出 
+ peak 取第一个
+ siftUp 向上调整
+ siftDown 向下调整
+ compare 比较
### react中的位运算
+ Flags
+ lane模型
 lane模型也是一套优先级机制 相比于schedule lane模型能够对人物进行更细粒度的控制
 分离最高优先级的lane
 lanes & -lanes
+ 上下文
不同阶段
```js
//未处于react上下文 
const NoContext = 0b000
//处于batchedUpdate 
const BatchedUpdate = 0b001
//处于render阶段 
const RenderContext = 0b010
//处于commit阶段
const CommitContext = 0b1 00
```
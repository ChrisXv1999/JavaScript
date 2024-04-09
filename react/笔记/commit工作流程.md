### commit 工作流程
react工作流程可以分为两个阶段
+ render阶段
  + schedule
  + reconcile
+ commit 阶段
render阶段是在内存中运行的 可以被打断
commit阶段则是一旦开始就会同步执行 直到完成
commit整体可以分为三个子阶段
+ beforeMutation
  + commitBeforeMutationEffects
    该函数主要是将firstChild 赋值给全局变量nextEffect 然后执行commitBeforeMutationEffects_begin
  + commitBeforeMutationEffects_begin
    向下遍历fiberNode 遍历知道满足以下条件的FiberNode
    1. 当前的FiberNode的子FiberNode不包含改子阶段对应的flags
    2. 当前的FiberNode没有子FiberNode
    接下来执行commitBeforeMutationEffects_complete
  +  commitBeforeMutationEffects_complete
   1. 对当前FiberNode执行flags对应的操作 
   2. 当前节点是否有兄弟节点 对兄弟节点执行commitBeforeMutationEffects_begin
   3. 对父节点执行commitBeforeMutationEffects_complete

每个子节点都会以DFS原则来进行遍历 
主要逻辑在commitBeforeMutationEffectsOnFiber
+ mutation
对于HostComponent mutation阶段主要工作就是对dom元素进行增删改
  + 删除发生在commitMutationEffects_begin中
    考虑 unmount逻辑 ref属性卸载 effect相关的destroy的回调
  + 插入 移动 是在commitMutationEffects_complete 方法中执行
  + 更新 主要是更新对应的属性 commitUpdate

mutation后会进行FiberTree切换
mutation阶段会进行所有的dom操作
```javascript
 root.current = finishWork
```
+ layout
在layout中主要的工作是集中在commitLayoutEffectsOnFiber中 在该方法内部会针对不同类型的FiberNode执行不同的操作
  + 类组件 执行componentDidMount/Update
  + 函数组件 执行useLayoutEffect 

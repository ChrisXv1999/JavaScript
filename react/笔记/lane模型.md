### lane模型
#### react 和 scheduler优先级介绍
 在react内部有一个粒度更细的优先级算法 这就是lane模型
 在Scheduler内部拥有五种优先级
```js
export const NoPriority = 0;
export const ImmediatePriority = 1;
export const UserBlockingPriority = 2;
export const NormalPriority = 3;
export const LowPriority = 4;
export const IdlePriority = 5;
```
考虑到通用性 优先级并不通用
lane模型优先级
```js
export const DiscreteEventPriority: EventPriority = SyncLane;
export const ContinuousEventPriority: EventPriority = InputContinuousLane;
export const DefaultEventPriority: EventPriority = DefaultLane;
export const IdleEventPriority: EventPriority = IdleLane;
```
由于react中不同的交互对应的事件回调产生的update会有不同的优先级 因此优先级与事件有关 因此react内部的优先级也被称之为EventPriority
+ DiscreteEventPriority 离散事件
  click input focus blur touchstart等
+ ContinuousEventPriority 连续事件
  drag mousemove scroll touchmove
+ DefaultEventPriority 默认事件
  计时器 
+ IdleEventPriority 空闲情况的优先级
不相同就会涉及到转换问题 会经历两次转换
react2scheduler
1. lanes转为eventPriority
2. eventPriority 转换为Scheduler优先级
scheduler2react反之
 基于expirationTime的算法
 基于lane的算法
#### expirationTime 模型
 不同的优先级对应不同的timeout 最终会对应不同的expirationTime 最终根据expirationTime来进行任务的排序 
#### lane模型
解决优先级和批的耦合
 以优先级对update进行排序
 lane模型中设计了很多lane 每一个lane都是一个二进制数 越低的位代表越高的优先级
 表达批的概念


### hooks 原理
react针对hook存在三种策略 或者三种类型dispatcher
+ HookDispatchOnMount 负责初始化 让函数组件的一些初始化信息挂载到fiber上
+ HooksDispatcherOnUpdate 函数组件进行更新是 会执行该对象所对应的方法 此时fiber存储了函数组件的相关信息 去获取或者更新维护fiber的信息
+ ContextOnlyDispatcher 与报错相关 防止在函数组件外部调用hook 
render阶段会对reactCurrentDispatcher.current 赋值对应的dispatcher
hook 是一个对象  也是通过链表的形式链接
memoizedState  
fiber上面有一个同名字段 保存的是hook链表里面的head
hook上保存的是hook的自身数据 不同类型的hook 存储的内容也是不一样的
####  hook执行流程
当FC进入render阶段 会被renderWithHooks 函数执行处理

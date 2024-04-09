###基本语法
+ 只能有一个父元素 多个根元素可以使用 <></>
+ jsx使用javascript表达式要卸载{}内 属性值也是如此
+ style 要使用对象形式 字符串也不行 属性需要使用驼峰
+ 使用map循环创建jsx 需要包含一个特殊的key属性
+ jsx {}中的数组会自动展开
+ 布尔值默认是不显示的
### createElement
>jsx 是语法扩展 babel会把jsx转译成react.createElement 函数调用
参数说明
+ type 创建的元素类型 可以是原始标签 也可以是组件
+ props 可选 react元素的属性 exp: className style
+ children 可选 react 元素的子元素
### 组件定义方式
+ 类组件
>super必须写在第一行
>render 必须返回一段jsx
>需要注意this指向
```javascript
    class Hello extends React.Component {
        constructor(props){
            super(props)
            this.name = props.name;
        }
        render(){
            return (<div>hello {this.name}</div>)
        }   
    }

```
+ 函数组件
>16.8 之前 函数组件是无状态组件 ui组件
>引入hooks后 函数式组件也有了状态
>react 编程思想的转变 面向对象转向面向函数编程
```javascript
    function Hell(){
        const name = 'chris';
        return (
            <div>hello {name}</div>
        )
    }
```
### 事件绑定
>react 绑定事件 会做特殊处理 e是一个合成事件对象   
>e.nativeEvent 就是原生事件对象
>由于是合成事件 react中无法通过return false的形式阻止默认行为 e.preventDefault
>类组件 默认this会是undefined 类默认是严格模式
>使用bind修正this 或者使用箭头函数
### 组件状态与数据传递
类组件
```javascript
constructor(){
    super();
    this.state = {};
}
state = {};
```
>setSate 是[异步]调用 多次会被合并成一次 
>setSate 可以传递一个函数 始终都会拿到上次的state 
>如果你改变状态会修改dom结构 就会是异步的 反之同步 //是事件 还是修改dom
props
类组件必须super(props)
函数组件可以通过属性defaultProps = {} 类组件也可以使用static修饰的静态属性
+类型检查 15.5后单独提出去了 需要使用propTypes
###生命周期
### hooks
>16.8
逻辑复用
告别复杂的this指向问题
编程范式
命令式编程
 面向过程 
 面向对象
声明式编程
 函数式编程
 DSL(领域专用语言 HTML CSS SQL)
 hook其实就是函数
 + 只能在函数最外层调用Hook 不要在循环 条件判断或者子函数中调用
 + 只能在React函数组件中调用Hook 不要再其他javascript函数中调用
 纯函数 相同的参数必定产生相同的结果
 ```javascript
 /**
  * @param callback
  * @returns effectCB 每次从新熏染都会重新执行
  */R
 useEffect 
 //第二个函数参数清理副作用函数 第一次不会执行
 
 ```

 ### 虚拟dom virtual dom
 虚拟dom是一种思想 js对象是一种具体实现
 ##### 为什么需要虚拟dom
 + 体积优势 速度优势 心智负担
    + js对象层面计算速度优于dom层面的计算
 + 跨平台能力
 ### Fiber双缓冲
 #### 对fiber的理解
 实际上 我们可以从三个维度理解fiber架构
 + 是一种架构 称之为fiber架构
 + 是一种数据类型
 + 动态的工作单元
##### 是一种架构 
reactV16之前使用stack reconciler 因此那时候被称为stack架构
reactV16引入了fiber fiber reconciler 因此新的架构也被称之为fiber架构 各个fiberNode之间通过链表的形式串联起来
```jsx
function FiberNode(tag,pendingProps,key,mode){
    //父元素
    this.return = null
    //子元素
    this.child = null;
    //兄弟元素
    this.sibling = null
}
```
##### 是一种数据类型
Fiber 本质上也是一个对象 是在之前react元素基础上的一种升级版本 每个FiberNode对象里面会包含React元素的类型 周围链接的FiberNode以及DOM相关信息
```jsx
function FiberNode(tag,pendingProps,key,mode){
    //真实元素
    this.stateNode = null;
}
```
##### 动态的工作单元
在每个FiberNode中保存了本次更新中React元素变化的数据 还有就是要更新的工作 以及副作用的信息
最小的动态工作单元
```jsx
function FiberNode(tag,pendingProps,key,mode){
    //副作用相关
    this.flags = NoFlags;
    this.subtreeFlags = NoFlags;
    this.deletions = null;
    //调度优先级相关
    this.lanes = NoLanes;
    this.chidLanes = NoLanes;
}
```
+ 为什么父元素叫return 而不是parent
因为作为一个动态的工作单元 return指代的是FiberNode执行完completeWork返回的下一个FiberNode,这里有一个返回的动作 所以通过return指代
#### Fiber 双缓冲
Fiber架构中的双缓存工作原理类似于显卡的工作原理
+ 显卡分为前缓冲区 和 后缓冲区 首先前缓冲区会显示图像 之后合成的新的图像会被写入到后缓冲区 一旦后缓冲区写入图像完毕 就会前后缓冲区交换 这种将数据保存在缓冲区 在进行互换的技术 就被称为 双缓冲技术 
+ Fiber架构同样用到了这种技术 在Fiber架构中 同时存在两颗FiberTree 一颗是真实UI对应的FiberTree 另外一颗是内存中构建的FiberTree 两课树的FiberNode会通过alternate属性相互指向
+ mount 首次渲染
顶层被称为FiberRootNode 改FiberNode会有一些自己的任务
  + current fiber tree 和 wip Fiber的切换
  + 应用中的过期时间
  + 应用的任务调度信息  
+ update 更新
  + 生成一个新的wip fiber tree 每一个节点通过alternate属性与Current Fiber Tree每一个FiberNode对应
  + 当wip fiber tree 生成完毕后 fiberRootNode会传递给renderer进行渲染 FiberRootNode.current 会指向wip fiber tree  
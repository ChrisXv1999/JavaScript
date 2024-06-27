#### jsx
facebook起草的标准 对js的扩展
有且仅有一个根结点
最终会被编译为React.createElement(tag,{},children)
<></> React.Fragment

null undefined true false '' [] 等值不会显示
 {[1,jsx,undefined,null,[],true,123]}

 设置富文本 dangerouslySetInnerHTML
 ```js
 <div dangerouslySetInnerHTML = {
    {__html: htmlStr}
}></div>

// react元素不可变 如果需要修改属性 需要重新创建
 ```
 图片必须导入
#### 组件

早期函数组件是无状态组件
原因是早期状态只能在通过类的属性state定义
16.8 引入了hook 函数组件也有了自己的状态 更多的使用函数组件 
函数式编程
#### 事件
onEvent 
合成事件
nativeEvent 是原生事件对象
return false 无法取消默认事件
只能通过preventDefault 取消
#### this 指向 
函数组件不存在this
```ts
class App extends React.Component {
  clickHandel(){
    console.log(this); //undefined
    //this.click.bind(this)
    // ()=>this.handelClick
  }
  clickHandel1 = ()=>{
    console.log(this) // app
  }
  render(): React.ReactNode {

    return (
      <div onClick={this.clickHandel}>hello</div>
    )
  }
}
```
#### setState 
setState在事件里会是一个异步函数
低版本只有事件中的是异步 
高版本的react 计时器里面的setState也会是异步的
回调函数运行于render函数之后
1. 把所有的setSate当作异步
2. 永远不要信任setState调用后的状态
3. 如果要使用改变之后的状态 使用setState第二个参数 callback
4. 如果新的状态要根据之前的状态进行运算 使用函数的方式改变状态
```ts
state = {
    count: 1
}
this.setState({
    count: this.state.count+1
})
this.setState({
    count: this.state.count+1
})
count = 2;

//多次改变需要使用函数的形势
state = {
    count: 1
}
this.setState((state:countState)=>({count: state.count+1}))
this.setState((state:countState)=>({count: state.count+1}))

//多次setState会合并 只会调用一次render函数
state = {
    count: 3
}


state = {
    count: 1
}
this.setState({count: this.state.count+1})
this.setState((state:countState)=>({count: state.count+1}))

state = {
    count: 3
}

state = {
    count: 1
}
this.setState((state:countState)=>({count: state.count+1}))
this.setState({count: this.state.count+1})

state = {
    count: 2
}

state = {
    count: 1
}

this.setState((state:countState)=>({count: state.count+1}),()=>{
    console.log(this.state.count,'111'); // 3
})
this.setState((state:countState)=>({count: state.count+1}),()=>{
    console.log(this.state.count,'111'); // 3
})
//这次提交会覆盖掉前面的所有对count的操作 前面调用多少次都会被覆盖
this.setState({count: this.state.count+1},()=>{
    console.log(this.state.count,'222');//3
})
this.setState((state:countState)=>({count: state.count+1}),()=>{
    console.log(this.state.count,'333');//3
})

```
#### props
//默认值
//函数中即将弃用 使用函数默认参数代替
defaultProps
在类中可以使用static 静态属性
//类型检查
prop-types
propTypes
#### 状态提升
类似于vue的emit
把处理函数交给子组件调用

#### 受控/非受控表单
```ts
//受控组件
<input value={this.state.addNumber} onChange={this.changeAddNumber}/>

//不要直接操作原数组
<div>
    {this.state.hobbies.map((hobby,idx) => (
    <div>
        <input onChange={()=>this.checkedHobby(idx)} checked={hobby.checked} type='checkbox' key={hobby.value}></input>
        {hobby.label}
    </div>))
    }
</div>

//非受控组件
 uploadRef = React.createRef<HTMLInputElement>();
 <input type='file' ref={this.uploadRef} onChange={this.uploadFileChange}></input>
```
#### 生命周期
组件从诞生到销毁的过程中设置的钩子
只针对类组件
render是必须的
1. constructor 
只调用一次
初始化操作  初始化组件的state 

2. render
必须要书写的生命周期方法
return 一段jsx
只要重新渲染就会运行
所以不能在这个生命周期里使用setState 会造成递归调用
3. componentDidMount 
 + 类似于vue的mounted
 + 只执行一次
 + 可以使用setState
 + 通常进行ajax请求等
 + 组件插入dom树时立即调用
4. componentWillUnmount 
  销毁一些组件依赖的资源 比如计时器
5. componentDidUpdate 
   组件更新后执行  在render后执行
```tsx
//参数
prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any
// snapshot 快照  getSnapshotBeforeUpdate 的返回值
```
#### forwardRef
解决高阶组件ref 指向包装组件的问题
ref转发 
```jsx
// 当作props的属性传递也可以
// 或者用函数包装一层
const forwardRef(Com) = React.forwardRef(Com);

function Com(props,ref){
    return <>
        <input />
    </>
}
```

#### context
老版 父组件  getChildContext
    子组件  contextTypes
新版 provider  consumer = createContext
    class中需要有静态属性 contentType
    函数组件 使用 consumer
    provider 提供的上下文改变 provider包裹的内部的组件无论是否进行优化（shouldComponentUpdate  都不会运行） 都会强制重新渲染
```jsx
    <ctx.Consumer>
        {
            val=>{

            }
        }
    </ctx.Consumer>
```

#### pureComponent
纯组件 会进行props state浅比较
类似于shouldComponentUpdate
immutable 不可变性
函数组件 使用react.memo
#### Portals
插槽 将一个react渲染到指定的容器内 类似于vue的 teleport
ReactDom.createPortal(react元素,真实dom容器) 
返回一个react元素
只影响dom渲染结构 不影响react结构

**注意事件冒泡**
react中的事件是被包装过的
冒泡是根据虚拟的dom树结构冒泡的 跟真实的结构无关

#### render props
横切关注点 数据处理逻辑几乎一致
属性名称建议使用render
也可以使用children
clientX clientY 相对于视口的距离
pageX pageY 相对于文档顶部
#### 错误边界
默认情况下 若一个组件渲染区间发生错误 会导致整个组件被全部卸载
错误边界 是一个组件 该组件会捕获到**渲染期间（render）**的错误  
1. getDerivedStateFromError
```tsx
static getDerivedStateFromError 

/**
 * 静态函数
 * 运行时间 发生错误之后 页面更新之前
 * 只有子组件发生错误
 * 捕获错误之前的组件依然会被销毁
 * @params
 * error 错误对象
 * @returns
 *  {
 *  hasError:Boolean
 *  }
 */
```
2. componentDidCatch
实例方法
组件更新之后
参数一 错误对象 
参数二 object 错误摘要 发生在哪里 
影响效率 由于运行时间靠后 因此不推荐
通常用于错误上报

**异步错误无法捕获**
**自身错误无法捕获**
**事件中的错误无法捕获**
### 渲染原理
React-Dom
react元素 React.createElement jsx
react节点 用于渲染到ui界面的对象 通过react元素创建
1. 节点类型
- React Dom节点 元素类型是一个字符串
- React 组件节点 元素类型是函数或者类
- React TextNode 由字符串创建 
- React Empty 空节点 null undefined false 等创建
- React 数组节点 由数组创建
#### 首次渲染（新节点渲染）
1. 通过参数等值创建节点 
2. 根据不同的节点做不同的事情  1,4 会生成真实dom元素
 1. 文本节点 通过 document.createTextNode 创建真实的文本节点  
 2. 空节点 什么都不做
 3. 数组节点 遍历数组 将数组每一项递归创建节点
 4. dom节点 通过 document.createElement 创建真实的dom对对象 遍历该节点的children 递归创建  
 5. 组件节点
    - 函数组件 调用函数 返回结果 递归生成元素节点
    - 类组件 
        1. 创建该类的实例
        2. 立即调用生命周期方法 static getDerivedStateFromProps
        3. 运行对象的render方法 
        4. 将该组件的componentDidMount 加入到执行队列 当整个虚拟dom树全部构建完毕执行
![虚拟dom树](../docImg/节点.png)
```tsx
const app = <div>
    <h1>标题{['abc',null,<p>段落<p>]}</h1>
    <p>{undefined}</p>
    <div>
        //真实dom$
                    div
         h1                   p 
textNode   数组节点           空节点 
    文本节点  空节点    p
                    文本节点
```
3. 生成虚拟dom树 将该树保存  
4. 将之前生成的真实dom对象加入到容器中

#### 更新节点
- 如果调用的是ReactDom.render 进入更节点的 **对比diff更新**
- 如果是调用setState
 - 1. 运行生命周期函数 static getDerivedStateFromProps
 - 2. 运行shouldComponentUpdate 如果函数返回false 终止
 - 3. 运行render 得到一个新的节点 进行 ***对比更新***
 - 4. 生命周期函数getSnapshotBeforeUpdate 加入执行队列
 - 5. 生命周期函数componentDidUpdate 加入执行队列
后续步骤 
0. 更新虚拟dom树
1. 完成真实dom更新
2. 依次调用队列中的componentDidMount
3. 依次调用队列中的getSnapshotBeforeUpdate
4. 依次调用队列中的componentDidUpdate
5. 执行componentWillUnMount
##### 对比更新
1. 假设不会出现层级的移动 对比时 直接找树对应位置的节点进行对比
2. 不同节点类型会生成不同的结构
3. 多个兄弟节点 通过唯一标识(key)确定对比的新节点
- 找到了对别目标
  判断节点类型type是否一致 
    - 一致 根据不同的节点类型做不同的类型
        - 空节点 不做任何事情
        - DOM节点 直接使用之前的真实Dom对象 将属性的变化记录下来 统一进行更新 遍历新的React元素的字元素 **递归对比更新**
        - 文本节点 直接复用 记录变化的 **nodeValue**
        - 组件节点 
            - 1. 复用之前的实例、
            - 2. 运行生命周期函数 static getDerivedStateFromProps
            - 3. 运行shouldComponentUpdate 如果函数返回false 终止
            - 4. 运行render 得到一个新的节点 进行 ***对比更新***
            - 5. 生命周期函数getSnapshotBeforeUpdate 加入执行队列
            - 6. 生命周期函数componentDidUpdate 加入执行队列
        - 数组节点 遍历数组
        - 函数组件 直接重新调用 递归对比更新
    - 不一致
        创建新的节点 进入新节点的首次渲染流程 整体上卸载旧的节点
        类组件会直接调用unComponents 
尽量使用css控制元素显示隐藏
如果必须移除 用空节点占位
或者使用key 显示声明服用
- 没有找到对比目标
    创建新加入的节点 
    卸载多余的节点
key的作用 寻找**相同层级**有相同key值的新节点 
不改变节点类型 和 节点结构
#### Hooks
16.8新增特性 不编写class的情况下使用state以及react特性
本质是javascript函数
只能在函数组件中调用 且必须是函数最外层调用
+ 更好的逻辑复用
+ 告别类组件的this指向问题
1. useState
```tsx
export default function Count(){
    const [count,setCount] = useState<number>(0)；
    const [count1,setCount1] = useState<number>(0)
    return (<div>
        <span>{count}</span>
        <br></br>
        <button onClick={()=>{setCount(count+1);setCount1(count1+1)}}>+1</button>
    </div>)
}
```
2. useEffect
```tsx
useEffect(()=>{
        console.log(count);
        return ()=>{
            //会先执行
            console.log('clear'); 
        }
    },[count,count1])
    //同时触发多个依赖会被合并
    //传空数组只会执行一次 不穿会监听所有state
```
##### 自定义Hook
调用官方内置的hook 进行状态共享的使用use开头的函数被称为自定义函数
```tsx
function useCount(initialVal:number = 0){
    const [count,setCount] = useState<number>(initialVal); 
    function add(){
        setCount(count+1)
    }
    return { 
        add,
        count
    }
}  
const {count,add} = useCount(0); 
```

#### react-router
> yarn add react-router-dom
#### 组件
1. Link 导航 **to** 要导航到的路径
2. NavLink 带状态active的导航 激活样式只能有一个 通常做导航栏跳转
```tsx
//可以通过这种方式修改类名
//存在问题 类不会切换
<NavLink className={(isActive)=>isActive?'current':''}></NavLink>
```
3. Routes 类似于v5版本的switch 主要提供上下文环境 //最终会被转换成 useRoutes格式
4. Route 在Route组件中书写对应的路由 
    + **path** 匹配的路径 
    + **element** 匹配时要渲染的组件
5. BrowserRouter  path  |  HasRouter hash 路由工作模式 
6. Navigate 导航  内部使用useNavigator
    + **to** 要导航到的path  
    + **replace** 替换
7. Outlet 子路由显示的位置 

#### Hooks
1. useLocation
获取location对象 可以获取state属性 可以通过navigator传递额外的数据
2. useNavigator 可以设置state 跳转到指定路径
3. useParams 获取动态路由的参数
4. useRoutes  类似于vue-router 的路由配置
```tsx
export default function Router(){ 
    return useRoutes([
        {path: '/home',element: <Home></Home>},
        {path: '/',element: <Navigate to='/home' replace></Navigate>},
        {path: '/detail/:id', element: <Detail></Detail>},
        {path: '/about', element: <About></About>}
    ])
}

```
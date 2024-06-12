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
高版本的react 计时器里面的setState也会是异步的
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
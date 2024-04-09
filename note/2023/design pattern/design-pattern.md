##Design Pattern
--- 
- [x] 
- [ ]  

#####什么是设计模式
#####设计模式的目的
1. 复用性
2. 可靠性
3. 易读性

设计模式是**软件工程**的基石脉络
>推荐书籍 
- [ ] **原则**
- [ ] **菊与刀**
- [ ] **规训与惩罚** 法律一定不是约束人最强有力的手段

***
[MDN](https://developer.mozilla.org/zh-CN/)
***
```javascript
console.log('design pattern')
```
####创建型
>研究高效的创建对象
+ [单例模式](#single)
+ 抽象工厂模式
+ 建造者模式
+ 工厂模式
+ 原型模式
####结构型模式
>设计对象的结构和关系
+ 适配器模式
+ 桥接模式
+ 装饰模式
+ 组合模式
+ 外观模式
+ 享元模式
+ 代理模式
####行为模式
>设计对象的行为
+ 命令模式
+ 迭代器模式
+ 观察者模式
+ 中介者模式
+ 备忘录模式
+ 解释器模式
+ 状态模式
+ 策略模式
+ 职责链模式
+ 访问者模式
####设计模式的六大原则
1. 减少耦合
2. 增强复用性
3. 降低代码的开发维护扩展成本
#####==耦合==
>两个事物相互作用 相互影响
<font color="#f00">危害</font> `复杂度高 可维护性差 复用性差 不易扩展`
>开发流程
优先降低复杂度 尽量降低耦合度
利用[单一职责原则](#single) [开闭原则](#ocp) 里氏替换原则降低复杂度
通过迪米特法则减少耦合
通过依赖倒置消除可以没有的耦合
==耐心== patience

<a id='single'>单一职责原则</a> ==Single Responsibility principle==
>**一个方法只做一件事**
<font color='red'>bad example</font>
```javascript
//功能耦合 既有获取数据的功能 又有渲染数据的功能
// 且不利于扩展
function view (url,data,dom){
    fetch(url)
    .then(response=>{
        return response.json()
    })
    .then(list=>{
        let ulHtmlStr = '';
        list.forEach((item,idx)=> {
            ulHtmlStr + = `<li>${item.name}</li>`
        });
        dom.innerHTML = htmlStr;
    })
}
```

```javascript
//增加一个取缓存功能
function view (url,data,dom){
    if(localStorage.getItem('list')){
        let list = JSON.parse(localStorage.getItem('list'));
        list.forEach((item,idx)=> {
            ulHtmlStr + = `<li>${item.name}</li>`
        });
        dom.innerHTML = htmlStr;
    }else {
         fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(list=>{
            localStorage.setItem('list',JSON.stringify(list));
            let ulHtmlStr = '';
            list.forEach((item,idx)=> {
                ulHtmlStr + = `<li>${item.name}</li>`
            });
            dom.innerHTML = htmlStr;
        })
    }
}
```
==优化==
```javascript
function render(list) {
    return list.map(item=>`<li>${item.name}</li>`).join('');
}
aysnc function fetchList(url){
    return await fetch(url)
    .then(response=>{
        return response.json()
    })
}
const list = await fetchList(url);
localhost.setItem('list',JSON.stringify(list));
ul.innerHTML = render(list);
//next join
const list = localhost.getItem('list')
ul.innerHTML = render(list);
```
```javascript
navigator.onLine //当前是否处于在线状态
```

#####<a id='ocp'>开闭原则</a>
>对扩展开放 对修改关闭 javascript 使用闭包 
```javascript 
([][[]]+[])[+!![]] + (([]+{})[!![] + !![]])
```
==权衡==
 + 时间成本
 + 复杂度
 + 耦合度 耦合度越高风险系数越高
#####<a id='subsituation'>里氏代换原则 Subsituation Principle</a>
>子类可以扩展子类的功能 但不能修改父类原有功能
任何基类可以出现的地方 子类一定可以出现
```javascript
function Rectangle(w=0,h=0){
    this.w = w;
    this.h = h;
    this.setW = (w)=>{
        this.w = w;
        return this
    }
    this.getW = ()=>{
        return this.w
    } 
    this.setH = (h)=>{
        this.h = h;
        return this
    }
    this.getH = ()=>{
        return this.h
    }
}
Square.prototype = new Rectangle();
function Square(){
    this.setW = (w)=>{
        this.w = w;
        this.h = h;
        return this;
    }
    this.setH = (h)=>{
        this.setW(h);
        return this;
    }
}
const oR = new Rectangle(200,100);
function resize(o){
    while(o.getH() <= o.getW()){
        o.setH(o.getW()+1)
    }
}
resize(oR)
//子类出现在这里就会出问题 不符合里氏替换原则
```
#####接口分离原则 **ISP**
>把大接口拆分成小接口 不能一个o接口实现增删改查
#####迪米特法则 **LD**
>最小知道原则
一个接口 和一个方法 传入的参数越少越好 降低耦合度的同时也会降低复杂度
#####依赖倒置原则 **DIP**
>提供一个中间者 两者不直接依赖 避免在A类中直接操作B类
常见于发布订阅模式
#####单例模式
```javascript
function Single2(){
    let instance = null;
    this.name = this.name;
    Single2 = function(){
        return instance
    }
}

/**
 * @param {Function} constructorFn 
 * @returns Function
 */
function single(constructorFn) {
    let instance = null;
    return function(...rest) {
        if (instance) return instance;
        instance = new constructorFn(...rest)
        return instance;
    }
}
```
#####代理模式
>代理对象类似于与中介的作用 会增加一些功能  如校验 合并 也会去掉也写原有对象的功能
+ 虚拟代理 把一些开销很大的功能 延迟到真正需要他的时候才会创建执行
  + 实现一个延迟的[console.log](./proxy.js) 
+ 安全代理 控制真实对象的访问权限
  + [表单验证](./security-proxy.js)
+ 远程代理 一个对象将不同的空间的对象进行局部代理
+ 智能代理 调用对象代理处理另外一些事情 如垃圾处理回收机制增加额外的服务
<img src='./zrn.png' alt='章若楠' width='200'/>
#####策略模式
>策略模式是指对一系列的算法定义 并将每一个算法封装起来  并在使用它们的时候可以相互替换
优点 避免使用多重条件转移语句 
#####工厂模式
>工厂模式定义创建对象的接口 但是让子类去真正的实例化
 >>工厂方法模式 
 >>不再有一个唯一的工厂类就创造产品 二十将不同的产品交给不同的工厂子类去实现

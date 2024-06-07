### 装饰器
> 面向对象的概念 java 注解 c# 特征 decorator
> angular 大量使用 react也会用到
> 目前JS支持装饰器 目前处于建议征集的第二阶段
趋势
#### 概述
解决的问题
分离关注点
装饰器的作用： 为某些属性 🥱 参数 方法提供元数据信息 (metadata)
元数据：描述数据的数据
#### 本质
在JS中 装饰器是一个函数 装饰器是要参与运行的
装饰器 可以修饰类 类成员(属性|方法) 参数

```ts
type personGender =  "男"|"女";
class User {
    //在定义的时候最了解规则
    loginId: string; // len 3-5
    password: string; // len 6-12
    age: number; // 0-100
    gender: personGender;
    constructor(id:string,password:string,age:number,gender:personGender){
        this.loginId = id;
        this.password = password;
        this.age = age;
        this.gender = gender;
    }
}
const  u = new User('chris','123456',18,'男');
```

### 类装饰器
old 类装饰器的本质是一个函数 该函数接受不了一个参数 就是类本身
new 两个参数 一个val 当前类 一个 config：Object
可以返回一个类 替代原有类 但是不推荐
装饰器工厂是从上到下 装饰器的执行是从下到上运行
ts使用非空断言也报错的话可以 as any
### 成员装饰器
- 属性 
 old 属性装饰器也是一个函数 该函数需要两个参数
 1. 静态属性 类本身  实例属性 则为类的原型
 2. 字符串 属性名
 new
- 方法
类的方法是不可枚举的 且不能作为构造函数
函数在javascript中是一等公民
old 方法装饰器也是一个函数 该函数需要三个参数
1. 静态方法 则为类本身 实例方法 类的原型
2. 固定为一个字符串 表示方法名
3. 属性描述对象
new 两个参数 
1. 方法本身
2. 配置对象

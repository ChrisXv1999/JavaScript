#### shell命令
1. 查看所有数据库 
show dbs 
2. 显示当前使用的数据库 
db
3. 查看当前数据的状态 
db.stats()
4. 查看数据库中所有的集合 
show collections
5. 切换数据库 
+ use exp: use('dbName')
6. 插入 C
+ insertOne 插入一个 
+ insertMany 插入多个
+ insert 可以一个也可以多个
7. ObjectId 
//时间戳 + 机器码 + 进程id + 自增量 生成的唯一键
8. 查询 R
find 
参数一 query 可以是正则 默认与 
操作符
+ $or 或 exp: $or:[{},{}]
+ $in 之间 exp: $in:[11,12,13] 数组的情况可以用in 查询任意满足条件的
+ $nin 不在指尖
+ $gt 大于 $lt 小于
+ $gte 大于等于 $lte 小于等于
+ $and 并且 exp: $and:[{},{}]
数组可以.0取第几项
参数二 投影 {}   {key:1} 只显示某个属性 0 去除  只有_id 可以混合
返回结果 游标 cursor 类似于迭代器  数据量过多
**始终按照这个顺序返回 和书写顺序无关**
sort -> skip -> limit
+ hasNext 存在下一个
+ skip 跳过n条记录
+ limit 截断
+ sort 按条件排序 exp: sort({[key]:1})
  + key 字段
  + 1 升序
  + -1 降序
+ count 总数 始终得到查询条件的总数据量
+ size 操作后的结果 
9. 修改 U
+ updateOne
+ updateMany
+ replaceOne(覆盖)
操作符
+ $set 更新数据
+ $inc 假发
+ $mul 乘法
+ $rename 更新字段名 
+ $addToSet 数组添加一项 存在不添加
+ $push 存不存在都添加  添加多项需要 {$each:['','']}
+ $pull 删除
+ $unset 删除
+ $之前查询结果匹配的向
 参数一 条件{}
 参数二 新值 { $set, $currentData}
 参数三 {upsert: true} 无匹配添加
10. 删除D 
+ deleteOne
+ deleteMany
参数一 条件
11. 恢复 mongorestore -d dbname backupDir
12. 备份 mongodump -d dbname -o backupDir
13. 创建索引
+ crateIndex  
参数一 索引关联的字段 1 升序 -1 降序
参数二 
    + background 是否阻塞其他操作 默认阻塞
    + unique 是否是唯一索引
    + name 索引名称
索引的存储结构式B-树
+ getIndexes 
  查询所有索引 id会默认创建索引
+ totalIndexSize
 查看索引占用的磁盘空间
+ dropIndexes 
 删除所有索引
+ dropIndex
 根据索引名删除索引
#### schema 结构
描述了某种数据中有哪些字段 以及每个字段是什么了行 每个字段的约束  
```js
const userSchema = new mongoose.Schema({

})
module.exports = mongoose.model('User', userSchema)
```
##### mongoose默认行为
1. _id mongoose会为每一个对象添加_id 
可以使用_id:false 取消
2. _v  
在schema第二个参数中配置 versionKey false 取消
3. 总是触发验证
 + 在schema第二个参数配置 validateBeforeSave false 取消验证 会影响所有
 + 模型创建的时候 第一个添加要是数组 避免歧义  第二个参数 validateBeforeSave false 只是这次创建时不验证
4. validate 添加前进行验证
### CURD
#### C
1. create
Model.create([doc])
模型跟踪 对返回值进行修改 save 会修改
返回结果是
2. ModelInstance.save
ValidationError // mongoose验证错误
MongoError //mongod错误
**新增时Schema中未定义的字段会被mongoose删除**
exp:
```js
const usr1 = {
    loginId: 'chrisXv',
    password: '123456',
    username: '正人君子徐徐',
    hobbies: ['Javascript'],
    address: {
        province: '河南',
        city: '漯河'
    }
}

const usr2 = {
    loginId: 'LinYunEr',
    password: '123456',
    username: '林允儿',
    hobbies: ['dance'],
    address: {
        province: '韩国',
        city: '首尔'
    }
}


User.create(usr1).then(res=>{
    console.log(res);
})
const u1 = new User(usr2);
u1.save().then(res=>{
    console.log(res);
})
```
#### R
查询
1. findId
```js
User.findById('666b06dfeddc16e8769cea3b',{username:1}).then(res=>{
    console.log(res);
})
```
2. find
**可以进行链式调用**
```js

User.find({
    loginId: /r$/,
    hobbies: {
        $in:['dance','Javascript'],
    },
    username: /^林/
}).then(res=>{
    console.log(res);
})
//sort 默认升序 -prop 降序
//不建议使用关联查询 
//关联查询 populate(prop,投影) 需要这个字段里有ref
//[{types:Schema.Types.Object,ref: '表名'}]
```
2. findOne 
与find类似 但是只取一条
#### U
1. updateOne
默认是不会触发验证的 可以增加第三个参数  **runValidators** 开启
```js
User.updateOne({hobbies:'dance'},{
    $set: {"hobbies.$":'sing'}
}).then(res=>{
    console.log(res);
})
//不会出发验证  可以增加第三个参数  runValidators 开启
User.updateOne({hobbies:'sing'},{loginId:'Yoona'}).then(res=>{
    console.log(res);
})
```
2. updateMany
#### D
1. deleteOne
2. deleteMany

### 索引
>在数据库中 索引类似于一个目录 用于快速定义到具体内容
无索引的情况下 逐条对比 
针对含有有索引的key查询 索引会开辟新的内存 而且会进行排序 
用一块额外的空间 换取时间 

+ 针对大数据的集合使用索引
+ 针对常用的查询排序创建索引
+ 尽量运行过程中创建删除索引
### 虚拟属性
通过virtual 开启
```js
key : {
    type:Type,
    virtual: true,
    get(){
        return this.k1 + this.k2
    }
}
```

### 模型方法
注入方法
```js
//实例方法 模型实例调用
UserSchema.methods.methodName = function(){
    console.log(this.k)
}
// 静态方法
UserSchema.static('methodName',function(){
    // this 指向模型本身
    this.find().limit(10)
})

```

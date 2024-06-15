### express

创建一个 express 实例
```js
const app = express();
// app 实际是一个处理请求的函数 
// 可以直接用http创建请求 把app放进去
```

#### 实例方法

1. listen(port, callback) 监听端口
2. get(path, callback) 监听 get 请求
3. post(path, callback) 监听 post 请求
4. use()

#### 静态方法

1. static(path) 静态资源托管

```js
//可以直接访问静态资源
//路径是基于执行文件的相对路径
app.use(express.static("static"));

//绝对路径写法
//参数一 路径前缀 参数二 静态资源路径
//不带路径 会匹配所有请求
app.use("/", express.static(path.join(__dirname, "static")));
//可以获取baseUrl 就是匹配的前缀
// req.path    去除baseUrl的请求路径 
```

#### 路由参数

```js
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
```
// 回调参数如果有四个参数的情况下 第一个参数会是错误对象

#### 中间件
内置中间件
1. urlencoded 处理content-type 为 application/x-www-form-urlencoded
2. json 处理 content-type 为 application/json
3. static 处理静态资源

### cookie
产生的原因
http协议是无状态的 不知道当前发起的请求和之前登陆的是否是一个人
1. key 键值对
2. value 值
3. domain 域
4. path 路径
5. secure 是否使用安全传输
6. expire 过期时间

cookie 满足以下条件 会被携带到请求中
1. cookie 没有过期
2. 域名和此次请求的域名一致 cookie 不在意端口 只要域名中包含即可 不需要完全匹配
3. path 是否匹配
4. 验证cookie的安全传输
 +  true 请求协议必须是https 否则不会携带cookie


1. 服务端设置cookie 普遍做法
响应头设置
set-cookie: cookie
key=value; [path=;] [expire=;]
key path domain 一致会被认定为同一个cookie 会被覆盖
 path 默认值是当前请求路径
 domain 默认值当前请求域 
    + 如果响应的根域都不一样 浏览器会认为是无效的
 expire 过期时间 客户端到达这个事件会自动销毁 new Date().toGMTString()
 max-age 多少秒之后 过期 和expire二选一 如何都没设置 cookie会在回话结束之后过期 
 secure 默认false cookie 是否安全  
 httponly true 只能http传输过程中使用 false js也可以获取

 2. 客户端自行设置 
document.cookie
不是浏览器设备可以设置 header authorization
### node调试 
node --inspect 

或使用vscode

### CORS 
jsonp 会打乱服务器的响应格式 application/javascript 只能get请求
跨域资源共享
Cross-Origin Resource Sharing
浏览器会对每一个请求区分类型
#### 简单请求 
1. 请求方式属于下面一种
 + get
 + post
 + head
2. 请求头仅包含安全的字段 常见俺去哪字段
 + Accept
 + Accept-Language
 + Content-Language
 + Content-Type
 + DPR
 + Downlink
 + Save-Data
 + Viewport-Width
 + Width
3. 请求头如果包含content-type 仅限以下的值
 + text/plain
 + multipart/form-data
 + application/x-www-form-urlencoded
同时满足以上三种情况的会被认为是简单请求

简单请求会自动添加origin字段
Access-Control-Allow-Origin : * 或者一个具体的域名（推荐）
#### 需要预检的请求
只要不是简单请求
浏览器会发一个预检请求
OPTIONS url HTTP/1.1
Host: domain
Origin: domain
Access-Control-Request-Methods: method
Access-Control-Request-Headers: 非安全请求头字段
服务器预检后 
Access-Control-Allow-Origin
Access-Control-Allow-Methods
Access-Control-Allow-Headers
[Access-Control-Max-Age]: s

后续和简单请求一样
#### 附带身份验证的请求
xhr.withCredentials = true 
fetch credentials: omit same-origin include
携带了cookie后 服务器必须明确告知允许cookie
Access-Control-Allow-Credentials: true
响应必须携带了具体的域名 不能使用*

### session
与cookie的区别
session|cookie
:-:|:-:
存储在服务端    | 存在客户端 不占用服务端资源   
耗费服务器存储  | 只能是字符串 存储有限 数据容易被获取 篡改 丢失 
敏感数据复杂数据 | 简单数据 

通过cookie把session id 发送给客户端

### jwt
Json Web Token
为多终端设备 提供**统一** **安全** 的令牌格式

alg 加密算法  
1. HS256 
2. RS256
type JWT

base64 url 编码 
在base64基础上对+-/做特殊处理
payload 
主体
```js
{
    ss 发行者
    iat 发布时间
    exp 打起事件
    sub 描述
    aud 听众
    nbf 时间点 到达之前不可用
    jti 唯一编号
}
```
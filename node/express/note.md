### express

创建一个 express 实例

```js
const app = express();
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
app.use("/", express.static(path.join(__dirname, "static")));
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

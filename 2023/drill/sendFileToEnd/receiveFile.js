let fs = require("fs");
let path = require("path");
let express = require("express");
let formidable = require("formidable");

const app = express();

// 开放目录
app.use("/file/", express.static(__dirname + "/file/"));

// 跨域
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Accept,Content-type"
  );
  res.header("Access-Control-Allow-Credentials", true);
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method.toLowerCase() == "options")
    res.sendStatus(200); //让options尝试请求快速结束
  else next();
});
async function exitsFolder(reaPath) {
  try {
    await fs.promises.stat(reaPath);
  } catch (e) {
    // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
    await fs.promises.mkdir(reaPath, { recursive: true });
  }
}
// 保存文件
function saveFile(file, callback) {
  console.log(file);
  return
  // 定义存储文件地址
  let savePath = path.resolve(
    __dirname,
    `./file/${file.file1[0].originalFilename}`
  );
  let sourcePath = file.file1[0].filepath;
  // 创建读写流
  let readStream = fs.createReadStream(sourcePath);
  let writeStream = fs.createWriteStream(savePath);

  // 读写进程开始
  readStream.pipe(writeStream);

  // 监听读取完成事件
  readStream.on("end", () => {
    // 读取完成后，释放读取源文件链接
    fs.unlinkSync(sourcePath);
    callback("http://127.0.0.1:3002/file/" + file.file1.originalFilename);
  });
}

// 上传文件接口
app.post("/upload_file/pcap/group/upload", (req, res) => {
  console.log(req);

  let form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    // 对于单个文件，这里的files直接是file对象
    let file = files;
    saveFile(file, (data) => {
      res.send({ state: "success", msg: "上传成功！", filePath: data });
    });
  });
});

// 启动
app.listen(3002, () => {
  console.log("start server 3002");
});

.bin => @ => 首字母
广度优先
config 
npmrc 项目级 用户级 全局 npm内置 
存在lock.json 检查package 和 package-lock 不一致 根据package下载 并更新lock 一致 检查缓存  有 复用 无 下载 并更新 lock
没有lock.json 构建依赖树 检查缓存
如何检查缓存 intergrity + version + 包名 生成唯一key 去npm-catch里比对 能对上 就解压对应文件
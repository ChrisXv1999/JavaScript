/**
 * 全局api
 * arch ===> os.arch()
 * platform
 * argv 执行时后续参数  @param @type Array 0 运行应用 运行文件 后续参数
 * cwd() 获取工作目录 ===>__dirname 绝对路径 esm没有__dirname
 * memoryUsage
 * {
        rss: 29364224, 物理内存存量
        heapTotal: 4341760, v8分配内存
        heapUsed: 3719376, 已经使用内存
        external: 1504430, 外部使用内存
        arrayBuffers: 10695 二进制的总量
    }
    exit 强制结束进程
    on 监听 
    pid 获取进程id
    kill 杀死进程 需要pid 进程id
    env 获取操作系统中所有的环境变量 可以修改 只在当前进程生效
    //  库cross-env

    child_process需要引入
    exec 执行shell命令 与软件交互
 */
// console.log(process.env);
const {exec, execSync, spawn, execFile,fork,} = require('node:child_process');
// exec('node -Version',(err,stdout,stderr)=> {
//     if(err || stderr){
//         console.log('error');
//     }
//     console.log(stdout);
// })
// 返回的buffer
//可以执行所有有的shell命令 可以和软件交互
// const homePath = execSync('echo %userprofile%')
// console.log(homePath.toString());
// spawn 没有字节上线 实时返回
// const {stdout} = spawn('netstat',['-a'],{

// })
// stdout.on('data',(msg)=>{
//     console.log(msg && msg.toString());
// })
// stdout.on('close',(msg)=>{
//     console.log('shell end');
// })
// execFile 执行可执行文件
//底层实现顺序 exec - excefile - spawn
//fork 只能接受js模块 ch = fork('.js') ch.send  子进程通过 process.on message
//父子通信基于IPC IPC基于libuv windows named pipe posix unix domain socket
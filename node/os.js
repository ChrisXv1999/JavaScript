/**
 * os 
 * platform 操作系统 type Windows_NT
 * release 版本 version  Windows 10 Home China
 * homeDir 用户目录 win => %userprofile% mac $HOME
 * arch 获取cpu架构
 * cpus length 根据cpu线程
 *  {
    model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz', cpu型号
    speed: 2808, cpu时钟速度
    //cpu 利用率
    times: { user: 667609 用户使用程序时间, 
        nice: 0 优先级, 
        sys: 413937 系统内核, 
        idle: 9747031 空闲, 
        irq: 3296 硬件中断 }
  }
 */
const os = require('os');
console.log(os.networkInterfaces());
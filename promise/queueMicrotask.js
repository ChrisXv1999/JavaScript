/**
 * queueMicrotask 生成一个微任务 和promise优先级一致 谁先执行取决于添加顺序
 * 兼容性  google chrome 71+ safari 12.1+ firefox 69+
 * link https://developer.mozilla.org/zh-CN/docs/Web/API/queueMicrotask
 */
function generatePromiseMicrotask(fn,...args) {
    let microtask = Promise.resolve();
    microtask.then(()=>{
        fn(...args)
    });
}
function generateQueueMicrotaskMicrotask(fn,...args) {
    queueMicrotask(()=>{
        fn(...args)
    });
}
function generateSettimeoutTask(fn,...args) {
    setTimeout(fn, 0,...args);
}
function say(s){
    console.log(s);
}
generateSettimeoutTask(say,'setTimeout')
generateQueueMicrotaskMicrotask(say,'queueMicrotask')
generatePromiseMicrotask(say,'promise')
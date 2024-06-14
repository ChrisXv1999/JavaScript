function promiseFetchData() {
    return new Promise((resolve, reject) => {
        console.log(performance.now(),'1111');
        setTimeout(() => {
            resolve([]);
        }, 1000*Math.random())
    })
}
function fetchData() {
    console.log(performance.now(),'2222');
    return []
}


function loop(fn, interval = 1000, immediate = false) {
    if (typeof fn !== 'function') {
        throw new Error('fn must be a function')
    }
    const config = {
        timer: 0,
        cancel: false,
    }
    function _loop(remain) {
        if (config.cancel) return
        config.timer = setTimeout(async () => {
            const beginTime = performance.now();
            await fn();
            _loop(interval - (performance.now() - beginTime))
        }, remain)
    }
    _loop(immediate ? 0 : interval);
    return () => {
        config.cancel = true;
        clearTimeout(config.timer)
    }
}

//测试
const cancelLoop1 = loop(fetchData, 1000, true);
const cancelLoop = loop(promiseFetchData, 1000, true);

setTimeout(() => {
    cancelLoop()
    cancelLoop1()
}, 1000 * 7)

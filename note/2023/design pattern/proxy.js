const virtualProxy = function (fn) {
    let cache = [];
    return function () {
        this.immediate = false;
        this.duration = 1000;
        this.setImmediate = (immediate, duration = 1000) => {
            this.immediate = immediate;
            this.duration = duration;
            return this;
        }
        this.addHandle = (...params) => {
            if (this.immediate) return fn.apply(this, params);
            cache.push(params)
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                cache.forEach(params => fn.apply(this, params));
                cache.length = 0;
            }, this.duration)
            return this;
        }
        this.immediatelyHandle = () => {
            clearTimeout(this.timer);
            cache.forEach(params => fn.apply(this, params));
            cache.length = 0;
            return this;
        }
    }
}
const VirtualLog = virtualProxy(console.log);
const vl = new VirtualLog();
vl.addHandle('hello').addHandle('chris').setImmediate(true);
vl.addHandle('xvxv')

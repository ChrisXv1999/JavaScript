//通过继承之后 类名已经无法语义
const tool = {
    /**
     * @param {Function} target  构造函数
     * @param {Function} origin  父类
     * @returns target
     */
    inherit(target,origin){
        function Temp(){};
        Temp.prototype = origin.prototype;
        target.prototype = new Temp();
        target.prototype.constructor = target;
        return target
    },
    extends(origin){
        function object(...rest){
            origin.apply(this,rest)
        }
        return this.inherit(object,origin)
    },
    single(origin){
        const Single = (()=>{
            let instance = null
            return function(...rest){
                if(!instance) {
                    origin && origin.apply(this,rest)
                    instance = this;
                }
                return instance
            };
        })();
        origin && this.inherit(Single,origin)
        return Single
    }
}
//[1,2,3,4,5]
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LRU_limit, _LRU_queue;
var LRU = /** @class */ (function () {
    function LRU(limit) {
        _LRU_limit.set(this, 0);
        _LRU_queue.set(this, []);
        this.size = 0;
        __classPrivateFieldSet(this, _LRU_limit, limit, "f");
    }
    LRU.prototype.add = function (item) {
        var index = __classPrivateFieldGet(this, _LRU_queue, "f").findIndex(function (i) { return item === i; });
        if (index > -1) {
            __classPrivateFieldGet(this, _LRU_queue, "f").splice(index, 1);
            this.size--;
        }
        else if (this.size === __classPrivateFieldGet(this, _LRU_limit, "f")) {
            __classPrivateFieldGet(this, _LRU_queue, "f").shift();
            this.size--;
        }
        __classPrivateFieldGet(this, _LRU_queue, "f").push(item);
        this.size++;
    };
    LRU.prototype[(_LRU_limit = new WeakMap(), _LRU_queue = new WeakMap(), Symbol.toPrimitive)] = function () {
        return __classPrivateFieldGet(this, _LRU_queue, "f").join('');
    };
    return LRU;
}());
var l = new LRU(3);
l.add('1');
l.add('2');
l.add('3');
l.add('2');

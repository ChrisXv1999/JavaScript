const PROMISE_STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}
const NOOP = () => void 0;
const microTask = (() => {
    if (typeof queueMicrotask === 'function') {
        return (fn) => queueMicrotask(fn)
    }else {
        return (fn) => setTimeout(fn, 0)
    }
})()
class Promise {
    #state = PROMISE_STATE.PENDING;
    #reason = undefined;
    #data = undefined;
    #handlerList = []
    static resolve(data) {
        return new Promise((resolve) => resolve(data))
    }
    static reject(reason) {
        return new Promise((resolve, reject) => reject(reason))
    }
    constructor(handler) {
        const resolve = (data) => {
            this.#data = data;
            this.#changeState(PROMISE_STATE.FULFILLED)
        };
        const reject = (reason) => {
            this.#reason = reason;
            this.#changeState(PROMISE_STATE.REJECTED)
        };
        try {
            handler(resolve, reject)
        } catch (err) {
            this.#reason = err;
            this.#changeState(PROMISE_STATE.REJECTED);
        }
    }
    #changeState(state) {
        if (this.#state === PROMISE_STATE.PENDING) {
            this.#state = state;
            microTask(() => {
                if (state === PROMISE_STATE.FULFILLED) {
                    this.#handlerList.forEach(({ resolve }) => {
                        resolve(this.#data)
                    })
                } else if (state === PROMISE_STATE.REJECTED) {
                    this.#handlerList.forEach(({ reject }) => {
                        reject(this.#reason)
                    })
                }
            })
        }
    }
    then(resolve = NOOP, reject = NOOP) {
        this.#handlerList.push({
            resolve,
            reject
        })
        return new Promise(resolve => resolve())
    }
    catch(reject) {
        return this.then(NOOP, reject)
    }
}
const p1 = new Promise((resolve,reject)=>{
    resolve(1);
    reject(2);
});
p1.then((data)=>{
    console.log(data);
})
const p2 = new Promise((resolve,reject)=>{
    dsfasdf
    resolve(1);
    reject(2);
});
p2.catch((err)=>{
    console.log(err);
})
console.log('end');

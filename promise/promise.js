const PROMISE_STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}
class Promise {
    promiseState = PROMISE_STATE.PENDING;
    #reason = undefined;
    #data = undefined;
    #handlerList = [] 
    constructor(handler) {
        const resolve = (data) => {
            this.#data = data;
            this.#changeState(PROMISE_STATE.FULFILLED)
        };
        const reject = (reason) => {
            this.#reason = reason;
            this.#changeState(PROMISE_STATE.REJECTED)
        };
        try{
            handler(resolve, reject)
        }catch(err){
            this.#reason = err;
            this.#changeState(PROMISE_STATE.REJECTED);
        }
    }
    #changeState(state){
        if(this.promiseState === PROMISE_STATE.PENDING) {
            this.promiseState = state;
        }
    }
    then(resolve, reject){
        return new Promise(resolve=>resolve())
    }
}
const p = new Promise((resolve,reject)=>{
    resolve(1);
    reject(2);
});


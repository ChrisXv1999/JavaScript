class Emitter{
    constructor(){
        this.map = new Map();
    }
    on(eventName,cb){
        if(this.map.has(eventName)){
            const list = this.map.get(eventName);
            list.add(cb);
        }else{
            const list = new Set([cb]);
            this.map.set(eventName,list);
        }
    }
    emit(eventName){
        if(this.map.has(eventName)){
            const cbList = this.map.get(eventName);
            cbList.forEach(cb=>cb());
        }
    }
}
export default new Emitter()
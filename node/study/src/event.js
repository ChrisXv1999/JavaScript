const {EventEmitter} = require('node:events');
const e = new EventEmitter();
//注册事件
e.on('message',(message)=>{
    console.log(message);
});
//触发事件
e.removeAllListeners('message')

e.emit('message','hello chris');
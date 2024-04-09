const koa = require('koa');
const app = new koa();
app.use((ctx,next)=> {
    ctx.body = 'hello koa'
})
app.listen(3000,()=>{
    console.log('http://localhost:3000/');
})
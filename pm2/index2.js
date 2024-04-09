const express = require('express');
const app = express();

app.get('/index2',(req,res)=>{
    res.json({
        code: 200,
        message: 'chris 2',
    })
})
app.listen(8888,()=>{
    console.log('server is open port 8888')
})
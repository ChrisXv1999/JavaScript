const express = require('express');
const app = express();
const os = require('os');

app.get('/index',(req,res)=>{
    res.json({
        code: 200,
        message: 'chris',
        list: os.cpus(),
        total: os.cpus().length,
    })
})
app.listen(9999,()=>{
    console.log('server is open port 999')
})
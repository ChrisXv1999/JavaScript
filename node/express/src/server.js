const express = require('express');
const {PORT,open} = require('../config');
const path = require('path');
const {openBrowser} = require('../../study/drill/os');
const userRoute = require('../routes/api/user');
const adminRouter = require('../routes/api/admin')
const verifyLogin = require('../routes/verifyLoginMiddleWare')
const app = express();
// app.use(express.static('static'))
app.use(express.static(path.join(__dirname,'../static')));
app.use(verifyLogin)
app.use(express.urlencoded());
app.use(express.json());
// app.all('*', (req, res , next) => {
//     if(req.url.startsWith('/user/')){
//         next();
//         return
//     }
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end(`${req.url} is not found`);
// })
// //路由参数的名称必须由A-Za-z0-9_组成。
// app.get('/user/:id(\\d*)', (req, res , next) => {
//     console.log(req.params);
//     res.send('Hello user' + req.params.id);
// })

 

app.use('/api/user',userRoute);
app.use('/admin',adminRouter)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    open && openBrowser(`http://localhost:${PORT}`);
});

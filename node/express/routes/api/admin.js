const express = require('express');
const adminRoute = express.Router();
const UserService = require('../../../mongodb/services/userService');
const {getResult,getErr} = require('../getSendResult');
const getCookies = require('../../util/getCookies')
adminRoute.post('/login',async (request,response)=>{
    const {loginId='', password=''} = request.body;
    const result = await UserService.findUserByLoginId(loginId,{password:1,username:1});
    if(result.length === 0) {
        response.send(getErr(`${loginId} 不存在`,200));
        return
    }
    const loginSuccess = result[0].password === password;
    if(!loginSuccess){
        response.send(getErr(`密码不正确`,200));
        return
    }
    response.setHeader('Set-Cookie',`token=${loginId};domain=localhost;path=/;`)
    response.send(getResult(`${result[0].username} 欢迎登陆`))
})

adminRoute.get('/whoisi',async (request,response)=>{
    const cookies = getCookies(request);
    const {token=''} = cookies;
    const result = await UserService.findUserByLoginId(token);
    response.send(getResult(result[0]))
})

adminRoute.get('/logout',async (request,response)=>{
    const cookies = getCookies(request);
    const {token=''} = cookies;
    response.setHeader('Set-Cookie',`token=${token};path=/;domain=localhost;max-age=1`);
    response.send(getResult('退出成功'))
})

module.exports = adminRoute
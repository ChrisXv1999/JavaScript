const express = require('express');
const getCookies = require('../util/getCookies');
const { getErr } = require('./getSendResult');
const UserService = require('../../mongodb/services/userService')
const needLoginPath = [
    '/admin/whoisi',
];
async function verifyLogin(request,response,next){
    if(needLoginPath.includes(request.url)){
        const {token=''} = getCookies(request);
        if(!token){
           return response.send(getErr('请登录后再请求'))
        } 
        const result = await UserService.findUserByLoginId(token);
        if(result.length === 0){
            console.log(234);
            return response.send(getErr('请登录后再请求'))
        }
    }
    next();
}
module.exports = verifyLogin;

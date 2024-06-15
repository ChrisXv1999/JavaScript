const express = require('express');
const userRoute = express.Router();
const {getResult} = require('../getSendResult');
const UserService = require('../../../mongodb/services/userService')
userRoute.get('/',async (request,response)=>{
    const result = await UserService.getUserList();
    response.send(getResult(result))
}) 
userRoute.get('/:id',(request,response)=>{
    response.send(getResult('list'))
})
userRoute.post('/',(request,response)=>{
    response.send(getResult('list'))
})
userRoute.put('/',(request,response)=>{
    response.send(getResult('list'))
})
userRoute.delete('/:id',(request,response)=>{
    response.send(getResult('list'))
})
module.exports = userRoute;
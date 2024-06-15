const express = require('express');
const userRoute = express.Router();
const {getResult} = require('../getSendResult');
const UserService = require('../../../mongodb/services/userService')
userRoute.get('/',async (request,response)=>{
    const result = await UserService.getUserList();
    response.send(getResult(result))
}) 
userRoute.get('/:id',async (request,response)=>{
    const result = await UserService.getUserById(request.params.id);
    response.send(getResult(result))
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
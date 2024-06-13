/**
 * mongodb 非关系数据库
 * mongoose
 * 对ts支持不友好
 * 
 * typeorm 完全使用ts编写 基于类 对mongodb 支持不好
 */
// import http from 'node:http';
// import querystring from 'node:querystring'
// import url from 'node:url'
import { MovieService } from './services/MovieService';
// http.createServer(async (req,res)=>{
//     if(req.url?.startsWith('/api/find-name')){
//         const {query} = url.parse(req.url);
//         const {name,page=1,pageSize=5} = querystring.parse(query||'');
//         const result = await MovieService.findByName(name as string,+page,+pageSize);
//         res.writeHead(200,{
//             'Content-Type': 'application/json; charset=utf-8'
//         })
//         res.end(JSON.stringify(result))
//         return
//     }
//     res.end('404')
// }).listen(3000,()=>{
//     console.log('服务器启动成功');
// })

import fastify from "fastify";
//logger 打开日志
//注册插件 register  
/**
 * register
 * fastify 实例
 * opts
 * done ===》next
 */
const app = fastify();
// app.get('/',async (request,reply)=> {
//     console.log(request.query);
//     //动态参数 params
//     return {hello: "world"}
// })
// app.post('/',async (request,reply)=> {
//     console.log(request.body);
//     return {hello: "world"}
// })
// app.route({
//     url:'/api',//匹配的路径
//     method: 'post',
//     schema: {
//         body: {
//             type: 'object',
//             properties: {
//                 name: {type: 'string'},
//             },
//             required: ['name']
//         },
//         response: {
//             200: {
//                 type: 'object',
//                 properties: {
//                     code: {type: 'number'},
//                     data: {type: 'object'}
//                 }
//             }
//         }
//     },
//     handler: (request,reply)=>{
//         return {
//             code: 0,
//             data: {
//                 name: 'chris',
//                 age: 18
//             }
//         }
//     }
// })
app.route({
    url: '/api/:method',
    method: 'get',
    handler: async (request,reply)=>{
        const params = request.params as {method:string};
        if(params.method === 'find-name'){
            const {name='',page=1,pageSize=5} =  request.query as {name:string,page?:number,pageSize?:number}; 
            const result = await MovieService.findByName(name as string,page,pageSize);
            reply.send(result);
        }
    }
})
app.listen({port: 9000}).then(()=>{
    console.log('server start on port 9000');  
})

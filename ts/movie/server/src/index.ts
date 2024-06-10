/**
 * mongodb 非关系数据库
 * mongoose
 * 对ts支持不友好
 * 
 * typeorm 完全使用ts编写 基于类 对mongodb 支持不好
 */
import http from 'node:http';
import querystring from 'node:querystring'
import url from 'node:url'
import { MovieService } from './services/MovieService';
http.createServer(async (req,res)=>{
    if(req.url?.startsWith('/api/find-name')){
        const {query} = url.parse(req.url);
        const {name,page=1,pageSize=5} = querystring.parse(query||'');
        const result = await MovieService.findByName(name as string,+page,+pageSize);
        res.writeHead(200,{
            'Content-Type': 'application/json; charset=utf-8'
        })
        res.end(JSON.stringify(result))
        return
    }
    res.end('404')
}).listen(3000,()=>{
    console.log('服务器启动成功');
})

const http = require('node:http');
const url = require('node:url')

const app = http.createServer((request,response)=>{
    if(request.method === 'GET'){
        const params = url.parse(request.url)
        response.end(params.query.split('&').reduce(()=>{},{}))
        return
    }
    response.end('404 path not find')
});
app.listen('3000');


const request = http.request('http://localhost:3000?name=chris ',{method:'GET'},(response)=>{
    console.log(response.statusCode);
    console.log(response.headers);
    response.on('data',(chunk)=>{
        console.log(chunk.toString('utf-8'));
    })
})
request.end('name=chris');
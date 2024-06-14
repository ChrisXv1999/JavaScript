const net = require('node:net');
const server = net.createServer();
server.listen(9527);
server.on('connection',(socket)=>{
    socket.on('close',()=>{
        console.log('连接关闭');
    })

    socket.on('data',(chunk)=>{
        const responseStr = 'hello chris'
        socket.write(`HTTP/1.1 200 OK\r
Server: Node\r
Date: ${new Date().toString()}\r
Content-Type: text/html\r
Content-Length: ${responseStr.length}\r
Connection: keep-alive\r
\r
${responseStr}`);
    })
})

const socket = net.createConnection({
    host: 'localhost',
    port: 9527,   
},()=>{
    console.log('请求成功');
})

function parseResponse(response){
    response = response.toString('utf-8');
    const [headerStr,contentStr] = response.replace('\r\n\r\n','@!%_+_@').split('@!%_+_@')
    return [headerStr,contentStr]
}
function parseHeader(headerStr){
    return headerStr.split(/\r\n+/).reduce((header,cur)=>{
        if(!cur.includes(':'))return header;
        const [key,value] = cur.split(':');
        header[key] = value?.trim();
        return header
    },{})
}
let isFirst = true;
let bodyStr = '';
socket.on('data',(chunk)=>{
    if(isFirst) { 
        const [headerStr,contentStr] = parseResponse(chunk);
        const header = parseHeader(headerStr)
        bodyStr += contentStr;
        if(header['Content-Length'] == bodyStr.length){
            isFirst = true;
            console.log(header,bodyStr);
            socket.end();
        }else {
            isFirst = false;
        }
    }
});

socket.write(`GET / HTTP/1.1
Host: localhost
Connection: keep-alive    

username=chris
`);
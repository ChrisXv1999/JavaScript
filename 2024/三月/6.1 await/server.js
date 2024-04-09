const PORT = 3000;
const http = require('node:http');

const server = http.createServer((req, res) => {
    const randomDelay = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`{code:0,success:true,startTime:${Date.now().toLocaleString()}}`);
    }, randomDelay);
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
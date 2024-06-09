import http from 'node:http';
import { execSync } from 'node:child_process'
import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import querystring from 'node:querystring'
import { searchKey } from '../core/search';
export function createSever(m:Map<string,Map<string,string>>){
    http.createServer((res, rep) => {
        if (res.url === '/') {
            rep.writeHead(200);
            rep.end(fs.readFileSync(path.resolve(process.cwd(), 'public/index.html')).toString().replace('FETCH_QUERY_URL', 'api/search'))
            return
        }
        if(res.url?.startsWith('/api/')){
            const {query} = url.parse(res.url);
            const params = querystring.parse(query||'');
            for(const [key,value] of Object.entries(params)){
                if(key === 'query'){
                    rep.end(JSON.stringify(searchKey(value as string,m)))
                    return
                }
            }
        }
        rep.end('404')
    
    }).listen(9999, () => {
        console.log('http:localhost:9999');
        execSync('open http:localhost:9999')
    })
}
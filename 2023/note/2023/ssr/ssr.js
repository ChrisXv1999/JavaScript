// import { createSSRApp } from "vue";
// import { renderToString } from "vue/server-renderer";
// import App from "./App.vue";
// const app = createSSRApp(App)
// renderToString(app).then((html)=>{
//     console.log(html);
// })
import express from 'express'
import { createServer as createViteServer } from 'vite'
import fs from 'node:fs'
import path from 'node:path';
// createViteServer
async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    });
    const { render } = await vite.ssrLoadModule('./src/entry-server.js')
    app.use(vite.middlewares);
    app.use("*", async (req, res) => {
        const { url } = req;
        const html = await render(url)
        console.log(html);
        res.send(html)
    })
    app.listen(3001);
}
createServer()
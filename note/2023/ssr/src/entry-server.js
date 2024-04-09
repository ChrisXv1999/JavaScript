import { createApp } from './main.ts'
import { renderToString } from 'vue/server-renderer'
export async function render(url) {
    const app = createApp();
    const html =  await renderToString(app)
    return html
}
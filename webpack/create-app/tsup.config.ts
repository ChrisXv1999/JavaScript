import {defineConfig} from 'tsup'

export default defineConfig({
    target:"node18",
    format: "cjs",
    entry: ["src/index.js"],
    //是否开启代码压缩
    minify: true,
    platform: "node",
    outDir: "dist"
})
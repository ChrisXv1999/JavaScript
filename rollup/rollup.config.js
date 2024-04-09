import path from "path"
import ts from 'rollup-plugin-typescript2'
// 服务
import serve from "rollup-plugin-serve"
// 热更行
import livereload from "rollup-plugin-livereload"

// 代码压缩
import { terser } from "rollup-plugin-terser"

// 注入node变量
import replace from 'rollup-plugin-replace'
export default {
    input: "./src/index.ts",
    output: {
        file: path.resolve(__dirname, './dist/index.js'),
        format: "umd",
        sourcemap: true,
    },
    plugins: [
        ts(),
        serve({
            open: true,
            port: 1999,
            openPage: "/public/index.html"
        }),
        livereload(),
        terser({
            compress:{
                // 如果解构成log 就无法删除了
                drop_console: true
            }
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}
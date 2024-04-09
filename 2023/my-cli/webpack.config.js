const { Configuration } = require('webpack');
const path = require('path');
const htmlWeabpackPlugin = require('html-webpack-plugin');
// 编译vue模板
const { VueLoaderPlugin } = require('vue-loader/dist/index');
// 清除上次打包
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 美化webpack输出
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
/**
 * @type {Configuration}
 */

const config = {
    mode: 'development',
    entry: './src/main.ts',
    module: {
        rules: [
            { test: /\.vue$/, use: "vue-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            {
                test: /\.ts$/, 
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        //自动补充后缀
        extensions: ['.vue', '.ts', '.js']
    },
    output: {
        filename: 'main[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    stats: 'errors-only',
    devServer: {
        // port: '6001',
    },
    plugins: [
        new htmlWeabpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['YOU appliaction is running here https://localhost:8080']
            }
        }),
    ],
    externals: {
        vue: "Vue"
    }

}
module.exports = config;
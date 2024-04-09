const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    // 入口文件 多入口怎么解决
    // entry: './example/src/index', //为什么这种方式找不到
    entry: {
        index: './example/src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // 输出 
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // 本地服务
    devServer: {
        static: [
            path.resolve(__dirname, 'example/public'),
            path.resolve(__dirname, 'dist')
        ],
        port: 8080,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'example/public/index.html'),
            filename: 'index.html',
            chunks: ['index']
        }),
        new VueLoaderPlugin()
    ]
}
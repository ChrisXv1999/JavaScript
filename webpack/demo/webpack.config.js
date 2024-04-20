import webpack from 'webpack';
import ClearBuild from '../plugin/clear-build/clear-build.js';
import RemovePlugin from '../plugin/removePlugin/removePlugin.js';
import HtmlWebpackPlugin from 'html-webpack-plugin'
//asset Node.js 12.2.0
import packageConfig from './package.json' assert { type: 'json' };
const { version } = packageConfig;
/**
 * 内置工作模式 mode --mode
 * production  
 * development
 * none
 */
//Node 12版本开始支持ES模块
//如果使用ES模块不能解构 否则提示会丢失
/**
 * @type {webpack.Configuration}
 */
const config = {
    mode: "none",
    entry: "./main.js",
    output: {
        filename: "[name]-[hash:8].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            Version: JSON.stringify(version)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ClearBuild(),
        new RemovePlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 模板文件路径
            inject: 'body' // 将js插入到body底部
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: '9999',
        hot: true,
        open: true,
        proxy: [{
            '/api': {
                target: 'https://api.githup.com',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,

            },
        }]
    }
};

export default config;

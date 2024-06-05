import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
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
    entry: "./src/main.ts",
    output: {
        clean: true,
        filename: "[name]-[hash:8].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 模板文件路径
            inject: 'body' // 将js插入到body底部
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/, use: {
                    loader: 'ts-loader'
                }
            },
        ]
    },
    devtool: 'inline-source-map',
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
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};

export default config;
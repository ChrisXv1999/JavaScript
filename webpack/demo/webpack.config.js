import webpack from 'webpack';
import ClearBuild from '../plugin/clear-build/clear-build.js';
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
        new ClearBuild()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    }
};

export default config;

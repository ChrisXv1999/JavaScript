import webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import packageConfig from './package.json' assert { type: 'json' };
import path from 'node:path'

const config = {
    entry: './src/main.js',
    output: {
        filename: '[name][hash:8].js',
    },
    mode: "none",
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  // 将样式通过 <style> 标签插入到页面中
                    'css-loader',    // 解析 CSS 文件
                    'sass-loader'    // 将 SCSS 编译为 CSS
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',  // 将样式通过 <style> 标签插入到页面中
                    'css-loader',    // 解析 CSS 文件
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/' // 图片输出路径，可根据实际情况修改
                    }
                  }
                ]
              }

        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue': '@vue/runtime-dom'
        },
        alias: {
            '@': path.resolve(process.cwd(), 'src') // 将@设置为src目录的绝对路径
          }
      },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 模板文件路径
            inject: 'body' // 将js插入到body底部
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'author': JSON.stringify(packageConfig.author)
          })
    ],
    devtool: 'source-map',

};
export default config;
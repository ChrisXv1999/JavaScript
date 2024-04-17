const {Configuration,DefinePlugin} = require('webpack');
const ClearBuild = require('../plugin/clear-build');
const { version } = require("./package.json");
/**
 * 内置工作模式 mode --mode
 * production  
 * development
 * none
 */
/**
 * @type {Configuration}
 */
const config = {
    mode:"none",
    entry:"./main.js",
    output:{
        filename:"[name][hash].js"
    },
    plugins: [
        new DefinePlugin({
            Version: JSON.stringify(version)
        }),
        new ClearBuild()
    ]
}
module.exports = config;

const  HelloPlugin=  require('./plugins/HelloPlugin');
const path = require('node:path')
console.log(path.resolve(__dirname, 'src/index.js'));
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    plugins:[new HelloPlugin()]
}
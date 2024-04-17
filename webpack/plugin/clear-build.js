const fs = require("node:fs");
const path = require("node:path");
//文件夹如何删除
class ClearBuild {
    constructor() {}
    apply(compiler) {
        compiler.hooks.afterCompile.tap('ClearBuild', (compilation) => {
            const directoryPath = compilation.options.output.path;
            fs.readdir(directoryPath, (err, files) => {
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                }
                files.forEach(file => {
                    const currentPath = path.join(directoryPath, file);
                    fs.unlink(currentPath, err => {
                        if (err) {
                            return console.log('Error deleting file: ', currentPath, err);
                        }
                        console.log('File deleted: ', currentPath);
                    });
                });
            });
        });
    }
}
module.exports = ClearBuild
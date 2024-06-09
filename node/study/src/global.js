const fileName = 'global.js'
if(Array.isArray(globalThis.requireFiles)){
    globalThis.requireFiles.push(fileName)
}else {
    globalThis.requireFiles = [fileName]
}

module.exports = {
    fileName
}
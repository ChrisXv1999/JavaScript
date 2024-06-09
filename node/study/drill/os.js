const os = require('node:os');
const { exec } = require('node:child_process');

function openBrowser(url){
    const platform = os.platform();
    if(platform === 'darwin'){
        openBrowser = function(url){
            exec(`open ${url}`)
        }
    }
    if(platform === 'win32'){
        openBrowser = function(url){
            exec(`start ${url}`)
        }
    }
    openBrowser(url)
}
module.exports = {
    openBrowser,
}
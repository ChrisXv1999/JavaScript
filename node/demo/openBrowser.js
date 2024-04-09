const os = require('node:os');
const {exec} = require('node:child_process');
const openBrowser = (url='http:')=>{
    switch(os.platform()){
        case 'win32':
            exec('start ' + url); 
        break;
        case 'darwin': 
            exec('open' + url);
        break;
        case 'linux': 
            exec('xdg-open' + url)
        break;
    }
}
// console.log();
openBrowser(process.argv[2])
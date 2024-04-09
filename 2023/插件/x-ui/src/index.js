//@
import config from '../package.json' assert {type: 'json'}
import * as XUI from '../packages';
export * from '../packages'
const {version,name} = config;
const install = (app)=>{
    Object.values(XUI).forEach((c)=>{
        app.use(c)
    })
}
export default {
    version,
    name,
    install,
    ...XUI
}
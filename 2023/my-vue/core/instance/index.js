import initMixin from "./init.js";
export default class Vue{
    constructor(option){
        this._init(option)
    }
}
initMixin(Vue)
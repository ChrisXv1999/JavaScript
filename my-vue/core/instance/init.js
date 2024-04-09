import defineReactive from './defineReactive.js'
import mount from './mount.js';
let uid = 0;
export default function initMixin (Vue) {
    Vue.prototype._init = function(option) {
        const vm = this;
        vm.uid = uid ++;
        vm.isVue = true;
        if(option.data) {
            vm._data = defineReactive(vm,option.data,"")
        }
        if(option.el) {
            mount(vm,option.el)
        }
    }
}
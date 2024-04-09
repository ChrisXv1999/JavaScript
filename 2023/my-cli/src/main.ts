import { createApp } from "vue";
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
//@ts-ignore
import {VDrag} from "./direction/v-drag/index.js"
const app = createApp(App)
console.log(VDrag);

app.directive('drag',VDrag)
app.use(ElementPlus)
app.mount('#app')
console.log(app);

// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import router from './router'
// createApp(App).use(router).mount('#app')
import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
    return createSSRApp(App)
}
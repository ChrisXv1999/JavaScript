import {XButton} from '../../src/index.js'

import { createApp } from 'vue'
import App from './app.vue'
import '../../src/styles/index.scss'
createApp(App).use(XButton).mount('#app')

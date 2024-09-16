import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(autoAnimatePlugin)
app.mount('#app')

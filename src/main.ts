import { createApp } from 'vue'
import './style.css'
import '@/assets/css/index.scss'
import App from './App.vue'
import Router from './router/index'
import { store } from './store/index'
const app = createApp(App)
app.use(Router)
app.use(store)
app.mount('#app')

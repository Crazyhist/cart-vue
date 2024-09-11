import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './style.css'

const app = createApp(App)
let a = -1
console.log(+a)
app.use(store)
app.mount('#app')

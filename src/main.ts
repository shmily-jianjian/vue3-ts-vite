import { createApp } from 'vue'
import App from './App.vue'
import './global.less'
import store from './store'

const app = createApp(App)

// plugins
app.use(store)

app.mount('#app')

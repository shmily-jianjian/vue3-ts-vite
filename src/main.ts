import { createApp } from 'vue'
import App from '@/App.vue'
import './global.less'
import store from '@/store'
import router from '@/router'

const app = createApp(App)

// plugins
app.use(store).use(router)

app.mount('#app')

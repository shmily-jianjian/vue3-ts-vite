import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

const store = createPinia()
  .use(({ store }) => {
    // 解决 store.$reset报错问题
    const initialState = JSON.parse(JSON.stringify(store.$state))
    store.$reset = () => {
      store.$state = JSON.parse(JSON.stringify(initialState))
    }
    // name能够使用ts声明
    store.name = 'zhaojian'
  })
  .use(piniaPersist)

export default store

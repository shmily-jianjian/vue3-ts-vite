import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')

const router = createRouter({
  // https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router

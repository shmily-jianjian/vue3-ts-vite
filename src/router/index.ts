import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const Detail = () => import('@/views/detail/index.vue')
const Layout = () => import('@/views/layout/index.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/detail',
        component: Detail
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
const router = createRouter({
  // https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

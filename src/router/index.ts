import { createRouter,  createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('views/home/pinia.vue') }
]
const router = createRouter({
  history: createWebHistory(),    // history 模式则使用 createWebHistory()
  routes,
})

export default router

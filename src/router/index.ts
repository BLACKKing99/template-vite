import { buildModuleRouter } from '@/util/router.util'
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/view/bar.vue')
  }
]

const module:Record<string, any> = import.meta.glob(['../view/*.vue'], {
  eager: true
})

// 获取对应目录的路由地址
const route = buildModuleRouter(module)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...route]
})

export const setupRouter = (app:App) => {
  app.use(router)
}

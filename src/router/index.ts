import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    name: 'friendshipChain',
    path: '/friendshipChain',
    component: () => import('@/views/friendshipChain/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
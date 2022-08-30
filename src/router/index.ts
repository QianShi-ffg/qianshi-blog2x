import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        children: []
      },
      {
        name: 'artDetail',
        path: '/artDetail',
        component: () => import('@/views/artDetail/index.vue')
      },
      {
        name: 'friendshipChain',
        path: '/friendshipChain',
        component: () => import('@/views/friendshipChain/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
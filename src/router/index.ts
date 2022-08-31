import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/:catchAll(.*)', component: () => import('@/views/statePage/404.vue') },
  {
    path: '/index',
    component: () => import('@/views/index.vue'),
    redirect: '/',
    children: [
      {
        name: 'home',
        path: '/',
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
  history: createWebHistory(),
  routes: routes
})

export default router
import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { useStore } from '@/store'

const moduleFiles = import.meta.glob('../views/*/*.vue')
console.log(moduleFiles, 36669999)
const routes: Array<RouteRecordRaw> = [
  { path: '/:catchAll(.*)', 
    // component: defineAsyncComponent(() => import('@/views/statePage/404.vue'))
    component: moduleFiles['../views/statePage/404.vue']
  },
  {
    path: '/index',
    component: () => import('@/views/index.vue'),
    // component: moduleFiles['../views/index.vue'],
    redirect: '/',
    children: [
      {
        name: 'home',
        path: '/',
        component: defineAsyncComponent(() => import('@/views/home/index.vue')),
        // component: moduleFiles['../views/home/index.vue'],
        children: []
      },
      {
        name: 'demo',
        path: '/demo',
        // component: defineAsyncComponent(() => import('@/views/home/index.vue')),
        component: moduleFiles['../views/demo/index.vue'],
        children: []
      },
      {
        name: 'artDetail',
        path: '/artDetail',
        // component: defineAsyncComponent(() => import('@/views/artDetail/index.vue'))
        component: moduleFiles['../views/artDetail/index.vue']
      },
      {
        name: 'friendshipChain',
        path: '/friendshipChain',
        // component: defineAsyncComponent(() => import('@/views/friendshipChain/index.vue'))
        component: moduleFiles['../views/friendshipChain/index.vue']
      },
      {
        name: 'log',
        path: '/log',
        // component: defineAsyncComponent(() => import('@/views/log/index.vue'))
        component: moduleFiles['../views/log/index.vue']
      },
      {
        name: 'about',
        path: '/about',
        // component: defineAsyncComponent(() => import('@/views/about/index.vue'))
        component: moduleFiles['../views/about/index.vue']
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  useStore().setMyLoading(true)
  next()
})

export default router
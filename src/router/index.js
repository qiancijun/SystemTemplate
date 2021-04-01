import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// resolve=>(require(['需要加载的路由的地址'])，resolve)
const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {isAdmin: false},
  },
  {
    path: '/login',
    name: 'login',
    meta: {isAdmin: false},
    component: () => import('@/views/login.vue')
    // component: resolve => (require(['@/views/MainPage.vue']), resolve)
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {isAdmin: false},
    component: () => import('@/views/dashboard.vue'),
    // component: resolve => (require(['@/views/MainPage.vue']), resolve)
    children: [
      {
        path: '/dashboard/humidityBoard',
        name: 'humidityBoard',
        meta: {isAdmin: false},
        component: () => import('@/views/boards/humidityBoard.vue')
      },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

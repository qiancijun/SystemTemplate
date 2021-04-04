import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// resolve=>(require(['需要加载的路由的地址'])，resolve)
const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {isAdmin: false},
  },
  {
    path: '/home',
    name: 'home',
    meta: {isAdmin: false},
    component: () => import('@/views/Home.vue')
    // component: resolve => (require(['@/views/MainPage.vue']), resolve)
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
    meta: {isAdmin: true},
    component: () => import('@/views/dashboard.vue'),
    // component: resolve => (require(['@/views/MainPage.vue']), resolve)
    children: [
      {
        path: '/dashboard/humidityBoard',
        name: 'humidityBoard',
        meta: {isAdmin: true},
        component: () => import('@/views/boards/humidityBoard.vue')
      },
      {
        path: '/dashboard/temperatureBoard',
        name: 'temperatureBoard',
        meta: {isAdmin: true},
        component: () => import('@/views/boards/temperatureBoard.vue')
      },
      {
        path: '/dashboard/manageBoard',
        name: 'manageBoard',
        meta: {isAdmin: true},
        component: () => import('@/views/boards/manageBoard.vue')
      },
      {
        path: '/dashboard/vocBoard',
        name: 'vocBoard',
        meta: {isAdmin: true},
        component: () => import('@/views/boards/vocBoard.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

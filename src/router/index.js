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
    meta: {isAdmin: false},
    component: () => import('@/views/dashboard.vue')
    // component: resolve => (require(['@/views/MainPage.vue']), resolve)
  },
]

const router = new VueRouter({
  routes
})

export default router

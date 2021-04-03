import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { Line } from '@antv/g2plot';

Vue.config.productionTip = false
Vue.prototype.axios = axios;
// axios.defaults.baseURL = ''
axios.defaults.withCredentials = true
Vue.config.productionTip = false

// // 解决两次访问相同路由地址报错
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(Element)
// Vue.use(Line)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

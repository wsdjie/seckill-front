import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //引入路由插件
import Element from 'element-ui'//引入ui模板
import routes from './js/router/router' //引入模块组件
import 'element-ui/lib/theme-chalk/index.css'//引入样式
import Axios from "axios"
import VueAxios from 'vue-axios'
import Qs from 'qs'

Vue.use(VueRouter)//全局注入VueRouter插件
Vue.use(Element)
Vue.use(VueAxios,Axios)
Vue.use(Qs)

Axios.defaults.baseURL = "http://localhost:8081"
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.defaults.withCredentials = true

const router = new VueRouter({
  mode: 'history',//不让url中带#
  routes
})

new Vue({
  router,//让vue知道我们的路由规则
  el: '#app',
  render: h => h(App)
})

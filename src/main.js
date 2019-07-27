import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //引入路由插件
import Element from 'element-ui'//引入ui模板
import routes from './js/router/router' //引入模块组件
import 'element-ui/lib/theme-chalk/index.css'//引入样式
import Axios from "axios"
import VueAxios from 'vue-axios'
import Qs from 'qs'
import Vuex from 'vuex'
import storeModules from './js/store/store-module'

Vue.use(VueRouter)
Vue.use(Element)
Vue.use(VueAxios,Axios)
Vue.use(Qs)
Vue.use(Vuex) //使用 vuex

Axios.defaults.baseURL = "http://localhost:8081"
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.defaults.withCredentials = true //跨域请求

const router = new VueRouter({
  mode: 'history',//不让url中带#
  routes
})

const store = new Vuex.Store({
  modules: storeModules
})
Vue.prototype.$store = store

new Vue({
  store,//全局引入store对象
  router,//让vue知道我们的路由规则
  el: '#app',
  render: h => h(App)
})

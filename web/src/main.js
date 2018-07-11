// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';//引入axios组件

Vue.config.productionTip = false

axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3700"; //打包的时候直接删掉，默认基础路径在这里配置
Vue.prototype.$reqs = axios;//将 axios 赋值给 Vue，方便在子组件里面使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
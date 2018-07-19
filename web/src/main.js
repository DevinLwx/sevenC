import Vue from 'vue'
import App from './App'
import { router } from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './services/request'

Vue.config.productionTip = false

Vue.use(iView);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})

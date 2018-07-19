import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from "iview";
import store from "../store";

Vue.use(Router)

// 路由配置
const RouterConfig = {
  routes: routes
};
export const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  store.dispatch('setApiLoading', 0)
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});


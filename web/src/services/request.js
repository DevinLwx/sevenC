import Vue from 'vue'
import axios from 'axios';//引入axios组件
import store from '../store';
import ENV from './env';

// 创建axios实例
const service = axios.create({
  baseURL: ENV.BASE_API, // api的base_url
  timeout: 50 * 1000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true       //跨域保存session有用
});

Vue.prototype.$reqs = service;//将 axios 赋值给 Vue，方便在子组件里面使用

// request拦截器
service.interceptors.request.use(function (req) {
  store.dispatch('updateApiLoading', true);
  return req;
}, function (error) {
  // 对请求错误做点什么
  return Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(function (res) {
  store.dispatch('updateApiLoading', false);
  if(res.data.err) {
    alert(res.data.err);
    return Promise.reject(res);
  } else if(res.data.redirect) {
    alert("请先登录..");
    window.location.href = "#/login"; //跳转到登录页

    return Promise.reject(res);
  }else{
    //返回response继续执行后面的操作
    return res;
  }
}, function (error) {
  store.dispatch('updateApiLoading', false);
  // 对响应错误做点什么
  return Promise.reject(error);
});

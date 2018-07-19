import Vue from 'vue'
import { BASE_PARAMS } from '../services/env';
import urls from '../services/urls';
const winVue = new Vue();

export function Login(data) {
  let url = urls.login;

  return winVue.$reqs({
    url: url,
    method: 'post',
    data: data
  });
}

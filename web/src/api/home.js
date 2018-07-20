import Vue from 'vue'
import { BASE_PARAMS } from '../services/env';
import urls from '../services/urls';
const winVue = new Vue();

// 登出
export function Logout() {
  let url = urls.home.logout;

  return winVue.$reqs({
    url: url,
    method: 'post'
  });
}

// 获取登陆人信息
export function getUserInfo() {
  let url = urls.home.getInfo;

  return winVue.$reqs({
    url: url,
    method: 'get'
  });
}

export function getAdminList(data) {
  let url = urls.home.adminList;

  return winVue.$reqs({
    url: url,
    method: 'post',
    data: data
  });
}

export function addUser(data) {
  let url = urls.home.addUser;

  return winVue.$reqs({
    url: url,
    method: 'post',
    data: data
  });
}

export function updateUser(data) {
  let url = urls.home.updateUser;

  return winVue.$reqs({
    url: url,
    method: 'post',
    data: data
  });
}

export function deleteUser(data) {
  let url = urls.home.deleteUser;

  return winVue.$reqs({
    url: url,
    method: 'post',
    data: data
  });
}

// 期号列表
export function getPrizeList(data) {
  let url = urls.prize.list;

  return winVue.$reqs({
    url: url,
    method: 'post',
    data: data
  });
}


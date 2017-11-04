import axios from 'axios';
import {localData, $user} from 'vue-extend';
// 超时时间
axios.defaults.timeout = 5000;
axios.defaults.params = {}
// axios.defaults.headers.Accept = 'application/json';
// http请求拦截器
axios.interceptors.request.use(config => {
  let user = $user.get();
  if (user && user.token) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.token = user.token;
    config.headers.openId = user.openId;
  }

  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  // 响应成功
  return data.data;
}, error => {
  return Promise.reject(error)   // 返回接口返回的错误信息
})

import axios from 'axios';
// 超时时间
axios.defaults.timeout = 5000;
axios.defaults.params = {
  requestId: Math.random()
}
// http请求拦截器
axios.interceptors.request.use(config => {
  let user = localData.get('web-user');
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
  if (data.data.httpCode === "600002") {
    window.location.href = 'index.html';
  }
  return data.data;
}, error => {
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       // 返回 401 清除token信息并跳转到登录页面
  //       store.commit(types.LOGOUT);
  //       router.replace({
  //         path: 'login',
  //         query: {redirect: router.currentRoute.fullPath}
  //       })
  //   }
  // }
  return Promise.reject(error)   // 返回接口返回的错误信息
})

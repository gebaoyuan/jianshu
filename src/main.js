// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
//配置文件
import config from './config.js';

import store from './store';
import vueExtend from 'vue-extend';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import router from './router'

Vue.use(ElementUI);
// vue 扩展方法
Vue.use(vueExtend,Object.assign({}, config));
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted(){
  },
  template: '<App/>',
  components: { App }
});

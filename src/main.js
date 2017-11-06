// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
//配置文件
import config from './config.js';

import vueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';
import store from './store';
import vueExtend from 'vue-extend';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import router from './router'
//loading
import Loading from './components/loading.vue';
Vue.use(ElementUI);
// vue 扩展方法
Vue.use(vueExtend, Object.assign({}, config));
//图片懒加载
Vue.use(vueLazyload, {
  attempt: 1,//加载次数1
});
//无限滚动
Vue.use(infiniteScroll);
Vue.component('Loading',Loading);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted() {
  },
  template: '<App/>',
  components: {App}
});

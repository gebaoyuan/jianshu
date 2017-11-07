import Vue from 'vue';
import Router from 'vue-router';

//所有的路由器配置统一在config文件配置!!!!
import config from './config';

Vue.use(Router);
//路由都在这里写  规范书写 :
// 1. 不要使用name属性写   (不方便查找文件)
// 2. 所有的component都用相对路径,方便编辑器ctrl 跳转
// 3. 所有的页面组件写在 pages 文件下    公用组件写在 components 文件下
// 4. 路由名字尽量和文件名保持一致  方便查找
/* 示例
{
      path: '/',
      component: resolve => require(['../pages/login/index.vue'], resolve)
},
* */
let router = new Router({
  routes: [
    {
      path: '*',
      redirect:'/login'
    },
    {
      path: '/login',
      component: resolve => require(['../pages/login/index.vue'], resolve)
    },
    {
      path:'/main',
      component: resolve => require(['../pages/main/index.vue'], resolve),
      children:[{
        path: '/main/test',
        component: resolve => require(['../pages/test/index.vue'], resolve)
      },{
        path: '/index',
        component: resolve => require(['../pages/index/index.vue'], resolve),
        meta:{keepAlive: true}
      },{
        path: '/p/:id',
        component: resolve => require(['../pages/articleDetail/index.vue'], resolve),
        meta:{keepAlive: true}
      }]
    }
  ]
});
//配置路由
config(router);
export default router;

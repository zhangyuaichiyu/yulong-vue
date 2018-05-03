// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
import axios from '@/lib/axios'
import {
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css';
import "./assets/css/base.css"
import "./assets/css/public.css"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MintUI)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import news from '@/components/news'
import recruit from '@/components/recruit'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: index,
    redirect: '/index/home',
    children: [{
      path: '/index/home',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
    }, {
      path: '/index/about',
      name: 'about',
      component: resolve => require(['@/components/about'], resolve),
      meta: {
        title: "关于玉龙",
      }
    }, {
      path: '/index/classic',
      name: 'classic',
      component: resolve => require(['@/components/classic'], resolve),
      meta: {
        title: "经典案例",
      }
    }, {
      path: '/index/business',
      name: 'business',
      component: resolve => require(['@/components/business'], resolve),
      meta: {
        title: "业务范围",
      }
    }, {
      path: '/index/corporate',
      name: 'corporate',
      component: resolve => require(['@/components/corporate'], resolve),
      meta: {
        title: "企业文化",
      }
    }, {
      path: '/index/news',
      name: 'news',
      component: news,
      meta: {
        title: "新闻中心",
      },
    }, {
      path: '/index/details/:id',
      name: 'details',
      component: resolve => require(['@/components/details'], resolve),
      meta: {
        title: "详情",
      }
    }, {
      path: '/index/recruit',
      name: 'recruit',
      component: recruit,
      meta: {
        title: "招贤纳士",
      }
    }, {
      path: '/index/cooperation',
      name: 'cooperation',
      component: resolve => require(['@/components/cooperation'], resolve),
      meta: {
        title: "业务合作",
      }
    }, {
      path: '/index/weixin',
      name: 'weixin',
      component: resolve => require(['@/components/weixin'], resolve),
      meta: {
        title: "微信关注",
      }
    }]
  }]
})
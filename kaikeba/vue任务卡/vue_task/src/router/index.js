import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { UserLayout } from '@/layouts'

import store from '../store'


Vue.use(VueRouter)

const routes = [


  {
    path:'/ContentBuk',
    name:'ContentBuk',
    component: () => import(/* webpackChunkName: "user" */ '@/components/ContentBuk.vue')
  },
  

  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    redirect: '/user',
  },


  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: BasicLayout,
  //   meta: { title: 'menu.home' },
  //   redirect: '/dashboard/workplace',
  //   children: [
  //     // dashboard
  //     {
  //       path: '/dashboard',
  //       name: 'dashboard',
  //       redirect: '/dashboard/workplace',
  //       component: RouteView,
  //       meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
  //       children: [
  //         {
  //           path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
  //           name: 'Analysis',
  //           component: () => import('@/views/dashboard/Analysis'),
  //           meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: [ 'dashboard' ] }
  //         },
  //         // 外部链接
  //         {
  //           path: 'https://www.baidu.com/',
  //           name: 'Monitor',
  //           meta: { title: 'menu.dashboard.monitor', target: '_blank' }
  //         },
  //         {
  //           path: '/dashboard/workplace',
  //           name: 'Workplace',
  //           component: () => import('@/views/dashboard/Workplace'),
  //           meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: [ 'dashboard' ] }
  //         }
  //       ]
  //     },
  //   ]
  // },  

  // 注册登录
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    meta: { isPublic: true },
    children: [
      {
        path: 'login',
        name: 'login',
        meta: { isPublic: true },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        meta: { isPublic: true },

        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        meta: { isPublic: true },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        meta: { isPublic: true },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/ForgetPassword')
      }
    ]
  },
  {
    path: '/404',
    meta: { isPublic: true },
    component: () => import(/* webpackChunkName: "fail" */ '@/views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // console.log(to.meta)
  // 如果进的不是登录页面 而且还没有 token 就跳转至 登录页面
  if (!to.meta.isPublic && !localStorage.tokenTest) {
  // if (!to.meta.isPublic && !this.$store.state.tokenVal) {
    Vue.prototype.$message.error('调皮，不允许访问哦');
    // console.log('您没有权限访问')
    return next({ name: 'login' })
  }
  next()
})



export default router

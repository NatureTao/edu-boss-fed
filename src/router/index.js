import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Index'
import Home from '@/views/home/Index'
import About from '@/views/about/Index'
import ErrorPage from '@/views/error-page/Index'
import Login from '@/views/login/Index'
import store from '@/store/index'
Vue.use(VueRouter)

const routes = [
  // login路由
  {
    path: '/login',
    name: 'login',
    component: Login,


  },
  // main路由
  {
    path: '/',
    name: '',
    component: Layout,
    // 是否验证
    meta: {
      requireAuth: true
    },
    // 子路由
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About,

      },

    ]

  },
  {
    path: '*',
    name: 'error-page',
    component: ErrorPage
  }



]

const router = new VueRouter({
  routes
})
// 在跳转之前
// to 要去的 from 原来的 next 干什么
router.beforeEach((to, from, next) => {
  
  // 自己写的已登录不跳转登录页
  if(store.state.tokenInfo && to.name == 'login'){
    next({
      name: '',
    })
    return
  }

  //matched 父级
  if (to.matched.some(r => r.meta.requireAuth)) {
    // console.log('需要检测')
    if (!store.state.tokenInfo) {
      // console.log('未授权')
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
      return
    }
  
  }


  next()
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Index'
import Home from '@/views/home/Index'
import About from '@/views/about/Index'
import ErrorPage from '@/views/error-page/Index'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
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

export default router

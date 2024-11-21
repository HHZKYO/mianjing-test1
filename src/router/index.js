import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Detail from '@/views/Detail.vue'
import Layout from '@/views/Layout.vue'
import Like from '@/views/Like.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import User from '@/views/User.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/article/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    redirect: '/article',
    children: [
      { path: '/article', component: Article },
      { path: '/like', component: Like },
      { path: '/collect', component: Collect },
      { path: '/user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})

const whiteList = ['/login', '/register']

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router

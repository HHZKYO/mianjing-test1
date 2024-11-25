import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'
// 一级路由页面导入
const Detail = () => import('@/views/Detail.vue')
const Layout = () => import('@/views/Layout.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
// 二级路由页面导入
const User = () => import('@/views/User.vue')
const Article = () => import('@/views/Article.vue')
const Collect = () => import('@/views/Collect.vue')
const Like = () => import('@/views/Like.vue')

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

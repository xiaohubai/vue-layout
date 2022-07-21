import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue')
  }
]

const router = createRouter({
  // hash:createWebHashHistory，
  // history:createWebHistory
  history: createWebHistory("/"),
  // history:createWebHashHistory("/#"),
  routes
})

export default router

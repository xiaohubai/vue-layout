import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
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
},
{
  path: '/error',
  name: 'Error',
  component: () => import('@/views/error/index.vue')
}
]

const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  // history: createWebHistory("/"),
  // history:createWebHashHistory("/#"),
  history: createWebHistory("/"),
  routes
})

export default router

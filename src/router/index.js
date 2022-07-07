import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/error'
},
{
  path: '/login',
  name: 'Login',
  component: () => import('@/view/login/index.vue')
},
{
  path: '/error',
  name: 'Error',
  component: () => import('@/view/error/index.vue')
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
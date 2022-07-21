import { asyncMenu } from '@/api/menu'
import { asyncRouterHandle } from '@/utils/asyncRouter'
const routerList = []

const formatRouter = (routes) => {
  routes && routes.forEach(item => {
    if ((!item.children || item.children.every(ch => ch.hidden)) && item.name !== '404' && !item.hidden) {
      routerList.push({ label: item.meta.title, value: item.name })
    }
    item.meta.hidden = item.hidden
    if (item.children && item.children.length > 0) {
      formatRouter(item.children)
    }
  })
}

export const router = {
  namespaced: true,
  state: {
    asyncRouters: [],
    routerList: routerList
  },
  mutations: {
    setRouterList(state, routerList) {
      state.routerList = routerList
    },
    // 设置动态路由
    setAsyncRouter(state, asyncRouters) {
      state.asyncRouters = asyncRouters
    }
  },
  actions: {
    // 从后台获取动态路由
    async GetAsyncRouters({ commit }, roleID) {
      const baseRouter = [{
        path: '/layout',
        name: 'layout',
        component: 'views/layout/index.vue',
        meta: {
          title: '底层layout'
        },
        children: []
      }]


      const asyncRouterResp = await asyncMenu(roleID)
      const asyncRouter = asyncRouterResp.data.menus
      asyncRouter.push({
        path: '404',
        name: '404',
        hidden: true,
        meta: {
          title: '迷路了*。*',
        },
        component: 'views/error/index.vue'
      })

      formatRouter(asyncRouter)
      baseRouter[0].children = asyncRouter
      baseRouter.push({
        path: '/:catchAll(.*)',
        redirect: '/layout/404'

      })
      asyncRouterHandle(baseRouter)
      commit('setAsyncRouter', baseRouter)
      commit('setRouterList', routerList)
      return true
    }
  },
  getters: {
    asyncRouters(state) {
      return state.asyncRouters
    },
    routerList(state) {
      return state.routerList
    },
  }
}

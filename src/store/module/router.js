import { asyncRouterHandle } from '@/utils/asyncRouter'

import { asyncMenu } from '@/api/menu'


export const router = {
  namespaced: true,
  state: {
    asyncRouters: [],
    routerList: [],
    keepAliveRouters: []
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
    async SetAsyncRouter({ commit }) {
      const asyncRouterRes = await asyncMenu()
      const asyncRouter = asyncRouterRes.data.menus
      asyncRouterHandle(asyncRouter)
      commit('setAsyncRouter', asyncRouter)
      return true
    }
  },
  getters: {
    // 获取动态路由
    asyncRouters(state) {
      return state.asyncRouters
    },
    routerList(state) {
      return state.routerList
    },
    keepAliveRouters(state) {
      return state.keepAliveRouters
    }
  }
}

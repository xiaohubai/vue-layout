import { asyncMenu } from '@/api/menu'

export const router = {
  namespaced: true,
  state: {
    asyncRouters: []
  },
  mutations: {
    // 设置动态路由
    setAsyncRouter(state, asyncRouters) {
      state.asyncRouters = asyncRouters
    }
  },
  actions: {
    // 从后台获取动态路由
    async GetAsyncRouters({ commit }, roleID) {
      const asyncRouterResp = await asyncMenu(roleID)
      const asyncRouter = asyncRouterResp.data.menus
      commit('setAsyncRouter', asyncRouter)
      return true
    }
  },
  getters: {
    asyncRouters(state) {
      return state.asyncRouters
    }
  }
}

import { login } from '@/api/user'
import router from '@/router/index'
import { store } from '@/store/index'

export const user = {
  namespaced: true,
  state: {
    userInfo: {
      uid: '',
      userName: '',
      nick: '',
      birth: '',
      avatar: '',
      roleId: '',
      roleName: '',
      phone: '',
      wechat: '',
      email: '',
      state: '',
      createAt: '',
      defaultRouter: '',
    },
    tokenInfo:
    {
      token: '',
      expiresAt: '',
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.userInfo = userInfo
    },
    setToken(state, tokenInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.tokenInfo = tokenInfo
    }
  },
  actions: {
    async login({ commit }, loginInfo) {
      const resp = await login(loginInfo)
      if (resp.code === 0) {
        commit('setUserInfo', resp.data.userInfo)
        commit('setToken', resp.data.tokenInfo)
        await store.dispatch('router/GetAsyncRouters', resp.data.userInfo.roleID)
        const asyncRouters = store.getters['router/asyncRouters']
        asyncRouters.forEach(asyncRouter => {
          router.addRoute(asyncRouter)
        })
        return true
      }
    }
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    token(state) {
      return state.tokenInfo.token
    }
  }
}

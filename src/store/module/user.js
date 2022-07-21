import { login, getUserInfo } from '@/api/user'
import router from '@/router/index'
import { store } from '@/store/index'

export const user = {
  namespaced: true,
  state: {
    userInfo: {
      uuid: '',
      nickName: '',
      headerImg: '',
      authority: {},
      sideMode: 'dark',
      activeColor: '#4D70FF',
      baseColor: '#fff'
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
    async GetUserInfo({ commit }) {
      const res = await getUserInfo()
      if (res.code === 0) {
        commit('setUserInfo', res.data.userInfo)
      }
      return res
    },
    async Login({ commit }, loginInfo) {
      const resp = await login(loginInfo)
      if (resp.code === 0) {
        commit('setUserInfo', resp.data.userInfo)
        commit('setToken', resp.data.tokenInfo)
        await store.dispatch('router/GetAsyncRouters', "0")
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
    },
    mode(state) {
      return state.userInfo.sideMode
    },
    sideMode(state) {
      if (state.userInfo.sideMode === 'dark') {
        return '#191a23'
      } else if (state.userInfo.sideMode === 'light') {
        return '#fff'
      } else {
        return state.userInfo.sideMode
      }
    },
    baseColor(state) {
      if (state.userInfo.sideMode === 'dark') {
        return '#fff'
      } else if (state.userInfo.sideMode === 'light') {
        return '#191a23'
      } else {
        return state.userInfo.baseColor
      }
    },
    activeColor(state) {
      if (state.userInfo.sideMode === 'dark' || state.userInfo.sideMode === 'light') {
        return '#4D70FF'
      }
      return state.userInfo.activeColor
    }
  }
}

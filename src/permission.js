import router from './router'
import { store } from '@/store/index'
import getPageTitle from '@/utils/page'
import NProgress from 'nprogress'

const whiteList = ['Login']

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const token = store.getters['user/token']
    document.title = getPageTitle(to.meta.title)
    if (token) {
        if (whiteList.indexOf(to.name) > -1) {
            next()
        } else {
            const router = store.getters['router/asyncRouters']
            if (!router) {
                const userInfo = await store.dispatch('user/userInfo')
                const accessRoutes = await store.dispatch('router/asyncRouters', userInfo.roleID)
                router.push(accessRoutes)
            }
            next({ ...to, replace: true })
        }
    } else {
        if (whiteList.indexOf(to.name) > -1) {
            next()
        } else {
            next({ name: 'Login', query: { redirect: document.location.hash } })
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
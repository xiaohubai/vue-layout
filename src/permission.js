import router from './router'
import { store } from '@/store/index'
import getPageTitle from '@/utils/page'

const whiteList = ['Login', 'Register']
let asyncRouterFlag = 0
const getRouter = async () => {
    await store.dispatch('user/GetUserInfo')
    const userInfo = store.getters['user/userInfo']
    await store.dispatch('router/GetAsyncRouters', "0")
    const asyncRouters = store.getters['router/asyncRouters']
    asyncRouters.forEach(asyncRouter => {
        router.addRoute(asyncRouter)
    })
}

/* router.beforeEach(async (to, from, next) => {
    const token = store.getters['user/token']
    document.title = getPageTitle(to.meta.title)
    if (token) {
        if (whiteList.indexOf(to.name) > -1) {
            next()
        } else {
            const router = store.getters['router/asyncRouters']
            const userInfo = store.getters['user/userInfo']
            if (!router && !userInfo) {
                await getRouter()
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
 */


router.beforeEach(async (to, from, next) => {
    const token = store.getters['user/token']
    // 在白名单中的判断情况
    document.title = getPageTitle(to.meta.title)
    if (whiteList.indexOf(to.name) > -1) {
        if (token) {
            if (!asyncRouterFlag) {
                asyncRouterFlag++
                await getRouter()
            }
            next({ name: store.getters['user/userInfo'].defaultRouter })
        } else {
            next()
        }
    } else {
        // 不在白名单中并且已经登陆的时候
        if (token) {
            // 添加flag防止多次获取动态路由和栈溢出
            if (!asyncRouterFlag) {
                asyncRouterFlag++
                await getRouter()
                next({ ...to, replace: true })
            } else {
                if (to.matched.length) {
                    next()
                } else {
                    next({ path: '/layout/404' })
                }
            }
        }
        // 不在白名单中并且未登陆的时候
        if (!token) {
            next({
                name: 'Login',
                query: {
                    redirect: document.location.hash
                }
            })
        }
    }
})

import router from './router'
import { store } from '@/store/index'
import getPageTitle from '@/utils/page'

const whiteList = ['Login', 'Register']

router.beforeEach(async (to, from, next) => {
    const token = store.getters['user/token']
    document.title = getPageTitle(to.meta.title)
    if (token) {
        if (whiteList.indexOf(to.name) > -1) {
            next()
        } else {
            const router = store.getters['router/asyncRouters']
            if (!router) {
                next({ name: 'Login', query: { redirect: document.location.hash } })
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

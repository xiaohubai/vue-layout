import  user  from './modules/user'
import login from './modules/login'
import menu from './modules/menu'
export default [
    ...login,
    ...menu,
    ...user,
]

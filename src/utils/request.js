import axios from 'axios' // 引入axios
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'

const service = axios.create({
    baseURL: "",
    timeout: 10000
})

// http request 拦截器
service.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + store.getters['user/token'],
            ...config.headers
        }
        return config
    },
    error => {
        return error
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        if (response.data.code === 0) {
            return response.data
        } else {
            ElMessage({
                showClose: true,
                message: response.data.msg,
                type: 'error'
            })
        }
    },
    error => {
        console.log(error)
        ElMessage({
            showClose: true,
            message: '未知错误',
            type: 'error'
        })
        return error
    }
)

export default service
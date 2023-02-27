import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
const request = axios.create({
    baseURL: '',
    timeout: 3000
})
//请求拦截
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
// 响应拦截
request.interceptors.response.use((config: AxiosResponse) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
export default request
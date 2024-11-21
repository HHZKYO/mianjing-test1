import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from './storage'

const instance = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // 有错误响应，后台正常返回了错误信息
  if (error.response) {
    Toast(error.response.data.message)
  }
  return Promise.reject(error)
})

export default instance

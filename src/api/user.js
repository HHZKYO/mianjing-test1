// 本文件用于存放所有和用户相关的请求函数
import request from '@/utils/request'

// 1、注册用户
export const register = (data) => {
  return request.post('/user/register', data)
}

// 2、用户登录
export const login = (data) => {
  return request.post('/user/login', data)
}

// 获取用户信息
export const getUserInfo = () => {
  return request('/user/currentUser')
}

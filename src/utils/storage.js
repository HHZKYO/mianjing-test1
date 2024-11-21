const KEY = 'vant-mobile-exp-token'

// 获取token（需要返回Token）
export const getToken = () => {
  return localStorage.getItem(KEY)
}

// 设置token
export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken)
}

// 删除token
export const delToken = () => {
  localStorage.removeItem(KEY)
}

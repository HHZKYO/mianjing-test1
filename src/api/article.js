import request from '@/utils/request'
import { getToken } from '@/utils/storage'

export const getArticles = (obj) => {
  const token = getToken()
  return request.get('/interview/query', {
    // 配置get请求参数
    params: {
      current: obj.current || 1,
      pageSize: obj.pageSize || 10,
      sorter: obj.sorter
    },
    // headers请求头，配置token
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

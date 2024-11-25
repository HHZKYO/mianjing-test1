import request from '@/utils/request'

// 面经列表接口
export const getArticles = (obj) => {
  return request.get('/interview/query', {
    // 配置get请求参数
    params: {
      current: obj.current || 1,
      pageSize: obj.pageSize || 10,
      sorter: obj.sorter
    }
  })
}

// 面经详情接口
export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

// 点赞&收藏接口
export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}
export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2 // 收藏
  })
}

// 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 2 // 表示收藏
    }
  })
}

// 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 1 // 表示喜欢
    }
  })
}

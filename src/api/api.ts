import axios from './index'

// console.log(import.meta.env.VITE_BASE_URL, 8999)
// 文章列表
export const getArticleList = (params: object) => {
  return axios.get( '/article/publishArticle', { params })
}
// 文章详情
export const getArticleDetail = (params: any) => {
  return axios.get(`/article/${params.id}`, {})
}
// 一言
export const aWord = (params: object) => {
  return axios.get( 'https://v1.hitokoto.cn/', { params })
}
// 分类列表
export const getClassifyIdList = (params: object) => {
  return axios.get( '/article/articleClassifyCount', { params })
}
// 友链列表
export const getFriendShipList = (params: object) => {
  return axios.get( '/friendShip', { params })
}
// 友链列表单个刷新
export const setRefreshScreenShot = (params: object) => {
  return axios.post( '/refreshScreenShot', params)
}
// 实况天气
export const getCityWeather = (params: object) => {
  return axios.get( '/cityWeather', { params })
}
// export const getArticleList = (params: object) => {
//   return axios.post( '/articleList', params)
// }

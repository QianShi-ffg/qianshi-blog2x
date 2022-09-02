import axios from './index'

// console.log(import.meta.env.VITE_BASE_URL, 8999)
// export const getArticleList = (params: object) => {
//   return axios.request({ method: 'post', url: '/articleList', data: params  })
// }
export const getArticleList = (params: object) => {
  return axios.get( '/publishArticleList', { params })
}
export const aWord = (params: object) => {
  return axios.get( 'https://v1.hitokoto.cn/', { params })
}
// export const getArticleList = (params: object) => {
//   return axios.post( '/articleList', params)
// }
import axios,{ AxiosInstance, AxiosRequestConfig, AxiosResponse }  from 'axios'

export class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.VITE_BASE_URL, timeout: 6000 }

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例，配置为基础配置和我们传递进来的配置
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    // 配置请求拦截器
    this.instance.interceptors.request.use(
      (req: AxiosRequestConfig) => {
        // 一般会请求拦截里面加token，用于后端的验证
        // const token = localStorage.getItem('token') as string
        // if (token) {
        //   req.headers!.Authorization = token;
        // }
        
        return req
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err)
      },
    )
    // 配置响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 直接返回res，当然你也可以只返回res.data
        // 系统如果有自定义code也可以在这里处理
        console.log(res)
        if (res.data.code) {
          if (res.data.code === 200) {
            return res.data.data
          } else {
            alert('系统错误,请稍后再试')
          }
        } else {
          return res.data
        }
        // else {
        //   alert('系统错误,请稍后再试')
        // }
      },
      (err: any) => {
        // 这里用来处理http常见错误，进行全局提示
        let message = '';
        switch (err.response.status) {
          case 400:
            message = '请求错误(400)'
            break;
          case 401:
            message = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break;
          case 403:
            message = '拒绝访问(403)'
            break;
          case 404:
            message = '请求出错(404)'
            break;
          case 408:
            message = '请求超时(408)'
            break;
          case 500:
            message = '服务器错误(500)'
            break;
          case 501:
            message = '服务未实现(501)'
            break;
          case 502:
            message = '网络错误(502)'
            break;
          case 503:
            message = '服务不可用(503)'
            break;
          case 504:
            message = '网络超时(504)'
            break;
          case 505:
            message = 'HTTP版本不受支持(505)'
            break;
          default:
            message = `连接出错(${err.response.status})!`
        }
        // 这里错误消息可以使用全局弹框展示出来
        // 比如element plus 可以使用 ElMessage
        // ElMessage({
        //   showClose: true,
        //   message: `${message}，请检查网络或联系管理员！`,
        //   type: 'error',
        // });
        // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
        return Promise.reject(err.response)
      }
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }
  public get(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.get(url, config)
  }
  public post(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.post(url, config)
  }
  public put(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.put(url, config)
  }
  public delete(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.delete(url, config)
  }
}
// 默认导出Request实例
export default new Request({})
// axios二次封装

// 引入axios
import MyAxios from 'axios'

// 请求拦截器
MyAxios.interceptors.request.use(function (config) {
  // 对请求的数据进行处理

  // 将处理后的数据发送给后端
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
MyAxios.interceptors.response.use(function (response) {
  // 对服务端响应的数据进行处理

  // 将处理后的数据返回给前端
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default MyAxios

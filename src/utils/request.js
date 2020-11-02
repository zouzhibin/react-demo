import Axios from 'axios';
Axios.defaults.timeout = 3000000
Axios.defaults.responseType = "json"

Axios.interceptors.request.use((config) => {

  return config
})
// 响应拦截
Axios.interceptors.response.use(
  (response) => {
    // removeCancelDone(response)
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
const fetch = async (options) => {
  console.log(options)
  return new Promise((resolve, reject) => {
    let { method, url, params } = options

    params = params || {}
    method = method || "post"
    if (method.toLowerCase() === "get") {
      params = { params }
    }
    Axios[method.toLowerCase()](url, params, options.configs).then(
      async (response) => {
        // 代表token过期
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export default fetch

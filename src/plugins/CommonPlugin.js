/**
 * 通用插件js库,例如常见的网络请求访问
 *
 */
export default {
  install: function (Vue, options) {
    /**
     * 向后台发送网络请求
     * @param way 方式 get/post等
     * @param url 请求地址
     * @param params 携带的参数
     * @param 回调函数
     */
    Vue.prototype.sendMessage = function (way, url, params, fn) {
      if (way === 'get') {
        this.axios.get(url, {
          params: params,
        }).then(response => {
          fn(response.data)
        }).catch(error => {
          fn(error)
        }).finally(() => {
          return false
        })
      } else {
        this.axios({
          method: 'post',
          url:url,
          data: params
        }).then(response => {
          fn(response.data)
        }).catch(error => {
          fn(error)
        }).finally(() => {
          return false
        })
      }
    }
  }
}

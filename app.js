//app.js
import { Base } from './utils/base.js'
const base = new Base()

App({
  onLaunch: function () {
    wx.removeStorageSync('token');

  },

  login(options) {
    wx.login({
      success: res => {
        options.data ? options.data.code = res.code : options.data = { code: res.code }
        let params = {
          url: '/login',
          method: 'POST',
          data: options.data,
          success: res => options.success && options.success(res.data),
          fail: err => options.fail && options.fail(err)
        }
        base.request(params)
      }
    })
  },

  globalData: {
    userInfo: null
  }
})
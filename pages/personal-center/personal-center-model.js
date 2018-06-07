import { Base } from '../../utils/base.js'

class PersonalCenter extends Base {
  constructor() {
    super()
  }

  isBindPhone(callback) {
    let params = {
      url: '/users/self/is_bind_phone',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  bindPhone(data, callback) {
    let params = {
      url: '/users/self/bind_phone',
      method: 'PUT',
      data,
      success: res => callback && callback(res.data),
      fail: err => wx.showToast({
        title: '激活失败，请稍后重试',
        icon: 'none'
      })
    }
    this.request(params)
  }
}

export { PersonalCenter }
import { Base } from '../../utils/base.js'

class ConfirmApply extends Base {
  constructor() {
    super()
  }

  getMyAddress(callback) {
    let params = {
      url: '/users/self/address',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  storeAddress(data, callback) {
    let params = {
      url: '/addresses',
      method: 'POST',
      data,
      success: res => callback && callback(res)
    }
    this.request(params)
  }
}

export { ConfirmApply }
import { Base } from '../../utils/base.js'

class ApplyPresent extends Base {
  constructor() {
    super()
  }

  getReceivable(callback) {
    let params = {
      url: '/users/self/receivable',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  storeReceivable(data, callback) {
    let params = {
      url: '/receivables',
      method: 'POST',
      data,
      success: res => callback && callback(res)
    }
    this.request(params)
  }

  storeCash(number, callback) {
    let params = {
      url: '/cashes',
      method: 'POST',
      data: { number },
      success: res => callback && callback(res)
    }
    this.request(params)
  }
}

export { ApplyPresent }
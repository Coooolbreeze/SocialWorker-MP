import { Base } from '../../utils/base.js'

class HealthRecords extends Base {
  constructor() {
    super()
  }

  getMyInfo(callback) {
    let params = {
      url: '/users/self',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  updateMyInfo(data, callback) {
    let params = {
      url: '/users/self',
      method: 'PUT',
      data,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { HealthRecords }
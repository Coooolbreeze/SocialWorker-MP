import { Base } from '../../utils/base.js'

class PublicList extends Base {
  constructor() {
    super()
  }

  getOrders(callback) {
    let params = {
      url: '/users/self/orders',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { PublicList }
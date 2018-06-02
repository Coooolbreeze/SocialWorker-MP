import { Base } from '../../utils/base.js'

class ChooseService extends Base {
  constructor() {
    super()
  }

  getServiceList(callback) {
    let params = {
      url: '/services',
      success: res => callback && callback(res.data.data)
    }
    this.request(params)
  }

  getGroupId(uid, callback) {
    let params = {
      url: '/group_id/' + uid,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getPreOrder(data, callback) {
    let params = {
      url: '/service_orders',
      method: 'POST',
      data,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getPayment(order_no, callback) {
    let params = {
      url: '/payment/wechat_pay',
      method: 'POST',
      data: { order_no, type: 2 },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { ChooseService }
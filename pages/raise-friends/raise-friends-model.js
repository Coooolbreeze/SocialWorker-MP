import { Base } from '../../utils/base.js'

class RaiseFriends extends Base {
  constructor() {
    super()
  }

  getEquipmentOrder(id, callback) {
    let params = {
      url: '/equipment_orders/' + id,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getPreOrder(id, callback) {
    let params = {
      url: '/funding_orders',
      method: 'POST',
      data: { order_id: id },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  isPaid(id, callback) {
    let params = {
      url: '/equipment_orders/is_paid/' + id,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getSelfPayment(order_no, callback) {
    let params = {
      url: '/payment/wechat_pay',
      method: 'POST',
      data: { order_no, type: 1 },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getPayment(order_no, callback) {
    let params = {
      url: '/payment/wechat_pay',
      method: 'POST',
      data: { order_no, type: 4 },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { RaiseFriends }
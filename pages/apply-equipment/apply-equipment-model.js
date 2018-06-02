import { Base } from '../../utils/base.js'

class ApplyEquipment extends Base {
  constructor() {
    super()
  }

  getList(callback) {
    let params = {
      url: '/equipment_categories',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getPreOrder(ids, callback) {
    let params = {
      url: '/equipment_orders',
      method: 'POST',
      data: { ids },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  publicOrder(ids, callback) {
    let params = {
      url: '/equipment_orders',
      method: 'POST',
      data: { ids, type: 2 },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  getPayment(order_no, callback) {
    let params = {
      url: '/payment/wechat_pay',
      method: 'POST',
      data: { order_no, type: 1 },
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { ApplyEquipment }
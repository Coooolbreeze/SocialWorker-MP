import { Base } from '../../utils/base.js'

class ServiceList extends Base {
  constructor() {
    super()
  }

  getServiceList(callback) {
    let params = {
      url: '/users/self/services',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  confirmationReceivables(id, callback) {
    let params = {
      url: '/service_orders/' + id,
      method: 'PUT',
      success: res => callback && callback(res)
    }
    this.request(params)
  }
//提交结果的
  entryResults(id, results, callack) {
    let params = {
      url: '/service_orders/' + id,
      method: 'PUT',
      data: { detection_result: results },
      success: res => callack && callack(res)
    }
    this.request(params)
  }
}

export { ServiceList }
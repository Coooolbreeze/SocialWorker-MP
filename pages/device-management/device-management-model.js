import { Base } from '../../utils/base.js'

class DeviceManagement extends Base {
  constructor() {
    super()
  }

  getBindingsDevice(callback) {
    let params = {
      url: '/users/self/equipment',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }

  bind(serialNo, callback) {
    let params = {
      url: '/equipment/bind',
      method: 'PUT',
      data: { serial_no: serialNo },
      success: res => callback && callback(res),
      fail: err => wx.showToast({
        title: err.message,
        icon: 'none'
      })
    }
    this.request(params)
  }

  unbind(serialNo, callback) {
    let params = {
      url: '/equipment/unbind',
      method: 'PUT',
      data: { serial_no: serialNo },
      success: res => callback && callback(res),
      fail: err => wx.showToast({
        title: err.message,
        icon: 'none'
      })
    }
    this.request(params)
  }
}

export { DeviceManagement }
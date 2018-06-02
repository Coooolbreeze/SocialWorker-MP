import { Config } from '../utils/config.js'

class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl
  }

  request(params) {
    wx.request({
      url: this.baseRequestUrl + params.url,
      data: params.data,
      method: params.method || 'GET',
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: res => {
        if (Math.floor(res.statusCode / 100) != 2) {
          console.log(res.data)
          params.fail && params.fail(res.data)
        }
        else {
          params.success && params.success(res.data)
        }
      },
      fail: error => {
        console.log(error);
        params.fail && params.fail(error);
      }
    });
  }

  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }
}

export { Base };
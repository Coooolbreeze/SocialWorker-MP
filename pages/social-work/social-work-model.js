import { Base } from '../../utils/base.js'

class SocialWork extends Base {
  constructor() {
    super()
  }

  getAsset(callback) {
    let params = {
      url: '/users/self/asset',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { SocialWork }
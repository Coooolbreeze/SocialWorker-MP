import { Base } from '../../utils/base.js'

class HealthAssess extends Base {
  constructor() {
    super()
  }

  getStatus (callback) {
    let params = {
      url: '/users/self/health',
      success: res => callback && callback(res)
    };

    this.request(params);
  }
}

export { HealthAssess }

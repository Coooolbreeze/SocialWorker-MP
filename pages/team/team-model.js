import { Base } from '../../utils/base.js'

class Team extends Base {
  constructor() {
    super()
  }

  getGroup(callback) {
    let params = {
      url: '/users/self/groups',
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { Team }
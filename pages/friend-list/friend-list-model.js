import { Base } from '../../utils/base.js'

class FriendList extends Base {
  constructor() {
    super()
  }

  getFriendList(id, callback) {
    let params = {
      url: '/groups/' + id,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { FriendList }
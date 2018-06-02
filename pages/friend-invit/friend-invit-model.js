import { Base } from '../../utils/base.js'

class FriendInvit extends Base {
  constructor() {
    super()
  }

  getInvitInfo(id, callback) {
    let params = {
      url: '/invite_info/' + id,
      success: res => callback && callback(res.data)
    }
    this.request(params)
  }
}

export { FriendInvit }
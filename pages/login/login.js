Page({
  data: {
    inviter: null,
    funding: false
  },

  onLoad: function (options) {
    let inviter = options.inviter
    let funding = options.funding
    if (inviter) this.setData({ inviter })
    if (funding) this.setData({ funding })
  },

  bindGetUserInfo: function (e) {
    let userinfo = e.detail.userInfo

    getApp().login({
      data: {
        nickname: userinfo.nickName,
        avatar: userinfo.avatarUrl,
        sex: userinfo.gender,
        inviter: this.data.inviter
      },
      success: res => {
        wx.setStorageSync('token', res.access_token)
        if (this.data.funding) {
          wx.navigateBack()
        } else {
          wx.switchTab({
            url: '/pages/personal-center/personal-center',
          })
        }
      }
    })
  }
})
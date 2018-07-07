Page({
  data: {
    inviter: null,
    funding: false
  },

  onLoad: function(options) {
    let inviter = options.inviter
    let funding = options.funding
    if (inviter) this.setData({
      inviter
    })
    if (funding) this.setData({
      funding
    })
  },

  bindGetUserInfo: function(e) {
    let userinfo = e.detail.userInfo
    wx.showLoading({
      title: '登录中...',
    })
    getApp().login({
      data: {
        nickname: userinfo.nickName,
        avatar: userinfo.avatarUrl,
        sex: userinfo.gender,
        inviter: this.data.inviter
      },
      success: res => {
        wx.hideLoading()
        wx.setStorageSync('token', res.access_token)
        if (this.data.funding) {
          wx.navigateBack()
        } else {
          wx.switchTab({
            url: '/pages/personal-center/personal-center',
          })
        }
      },
      fail: err => {
        wx.hideLoading()
        wx.showToast({
          title: '登录失败,请重试',
          icon: 'none'
        })
        setTimeout(_ => {
          wx.navigateTo({
            url: `/pages/error/error?code=${err.statusCode}&error=${JSON.stringify(err)}`
          })
        }, '1000')
      }
    })
  }
})
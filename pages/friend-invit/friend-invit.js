import { FriendInvit } from './friend-invit-model.js'
const friendInvit = new FriendInvit()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null,
    id: null,
    invitInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.type ?
      this.setData({ type: options.type }) :
      wx.removeStorageSync('token')

    friendInvit.getInvitInfo(options.id, res => {
      this.setData({
        type: options.type ? options.type : null,
        id: options.id,
        invitInfo: res
      })
    })
  },

  bindGetUserInfo: function (e) {
    let userinfo = e.detail.userInfo

    getApp().login({
      data: {
        nickname: userinfo.nickName,
        avatar: userinfo.avatarUrl,
        sex: userinfo.gender,
        inviter: this.data.id
      },
      success: res => {
        wx.setStorageSync('token', res.access_token)
        wx.switchTab({
          // url: '/pages/index/index'
          url:'/pages/personal-center/personal-center'
        })
      }
    })
  },

  onShareAppMessage: function (res) {
    return {
      title: '天天血压',
      path: '/pages/friend-invit/friend-invit?id=' + this.data.id
    }
  }
})
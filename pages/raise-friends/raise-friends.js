import { RaiseFriends } from './raise-friends-model.js'
const raiseFriends = new RaiseFriends()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    type: null,
    info: null,
    isPaid: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeStorageSync('token');

    this.setData({
      id: options.id || decodeURIComponent(options.scene),
      type: options.type
    })

    raiseFriends.getEquipmentOrder(this.data.id, res => {
      this.setData({ info: res })
      this.login()
    })
  },

  login: function () {
    getApp().login({
      success: res => {
        wx.setStorageSync('token', res.access_token)
        raiseFriends.isPaid(this.data.id, res => this.setData({ isPaid: res }))
      },
      fail: err => wx.navigateTo({
        url: `/pages/login/login?inviter=${this.data.info.group_id}&funding=true`,
      })
    })
  },

  onShow: function () {
    if (!wx.getStorageSync('token') && this.data.info) {
      wx.navigateTo({
        url: `/pages/login/login?inviter=${this.data.info.group_id}&funding=true`,
      })
    }
  },

  selfPay: function () {
    raiseFriends.getSelfPayment(this.data.info.order_no, res => {
      wx.requestPayment({
        timeStamp: res.timestamp,
        nonceStr: res.nonceStr,
        package: res.package,
        signType: res.signType,
        paySign: res.paySign,
        success: res => {
          // 支付成功
          wx.redirectTo({
            url: '/pages/confirm-apply/confirm-apply?from=equipment',
          })
        }
      })
    })
  },

  toPay: function () {
    wx.showLoading({
      title: '提交中',
      mask: true
    })

    raiseFriends.getPreOrder(this.data.id, res => {
      wx.hideLoading()

      raiseFriends.getPayment(res.order_no, res => {
        wx.requestPayment({
          timeStamp: res.timestamp,
          nonceStr: res.nonceStr,
          package: res.package,
          signType: res.signType,
          paySign: res.paySign,
          success: res => {
            // 支付成功
            this.setData({ isPaid: true })
          }
        })
      })
    })
  }
})
import { ChooseService } from './choose-service-model.js'
const chooseService = new ChooseService()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: [],
    checkId: null,
    uid: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let uid = decodeURIComponent(options.scene)

    chooseService.getGroupId(uid, res => {
      let inviter = res
      getApp().login({
        success: res => {
          wx.setStorageSync('token', res.access_token)
          chooseService.getServiceList(res => {
            res.map(res => res.checked = false)
            this.setData({ allGoodsFilte: res, uid })
          })
        },
        fail: err => wx.redirectTo({
          url: '/pages/login/login?inviter=' + inviter,
        })
      })
    })
  },

  serviceValChange: function (e) {
    let allGoodsFilte = this.data.allGoodsFilte
    let checkId = e.detail.value

    allGoodsFilte.map(res => res.id == checkId ? res.checked = true : res.checked = false)

    this.setData({ allGoodsFilte, checkId })
  },

  wxPay: function (e) {
    if (!this.data.checkId) {
      wx.showToast({
        title: '请选择服务',
        icon: 'none'
      })
      return
    }

    wx.showLoading({ title: '提交中...' })

    let userinfo = e.detail.userInfo
    this.login(userinfo, _ => {
      chooseService.getPreOrder({
        inspector_id: this.data.uid,
        service_id: this.data.checkId
      }, res => {
        wx.hideLoading()
        chooseService.getPayment(res.order_no, res => {
          wx.requestPayment({
            timeStamp: res.timestamp,
            nonceStr: res.nonceStr,
            package: res.package,
            signType: res.signType,
            paySign: res.paySign,
            success: res => {
              // 支付成功
              wx.showModal({ title: '支付成功' })
            }
          })
        })
      })
    })
  },

  cash: function (e) {
    if (!this.data.checkId) {
      wx.showToast({
        title: '请选择服务',
        icon: 'none'
      })
      return
    }

    wx.showLoading({ title: '提交中...' })

    let userinfo = e.detail.userInfo
    this.login(userinfo, _ => {
      chooseService.getPreOrder({
        inspector_id: this.data.uid,
        service_id: this.data.checkId,
        cash: true
      }, res => {
        wx.hideLoading()
        wx.showModal({
          title: '提交成功',
          showCancel: false,
          success: res => wx.switchTab({url: '/pages/personal-center/personal-center'})
        })
      })
    })
  },

  login: function (userinfo, callback) {
    chooseService.getGroupId(this.data.uid, res => {
      getApp().login({
        data: {
          nickname: userinfo.nickName,
          avatar: userinfo.avatarUrl,
          sex: userinfo.gender,
          inviter: res
        },
        success: res => {
          wx.setStorageSync('token', res.access_token)
          callback && callback()
        }
      })
    })
  }
})
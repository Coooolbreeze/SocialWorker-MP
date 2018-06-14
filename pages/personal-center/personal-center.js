// pages/personal-center/personal-center.js
import { PersonalCenter } from './personal-center-model.js'
const personalCenter = new PersonalCenter()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBindPhone: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.isBindPhone();
    
  },

  onHealthTap: function (event) {
    wx.navigateTo({
      url: '../health-center/health-center',
    })
  },
  onHelpTap: function (event) {
    wx.navigateTo({
      url: '../help-center/help-center',
    })
  },
  //跳转健康档案
  onHealthasseTap: function (event) {
    // wx.showToast({
    //   title: '暂未开放',
    //   icon: 'none'
    // })
    // return
    wx.navigateTo({
      url: '../health-assess/health-assess',
    })
  },
  onSocialTap: function () {
    wx.navigateTo({
      url: '../social-work/social-work',
    })
  },
  onCarepublicTap: function () {
    wx.navigateTo({
      url: '../caring-public/caring-public',
    })
  },
  onAboutTap: function () {
    wx.navigateTo({
      url: '../about/about',
    })
  },

  isBindPhone: function () {
    personalCenter.isBindPhone(res => this.setData({ isBindPhone: res }))
  },

  getPhoneNumber: function (e) {
    let data = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv
    }
    personalCenter.bindPhone(data, res => {
      wx.showToast({
        title: '激活成功',
        icon: 'none'
      })
      this.setData({ isBindPhone: true })
    })
  }
})
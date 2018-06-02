// pages/personal-center/personal-center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // onHealthasseTap: function (event) {
  //   wx.navigateTo({
  //     url: '../health-assess/health-assess',
  //   })
  // },
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
  }
})
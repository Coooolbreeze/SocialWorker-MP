// pages/public-share-friend/public-share-friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    code: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ id: options.id, code: options.code })
  },

  onShareAppMessage: function () {
    return {
      title: '天天血压',
      path: '/pages/raise-friends/raise-friends?id=' + this.data.id
    }
  },

  onPublicshareTap: function () {
    wx.navigateTo({
      url: '../public-share/public-share?code=' + this.data.code,
    })
  },
})
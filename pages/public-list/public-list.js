import { PublicList } from './public-list-model.js'
const publicList = new PublicList()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    publicList.getOrders(res => this.setData({ list: res }))
  },

  ondeviceTap: function () {
    wx.navigateTo({
      url: '/pages/apply-equipment/apply-equipment',
    })
  },
})
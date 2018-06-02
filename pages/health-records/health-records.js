import { HealthRecords } from './health-records-model.js'
const healthRecords = new HealthRecords()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow: function () {
    healthRecords.getMyInfo(res => this.setData({ info: res }))
  },

  onInfoTap: function () {
    wx.navigateTo({
      url: `../personal-info/personal-info?name=${this.data.info.name}&phone=${this.data.info.phone}`,
    })
  }
})
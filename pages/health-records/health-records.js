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
      url: `../personal-info/personal-info?name=${this.data.info.name}&phone=${this.data.info.phone}&sex=${this.data.info.sex}&age=${this.data.info.age}&education=${this.data.info.education}&province=${this.data.info.province}&city=${this.data.info.city}&wants=${this.data.info.wants}`,
    })
  }
})
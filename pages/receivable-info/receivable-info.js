import { ApplyPresent } from '../apply-present/apply-present-model.js'
const applyPresent = new ApplyPresent()

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
    this.setData({
      info: JSON.parse(options.info)
    })
  },

  onNameInput: function (e) {
    this.data.info.name = e.detail.value;
    this.setData({
      info: this.data.info
    })
  },

  onCardInput: function (e) {
    this.data.info.id_card_no = e.detail.value;
    this.setData({
      info: this.data.info
    })
  },

  onApplypresentTap: function () {
    // 验证data.info.name && data.info.id_card_no

    applyPresent.storeReceivable(this.data.info, res => {
      wx.navigateBack()
    })
  }
})
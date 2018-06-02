import { SocialWork } from './social-work-model.js'
const socialWork = new SocialWork()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //页面配置   
    winWidth: 0,
    winHeight: 0,
    incomeActive: true,
    asset: null
  },
  //  tab选项卡头
  onIncomeTap: function () {
    this.setData({
      incomeActive: true
    })
  },
  onCashesTap: function () {
    this.setData({
      incomeActive: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    socialWork.getAsset(res => {
      this.setData({
        asset: res
      })
    })

    // 获取系统信息 
    wx.getSystemInfo({
      success: res => {
        this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  onApplypresentTap: function () {
    wx.navigateTo({
      url: '../apply-present/apply-present?number=' + this.data.asset.available,
    })
  },

  onSocialdescripTap: function () {
    wx.navigateTo({
      url: '../social-descrip/social-descrip',
    })
  },
})
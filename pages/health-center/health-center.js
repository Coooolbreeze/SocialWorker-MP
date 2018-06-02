// pages/health-center/health-center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onDeviceTap:function(event){
    wx.navigateTo({
      url: '../device-management/device-management',
    })
  },
  onServiceTap:function(){
    wx.navigateTo({
      url: '../service-list/service-list',
    })
  },
  //跳转申请设备
  onAppleequipmentTap:function(){
    wx.navigateTo({
      url: '../public-list/public-list',
    })
  },
  servicesTap:function(){
    wx.navigateTo({
      url: '../service-description/service-description',
    })
  },
  /**
   * 弹出层函数
   */
  //出现
  show: function () {
    this.setData({ flag: false })
  },
  //消失
  hide: function () {
    this.setData({ flag: true })
  },
 
})
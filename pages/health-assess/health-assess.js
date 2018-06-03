// pages/health-assess/health-assess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onRecordsTap:function(){
    wx.navigateTo({
      url: '../health-records/health-records',
    })
  },
  //跳转选标签
  onselectlabelTap:function(){
    wx.navigateTo({
      url: '../selection-label/selection-label',
    })
  },
  //跳转选标签2
  onselectlabelTap2: function () {
    wx.navigateTo({
      url: '../selection-label2/selection-label2',
    })
  },
  //跳转选标签3
  onselectlabelTap3: function () {
    wx.navigateTo({
      url: '../selection-label3/selection-label3',
    })
  },
  //跳转选标签4
  onselectlabelTap4: function () {
    wx.navigateTo({
      url: '../selection-label4/selection-label4',
    })
  },
  //跳转选标签5
  onselectlabelTap5: function () {
    wx.navigateTo({
      url: '../selection-label5/selection-label5',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
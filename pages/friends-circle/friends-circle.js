// pages/friends-circle/friends-circle.js
let qrCode = ('../../utils/qrCode.js');
console.log(qrCode)
// var tcity = require("../../utils/qrCode.js");
// var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrStr: 'https://worker.coooolbreeze.com/api/login',
    canvasId: "qrcCanvas",//需要绘画的元素
  },
  //适配不同屏幕大小的canvas  
  setCanvasSize() {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750 / 686;//不同屏幕下canvas的适配比例；设计稿是750宽  
      var width = res.windowWidth / scale;
      var height = width;//canvas画布为正方形  
      size.w = width;
      size.h = height;
    } catch (e) {
      // Do something when catch error  
      console.log("获取设备信息失败" + e);
    }
    return size;  //返回大小
  },

  createQrCode(str, canvasId, cavW, cavH) {
    //调用插件中的draw方法，绘制二维码图片  
    qrCode.api.draw(str, canvasId, cavW, cavH);

  },

  //获取input输入的值  
  onQrcStrBlur(e) {
    this.setData({ qrcStr: e.detail.value });
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
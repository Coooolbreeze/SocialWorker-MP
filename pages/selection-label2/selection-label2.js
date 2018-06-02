// pages/selection-label/selection-label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: [
      { name: '务农', value: '0', checked: true },
      { name: '工人', value: '1', checked: false },
      { name: '企业职员', value: '2', checked: false },
      { name: '管理人员', value: '3', checked: false },
      { name: '政府公务员', value: '4', checked: false },
      { name: '军人', value: '5', checked: false },
      { name: '企业家', value: '6', checked: false },
      { name: '自由职业', value: '7', checked: false },
    ],
  },
  serviceValChange: function (e) {
    var allGoodsFilte = this.data.allGoodsFilte;
    var checkArr = e.detail.value;
    for (var i = 0; i < allGoodsFilte.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        allGoodsFilte[i].checked = true;
      } else {
        allGoodsFilte[i].checked = false;
      }
    }
    this.setData({
      allGoodsFilte: allGoodsFilte
    })
  },
  //返回健康评估
  onHealthassessTap: function () {
    wx.navigateTo({
      url: '../health-assess/health-assess',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


})
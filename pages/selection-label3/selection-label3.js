// pages/selection-label/selection-label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: [
      { name: '高血压', value: '0', checked: true },
      { name: '糖尿病', value: '1', checked: false },
      { name: '血脂异常', value: '2', checked: false },
      { name: '肥胖超重', value: '3', checked: false },
      { name: '冠心病', value: '4', checked: false },
      { name: '肿瘤', value: '5', checked: false },
      { name: '哮喘', value: '6', checked: false },
      { name: '抑郁症', value: '7', checked: false },
      { name: '骨质疏松', value: '8', checked: false },
      { name: '都没有', value: '9', checked: false },
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
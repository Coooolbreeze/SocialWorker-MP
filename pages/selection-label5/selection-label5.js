// pages/selection-label/selection-label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: [
      { name: '血压高', value: '0', checked: true },
      { name: '血糖高', value: '1', checked: false },
      { name: '血脂高', value: '2', checked: false },
      { name: '嗜睡', value: '3', checked: false },
      { name: '神经衰弱失眠', value: '4', checked: false },
      { name: '口苦', value: '5', checked: false },
      { name: '心悸', value: '6', checked: false },
      { name: '焦躁易怒', value: '7', checked: false },
      { name: '容易疲劳', value: '8', checked: false },
      { name: '头晕头痛', value: '9', checked: false },
      { name: '肥胖', value: '10', checked: false },
      { name: '关节僵痛', value: '11', checked: false },
      { name: '易过敏', value: '12', checked: false },
      { name: '抑郁', value: '13', checked: false },
      { name: '话语不清', value: '14', checked: false },
      { name: '手抖', value: '15', checked: false },
      { name: '孕期', value: '16', checked: false },
      { name: '术后恢复', value: '17', checked: false },
      { name: '更年期', value: '18', checked: false },
      { name: '都没有', value: '19', checked: false },
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
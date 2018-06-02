// pages/selection-label/selection-label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: [
      { name: '吸烟', value: '0', checked: true },
      { name: '经常饮酒', value: '1', checked: false },
      { name: '缺乏锻炼', value: '2', checked: false },
      { name: '饮食过量', value: '3', checked: false },
      { name: '高盐口重', value: '4', checked: false },
      { name: '经常熬夜', value: '5', checked: false },
      { name: '久坐', value: '6', checked: false },
      { name:'减肥' ,value:'7' ,checked:false},
      { name: '自由职业', value: '8', checked: false },
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
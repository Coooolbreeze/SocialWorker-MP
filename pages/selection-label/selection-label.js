// pages/selection-label/selection-label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: [
      { name: '高血压', value: '0', checked: true },
      { name: '糖尿病', value: '1', checked: false },
      { name: '冠心病', value: '2', checked: false },
      { name: '脑卒中', value: '3', checked: false },
      { name: '静脉血栓', value: '4', checked: false },
      { name: '血脂异常', value: '5', checked: false },
      { name: '肾炎', value: '6', checked: false },
      { name: '甲亢', value: '7', checked: false },
      { name: '肝炎', value: '8', checked: false },
      { name: '结核病', value: '9', checked: false },
      { name: '慢性气管炎', value: '10', checked: false },
      { name: '哮喘', value: '11', checked: false },
      { name: '胃溃疡', value: '12', checked: false },
      { name: '关节炎', value: '13', checked: false },
      { name: '痛风', value: '14', checked: true },
      { name: '颈椎病', value: '15', checked: false },
      { name: '腰间盘突出', value: '16', checked: false },
      { name: '骨刺', value: '17', checked: false },
      { name: '骨质疏松', value: '18', checked: false },
      { name: '贫血', value: '19', checked: false },
      { name: '肥胖超重', value: '20', checked: false },
      { name: '抑郁症', value: '21', checked: false },
      { name: '前列腺炎', value: '22', checked: false },
      { name: '痔疮', value: '23', checked: false },
      { name: '湿疹', value: '24', checked: false },
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
  onHealthassessTap:function(){
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
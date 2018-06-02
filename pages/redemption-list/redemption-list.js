// pages/redemption-list/redemption-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var redemption =[
      {
        productUrl:"/images/product-pic2.png",
        title:"rng小狗",
        price:"134",
        pricejia:"29",
        time:"2020-5-2013:14",
        num:"3141592653589793162"
      },
      {
        productUrl: "/images/product-pic3.png",
        title: "奥斯卡的美称奥斯卡的美称奥斯卡的美称奥斯卡的美称",
        price: "520",
        pricejia: "29",
        time: "2022-5-2013:14",
        num: "3141592653589793162"
      },
      {
        productUrl: "/images/product-pic2.png",
        title: "rng小狗啊实打实大",
        price: "1314",
        pricejia: "29",
        time: "2023-5-2013:14",
        num: "3141592653589793162"
      },
    ]
    this.setData({
      redemption: redemption
    });  
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
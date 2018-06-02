//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentTab: 0,
    navScrollLeft: 0,
    navData: [{ text: '生活日用' }, { text: '家居服饰' }, { text: '健康保健' }, { text: '酒水饮料' }, { text: '干活首页' }, { text: '首页' },],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    flag: true
  },
  onLoad: function (options) {
    let scene = decodeURIComponent(options.scene)

    getApp().login({
      success: res => wx.setStorageSync('token', res.access_token),
      fail: _ => {
        let url = (scene == 'undefined' ? '/pages/login/login' : '/pages/login/login?inviter=' + scene)
        wx.redirectTo({ url })
      }
    })
  },
  onShow: function () {
    this.modalcnt();
  },
  //弹出层函数
  modalcnt: function () {
    wx.showToast({
      title: '健康小店尚未开通',
      icon: 'none'
    })
  },
  //弹出层函数
  //出现
  shows: function () {
    this.setData({ flag: false })
  },
  //消失
  hide: function () {
    this.setData({ flag: true })
  },
  //尚未开通
  // tome: function(res){
  //   wx.redirectTo({
  //     url: '../personal-center/personal-center',
  //   })
  // },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  //跳转产品详情页
  onProductdelTap: function () {
    wx.navigateTo({
      url: '../product-details/product-details',
    })
  },
  //跳转兑换记录列表
  onRedemptionlistTap: function () {
    wx.navigateTo({
      url: '../redemption-list/redemption-list',
    })
  },
  //跳转社工券说明
  onSocialdesTap: function () {
    wx.navigateTo({
      url: '../social-descrip/social-descrip',
    })
  },
})

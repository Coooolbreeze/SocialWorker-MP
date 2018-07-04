import { ApplyPresent } from './apply-present-model.js'
const applyPresent = new ApplyPresent()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'yes', value: '我已同意', checked: true },
    ],
    receivable: null,
    asset: 0,
    count: 0,
    tax: 0,
    final: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      asset: options.number
    })
  },

  onShow: function () {
    applyPresent.getReceivable(res => {
      this.setData({
        receivable: res
      })
    })
  },

  onCashInput: function (e) {
    let count = (e.detail.value - this.data.asset > 0) ? this.data.asset : e.detail.value,
      tax = Math.round(this.taxRate(count)),
      final = count - tax;

    this.setData({ count, tax, final })

    return count
  },

  useProtocol: function() {
    wx.navigateTo({
      url: '../use-protocol/use-protocol',
    })
  },

  onPresentreceiptTap: function () {
    if (!this.data.receivable.name) {
      wx.showToast({
        title: '请填写收款人信息',
        icon: 'none'
      })
      return
    }

    if (this.data.count < 1) {
      wx.showToast({
        title: '最少1',
        icon: 'none'
      })
      return
    }

    applyPresent.storeCash(this.data.count, res => {
      wx.reLaunch({
        url: '../present-receipt/present-receipt',
      })
    });
  },

  onReceivableinfoTap: function () {
    wx.navigateTo({
      url: '../receivable-info/receivable-info?info=' + JSON.stringify(this.data.receivable),
    })
  },

  taxRate(x) {
    if (x <= 800) return 0;
    if (x > 800 && x < 4000) return (x - 800) * 0.2;
    if (x >= 4000 && x < 21000) return (x - x * 0.2) * 0.2;
    if (x >= 21000 && x < 49500) return (x - x * 0.2) * 0.3 - 2000;
    if (x >= 49500) return (x - x * 0.2) * 0.4 - 7000;
  }
})
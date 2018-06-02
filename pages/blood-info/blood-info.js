import { ServiceList } from '../service-list/service-list-model.js'
const serviceList = new ServiceList()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    highpressure: null,
    lowpressure: null
  },

  onLoad: function (options) {
    this.setData({ id: options.id })
  },

  onHighpressureTap: function (e) {
    this.setData({ highpressure: e.detail.value })
  },

  onLowpressureTap: function (e) {
    this.setData({ lowpressure: e.detail.value })
  },

  onServicelistTap: function () {
    let high = this.data.highpressure
    let low = this.data.lowpressure

    if (!high || !low) {
      wx.showToast({
        title: '请输入完整数据',
        icon: 'none'
      })
      return
    }

    let results = `高压：${high}；低压：${low}；`;

    serviceList.entryResults(this.data.id, results, res => { wx.navigateBack() })
  }
})
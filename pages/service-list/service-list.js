import { ServiceList } from './service-list-model.js'
const serviceList = new ServiceList()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    commingActive: true,
    services: null,
    showServices: null
  },

  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  onShow: function () {
    serviceList.getServiceList(res => {
      this.setData({
        services: res,
        showServices: res.filter(service => this.data.commingActive ? service.status !== '已完成' : service.status === '已完成')
      })
    })
  },

  onCommingTap: function () {
    this.setData({
      commingActive: true,
      showServices: this.data.services.filter(service => service.status !== '已完成')
    })
  },

  onCompleteTap: function () {
    this.setData({
      commingActive: false,
      showServices: this.data.services.filter(service => service.status === '已完成')
    })
  },

  onSureTap: function (e) {
    let id = serviceList.getDataSet(e, 'id')

    wx.showModal({
      title: '是否确认?',
      success: res => res.confirm && serviceList.confirmationReceivables(id, _ => this.setData({
        showServices: this.data.showServices.map(service => {
          service.id === id && (service.status = '已收款')
          return service
        })
      }))
    })
  },

  onBloodTap: function (e) {
    wx.navigateTo({
      url: '../blood-info/blood-info?id=' + serviceList.getDataSet(e, 'id')
    })
  },
})
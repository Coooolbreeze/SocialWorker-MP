import { DeviceManagement } from './device-management-model.js'
const deviceManagement = new DeviceManagement()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    serialNo: '',
    device: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBindingsDevice()
  },

  getBindingsDevice: function () {
    deviceManagement.getBindingsDevice(res => this.setData({
      device: res
    }))
  },

  click: function () {
    wx.scanCode({
      success: res => {
        this.shows();
        this.setData({
          serialNo: res.result
        })
      }
    })
  },

  serialNoInput: function (event) {
    this.setData({
      serialNo: event.detail.value
    })
  },

  bind: function () {
    deviceManagement.bind(this.data.serialNo, res => {
      this.getBindingsDevice()
      this.setData({
        flag: true
      })
      wx.showToast({
        title: '绑定成功',
      })
    });
  },

  unbind: function (event) {
    let serialNo = deviceManagement.getDataSet(event, 'serial_no')
    wx.showModal({
      title: '确定解绑吗？',
      content: serialNo,
      success: res => {
        res.confirm && deviceManagement.unbind(serialNo, res => {
          this.getBindingsDevice()
          wx.showToast({
            title: '解绑成功',
          })
        });
      }
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

  onApplyTap: function (event) {
    wx.navigateTo({
      url: '../apply-equipment/apply-equipment',
    })
  },
})
import { ServiceList } from '../service-list/service-list-model.js'
const serviceList = new ServiceList()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    highpressure: null,
    lowpressure: null,
    parameter: [{ id: 1, name: '饭前' }, { id: 2, name: '饭后' }],
    parameter2: [{ id: 1, name: '男性' }, { id: 2, name: '女性' }],
    parameter3: [{ id: 1, name: '小于60周岁' }, { id: 2, name: '60周岁以上' }],
  },

  onLoad: function (options) {
    this.setData({ id: options.id });
    this.data.parameter[0].checked = true;
    this.data.parameter2[0].checked = true;
    this.data.parameter3[0].checked = true;
    //默认parameter数组的第一个对象是选中的
    this.setData({
      parameter: this.data.parameter,
      parameter2: this.data.parameter2,
      parameter3: this.data.parameter3,
    })
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
  },

  // 血压参数点击响应事件
  parameterTap: function (e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.parameter//获取Json数组
    console.log(parameterList)
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true;
      }
      else {
        parameterList[i].checked = false;
      }
    }
    that.setData({
      parameter: parameterList
    })
  },
  // 尿检参数点击响应事件
  parameterTap2: function (e) {
    var that = this
    var this_checked= e.currentTarget.dataset.id
    var parameterList2 = this.data.parameter2//获取Json数组
    console.log(parameterList2)
    for (var i = 0; i < parameterList2.length; i++) {
      if (parameterList2[i].id == this_checked) {
        parameterList2[i].checked = true;
      }
      else {
        parameterList2[i].checked = false;
      }
    }
    that.setData({
      parameter2: parameterList2
    })
  },
  // 周岁参数点击响应事件
  parameterTap3: function (e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList3 = this.data.parameter3//获取Json数组
    console.log(parameterList3)
    for (var i = 0; i < parameterList3.length; i++) {
      if (parameterList3[i].id == this_checked) {
        parameterList3[i].checked = true;
      }
      else {
        parameterList3[i].checked = false;
      }
    }
    that.setData({
      parameter3: parameterList3
    })
  },
})
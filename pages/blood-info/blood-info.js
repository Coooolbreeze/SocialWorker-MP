import {
  ServiceList
} from '../service-list/service-list-model.js'
const serviceList = new ServiceList()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    highpressure: null,
    lowpressure: null,
    heartrate: null,
    bloodsugar: null,
    cholesterol: null,
    urea: null,
    name: null,
    xtname: '饭前',
    sex: "男性",
    age: "小于60周岁",
    parameter: [{
      id: 1,
      name: '饭前'
    }, {
      id: 2,
      name: '饭后'
    }],
    parameter2: [{
      id: 1,
      name: '男性'
    }, {
      id: 2,
      name: '女性'
    }],
    parameter3: [{
      id: 1,
      name: '小于60周岁'
    }, {
      id: 2,
      name: '60周岁以上'
    }],
  },

  onLoad: function(options) {
    this.setData({
      id: options.id
    });
    this.setData({
      name: options.name
    });
    console.log(options.name)
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
  //高压
  onHighpressureTap: function(e) {
    this.setData({
      highpressure: e.detail.value
    })
  },
  //低压
  onLowpressureTap: function(e) {
    this.setData({
      lowpressure: e.detail.value
    })
  },
  //心率
  onHeartrateTap: function(e) {
    this.setData({
      heartrate: e.detail.value
    })
  },
  //血糖
  onBloodsugarTap: function(e) {
    this.setData({
      bloodsugar: e.detail.value
    })
  },
  //尿检
  onUreaTap: function(e) {
    this.setData({
      urea: e.detail.value
    })
  },
  //胆固醇
  onCholesterolTap: function(e) {
    this.setData({
      cholesterol: e.detail.value
    })
  },

  onServicelistTap: function() {
    if (this.data.name == '血压检测') {
      let high = this.data.highpressure
      let low = this.data.lowpressure
      let heart = this.data.heartrate
      if (!high || !low || !heart) {
        wx.showToast({
          title: '请输入完整数据',
          icon: 'none'
        })
        return
      }
      var results = `高压：${high}；低压：${low}；心率：${heart}；`;
    }
    if (this.data.name == '血糖检测') {
      let bloodsugar = this.data.bloodsugar
      if (!this.data.xtname || !bloodsugar) {
        wx.showToast({
          title: '请输入完整数据',
          icon: 'none'
        })
        return
      }
      var results = `${this.data.xtname};血糖:${bloodsugar}；`;
    }
    if (this.data.name == '尿检') {
      let urea = this.data.urea
      if (!this.data.sex || !this.data.age || !urea) {
        wx.showToast({
          title: '请输入完整数据',
          icon: 'none'
        })
        return
      }
      var results = `${this.data.sex} ;${this.data.age} ;尿检:${urea}；`;
    }
    if (this.data.name == '胆固醇') {
      let cholesterol = this.data.cholesterol
      if (!cholesterol) {
        wx.showToast({
          title: '请输入完整数据',
          icon: 'none'
        })
        return
      }
      var results = `胆固醇:${cholesterol}；`;
    }

    serviceList.entryResults(this.data.id, results, res => {
      wx.navigateBack()
    })
  },

  // 血糖参数点击响应事件
  parameterTap: function(e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.parameter //获取Json数组
    console.log(parameterList)
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true;
      } else {
        parameterList[i].checked = false;
      }
    }
    that.setData({
      parameter: parameterList
    })
    for (var k = 0; k < this.data.parameter.length; k++) {
      if (this.data.parameter[k].checked == true) {
        this.setData({
          xtname: this.data.parameter[k].name
        })

      }
    }
    console.log('携带value值为：', this.data.xtname)
  },
  // 尿检参数点击响应事件
  parameterTap2: function(e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList2 = this.data.parameter2 //获取Json数组
    console.log(parameterList2)
    for (var i = 0; i < parameterList2.length; i++) {
      if (parameterList2[i].id == this_checked) {
        parameterList2[i].checked = true;
      } else {
        parameterList2[i].checked = false;
      }
    }
    that.setData({
      parameter2: parameterList2
    })
    for (var k = 0; k < this.data.parameter2.length; k++) {
      if (this.data.parameter2[k].checked == true) {
        this.setData({
          sex: this.data.parameter2[k].name,
        })

      }
    }
  },
  // 周岁参数点击响应事件
  parameterTap3: function(e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList3 = this.data.parameter3 //获取Json数组
    console.log(parameterList3)
    for (var i = 0; i < parameterList3.length; i++) {
      if (parameterList3[i].id == this_checked) {
        parameterList3[i].checked = true;
      } else {
        parameterList3[i].checked = false;
      }
    }
    that.setData({
      parameter3: parameterList3
    })
    for (var k = 0; k < this.data.parameter3.length; k++) {
      if (this.data.parameter3[k].checked == true) {
        this.setData({
          age: this.data.parameter3[k].name,
        })

      }
    }
  },
})
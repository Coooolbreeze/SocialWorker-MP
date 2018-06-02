import { ConfirmApply } from './confirm-apply-model.js'
const confirmApply = new ConfirmApply()

var tcity = require("../../utils/citys.js");
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    detail: '',
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    from: null
  },

  onLoad: function (options) {
    this.setData({ from: options.from })

    tcity.init(this);

    let cityData = this.data.cityData;

    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    confirmApply.getMyAddress(res => {
      this.setData({
        'provinces': provinces,
        'citys': citys,
        'countys': countys,
        'province': res.province || cityData[0].name,
        'city': res.city || cityData[0].sub[0].name,
        'county': res.area || cityData[0].sub[0].sub[0].name,
        'detail': res.detail || '',
        'name': res.name || '',
        'phone': res.phone || ''
      })
    })
  },

  // 跳转
  onApplyreceiptTap: function () {
    let data = this.data;

    // 验证
    if (!data.name || !data.phone || !data.detail) {
      wx.showToast({
        title: '请填写完整',
        icon: 'none'
      })
      return
    }

    confirmApply.storeAddress({
      name: data.name,
      phone: data.phone,
      province: data.province,
      city: data.city,
      area: data.county,
      detail: data.detail
    }, res => {
      if (this.data.from === 'equipment') {
        wx.redirectTo({
          url: '/pages/apply-receipt/apply-receipt'
        })
      } else {
        wx.navigateTo({
          url: '../confirm-order/confirm-order',
        })
      }
    })
  },

  onNameTap: function (e) {
    this.setData({ name: e.detail.value })
  },

  onPhoneTap: function (e) {
    this.setData({ phone: e.detail.value })
  },

  onDetailTap: function (e) {
    this.setData({ detail: e.detail.value })
  },

  // 省市选择
  bindChange: function (e) {
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;

    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
  },

  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  }
})





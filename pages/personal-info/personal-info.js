import { HealthRecords } from '../health-records/health-records-model.js'
const healthRecords = new HealthRecords()
var tcity = require("../../utils/citys.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    phone: null,
    sex: 0,
    education: null,
    age: null,
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    pic_array: [
      { id: 1, name: '大中专以下' },
      { id: 2, name: '大学以上' },
    ],
    pic_array2: [
      { id: 1, name: '30以下' },
      { id: 2, name: '31-40' },
      { id: 3, name: '41-50' },
      { id: 4, name: '51-60' },
      { id: 5, name: '61-70' },
      { id: 6, name: '70 以上' },
    ],
    hx_index: 0,
    items: [
      { name: '1', value: '男', checked: 'true' },
      { name: '2', value: '女' },
    ],
    allGoodsFilte: [
      { name: '特定病症治疗', value: '0', checked: true },
      { name: '科学养生', value: '1', checked: false },
      { name: '中药验方', value: '2', checked: false },
      { name: '术后康复', value: '3', checked: false },
      { name: '健身锻炼', value: '4', checked: false },
      { name: '特色旅居', value: '5', checked: false },
      { name: '保健食品', value: '6', checked: false },
      { name: '文化娱乐', value: '7', checked: false },
    ],  
  },
  radioChange: function (e) {
    this.setData({ sex: e.detail.value })
  },
  //文化程度选择
  bindPickerChange_hx: function (e) {
    this.setData({
      hx_index: e.detail.value,
      education: this.data.pic_array[e.detail.value].name
    })
  },
  //年龄选择
  bindPickerChange_hx2: function (e) {
    this.setData({
      hx_index2: e.detail.value,
      age: this.data.pic_array2[e.detail.value].name
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name === '-' ? null : options.name,
      phone: options.phone === '-' ? null : options.phone,
      education: options.education ? options.education : null,
      age: options.age ? options.age : null,
      sex: options.sex === '男' ? 1 : 2
    })

    console.log("onLoad");
    var that = this;

    tcity.init(that);

    var cityData = that.data.cityData;


    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub[0].name,
      'county': cityData[0].sub[0].sub[0].name
    })
    console.log('初始化完成');

  },

  onNameInput: function (e) {
    this.setData({ name: e.detail.value })
  },

  onPhoneInput: function (e) {
    this.setData({ phone: e.detail.value })
  },

  onHealthrecordTap: function () {
    let name = this.data.name;
    let phone = this.data.phone;
    let sex = this.data.sex;
    let education = this.data.education;
    let age = this.data.age;
    // 验证name phone


    healthRecords.updateMyInfo({ name, phone, sex, education, age }, res => { wx.navigateBack() })
  },
  // 省市选择
  bindChange: function (e) {
    //console.log(e);
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
  },
//维度多选
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

})
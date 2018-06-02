import { HealthRecords } from '../health-records/health-records-model.js'
const healthRecords = new HealthRecords()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    phone: null,
    pic_array: [
      { id: 1, name: '大中专以下' },
      { id: 2, name: '大学以上' },
    ],
    pic_array2: [
      { id: 1, name: '30以下' },
      { id: 2, name: '大学以上' },
      { id: 1, name: '31-40' },
      { id: 2, name: '大学以上' },
      { id: 1, name: '30以下' },
      { id: 2, name: '大学以上' },
    ],
    hx_index: 0,
    items: [
      { name: 'man', value: '男', checked: 'true' },
      { name: 'woman', value: '女'},
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
//文化程度选择
  bindPickerChange_hx: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
      hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    console.log('自定义值:', this.data.hx_select);
  },
  //文化程度选择
  bindPickerChange_hx2: function (e) {
    this.setData({  
      hx_index2: e.detail.value,  
    })
    console.log('自定义值:', this.data.hx_select2);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name === '-' ? null : options.name,
      phone: options.phone === '-' ? null : options.phone
    })
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
    // 验证name phone


    healthRecords.updateMyInfo({ name, phone }, res => { wx.navigateBack() })
  }
})
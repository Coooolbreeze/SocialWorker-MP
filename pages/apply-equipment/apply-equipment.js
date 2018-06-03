import { ApplyEquipment } from './apply-equipment-model.js'
const applyEquipment = new ApplyEquipment()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allGoodsFilte: null,
    checkArr: []
  },
  onquxiao: function (e) {
    let index = e.currentTarget.dataset.index;
    let id = this.data.allGoodsFilte[index].id;
    let checkIndex = this.data.checkArr.indexOf(id + '');
    delete this.data.checkArr[checkIndex];

    this.data.allGoodsFilte[index].checked = false;
    this.setData({
      allGoodsFilte: this.data.allGoodsFilte,
      checkArr: this.data.checkArr
    })
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    applyEquipment.getList(res => {
      res.map(res => res.checked = false)
      this.setData({ allGoodsFilte: res })
      for (let i in this.data.allGoodsFilte) {
        if (this.data.allGoodsFilte[i].id == 1) {
          this.data.allGoodsFilte[i].images = '/images/sb-pic05.png';
        }
        if (this.data.allGoodsFilte[i].id == 2) {
          this.data.allGoodsFilte[i].images = '/images/sb-pic01.png';
        }
        if (this.data.allGoodsFilte[i].id == 3) {
          this.data.allGoodsFilte[i].images = '/images/sb-pic02.png';
        }
        if (this.data.allGoodsFilte[i].id == 4) {
          this.data.allGoodsFilte[i].images = '/images/sb-pic03.png';
        }
        if (this.data.allGoodsFilte[i].id == 5) {
          this.data.allGoodsFilte[i].images = '/images/sb-pic04.png';
        }
      }
      this.setData({
        allGoodsFilte: this.data.allGoodsFilte,
      })
    })
  },

  serviceValChange: function (e) {
    let allGoodsFilte = this.data.allGoodsFilte;
    let checkArr = e.detail.value;

    allGoodsFilte.map(res => this.inArray(res.id, checkArr) ? res.checked = true : res.checked = false)

    this.setData({ allGoodsFilte, checkArr })
  },

  onPublicpayTap: function () {
    let ids = this.data.checkArr
    if (ids.length === 0) {
      wx.showToast({
        title: '请选择设备',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '提交中...',
      mask: true
    })

    applyEquipment.publicOrder(ids, res => {
      wx.hideLoading()

      wx.navigateTo({
        url: `/pages/public-share-friend/public-share-friend?id=${res.id}&code=${res.code}`,
      })
    })
  },

  onPayTap: function () {
    let ids = this.data.checkArr
    if (ids.length === 0) {
      wx.showToast({
        title: '请选择设备',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '提交中...',
      mask: true
    })

    applyEquipment.getPreOrder(ids, res => {
      wx.hideLoading()

      applyEquipment.getPayment(res.order_no, res => {
        wx.requestPayment({
          timeStamp: res.timestamp,
          nonceStr: res.nonceStr,
          package: res.package,
          signType: res.signType,
          paySign: res.paySign,
          success: res => {
            // 支付成功
            wx.redirectTo({
              url: '/pages/confirm-apply/confirm-apply?from=equipment',
            })
          }
        })
      })
    })
  },

  inArray: function (value, array) {
    for (let item in array) {
      if (value == array[item]) return true
    }
    return false
  }
})
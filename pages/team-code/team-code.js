import { FriendInvit } from '../friend-invit/friend-invit-model.js'
const friendInvit = new FriendInvit()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    invitInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '生成图片中，请稍后',
    })
    friendInvit.getInvitInfo(options.id, res => {
      this.generateCanvas(res)
      this.setData({
        invitInfo: res
      })
    })
  },

  generateCanvas: function (invitInfo) {
    let screenWidth = wx.getSystemInfoSync().screenWidth;
    let rpx = screenWidth / 750;
    let context = wx.createCanvasContext('canvas');
    context.setFillStyle('#ffffff');
    context.fillRect(0, 0, 750 * rpx, 1200 * rpx);

    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(750 * rpx, 0)
    context.stroke()

    context.drawImage('/images/xy-icon.png', 150 * rpx, 50 * rpx, 450 * rpx, 135 * rpx)

    context.font = 'normal bold ' + 60 * rpx + 'px sans-serif'
    context.setFillStyle('red')
    context.setTextAlign('center')
    context.fillText('你测血压，我付钱!', 375 * rpx, 300 * rpx)

    context.font = 'normal normal ' + 28 * rpx + 'px sans-serif'
    context.setFillStyle('#666666')
    context.fillText('送你29元红包，', 375 * rpx, 380 * rpx)

    context.fillText('邀请你加入我的互助小组！', 375 * rpx, 420 * rpx)

    context.beginPath()
    context.setLineWidth(0.3)
    context.moveTo(150 * rpx, 500 * rpx)
    context.lineTo(600 * rpx, 500 * rpx)
    context.arc(600 * rpx, 550 * rpx, 50 * rpx, 1.5 * Math.PI, 0 * Math.PI)
    context.lineTo(650 * rpx, 1130 * rpx)
    context.arc(600 * rpx, 1130 * rpx, 50 * rpx, 0 * Math.PI, 0.5 * Math.PI)
    context.lineTo(500 * rpx, 1180 * rpx)
    context.moveTo(250 * rpx, 1180 * rpx)
    context.lineTo(150 * rpx, 1180 * rpx)
    context.arc(150 * rpx, 1130 * rpx, 50 * rpx, 0.5 * Math.PI, 1 * Math.PI)
    context.lineTo(100 * rpx, 550 * rpx)
    context.arc(150 * rpx, 550 * rpx, 50 * rpx, 1 * Math.PI, 1.5 * Math.PI)
    context.stroke()

    context.font = 'normal bold ' + 28 * rpx + 'px sans-serif'
    context.fillText('扫码加入我的小组', 375 * rpx, 1185 * rpx)

    context.fillText('我已持续' + invitInfo.days + '天', 375 * rpx, 740 * rpx)
    context.fillText('提醒家人和朋友关注健康', 375 * rpx, 780 * rpx)
    context.fillText('收入' + invitInfo.income + '元天天关爱互助健康行动!', 375 * rpx, 820 * rpx)
    context.fillText('为每位关爱自身、服务他人的用户提供', 375 * rpx, 860 * rpx)
    context.fillText('互助补贴你和家人的健康，我们共同关注', 375 * rpx, 900 * rpx)

    context.setFontSize(35 * rpx)
    context.setFillStyle('#000000')
    context.fillText(invitInfo.nickname, 375 * rpx, 630 * rpx)

    context.beginPath()
    context.setLineDash([5, 2], 1);
    context.moveTo(150 * rpx, 680 * rpx)
    context.lineTo(600 * rpx, 680 * rpx)
    context.stroke()

    wx.downloadFile({
      url: invitInfo.avatar,
      success: res => {
        context.save()
        context.beginPath()
        // context.arc(375 * rpx, 500 * rpx, 100 * rpx, 0, 2 * Math.PI)
        // context.clip()
        context.drawImage(res.tempFilePath, 325 * rpx, 450 * rpx, 100 * rpx, 100 * rpx)
        context.restore()

        wx.downloadFile({
          url: invitInfo.invitation_code,
          success: res => {
            context.drawImage(res.tempFilePath, 275 * rpx, 940 * rpx, 200 * rpx, 200 * rpx)
            context.restore()

            context.draw()

            setTimeout(_ => {
              wx.canvasToTempFilePath({
                canvasId: 'canvas',
                success: res => {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                  });
                  wx.hideLoading()
                }
              })
            }, '1000')
          }
        })
      }
    })
  }
})
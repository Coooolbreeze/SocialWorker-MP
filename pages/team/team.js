import { Team } from './team-model.js'
const team = new Team()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    groupInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    team.getGroup(res => {
      this.setData({
        groupInfo: res[0]
      })
    })
  },

  //跳转到小组列表
  onGroupTap: function () {
    wx.navigateTo({
      url: '../group-desc/group-desc',
    })
  },

  //跳转分享朋友
  onSharefriend: function () {
    wx.navigateTo({
      url: '../friend-invit/friend-invit?type=share&id=' + this.data.groupInfo.id,
    })
  },

  //跳转分享朋友圈
  onFriendshareTap: function () {
    wx.navigateTo({
      url: '../team-code/team-code?id=' + this.data.groupInfo.id,
    })
  },

  onFriendsTap: function () {
    wx.navigateTo({
      url: '/pages/friend-list/friend-list?id=' + this.data.groupInfo.id,
    })
  },
  //跳转设备申请
  onApplydevTap:function(){
    wx.navigateTo({
      url: '../apply-equipment/apply-equipment',
    })
  }
})
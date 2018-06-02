import { FriendList } from './friend-list-model.js'
const friendList = new FriendList()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    friendList.getFriendList(options.id, res => {
      this.setData({
        users: res.users
      })
    })
  }
})
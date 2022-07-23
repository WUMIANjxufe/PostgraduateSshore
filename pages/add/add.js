// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    res: 1,
    name: null,
    phonenum: null,
    address: null
  },

  bindinput1: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindinput2: function (e) {
    this.setData({
      phonenum: e.detail.value
    })
  },
  bindinput3: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  add: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/api/mgr/customers',
      method: 'POST',
      data: {
        action: 'add_customer',
        data: {
          name: that.data.name,
          phonenumber: that.data.phonenum,
          address: that.data.address
        }
      },
      success(data) {
        console.log(data.data.id)
        that.setData({ res: data.data.ret })
      }

    })
  }
})

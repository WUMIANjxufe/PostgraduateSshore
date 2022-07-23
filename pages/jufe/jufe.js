// pages/jufe/jufe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 跳转考研意向
  toIntention(){
    wx.navigateTo({
      url: '../jufe_page/intention/intention'
    })
  },
  //跳转报考
  toApply(){
    wx.navigateTo({
      url: '../jufe_page/apply/apply'
    })
  },
  //跳转初试
  toFgrade(){
    wx.navigateTo({
      url: '../jufe_page/fgrade/fgrade'
    })
  },
  //跳转复试
  toLgrade(){
    wx.navigateTo({
      url: '../jufe_page/lgrade/lgrade'
    })
  },
  //跳转录取院校
  toAcademic(){
    wx.navigateTo({
      url: '../jufe_page/academic/academic'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
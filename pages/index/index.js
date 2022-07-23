// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentInfo:[{image:"../../images/detail/list/j1.jpg",name:"张三",university:"清华大学"},{image:"../../images/detail/list/j6.jpg",name:"李四",university:"北京大学"},{image:"../../images/detail/list/j3.jpg",name:"王五",university:"浙江大学"},{image:"../../images/detail/list/j4.jpg",name:"赵六",university:"武汉大学"},{image:"../../images/detail/list/j5.jpg",name:"马八",university:"中山大学"}]
    
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

  toJufu(){
    wx.navigateTo({
      url: '../jufe/jufe'
    })
  },
  // 跳转学生信息
  toStudent_info(){
    wx.navigateTo({
      url: '../student_info/student_info'
    })
  },
  toTeacher_info(){
    wx.navigateTo({
      url: '../teacher_info/teacher_info'
    })
  },
  toMeeting(){
    wx.navigateTo({
      url: '../meeting/meeting'
    })
  },
  toAca_manage(){
    wx.navigateTo({
      url: '../aca_manage/aca_manage'
    })
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
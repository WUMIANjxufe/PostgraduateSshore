// import request from "../../utils/request";

let startY = 0; // 手指起始的坐标
let moveY = 0; // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coveTransition: '',
    userInfo: {
      avatarUrl: "/static/images/personal/missing-face.png",//这里放了一张灰色头像图片
      nickName: "点击登录",//用户昵称
    }, // 用户信息
    recentPlayList: [], // 用户播放记录

    sid: " ",
    // 默认头像和昵称
    // avatarUrl: "/static/images/personal/missing-face.png",//这里放了一张灰色头像图片
    // nickName: "点击登录",//用户昵称

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 读取用户的基本信息
    var that = this
    let userInfo = wx.getStorageSync("userInfo")
    console.log(userInfo)
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
    }

  },
  //跳转登录页面
  toLogin() {
    wx.reLaunch({
      url: '../login/login',
    })
  },
  
  // 获取用户播放记录的功能函数
  async getUserRecentPlayList(userId) {
    let recentPlayListData = await request('/user/record', { uid: userId, type: 0 });
    let index = 0;
    let recentPlayList = recentPlayListData.allData.splice(0, 10).map(item => {
      item.id = index++;
      return item;
    })
    this.setData({
      recentPlayList
    })
  },

  handleTouchStart(event) {
    this.setData({
      coveTransition: ''
    })
    // 获取手指起始坐标
    startY = event.touches[0].clientY;
  },
  handleTouchMove(event) {
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;

    if (moveDistance <= 0) {
      return;
    }
    if (moveDistance >= 80) {
      moveDistance = 80;
    }
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })
  },
  handleTouchEnd() {
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coveTransition: 'transform 1s linear'
    })
  },
  // 退出
  //清除缓存
  clear: function () {
    wx.showModal({
      title: '提示',
      content: '您确定退出吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.clearStorageSync();//清除缓存
          wx.reLaunch({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

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

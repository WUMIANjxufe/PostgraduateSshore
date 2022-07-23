// pages/space/lookSpace/lookSpace.js
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

  },
  
  // 用户点击显示动态 弹窗
  clickPup: function() {
    let _that = this;
    if (!_that.data.click) { 
      wx.hideTabBar({ success: function(res) {  }   })
      _that.setData({ click: true,   })
    }
    if (_that.data.option) { 
      _that.setData({    option: false,     })
      // 关闭显示弹窗动画的内容，  
      setTimeout(() => {  _that.setData({ click: false, })
        wx.showTabBar({   success: function(res) {     }   })
      }, 500)
    } else { 
      _that.setData({  option: true })
    }
  } ,
  //  选择图片 上传 
  choosImg: function() {
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], //  指定是原图/压缩图， 
      sourceType: ['album', 'camera'], // 指定来源是相册/相机， 
      success: res => {
        //  本地文件路径列表， 
        let tempFilePaths = res.tempFilePaths;
        let tempF = res.tempFiles; //这个里面有图片大小size 信息
        /**-上传到服务器 */ 
        for (let i = 0; i < tempFilePaths.length; i++) {
          if (tempF[i].size <= 300000) {  
             wx.uploadFile({
             //此处往服务器上传的时候，后端那边要进行图片审核，
               url: netUrl + 's=/web/People/upload_img',
               filePath: tempFilePaths[i],
               name: 'image',//后端规定好的字段的名称
               formData: { 'mch_id': t.siteInfo.uniacid },
               header: {   "Content-Type": "multipart/form-data"  },
               success: function(res) { 
                 wx.showLoading({
                   title: '上传中....',
                   mask: true,
                   success: function(red) {
                     console.log('=', res, red) 
                     that.data.filePathImg.push(res.data)
                     //、将符合规范的图片在弹出框显示
                     that.setData({  tempFilePaths:  that.data.filePathImg})
                    //showLoading 和hideLoading 要配对使用不然会报错，但是界面不受影响
                     wx.hideLoading()
                   }
                 })
               }
             });  
          } else {
       		a.toast('上传图片不能大于3M!')  
          }
        }
      }
    })
  },
 
  // 发布动态
  profiSubmit: function() {
    console.log('filePathImg', this.data.filePathImg)
    let filePathImg = this.data.filePathImg.toString();
    let textTapTalk = this.data.textTalk;  
		var that = this;
    if (textTapTalk) { 
            wx.request({
              url: netUrl + 's=/web/People/send_comment',
              data: {	
	              uid: t.getCache("userinfo").uid,//发表动态的用户id
	              shaya_content: textTapTalk,  //发表的文字内容
	              shaya_sid: filePathImg,   // 图片路径
	              type: 1,
              },
              method: 'post',
              success: (res) => {
                if (res.data.code == 0) {
                	//发表成功后清空数据，影藏弹窗
                    that.onLoad();
				    that.clickPup();
				  	that.setData({
                    talkValue: '',
                    tempFilePaths: [],
                    filePathImg: [], 
                    isTalk: true
                  }) 
				  a.success("发布成功")
                  wx.showTabBar({ success: function(res) { } })
                } else {  
				 a.toast(res.data.message) 
                }
              }, 
            }) 
		}else {
			a.toast("内容不能为空") 
		}
	},
  // 取消发布
  profOff: function() {
    this.setData({ isTalk: true  })
    wx.showTabBar({
      success: function(res) { console.log(res) }
    })
  },
  //失去焦点，获取当前输入框内容，并保存
  textTapTalk: function(e) {
    console.log(e)
    this.setData({
      textTalk: e.detail.value
    })
  },
  // 删除动态
  deteilListdata: function(e) { 
    var listId = e.currentTarget.dataset.listid;//动态 id
    wx.request({
      url: netUrl + 's=amic_del' + '&id=' + listId,
      method: 'get', 
      success: (res) => { 
        this.onLoad();//加载页面数据
        a.success('删除成功')
      }, 
    })
  },
  /**
   * 预览图片方法
   */ 
  talkPreImg: function(e) {
    let index = e.target.dataset.index;
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
      success: function(res) {
      wx.showToast({
          title: '正在加载...',
          icon: 'loading',
          mask: true,
          duration: 1000, 
        })
      }
    })
  },
  // 删除图片
  delImage: function(e) {
    let index = e.currentTarget.dataset.index;
    this.data.tempFilePaths.splice(index, 1);
    this.setData({
      tempFilePaths: this.data.tempFilePaths
    })
  },

})
const app = getApp()
Page({
  data: {
    maxpages:"",
    pageindex:"1",
    keywords: ' ',
    array: ['软件与物联网学院', '外语学院', '人文学院', '工商学院'],
    listData: []

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/api/mgr/befSudent_info',
      method: 'POST',
      data: {
        action: 'list_befSudent_info',
        keywords: " ",
        pageindex:"1"
      },
      success(data) {
        console.log(data.data.retlist)
        
        that.setData({ listData: data.data.retlist })
        that.setData({ maxpages: data.data.maxpages })
      }
    })
  },
  // 获取搜索框的值
  getInput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
    console.log(e.detail.value)
  },

  search: function () {
    var that = this
    wx.request({
      // url: "http://127.0.0.1:8000/news/findActivity/?text=" + this.data.inputVal,
      url: 'http://127.0.0.1:8000/api/mgr/befSudent_info',
      method: 'GET',
      data: {
        action: 'list_befSudent_info',
        keywords: that.data.keywords,
        pageindex:that.data.pageindex
      },
      success(data) {
        console.log(data.data.retlist)
        that.setData({ listData: data.data.retlist })
        that.setData({ maxpages: data.data.maxpages })
      }

    })
  },

  /* =======加减页面操作========*/
  /* 点击减号 */
  bindMinus: function () {
    var pageindex = this.data.pageindex;
    // 如果大于1时，才可以减  
    if (pageindex > 1) {
      pageindex--;
    }else{
      // 只有大于0的时候，才能normal状态，否则disable状态  
      var minusStatus = pageindex <= 1 ? 'disabled' : 'normal';
      return;
    }
    
    // 将数值与状态写回  
    this.setData({
      pageindex: pageindex,
      minusStatus: minusStatus
    });

    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/api/mgr/befSudent_info',
      method: 'POST',
      data: {
        action: 'list_befSudent_info',
        keywords: " ",
        pageindex:that.data.pageindex
      },
      success(data) {
        console.log(data.data.retlist)
        that.setData({ listData: data.data.retlist })
      }
    })
  },
  /* 点击加号 */
  bindPlus: function () {
    var pageindex = this.data.pageindex;
    var maxpages = this.data.maxpages;
    // 不作过多考虑自增1
    if(pageindex < maxpages){
      pageindex++;
    }else{
      return
    }
    
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = pageindex < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      pageindex: pageindex,
      minusStatus: minusStatus
    });
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/api/mgr/befSudent_info',
      method: 'POST',
      data: {
        action: 'list_befSudent_info',
        keywords: " ",
        pageindex:that.data.pageindex
      },
      success(data) {
        console.log(data.data.retlist)
        that.setData({ listData: data.data.retlist })
      }
    })

  },
  /* 输入框事件 */
  bindManual: function (e) {
    var page = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      pageindex: page
    });
  }
  
})
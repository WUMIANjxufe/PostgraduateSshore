Page({
  data: {
    play:[]
  }, 
  bindtest: function () { 
    var that = this;
    wx.request({     
        url: 'http://127.0.0.1:8000/api/mgr/customers',
        method:'GET',
       data:{
          action:'list_customer'
       },
        success(data){
          console.log(data.data)
          that.setData({play:data.data.retlist})
        }
  
      })
    }
    })
 
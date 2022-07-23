// index.js
// 获取应用实例
const app = getApp()
 
Page({
  data:{
    id:null,
    res:1
  },
  bindinput:function(e){
    this.setData({
      id: e.detail.value
    })
  },
  delete: function () { 
    var that = this;
    wx.request({     
        url: 'http://127.0.0.1:8000/api/mgr/customers',
        method:'DELETE',
        data:{
          action:'delete_customer',
          id:that.data.id
       },
        success(data){
          console.log("ret:"+ data.data.ret)
          console.log("msg:"+ data.data.msg)
          // console.log(data)
          that.setData({res:data.data.ret})
        }
  
      })
    }
    })
 
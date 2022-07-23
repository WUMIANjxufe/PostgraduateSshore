Page({
  data: {
    listData:[{ title:"人工智能",time:"2020/4/24",address:"江西财经大学荟庐楼307",url:"../../images/avatar/0.png"},{title:"大数据",time:"2020/4/28",address:"江西财经大学荟庐楼307",url:"../../images/avatar/3.png"},{title:"机器学习",time:"2020/4/30",address:"江西财经大学荟庐楼307",url:"../../images/avatar/5.png"}]

  }, 
  onLoad:function(){

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
 
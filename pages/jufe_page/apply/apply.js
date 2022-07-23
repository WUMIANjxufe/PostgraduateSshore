let app = getApp();
Page({
  data: {
    

  },
  //提交
  formSubmit: function (e) {

    wx.showModal({
      title: '提示',
      content: '确定提交吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // console.log('form发生了submit事件，携带数据为：', e.detail.value["classId"]);

          let { classId, sId, sName, sPhone, sSex, sSchool, sMajor } = e.detail.value;
          if (!classId || !sId || !sName || !sPhone || !sSex  || !sSchool
            || !sMajor) {
            wx.showToast({
              title: '信息未填写完整！',
              icon: "none"
            })
            return;
          }
          var that = this;
          wx.request({
            url: 'http://127.0.0.1:8000/api/mgr/Sudent_apply',
            method: 'POST',
            data: {
              action: 'add_Sudent_apply',
              data: {
                classId: e.detail.value["classId"],
                sId: e.detail.value["sId"],
                sName: e.detail.value["sName"],
                sPhone: e.detail.value["sPhone"],
                sSex: e.detail.value["sSex"],
                sSchool: e.detail.value["sSchool"],
                sMajor: e.detail.value["sMajor"]
              }
            },

          })
          wx.showToast({
            title: '提交成功',
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })


  },
  //重置
  formReset: function () {

    wx.showToast({
      title: '重置成功',
    })
  }
})

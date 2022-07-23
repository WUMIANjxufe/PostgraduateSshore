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
          console.log('form发生了submit事件，携带数据为：', e.detail.value);

          let { classId, sId, sName,  sSex,  sSchool, sMajor,english,politics,major,math,score,rank } = e.detail.value;
          if (!classId || !sId || !sName || !english || !sSex || !politics || !sSchool
            || !sMajor || !major || !math || !score || !rank) {
            wx.showToast({
              title: '信息未填写完整！',
              icon: "none"
            })
            return;
          }
          var that = this;
          wx.request({
            url: 'http://127.0.0.1:8000/api/mgr/Sudent_fgrade',
            method: 'POST',
            data: {
              action: 'add_fgrade',
              data: {
                // classId, sId, sName,  sSex,  sSchool, sMajor,english,politics,major,math,score,rank 
                classId: e.detail.value["classId"],
                sId: e.detail.value["sId"],
                sName: e.detail.value["sName"],
                sSex: e.detail.value["sSex"],
                sSchool: e.detail.value["sSchool"],
                sMajor: e.detail.value["sMajor"],
                major: e.detail.value["major"],
                english: e.detail.value["english"],
                math: e.detail.value["math"],
                score: e.detail.value["score"],
                rank: e.detail.value["rank"],
                politics: e.detail.value["politics"],
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

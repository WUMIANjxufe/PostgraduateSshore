Page({
    data: {
        sid: '',
        spassword: '',
        ret: ""
    },

    // 获取输入账号 
    sidInput: function (e) {
        this.setData({
            sid: e.detail.value
        })
    },

    // 获取输入密码 
    passwordInput: function (e) {
        this.setData({
            spassword: e.detail.value
        })
    },
    // 登录 
    login: function () {
        // 前端验证
        if (this.data.sid.length == 0 || this.data.spassword.length == 0) {
            wx.showToast({
                title: '用户名和密码不能为空',
                icon: 'none',
                duration: 2000
            })

            return;
        }
        // 后端验证
        var that = this;
        wx.request({
            url: 'http://127.0.0.1:8000/login',
            method: 'POST',
            data: {
                action: 'login',
                sid: that.data.sid,
                spassword: that.data.spassword
            },
            success(data) {
                console.log(data.data.ret)
                that.setData({ ret: data.data.ret })
                var ret = that.data.ret
                // 判断返回登录状态
                if (ret == 1) {
                    // 保存登录用户账号信息
                    wx.setStorageSync('sid',that.data.sid)
                    //跳转登录主页面
                    wx.reLaunch({
                        url: '../index/index'
                    })
                } else if (ret == 0) {
                    wx.showToast({
                        title: '密码错误！',
                        icon: 'none',
                        duration: 2000
                    })
                } else {
                    wx.showToast({
                        title: '用户不存在',
                        icon: 'none',
                        duration: 2000
                    })
                }


            }
        })

        wx.getUserProfile({
            desc: '登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
            //   this.setData({
            //     nickName: res.userInfo.nickName,
            //     avatarUrl: res.userInfo.avatarUrl
            //   })
              wx.setStorageSync('userInfo',res.userInfo)
            
            }
          })

    }

}) 
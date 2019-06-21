//index.js
import userApi from 'api/userApi.js';

const app = getApp();
const api = new userApi;
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function() {
        wx.getStorage({
            key: 'openId',
            success: res => {
                console.log("openId:", res.data);
            },
            fail: err => {
                wx.login({
                    success: function(res) {
                        api.getOpenId(res.code, (res) => {
                            app.globalData.openId = res.openId;
                            wx.setStorage({
                                key: 'openId',
                                data: res.openId
                            })
                        });
                    }
                })
            }
        })

        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
        this.setData({
            userInfo: app.globalData.userInfo
        })
    },
    navigateToIndex: function(e) {
        console.log("nav");
        wx.redirectTo({
            url: '../personal/personal'
        })
    }
})
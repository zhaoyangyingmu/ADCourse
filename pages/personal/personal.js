// pages/personal/personal.js
import userApi from 'api/userApi.js';

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '无',
        id: '无',
        avatar: '/static/images/avatar.jpg',
        gender: '男',
        analysis: [{
            value: '0',
            unit: '分',
            title: '累计学分'
        }, {
            value: '0',
            unit: '门',
            title: '参与课程'
        }],
        mine: [{
            'icon': '/static/icon/ic_task_completed.png',
            'title': '我的笔记',
            'target': '../notes/notes'
        }, {
            'icon': '/static/icon/ic_like_selected.png',
            'title': '我的收藏',
            'target': '../collections/collections'
        }]
    },
    navigateToTarget: function(event) {
        let target = event.currentTarget.dataset.target;
        wx.navigateTo({
            url: `../${target}/${target}`
        })
    },
    navigateToEdit: function(event) {
        wx.navigateTo({
            url: './editProfile',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //获取本地存储的openid
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
                avatar: app.globalData.userInfo.avatarUrl,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    avatar: res.userInfo.avatarUrl,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        avatar: res.userInfo.avatarUrl,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onReady: function() {
        //api请求
        const api = new userApi;
        api.getUserInfo((data) => {
            this.setData({
                name: data.name,
                id: data.openId,
                gender: data.sex,
                analysis: [{
                    value: data.revisedCredits,
                    unit: '分',
                    title: '累计学分'
                }, {
                    value: data.courses,
                    unit: '门',
                    title: '参与课程'
                }]
            });
        });
    }
})
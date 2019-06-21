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
    navigateToEdit:function(event){
        wx.navigateTo({
            url: './editProfile',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const api = new userApi;
        let studentInfo = api.getUserInfo();
        this.setData({
            name: studentInfo.name,
            id: studentInfo.openId,
            gender: studentInfo.sex,
            avatar: app.globalData.userInfo.avatarUrl,
            analysis: [{
                value: studentInfo.revisedCredits,
                unit: '分',
                title: '累计学分'
            }, {
                value: studentInfo.courses,
                unit: '门',
                title: '参与课程'
            }]
        })
    }
})
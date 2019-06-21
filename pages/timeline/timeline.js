// pages/timeline/timeline.js
import courseApi from 'api/courseApi.js';
const app = getApp();
const api = new courseApi;

Page({

    /**
     * 页面的初始数据
     */
    data: {},
    navigationTo: function(event) {
        const {
            sectionid
        } = event.currentTarget.dataset;
        wx.navigateTo({
            url: `../chatroom/chatroom?sectionId=${sectionid}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        api.loadCourse(options.targetId, (data) => {
            this.setData(data);
            app.globalData.teacherAvatar = data.teacherAvatar;
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        let query = wx.createSelectorQuery();
        query.select('#timeline-container').boundingClientRect();
        query.exec(function(res) {
            wx: wx.pageScrollTo({
                scrollTop: res[0].height,
            })
        });
    }
})
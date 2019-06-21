// pages/themecourses/themecourses.js
import courseApi from 'api/courseApi.js';
const app = getApp();
const api = new courseApi;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        theme: {},
        show: true
    },
    onTake: function(event) {
        const {
            themeId
        } = event.currentTarget.dataset;
        let count = this.data.theme.courseList.length;
        this.data.theme.courseList.forEach((course, index, array) => {
            api.takeCourse(course.id, (res) => {
                if (res) {
                    count--;
                    if (count <= 0) {
                        this.setData({
                            show: false
                        })
                    }
                }
            });
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        new app.ToastPannel();
        api.loadThemeCourses(options.targetId, (res) => {
            console.log(res);
            this.setData({
                theme: res
            });
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

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
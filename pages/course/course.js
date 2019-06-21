// pages/course/course.js
import courseApi from 'api/courseApi.js';
const app = getApp();
const api = new courseApi;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        course: null,
        show: true
    },

    onTake: function(event) {
        const {
            courseid
        } = event.currentTarget.dataset;
        api.takeCourse(courseid, (res) => {
            this.setData({
                show: !res
            })
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        new app.ToastPannel();
        api.loadCourse(options.courseId, (data) => {
            this.setData({
                course: data,
                show: !data.taked
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
// pages/chatroom/chatroom.js
import chatApi from 'api/chatApi.js';
const app = getApp();
const api = new chatApi;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "第二节",
        order: 1,
        knowledge: null,
        teacherAvatar: "",
        studentAvatar: "",
        sectionId: 1,
        dataList: []
    },
    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target,
            knowledge: e.currentTarget.dataset.knowledge // 选中的知识点
        })
    },
    hideModal(e) {
        this.setData({
            modalName: null
        })
    },

    addNote: function(event) {
        // TODO 对选中的知识点做笔记

        this.hideModal();
    },

    addCollection: function(event) {
        //TODO 收藏选中的知识点

        this.hideModal();
    },

    navigateToTest: function(event) {
        wx.navigateTo({
            url: `../test/test?sectionId=${this.data.sectionId}`,
        })
        this.hideModal();
    },
    /**
     * 获取&显示下一个知识点
     */
    loadKnowledge: function(event) {
        var that = this;
        console.log("add");
        var newOrder = this.data.order + 1;
        // 学习完毕
        if (newOrder > that.data.dataList.length) {
            that.setData({
                modalName: "Completed"
            })
            return;
        }
        that.setData({
            order: newOrder
        })
        // 滚动到底部，显示最新消息
        var query = wx.createSelectorQuery()
        query.select('#chat-container').boundingClientRect()
        query.exec(function(res) {
            wx.pageScrollTo({
                scrollTop: res[0].height,
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            sectionId: options.sectionId
        })
        api.loadKnowledges(options.sectionId, (res) => {
            this.setData({
                dataList: res
            })
        })
        this.setData({
            teacherAvatar: app.globalData.teacherAvatar,
            studentAvatar: app.globalData.userInfo.avatarUrl
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
// pages/notes/notes.js
const app = getApp();
import noteApi from 'api/noteApi.js';
const noteApiInstance = new noteApi;


Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 1,
        notes: [
          {
            note_type: "knowledge",
            id: 1,
            type: 2,
            content: "我没说过这句话。——鲁迅",
            section_id: 2,
            importance_degree: 12,
            note_content: "鲁迅的话真对",
            url: "/knowledge/1"
          },
          {
            note_type: "knowledge",
            id: 1,
            type: 2,
            content: "我真的没有说过这句话。——鲁迅",
            section_id: 2,
            importance_degree: 12,
            note_content: "鲁迅的话真对",
            url: "/knowledge/2"
          },
          {
            note_type: "section",
            id: 1,
            name: "画直线",
            summary: "我没说过，，，",
            order_number: 2,
            chapter_id: 3,
            note_content: "鲁迅的话真对",
            url: "/section/3"
          }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getAllNotes();
    },

    getAllNotes: function() {
      let data = {
        "userId": app.globalData.openId
      }
      noteApiInstance.getNotes(data, (data)=>{
        this.setData({
          notes: data
        })
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
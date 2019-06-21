// pages/notes/edit_note.js
const app = getApp();
import noteApi from 'api/noteApi.js';
const noteApiInstance = new noteApi;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "section/1",
    content: "内容",
    add: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      url: options.url,
      content: options.content,
      add: options.add
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

  },

  changeContent: function(event) {
    this.setData({
      content: event.detail.value
    });
    console.log(event.detail.value);
  },
  submit:function(event) {
    console.log(event);
    let data = {
      "userId":app.globalData.openId,
      "url":this.data.url,
      "content": this.data.content
    }
    console.log(data);
    if(this.data.add === "1") {
      console.log("add");
      noteApiInstance.addNote(data, (res)=>{
        console.log(res);
      })
    }
    else {
      console.log("modify");
      noteApiInstance.modifyNote(data, (res) => {
        console.log(res);
      })
    }
  }
})
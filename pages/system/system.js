// pages/system/system.js
var utils = require("../../utils/util.js");
var setMessageNumber = utils.setMessageNumber;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: [
      {
        message_type: 0,
        title: "来自鲁迅的消息",
        message: "组织认为你和优秀啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！！！！！！！！！！！！",
        time: "2019-06-17 16: 33"
      },
      {
        message_type: 0,
        title: "老师消息",
        message: "准备上课！！！！！！！！！！！！",
        time: "2019-06-17 16: 33"
      },
      {
        message_type: 0,
        title: "上课消息",
        message: "你还有几个期末考需要准备！！！！！！！！！！！！",
        time: "2019-06-17 16: 33"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setMessageNumber();
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
// pages/collections/collections.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
      collections: [
        {
          "id": 1,
          "type": 1,
          "content": "张健的肝真好",
          "order_number": 1,
          "section_id": 1,
          "importance_degree": 3
        },
        {
          "id": 1,
          "type": 1,
          "content": "张健：我为我的肝代言！",
          "order_number": 1,
          "section_id": 1,
          "importance_degree": 2
        },
        {
          "id": 1,
          "type": 1,
          "content": "张健：我的肝真好！",
          "order_number": 1,
          "section_id": 1,
          "importance_degree": 3
        }
      ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(this.data.collections);
      // this.getCollectionData();
    },

    /**
     * 获取collecctions数据
    */
    // getCollectionData: function() {
    //   var that = this;
    //   wx.request({
    //     method: "POST",
    //     url: app.globalData.url + 'api/user/collections/get_all', //仅为示例，并非真实的接口地址
    //     data: {
    //       open_id: "123456"
    //     },
    //     header: {
    //       'content-type': 'application/json;charset=UTF-8'// 默认值
    //     },
    //     success(res) {
    //       console.log(res);
    //       that.setData({
    //         collections: res.data.data
    //       });
    //     }
    //   });
    // },

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
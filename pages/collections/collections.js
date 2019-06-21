// pages/collections/collections.js
var app = getApp();
import chatApi from 'api/chatApi.js';
import collectionApi from 'api/collectionApi.js';
const collectionApiInstance = new collectionApi;

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
      this.getCollectionData();
    },

    /**
     * 获取collecctions数据
    */
    getCollectionData: function() {
      let data = {
        "open_id": app.globalData.openId
      }

      let that = this;
      collectionApiInstance.getCollections(data, (res)=>{
        that.setData({
          collections: res
        });
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
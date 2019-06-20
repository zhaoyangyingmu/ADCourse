// pages/themecourses/themecourses.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "id": 1,
        "imageUrl": "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
        "name": "全面表达练习",
        "summary": "表达分口头表达和文字表达",
        "courseList": [{
                "id": 123,
                "name": "高级Web",
                "summary": "永远做不完的作业",
                "teacherId": "dfasdfe",
                "teacherName": "张健",
                "startTime": "2019-03-12",
                "endTime": "2019-06-18",
                "imageSrc": "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
                "credit": 3,
                "type": "互联网",
                "themeId": 1,
                "orderNumber": 1,
                "taked": false,
                "lastestSectionId": -1
            },
            {
                "id": 234,
                "name": "高级web高配版",
                "summary": "永远做不完的作业",
                "teacherId": "dfasdfe",
                "teacherName": "张健",
                "startTime": "2019-03-12",
                "endTime": "2019-06-18",
                "imageSrc": "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
                "credit": 5,
                "type": "互联网",
                "themeId": 1,
                "orderNumber": 2,
                "taked": true,
                "lastestSectionId": 3
            }
        ]
    },
    onTake: function(event) {
        const {
            themeId
        } = event.currentTarget.dataset;
        //TODO

        this.show("选课成功");
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        new app.ToastPannel();
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
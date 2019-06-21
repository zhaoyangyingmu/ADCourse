// pages/course/course.js
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        course: {
            "id": 123,
            "name": "高级Web",
            "summary": "永远做不完的作业",
            "teacherId": "dfasdfe",
            "teacherName": "名称",
            "startTime": "2019-03-12",
            "endTime": "2019-06-18",
            "imageSrc": "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
            "credit": 3,
            "type": "互联网",
            "themeId": 1,
            "orderNumber": 1,
            "taked": false,
            "latestSectionId": -1,
            "chapterList": [{
                    "id": 1,
                    "name": "第一章",
                    "summary": "简介",
                    "orderNumber": 1,
                    "courseId": 123,
                    "sectionList": [{
                            "id": 1,
                            "name": "第一节",
                            "summary": "简介",
                            "orderNumber": 1,
                            "chapterId": 1
                        },
                        {
                            "id": 3,
                            "name": "第二节",
                            "summary": "简介",
                            "orderNumber": 2,
                            "chapterId": 1
                        },
                        {
                            "id": 2,
                            "name": "第三节",
                            "summary": "简介",
                            "orderNumber": 3,
                            "chapterId": 1
                        },
                    ]
                },
                {
                    "id": 2,
                    "name": "第二章",
                    "summary": "简介",
                    "orderNumber": 1,
                    "courseId": 123,
                    "sectionList": [{
                            "id": 4,
                            "name": "第一节",
                            "summary": "简介",
                            "orderNumber": 1,
                            "chapterId": 1
                        },
                        {
                            "id": 5,
                            "name": "第二节",
                            "summary": "简介",
                            "orderNumber": 2,
                            "chapterId": 1
                        },
                        {
                            "id": 6,
                            "name": "第三节",
                            "summary": "简介",
                            "orderNumber": 3,
                            "chapterId": 1
                        },
                    ]
                },
            ]
        }
    },

    onTake: function(event) {
        const {
            courseId
        } = event.currentTarget.dataset;
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
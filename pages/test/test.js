// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "courseId": 1,
        "chapterId": 1,
        "sectionId": 1,
        "questionList": [{
            "id": 1,
            "questionId": 1,
            "content": "题目描述",
            "solution": "题目解析",
            "answerId": 2,
            "optionList": [{
                    "id": 1,
                    "content": "答案描述",
                    "isCorrect": true
                },
                {
                    "id": 2,
                    "content": "答案描述",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "content": "答案描述",
                    "isCorrect": false
                },
                {
                    "id": 4,
                    "content": "答案描述",
                    "isCorrect": false
                }
            ]
        }, {
            "id": 1,
            "questionId": 1,
            "content": "题目描述",
            "solution": "题目解析",
            "answerId": 2,
            "optionList": [{
                    "id": 1,
                    "content": "答案描述",
                    "isCorrect": true
                },
                {
                    "id": 2,
                    "content": "答案描述",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "content": "答案描述",
                    "isCorrect": false
                },
                {
                    "id": 4,
                    "content": "答案描述",
                    "isCorrect": false
                }
            ]
        }],
        alphaList: ['A', 'B', 'C', 'D']
    },
    itemChange: function(event) {
        console.log(event.detail.value);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
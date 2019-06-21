// pages/test/test.js
import chatApi from 'api/chatApi.js';
const app = getApp();
const api = new chatApi;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        courseId: 1,
        chapterId: 1,
        sectionId: 1,
        questionList: [],
        answerList: {},
        tested: true,
        alphaList: ['A', 'B', 'C', 'D']
    },
    itemChange: function(event) {
        const {
            questionid
        } = event.currentTarget.dataset;
        this.data.answerList[questionid] = {
            questionId: questionid,
            answerId: event.detail.value - '0'
        }
        console.log(this.data.answerList);
    },

    submit: function(event) {
        let data = {
            openId: app.globalData.openId,
            courseId: this.data.courseId,
            chapterId: this.data.chapterId,
            sectionId: this.data.sectionId
        };
        let answerList = [];
        for (let key in this.data.answerList) {
            answerList.push(this.data.answerList[key]);
        }
        console.log(this.data.answerList);
        data.answerList = answerList;
        if (answerList.length < this.data.questionList.length) {
            wx.showToast({
                title: "不能留空",
                icon: "none"
            })
            return;
        }
        api.pushAnswers(data.sectionId, data, (res) => {
            if (res) {
                wx.navigateBack({
                    delta: 1
                });
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        api.loadTest(options.sectionId, (data) => {
            console.log(data);
            this.setData({
                courseId: data.courseId,
                chapterId: data.chapterId,
                sectionId: data.sectionId,
                questionList: data.questionList,
                tested: data.questionList[0].answerId > 0
            })
        })
    }
})
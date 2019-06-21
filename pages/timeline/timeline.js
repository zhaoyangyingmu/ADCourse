// pages/timeline/timeline.js
import courseApi from 'api/courseApi.js';
const app = getApp();
const api = new courseApi;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        course: {},
        sectionNum: 1,
        chapterNum: 1
    },
    navigationTo: function(event) {
        const {
            sectionid
        } = event.currentTarget.dataset;
        wx.navigateTo({
            url: `../chatroom/chatroom?sectionId=${sectionid}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        api.loadCourse(options.targetId, (data) => {
            console.log(data);
            let cNum = 1;
            let sNum = 1;
            //更新最新可学习小节
            if (data.lastestSectionId <= 0) {
                data.lastestSectionId = data.chapterList[0].sectionList[0].id;
            } else {
                var temp = data;
                var lastSectionId = null;
                var forAble = true;
                data.chapterList.forEach((chapter, index1, array1) => {
                    chapter.sectionList.forEach((section, index2, array2) => {
                        if (lastSectionId != null && forAble) {
                            data.lastestSectionId = section.id;
                            forAble = false;
                        }
                        if (section.id == temp.lastestSectionId && forAble) {
                            lastSectionId = section.id;
                        }
                        if (forAble) {
                            sNum++;
                        }
                    })
                    if (forAble)
                        cNum++;
                })
            }
            console.log(data, cNum, " ", sNum)
            this.setData({
                course: data,
                sectionNum: sNum,
                chapterNum: cNum
            });
            app.globalData.teacherAvatar = data.teacherAvatar;
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
        let query = wx.createSelectorQuery();
        query.select('#timeline-container').boundingClientRect();
        query.exec(function(res) {
            wx: wx.pageScrollTo({
                scrollTop: res[0].height,
            })
        });
    }
})
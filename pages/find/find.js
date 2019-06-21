// pages/find/find.js
import courseApi from 'api/courseApi.js';
var utils = require("../../utils/util.js");
var setMessageNumber = utils.setMessageNumber;
const api = new courseApi;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cardCur: 0,
        themeTarget: '../themecourses/themecourses',
        courseTarget: '../course/course',
        themeList: [],
        categoryList: []
    },
    DotStyle(e) {
        this.setData({
            DotStyle: e.detail.value
        })
    },
    // cardSwiper
    cardSwiper(e) {
        this.setData({
            cardCur: e.detail.current
        })
    },
    // towerSwiper
    // 初始化towerSwiper
    towerSwiper(name) {
        let list = this.data[name];
        for (let i = 0; i < list.length; i++) {
            list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
            list[i].mLeft = i - parseInt(list.length / 2)
        }
        this.setData({
            swiperList: list
        })
    },
    // towerSwiper触摸开始
    towerStart(e) {
        this.setData({
            towerStart: e.touches[0].pageX
        })
    },
    // towerSwiper计算方向
    towerMove(e) {
        this.setData({
            direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
        })
    },
    // towerSwiper计算滚动
    towerEnd(e) {
        let direction = this.data.direction;
        let list = this.data.swiperList;
        if (direction == 'right') {
            let mLeft = list[0].mLeft;
            let zIndex = list[0].zIndex;
            for (let i = 1; i < list.length; i++) {
                list[i - 1].mLeft = list[i].mLeft
                list[i - 1].zIndex = list[i].zIndex
            }
            list[list.length - 1].mLeft = mLeft;
            list[list.length - 1].zIndex = zIndex;
            this.setData({
                swiperList: list
            })
        } else {
            let mLeft = list[list.length - 1].mLeft;
            let zIndex = list[list.length - 1].zIndex;
            for (let i = list.length - 1; i > 0; i--) {
                list[i].mLeft = list[i - 1].mLeft
                list[i].zIndex = list[i - 1].zIndex
            }
            list[0].mLeft = mLeft;
            list[0].zIndex = zIndex;
            this.setData({
                swiperList: list
            })
        }
    },
    onNavigateToCourse: function(event) {
        const {
            target,
            courseId
        } = event.currentTarget.dataset;
        wx.navigateTo({
            url: `${target}?courseId=${courseId}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        setMessageNumber();
        this.towerSwiper('themeList');
        // 初始化towerSwiper 传已有的数组名即可
        var that = this;
        api.loadCourses((dataList) => {
            that.setData({
                categoryList: dataList
            })
        })
        api.loadThemes((dataList) => {
            that.setData({
                themeList: dataList
            })
        })
    }
})
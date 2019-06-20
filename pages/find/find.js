// pages/find/find.js
var utils = require("../../utils/util.js");
var setMessageNumber = utils.setMessageNumber;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        cardCur: 0,
        swiperList: [{
            id: 0,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
            target: '../course/course'
        }, {
            id: 1,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
            target: '../course/course'
        }, {
            id: 2,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
            target: '../course/course'
        }, {
            id: 3,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
            target: '../course/course'
        }, {
            id: 4,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
            target: '../course/course'
        }, {
            id: 5,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg',
            target: '../course/course'
        }, {
            id: 6,
            tag: '精选主题',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
            target: '../course/course'
        }],
        categoryList: [{
            name: "推荐",
            courseList: [{
                id: 0,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
                target: '../course/course'
            }, {
                id: 1,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
                target: '../course/course'
            }, {
                id: 2,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
                target: '../course/course'
            }, {
                id: 3,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                target: '../course/course'
            }, {
                id: 4,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
                target: '../course/course'
            }, {
                id: 5,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg',
                target: '../course/course'
            }, {
                id: 6,
                startTime: '2019-03-12',
                endTime: '2019-06-12',
                teacherName: '张健',
                credits: 2,
                summary: "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将由我来终结！",
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
                target: '../course/course'
            }]
        }, {
            name: "互联网",
            courseList: []
        }, {
            name: "生活",
            courseList: []
        }, {
            name: "自我",
            courseList: []
        }]
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
    onNavigateTo: function(event) {
        const {
            target
        } = event.currentTarget.dataset;
        wx.navigateTo({
            url: `${target}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        setMessageNumber();
        this.towerSwiper('swiperList');
        // 初始化towerSwiper 传已有的数组名即可
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
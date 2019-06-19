// pages/personal/personal.js
import rxwx, {
    Rx
} from 'rxjs-wx';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: 'Dark Young',
        id: '无',
        avatar: '../../static/images/avatar.jpg',
        gender: 'female',
        analysis: [{
            value: '10',
            unit: '分',
            title: '累计学分'
        }, {
            value: '3',
            unit: '门',
            title: '参与课程'
        }],
        mine: [{
            'icon': '/static/images/ic_task_completed.png',
            'title': '我的笔记',
            'target': '../notes/notes'
        }, {
            'icon': '/static/images/ic_like_selected.png',
            'title': '我的收藏',
            'target': '../collections/collections'
        }]
    },
    getStudentInfo: function() {
        var observable = Rx.Observable.create(function(observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });

        console.log('before subscribe');
        observable.observeOn(Rx.Scheduler.async) // 本来是同步的，变成了异步
            .subscribe({
                next: (value) => {
                    console.log(value);
                },
                error: (err) => {
                    console.log('Error: ' + err);
                },
                complete: () => {
                    console.log('complete');
                }
            });
        console.log('after subscribe');
    },
    navigateToTarget: function(event) {
        let target = event.currentTarget.dataset.target;
        console.log(target);
        wx.navigateTo({
            url: `../${target}/${target}`
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getStudentInfo();
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
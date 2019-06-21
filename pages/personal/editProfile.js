// pages/personal/editProfile.js
import userApi from 'api/userApi.js';

const app = getApp();
const api = new userApi;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        openId: '',
        email: '',
        gender: '男',
    },
    modifyForm: function(e) {
        console.log(e.detail.value);
        let gender = e.detail.value.gender ? "男" : "女"
        api.modifyUserInfo(e.detail.value.openId, e.detail.value.name, e.detail.value.email, gender);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    onShow: function() {
        api.getUserInfo((res) => {
            this.setData({
                name: res.name,
                openId: res.openId,
                gender: res.sex,
                email: res.email
            })
        });
    }
})
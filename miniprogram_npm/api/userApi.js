import api from './api.js';
import config from './config.js';

class userApi {
    constructor() {}

    /**
     * 处理错误
     */
    showError(errorMsg) {
        if (typeof errorMsg != "string") {
            console.log(errorMsg);
            errorMsg = "出错了>_<"
        }
        wx.showToast({
            title: errorMsg,
            icon: 'none'
        })
    }
    /**
     * 获取用户信息
     */
    getUserInfo(setData) {
        api.get(`${config.student}`, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null) {
                    console.log("student info:", res);
                    setData(res.data)
                } else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }
    /**
     * 修改用户信息
     */
    modifyUserInfo(openId, name, email, sex) {
        api.post(config.student, {
            "openId": openId,
            "name": name,
            "email": email,
            "sex": sex
        }).subscribe(
            res => {
                if (res.errorCode == 0) {
                    wx.showToast({
                        title: "修改成功！",
                        icon: 'none'
                    })
                } else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }
    /**
     * 获取openId
     */
    getOpenId(code, setData) {
        api.post(`${config.student}login/code`, {
            "code": code
        }).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null) {
                    setData(res.data);
                } else
                    this.showError(res.message);
            },
            err => {
                this.showError(err);
            }
        )
    }
}

export default userApi
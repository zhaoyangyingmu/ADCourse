import api from './api.js';
import config from './config.js';
import errorHandler from '../util/errorHandler.js';
import errorCode from '../util/errorCode.js';
class userApi {
    constructor() {}

    /**
     * 获取用户信息
     */
    getUserInfo(setData) {
        api.get(`${config.student}`, {}).retryWhen(
            err => {
                console.log("出错了");
                console.log(err);
            }
        ).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null) {
                    console.log("student info:", res);
                    setData(res.data)
                } else if (res.errorCode == errorCode.USER_NOT_EXIST) {
                    console.log("还未注册");
                } else {
                    errorHandler.showException(res.errorCode, res.message);
                }
            },
            err => {
                errorHandler.showException(-1, "出错了");
            }
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
                } else {
                    errorHandler.showException(res.errorCode, res.message);
                }
            },
            err => {
                errorHandler.showException(-1, "出错了");
            }
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
                } else {
                    errorHandler.showException(res.errorCode, res.message);
                }
            },
            err => {
                errorHandler.showException(-1, "出错了");
            }
        )
    }
}

export default userApi
import api from './api.js';
import config from './config.js';

class chatApi {
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
     * 获取小节所有知识点
     */
    loadKnowledges(sectionId, setData) {
        api.get(`${config.section}/${sectionId}/knowledge`, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null)
                    setData(res.data);
                else
                    this.showError(res.message);
            },
            err => this.showError(err),
        )
    }

    /**
     * 获取小节测试
     */
    loadTest(sectionId, setData) {
        api.get(`${config.section}/${sectionId}/question`, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null) {
                    setData(res.data);
                } else
                    this.showError(res.message);
            },
            err => this.showError(err),
        )
    }
    /**
     * 提交小节测试答案
     */
    pushAnswers(sectionId, data) {
        wx.showLoading({
            title: '正在提交……'
        })
        api.post(`${config.section}${sectionId}/question`, data).subscribe(
            res => {
                if (res.errorCode == 0) {
                    wx.showToast({
                        title: "提交成功！",
                        icon: 'none'
                    })
                    wx.hideLoading();
                } else {
                    wx.hideLoading();
                    this.showError(res.message);
                }
            },
            err => {
                wx.hideLoading();
                this.showError(err)
            }
        )
    }
}
export default chatApi
import api from './api.js';
import config from './config.js';
import errorHandler from '../util/errorHandler.js';

class chatApi {
    constructor() {}
    /**
     * 获取小节所有知识点
     */
    loadKnowledges(sectionId, setData) {
        api.get(`${config.section}${sectionId}/knowledge`, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.dataList != null) {
                    setData(res.dataList);
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
     * 获取小节测试
     */
    loadTest(sectionId, setData) {
        api.get(`${config.section}${sectionId}/question`, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null) {
                    setData(res.data);
                } else {
                    errorHandler.showException(res.errorCode, res.message);
                }
            },
            err => {
                errorHandler.showException(-1, "出错了");
            })
    }
    /**
     * 提交小节测试答案
     */
    pushAnswers(sectionId, data, callback) {
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
                    callback(true);
                } else {
                    wx.hideLoading();
                    callback(false);
                    errorHandler.showException(res.errorCode, res.message);
                }
            },
            err => {
                wx.hideLoading();
                errorHandler.showException(-1, "出错了");
                callback(false);
            }
        )
    }
}
export default chatApi
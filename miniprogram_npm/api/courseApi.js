import api from './api.js';
import config from './config.js';

class courseApi {
    constructor() {
        const app = getApp();
    }

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
     * 根据课程id，获取课程详细信息
     */
    loadCourse(courseId, setData) {
        return api.get(`${config.course}${courseId}`, {}).subscribe(
            res => {
                if (res.errorCode == 0)
                    setData(res.data);
                else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }

    /**
     * 获取所有课程
     */
    loadCourses(setData) {
        api.get(config.course, {}).subscribe(
            res => {
                if (res.errorCode == 0)
                    setData(res.dataList)
                else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }
    /**
     * 获取所有主题
     */
    loadThemes(setData) {
        api.get(config.theme, {}).subscribe(
            res => {
                if (res.errorCode == 0)
                    setData(res.dataList);
                else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }

    /**
     * 根据主题id，获取所有子课程
     */
    loadThemeCourses(themeId) {
        return api.get(`${config.theme}${themeId}`, {}).subscribe(
            res => {
                if (res.errorCode == 0)
                    console.log(res);
                else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }

    /**
     * 获取学生选修课程（根据openId）
     */
    loadTakedCourses(setData) {
        api.get(config.taked, {}).subscribe(
            res => {
                if (res.errorCode == 0)
                    setData(res.dataList);
                else
                    this.showError(res.message);
            },
            err => this.showError(err)
        )
    }
}

export default courseApi
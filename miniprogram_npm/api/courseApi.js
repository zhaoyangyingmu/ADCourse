import api from './api.js';
import config from './config.js';
import errorHandler from '../util/errorHandler.js';
class courseApi {
    constructor() {
        const app = getApp();
    }

    /**
     * 选课
     */
    takeCourse(courseId, callback) {
        api.put(`${config.taked}?courseId=${courseId}`, {}).subscribe(
            res => {
                if (res.errorCode == 0) {
                    wx.showToast({
                        title: '选课成功！',
                    })
                    callback(true);
                } else {
                    callback(false);
                    errorHandler.showException(res.errorCode, res.message);
                }
            },
            err => {
                callback(false);
                errorHandler.showException(-1, "出错了");
            }
        )
    }
    /**
     * 根据课程id，获取课程详细信息
     */
    loadCourse(courseId, setData) {
        api.get(`${config.course}${courseId}`, {}).subscribe(
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

    /**
     * 获取所有课程
     */
    loadCourses(setData) {
        api.get(config.course, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.dataList != null) {
                    console.log("Courses:", res);
                    setData(res.dataList)
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
     * 获取所有主题
     */
    loadThemes(setData) {
        api.get(config.theme, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.dataList != null) {
                    console.log("Themes:", res);
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
     * 根据主题id，获取所有子课程
     */
    
    loadThemeCourses(themeId, setData) {
        return api.get(`${config.theme}${themeId}`, {}).subscribe(
            res => {
                if (res.errorCode == 0 && res.data != null) {
                    console.log(res);
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

    /**
     * 获取学生选修课程（根据openId）
     */
    loadTakedCourses(setData) {
        api.get(config.taked, {}).subscribe(
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

}

export default courseApi
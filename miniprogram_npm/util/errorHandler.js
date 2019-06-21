import UserException from './UserException.js';
import errorCode from './errorCode.js'

module.exports = {
    parseException: function(err) {
        return new UserException(errorCode.OTHER_ERROR, "其他错误")
    },
    parseToUserException: function(errCode, defaultValue) {
        let exception = new UserException(errCode, defaultValue);
        switch (errCode) {
            case errorCode.SERVER_ERROR:
                exception.setErrorMsg("系统错误");
                break;
            case errorCode.NETWORK_ERROR:
                exception.setErrorMsg("网络错误");
                break;
            case errorCode.OTHER_ERROR:
                exception.setErrorMsg("其他错误");
                break;
            case errorCode.USER_NOT_EXIST:
                exception.setErrorMsg("用户不存在");
                break;
            case errorCode.COURSE_NOT_EXIST:
                exception.setErrorMsg("课程不存在");
                break;
            case errorCode.CHAPTER_NOT_EXIST:
                exception.setErrorMsg("章节不存在");
                break;
            case errorCode.SECTION_NOT_EXIST:
                exception.setErrorMsg("小节不存在");
                break;
            case errorCode.KNOWLEDGE_NOT_EXIST:
                exception.setErrorMsg("知识点不存在");
                break;
            case errorCode.THEME_NOT_EXIST:
                exception.setErrorMsg("主题不存在");
                break;
        }
        return exception;
    },
    showException(errCode, defaultValue) {
        let exception = this.parseToUserException(errCode, defaultValue);
        wx.showToast({
            title: exception.getErrorMsg(),
            icon: 'none'
        })
    }
}
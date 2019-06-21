/**
 * 封装笔记api
*/
import api from './api.js';
import config from './config.js';
import errorHandler from '../util/errorHandler.js';

class noteApi {
  constructor() {
    const app = getApp();
  }

  /**
   * 添加笔记
  */
  addNote(data, callback) {
    api.post("api/user/notes/add_note", data).subscribe(
      res => {
        if (res.errorCode == 0) {
          wx.showToast({
            title: '添加成功！',
          })
          callback(res);
        } else {
          callback(res);
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
   * 修改笔记
  */
  modifyNote(data, callback) {
    api.post("api/user/notes/modify_note", data).subscribe(
      res => {
        if (res.errorCode == 0) {
          wx.showToast({
            title: '修改成功！',
          })
          callback(res);
        } else {
          callback(res);
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
   * 删除笔记，要回退到原来的页面
  */
  deleteNote(data, callback) {
    api.post("api/user/notes/delete_note", data).subscribe(
      res => {
        if (res.errorCode == 0) {
          wx.showToast({
            title: '删除成功！',
          })
          callback(res.errorCode == 0);
        } else {
          callback(res.errorCode == 0);
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
   * 获取笔记，通过openId
  */
  getNotes(data, setData) {
    api.post("api/user/notes/get_all", data).subscribe(
      res => {
        console.log(res);
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

export default noteApi;
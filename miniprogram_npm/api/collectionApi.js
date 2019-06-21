/**
 * 封装收藏api
*/

import api from './api.js';
import config from './config.js';
import errorHandler from '../util/errorHandler.js';

class collectionApi {
  constructor() {
    const app = getApp();
  }

  /**
   * 添加收藏
  */
  addCollection(data, callback) {
    api.post("api/user/collections", data).subscribe(
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
   * 获取收藏
  */
  getCollections(data, setData) {
    api.post("api/user/collections/get_all", data).subscribe(
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

  /**
   * 取消收藏
  */
  deleteCollection(knowledge_id,data, callback) {
    api.post("api/user/collections/delete/"+knowledge_id, data).subscribe(
      res => {
        console.log(res);
        if (res.errorCode == 0) {
          wx.showToast({
            title: '取消成功！',
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
}

export default collectionApi;
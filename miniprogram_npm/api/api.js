import rxwx, {
    Rx
} from 'rxjs-wx';

const app = getApp();
/**
 * 创建reques请求，返回一个Observable对象
 */
const request = (url, options) => {
    // 打印请求日志
    console.log("", options.method, " => ", `${app.globalData.host}${url}`, options.data);
    return Rx.Observable.from(new Promise((resolve, reject) => {
        wx.request({
            url: `${app.globalData.host}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            header: {
                'Content-Type': 'application/json;charset=UTF-8',
                'openId': `${app.globalData.openId}`
            },
            success: (res => {
                if (res.statusCode === 200) {
                    resolve(res.data);
                } else {
                    reject(res.data);
                }
            }),
            fail: (res => {
                reject(res.data);
            })
        })
    }))
}
/**
 * 封装get请求
 */
const get = (url, options = {}) => {
    return request(url, {
        method: 'GET',
        data: options
    });
}

/**
 * 封装post请求
 */
const post = (url, options) => {
    return request(url, {
        method: 'POST',
        data: options
    });
}

/**
 * 封装put请求
 */
const put = (url, options) => {
    return request(url, {
        method: 'PUT',
        data: options
    });
}

/**
 * 封装delete请求
 * 不能使用delete，这是关键字
 */
const remove = (url, options) => {
    return request(url, {
        method: 'DELETE',
        data: options
    });
}

module.exports = {
    get,
    post,
    put,
    remove
}
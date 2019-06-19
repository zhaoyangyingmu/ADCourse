const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 用于设置底部信息button的右上角标
*/
var setMessageNumber = function() {
  wx.setTabBarBadge({
    index: 2,
    text: '3',
  });
}

module.exports = {
  formatTime: formatTime,
  setMessageNumber: setMessageNumber
}

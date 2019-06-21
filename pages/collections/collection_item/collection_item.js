// pages/collections/collection_item/collection_item.js
var app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    importance_degree: {
      type: Number,
      value: 3
    },
    knowledge_id: {
      type: Number,
      value: 1
    },
    content: {
      type: String,
      value: "张健的肝很好！"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    delete_knowledge: function(event) {
      var knowledge_id = event.currentTarget.dataset.knowledge_id;
      console.log(event.currentTarget.dataset.knowledge_id);
      wx.request({
        method: "POST",
        url: app.globalData.url + 'api/user/collections/delete/'+knowledge_id, //仅为示例，并非真实的接口地址
        data: {
          open_id: "123456"
        },
        header: {
          'content-type': 'application/json;charset=UTF-8'// 默认值
        },
        success(res) {
          console.log(res);
          const pages = getCurrentPages();
          const lastPage = pages[pages.length - 1];
          lastPage.onLoad();
        }
      });
    }
  }
})

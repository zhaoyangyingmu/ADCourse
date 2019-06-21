// pages/collections/collection_item/collection_item.js
var app = getApp();
import chatApi from 'api/chatApi.js';
import collectionApi from 'api/collectionApi.js';
const collectionApiInstance = new collectionApi;

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
      let knowledge_id = event.currentTarget.dataset.knowledge_id;
      let data = {
        "open_id": app.globalData.openId
      }
      collectionApiInstance.deleteCollection(knowledge_id, data, (res)=>{
        if(res) {
          const pages = getCurrentPages();
          const lastPage = pages[pages.length - 1];
          lastPage.onLoad();
        }
      })
    }
  }
})

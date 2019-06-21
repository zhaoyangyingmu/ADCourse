// pages/components/item_delete_note_button/item_delete_note_button.js
const app = getApp();
import noteApi from 'api/noteApi.js';
const noteApiInstance = new noteApi;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // url是笔记对应的url
    url: {
      type: String,
      value: "/section/1"
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
    delete: function() {
      console.log("delete note " +this.data.url);
      let data = {
        "userId": app.globalData.openId,
        "url": this.data.url
      }
      noteApiInstance.deleteNote(data, (res)=>{
        if(res) {
          const pages = getCurrentPages();
          const lastPage = pages[pages.length - 1];
          lastPage.onLoad();
        }
      })
    }
  }
})

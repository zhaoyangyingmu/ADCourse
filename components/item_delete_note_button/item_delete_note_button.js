// pages/components/item_delete_note_button/item_delete_note_button.js
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
    }
  }
})

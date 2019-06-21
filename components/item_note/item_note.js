// pages/components/item_note/item_note.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      url : {
        type: String,
        value: "/section/1"
      },
      content : {
        type: String,
        value: "鲁迅的话真有道理！"
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
    toEdit: function(event) {
      let that = this;
      // console.log(that.data);
      wx.navigateTo({
        url: '/pages/notes/edit_note?url='+that.data.url+"&content="+that.data.content+"&add=0",
      });
    }
  }
})

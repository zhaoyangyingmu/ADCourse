// pages/collections/collection_item/collection_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    importance_degree: {
      type: Number,
      value: 3
    },
    id: {
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
      console.log(event.currentTarget.dataset.id);
    }
  }
})

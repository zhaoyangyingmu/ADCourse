// pages/components/item_knowledge/item_knowledge.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: Number,
      value: 1
    },
    type: {
      type: Number,
      value: 1
    },
    content: {
      type: String,
      value: "我没说过这句话。——鲁迅"
    },
    section_id: {
      type: Number,
      value: 1
    },
    importance_degree: {
      type: Number,
      value: 2
    },
    note_content: {
      type: String,
      value: "鲁迅的话真对！"
    },
    url : {
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

  }
})

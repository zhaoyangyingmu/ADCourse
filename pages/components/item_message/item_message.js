// pages/components/item_message/item_message.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 消息类型用于决定消息图标
    message_type: {
      type: String,
      value: 0
    },
    title: {
      type: String,
      value: "消息"
    },
    message: {
      type: String,
      value: "系统消息，，，，系统消息，，，，系统消息，，，，\n系统消息，，，，系统消息，，，，"
    },
    time: {
      type: String,
      value: "2019-6-17 16:33"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    image_urls: [
      "/static/images/message.png"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

// pages/components/item-to-learnning.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        url: {
            type: String,
            value: ''
        },
        status: {
            type: Number,
            value: 1
        },
        time: {
            type: String,
            value: ''
        },
        target: {
            type: String,
            value: '.'
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
        onNavigateTo: function(event) {
            const {
                target
            } = event.currentTarget.dataset;
            wx.navigateTo({
                url: `${target}`,
            })
        }
    }
})
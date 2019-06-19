Component({
    properties: {
        icon: {
            type: String,
            value: '../static/icon/ic_task.png'
        },
        title: {
            type: String,
            value: '我的'
        },
        target: {
            type: String,
            value: '.'
        }
    },
    data: {

    },
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
});
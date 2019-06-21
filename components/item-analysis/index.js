Component({
    properties: {
        title: {
            type: String,
            value: '累计'
        },
        value: {
            type: String,
            value: '0'
        },
        unit: {
            type: String,
            value: '分'
        },
        disable: {
            type: Boolean,
            value: true
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
                disable,
                target
            } = event.currentTarget.dataset;
            if (!disable)
                wx.navigateTo({
                    url: `${target}`,
                })
        }
    }
});
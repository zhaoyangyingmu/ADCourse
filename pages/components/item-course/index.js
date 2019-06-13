Component({
    properties: {
        url: {
            type: String,
            value: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        },
        price: {
            type: String,
            value: '0.0'
        },
        unit: {
            type: String,
            value: '￥'
        },
        date: {
            type: String,
            value: ''
        },
        todo: {
            type: String,
            value: '开学'
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
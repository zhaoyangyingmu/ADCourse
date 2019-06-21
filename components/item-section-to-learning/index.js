Component({
    properties: {
        url: {
            type: String,
            value: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        },
        tag: {
            type: String,
            value: '精选主题'
        },
        target: {
            type: String,
            value: '.'
        }
    },
    data: {

    },
    methods: {
        onNavigateTo: function (event) {
            const {
                target
            } = event.currentTarget.dataset;
            wx.navigateTo({
                url: `${target}`,
            })
        }
    }
});
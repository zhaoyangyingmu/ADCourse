# ADCourse

[DarkYoung](https://github.com/DarkYoung) `16302010059@fudan.edu.cn`

---


## 目录结构

- `-` 表示展开目录说明
- `+` 表示不展开说明

```
- ADCourse
    + colorui                       # 第三方css样式库
    - components                    # 自定义组件
      + item-analysis               # 用户数据分析组件：已修学分、已选课程
      + item-mine                   # “我的”组件：我的笔记、我的收藏
      + item-question               # 单选题卡片
      + item-section-to-learning    # 待学习小节卡片
      + item-theme-course           # 主题课程卡片
      + item-to-learning            # 已选课程卡片
      + item-toast                  # 自定义Toast
      + item_collection             # 添加收藏卡片
      + item_delete_note_button     # 删除按钮
      + item_header                 # 头部组件
      + item_knowledge              # 添加笔记卡片
      + item_mesage                 # 笔记内容 
      + item_sction                 # 小节内容
      + static/icon                 # 自定义组件使用的静态资源
    - miniprogram_npm               # 使用npm管理第三方库、自定义库
        - api                       # 封装网络请求
            api.js                  # 使用rxjs封装get、post、put、delete请求
            config.js               # 配置文件
            userApi.js              # 封装用户相关网络请求：登录、注册、获取用户信息
            courseApi.js            # 封装课程相关网络请求：选课、使用不同方式获取课程信息api等
            chatApi.js              # 封装聊天相关网络请求：获取知识点、获取/提交小节测试、更新课程学习进度
            collectionApi.js        # 封装收藏功能网络请求
            noteApi.js              # 封装笔记功能网络请求
        - util                      # 封装工具类
            errorCode.js            # 错误码
            UserException.js        # 自定义异常
            errorHandler.js         # 异常处理工具类
        + vant-weapp                # 第三方组件库
        + rxjs-wx                   # 第三方库：为微信小程序封装的rxjs
    - pages                         # 小程序界面
        + personal                  # 个人信息主页、编辑个人信息
        + timeline                  # 学习进度
        + chatroom                  # 聊天室
        + collections               # 我的收藏
        + common                    # 公共模块，header、footer
        + course                    # 课程详情
        + find                      # 发现界面
        + index                     # 首页（弃）
        + logs                      # 日志（弃）
        + notes                     # 我的笔记、编辑笔记
        + study                     # 学习界面
        + system                    # 系统消息界面
        + test                      # 小节测试界面
        + themecourses              # 主题课程详情
    - static                        # 静态资源
        + icon                      # 应用图标
        + images                    # 图片
    + utils                         # 其他工具类
    .gitignore                      # 配置需要排除在版本管理控制之外的文件
    app.js                          # 小程序架构文件，逻辑代码部分
    app.json                        # 小程序架构文件，公共配置文件
    app.wxss                        # 小程序架构文件，公共样式表文件
    package.json                    # npm项目配置
    README.md                       # 项目说明

```

## 关键功能实现细节
### 引入第三方库

* 使用 npm 管理第三方库

引入 **rx-wx** 
```bash
sudo cnpm i -S rxjs-wx
```

引入 **vant** 组件库
```bash
sudo cnpm i -S vant-weapp --production
```

* 小程序不支持 `npm` 使用 `node_modules` 的方式引入第三方库
* 使用微信开发者工具提供的 `npm` 工具重新构建项目，生成 `miniprogram_npm` 目录
* 使用时使用相对路径（相对 `miniprogram_npm` 目录）引用，或者使用 `import`语法

由微信开发者工具编译生成的 `vant` 组件库目录包含版本信息，导致使用时报错（未定义），可手动去除版本信息


### 封装网络请求

使用基于事件的流式处理库 rxjs 封装网络请求
* 在 `app.js` 中配置请求域名
* 在 `miniprogram_npm/api` 目录下封装网络请求相关类（放在 miniprogram_npm 目录方便在 page 界面使用相对路径引入）
* 在 `config.js` 文件中配置每个模块的请求路径
* 按模块封装网络请求

封装微信标准网络请求接口`wx.request`
* 使用 `rxjs` 封装 `wx.request`，返回 `Observable`
    * 将传输类型设置为`application/json;charset=UTF-8`
    * 头部携带用户`openId`
    * 将非 `GET` 请求携带的数据转换成 `json` 传输
    
* 使用封装好的 `request`，进一步封装四个基本 `HTTP` 请求：`GET`、`POST`、`PUT`、`DELETE`

* 进一步封装每个模块的网络请求
    * `userApi.js` 负责处理用户登录/注册、获取信息请求，并将返回结果处理回显
    * `courseApi.js` 负责处理获取课程信息、选课等请求，并将返回结果进行处理并显示
    * `chatApi.js` 负责处理用户学习相关请求，包括获取知识点、小节测试、更新学习进度等
    * `collectionApi.js` 负责处理收藏相关请求
    * `noteApi.js` 负责处理笔记相关请求

### 登录/注册


### 学习进度


### 自定义组件




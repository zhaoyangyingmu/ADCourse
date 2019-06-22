# 高级 Web 技术项目——小程序端

---
## 相关图片

<img src="http://fitymistudio.cn/assets/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF1.png" width="30%"/><img src="http://fitymistudio.cn/assets/%E8%AF%BE%E7%A8%8B%E8%AF%A6%E6%83%851.png" width="30%"/><img src="http://fitymistudio.cn/assets/%E6%94%B6%E8%97%8F%E7%9F%A5%E8%AF%86%E7%82%B9.png" width="30%"/>

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

### 用户登录/注册

注册过程对用户是无感的。

* 判断全局存储的 `openId` 是否为空（null或''）
* 若为空，则调用 `wx.login` 进行登录，将获取到的 `res.code` 发送给后端，后端处理请求并返回用户 `openId`
* 获取用户微信账号基本信息并显示，三种方式
    * 全局存储的 `app.glbalData.userInfo`
    * 通过 `open-type` 调用 `getUserInfo`
    * 直接调用 `wx.getUserInfo`
* 通过封装的 `userApi.js` 请求用户小程序数据
    * 使用 `openId` 查询数据库数据
    * 若返回错误码为 `3001`，表示用户不存在，使用 `openId` 进行自动注册
    * 注册成功，重新请求用户数据
    * 将返回的用户信息进行渲染显示

### 学习进度

小程序要求学生每次只能学习一个小节，上一个小节学习完毕才能学习下一小节内容，期间可以学习其他已学过小节。
微信小程序端通过最新学习的小节信息，控制显示可以学习的小节信息。

* 最新学习完成第一章节的第3小节，则控制显示4个小节，第 4 小节（或下一章节的第 1 小节）表示最新可以学习的小节，其他小节不显示。
* 学生可以点击学习某个已显示的小节，学习完成所有知识点后可以进行小节测试。
* 完成小节测试，后台更新最新学习完成的小节信息（同时检查更新最新完成的章节信息）。
* 当所有章节完成后，更新课程学习状态。


### 自定义组件
组件化，反过来理解，写重复的页面，方法，写第二遍就烦了，抽取出来就是组件化，可以理解为公用的方法。
对于通用的数据，最先想到或者理应接触的是 `template`，但是 `template` 有个缺点，那就是只是页面效果，不会有对应的 `js` 操作。
`pages` 页面可以给 `component` 组件传递值，组件也对应的响应 `pages` 自定义的回调方法。

* 在根目录（方便全局引入）新建 `components` 文件夹，每个子文件夹对应一个自定义组件
* 在 `app.js` 注册自定义组件
* 在 `*.wxml` 文件通过注册的组件名使用自定义组件





Powdered by [DarkYoung](https://github.com/DarkYoung) `16302010059@fudan.edu.cn`

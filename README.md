# ADCourse

[DarkYoung](https://github.com/DarkYoung) `16302010059@fudan.edu.cn`

---


## 目录结构

```
- ADCourse
    + colorui               # 第三方css样式库
    - components            # 自定义组件
      + item-analysis       # 用户数据分析组件：已修学分、已选课程
      + item-mine           # “我的”组件：我的笔记、我的收藏
      + item-question       # 单选题卡片
      + item-section-to-learning  # 待学习小节卡片
      + item-theme-course   # 主题课程卡片
      + item-to-learning    # 已选课程卡片
      + item-toast          # 自定义Toast
      + item_collection     # 添加收藏卡片
      + item_delete_note_button   # 删除按钮
      + item_header         # 头部组件
      + item_knowledge      # 添加笔记卡片
      + item_mesage         # 笔记内容 
      + item_sction         # 小节内容
      + static/icon         # 自定义组件使用的静态资源
    - miniprogram_npm       # 使用npm管理第三方库、自定义库
        - api               # 封装网络请求
            api.js          # 使用rxjs封装get、post、put、delete请求
            config.js       # 配置文件
            userApi.js      # 封装用户相关网络请求：登录、注册、获取用户信息
            courseApi.js    # 封装课程相关网络请求：选课、使用不同方式获取课程信息api等
            chatApi.js      # 封装聊天相关网络请求：获取知识点、获取/提交小节测试、更新课程学习进度
            collectionApi.js  # 封装收藏功能网络请求
            noteApi.js      # 封装笔记功能网络请求
        - util              # 封装工具类
          errorCode.js      # 错误码
          UserException.js  # 自定义异常
          errorHandler.js   # 异常处理工具类
        + vant-weapp        # 第三方组件库
        + rxjs-wx           # 第三方库：为微信小程序封装的rxjs
    - pages                 # 小程序界面
        + personal          # 个人信息主页、编辑个人信息
        + timeline          # 学习进度
        + chatroom          # 聊天室
        + collections       # 我的收藏
        + common            # 公共模块，header、footer
        + course            # 课程详情
        + find              # 发现界面
        + index             # 首页（弃）
        + logs              # 日志（弃）
        + notes             # 我的笔记、编辑笔记
        + study             # 学习界面
        + system            # 系统消息界面
        + test              # 小节测试界面
        + themecourses      # 主题课程详情
    - static                # 静态资源
        + icon              # 应用图标
        + images            # 图片
    + utils                 # 其他工具类
    .gitignore              # 配置需要排除在版本管理控制之外的文件
    package.json            # npm项目配置
    README.md               # 项目说明

```


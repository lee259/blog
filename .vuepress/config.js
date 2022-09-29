module.exports = {
  "title": "树深遇鹿", // 网站标题
  "description": "生活不可能像你想象的那么好，但也不会像你想象的那么糟。", // 网站描述
  "dest": "docs/.vuepress/dist", // 打包后的文件存放路径
  "base": "/blog/", // 打包后的静态资源的路径
  // 网站的图标
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/avatar.png"
      }
    ]
  ],
  // 插件
  "plugins": [
    [
      '@vuepress/register-components', // 评论插件
    ]
  ],
  // 主题-reco
  "theme": "reco",
  // 导航栏/侧边栏配置，时间轴是自带的，只需要配置路由，link就是文档的路径。相当于vue中的路由
  "themeConfig": {
    // 导航栏
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "随笔",
        "icon": "reco-document",
        "link": "/theme-reco/theme-reco/"
      },
      {
        "text": "留言板",
        "icon": "reco-suggestion",
        "link": "/theme-reco/message-board.md"
      },
      {
        "text": "关于我",
        "icon": "reco-account",
        "items": [
          {
            "text": "个人信息",
            "link": "/theme-reco/about.md",
          },
          {
            "text": "掘金",
            "link": "https://juejin.cn/user/3281394147006381",
            "icon": "reco-juejin"
          }
        ]
      }
    ],
    // 侧边栏，auto标识自动生成，每个文档都会根据标题生成目录，也可以自己配置
    // "sidebar": "auto",
    "sidebar": {
      "/theme-reco/theme-reco/": [
        "",
        "timer"
      ]
    },
    // 评论插件的配置
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    },
    // 网站logo
    "logo": "/avatar.png",
    // 是否开启搜索
    "search": true,
  }
}
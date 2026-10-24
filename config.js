/* =================================================================
   ★★★ 网站配置文件 ★★★
   所有可修改的内容都集中在这个文件里，修改后刷新网页即可生效。
   ================================================================= */

const SITE_CONFIG = {

    // ==========================================
    // 网站全局配置
    // ==========================================
    site: {
        name: "Enikawa_Official HOME",            // 【必填】浏览器标签页显示的网站名字
        favicon: "./tx.jpg"              // 【必填】网站图标路径（支持 ico / png / svg）
    },

    // ==========================================
    // 背景图片配置
    // ==========================================
    background: {
        enable: true,                         // 【开关】true 启用背景图，false 关闭背景图
        images: [                             // 【壁纸列表】支持多张图片自动轮播
            "1.png"
        ],
        interval: 5,                          // 【轮播间隔】单位：秒（建议 >= 3 秒）
        blur: 0,                              // 【模糊度】单位：px（0 为不模糊，推荐 3~10）
        opacity: 0.5,                        // 【透明度】0.0 ~ 1.0（推荐 0.1~0.3，避免影响卡片阅读）
        fit: "cover"                          // 【对齐方式】cover(放大) / contain(裁剪) / auto(自适应) / fill(拉伸)
    },

    // ==========================================
    // 个人资料配置
    // ==========================================
    profile: {
        name: "Enikawa_Official",            // 【名字】主页显示的名字
        nameTypeSpeed: 100,                   // 【名字打字速度】毫秒/字（100 代表每秒 10 个字）
        nameCursorDelay: 1000,                // 【光标延迟】名字打完后，光标停留多久消失（毫秒）
        avatarSrc: "./tx.jpg",                // 【头像路径】默认读取当前目录下的 tx.jpg
        signaturePause: 2,                    // 【签名停留时间】签名打完后，停留几秒开始删除（秒）
        signatureTypeSpeed: 60,               // 【签名打字速度】毫秒/字（越小越快）
        signatureDeleteSpeed: 30,             // 【签名删除速度】毫秒/字（越小越快）
        signatures: [                         // 【签名列表】支持多条签名无限循环播放
            "awa",
			"Enik-->Эник",
            "初三牲",
            "性染色体:XY",
			"Энику очень нравятся песни АДЛИН.",
			"Atri: My Dear Moments",
			"沉默是金但金太多也沉"
        ]
    },

    // ==========================================
    // 卡片内容配置（按顺序从上往下生成）
    // ==========================================
    cards: [
        // ----- 卡片类型 1：纯文本卡片 -----
        {
            title: "关于我/Enik/Эник",                   // 【标题】卡片左上角显示的文字
            type: "text",                     // 【类型】固定为 "text"
            content: "性染色体:XY | 初三牲 | АДЛИН循环中 | 折腾X86比写作业积极 | C#&py半吊子 | 大部分时间在听，偶尔想说点什么 | 夜行生物，白天靠电脑续命"
        },
        // ----- 卡片类型 2：标签药丸卡片 -----
        {
            title: "兴趣与偏好",               // 【标题】
            type: "chips",                    // 【类型】固定为 "chips"
            content: [                        // 【内容】填写字符串数组
                "X86",
				"Windows",
				"Android安卓",
				"AOSP",
				"Material You",
                "老电脑复活",
                "图吧垃圾佬",
                "装机",
                "Linux折腾",
				"OpenWRT软路由",
				"C#",
				"Python",
				"Kali脚本小子",
				"系统重装",
				"АДЛИН",
				"俄语歌",
				"Miku术曲",
				"PHONK",
				"后朋克",
				"内向",
				"夜行生物",
				"慢热",
				"偶尔冒泡",
				"白天靠电脑续命",
				"哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
				"YouTube",
				"Google",
				"Microsoft",
				"OpenWRT",
				"Rainyun"
            ]
        },
        // ----- 卡片类型 3：链接列表卡片 -----
        {
            title: "网站导航",                 // 【标题】
            type: "list",                     // 【类型】固定为 "list"
            content: [                        // 【内容】填写对象数组
                { name: "Enik的导航页", url: "https://enik.de5.net/" },
				{name: "Enik的Blog", url: "https://blog-enik.de5.net/" },
				{name: "Enik的QQ空间", url: "https://user.qzone.qq.com/1334204015/main" },
				{name: "Enik的telegraph-image", url: "https://fzsg.de5.net/" },
				{ name: "Alist running on OpenWrt", url: "http://enik.ccwu.cc:59966/" }
            ]
        },
        // ----- 卡片类型 4：联系方式卡片（列表形式，可选中复制） -----
        {
            title: "联系方式",                 // 【标题】
            type: "contact",                  // 【类型】固定为 "contact"
            content: [                        // 【内容】填写对象数组
                {
                    name: "QQ邮箱",              // 左侧标签
                    value: "enikawa@qq.com",   // 右侧内容
                    link: "mailto:enikawa@qq.com" // 可选，填写后自动变成可点击链接
                },
				{
                    name: "Gmail邮箱",              // 左侧标签
                    value: "enikqwq@gmail.com",   // 右侧内容
                    link: "mailto:enikqwq@gmail.com" // 可选，填写后自动变成可点击链接
                },
                {
                    name: "微信id",
                    value: "enikawa"    // 不填 link，则为纯文本，方便手动复制
                },
                {
                    name: "QQ",
                    value: "1334204015"
                },
				{
                    name: "BiliBili",
                    value: "Enik的BiliBili主页",
					link:"https://space.bilibili.com/3546656236636442"
                },
				{
                    name: "telegram",
                    value: "@enikawa",
					link:"https://t.me/enikawa"
                }
            ]
        },
				{
    title: "技术栈",
    type: "badges",
    content: [
        { name: "HTML5", img: "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white", url: "https://developer.mozilla.org/zh-CN/docs/Web/HTML" },
        { name: "CSS3", img: "https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white", url: "https://developer.mozilla.org/zh-CN/docs/Web/CSS" },
        { name: "JavaScript", img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black", url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" },
        { name: "MIT License", img: "https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square", url: "https://github.com/Sdbdzh/M3E_html_HOME/blob/main/LICENSE" },
        { name: "Material You", img: "https://img.shields.io/badge/UI-Material%203%20Expressive-984061?style=flat-square", url: "https://m3.material.io/" },
        { name: "GitHub", img: "https://img.shields.io/badge/GitHub-Sdbdzh%2FM3E__html__HOME-181717?style=flat-square&logo=github&logoColor=white", url: "https://github.com/Sdbdzh/M3E_html_HOME" }
    ]
},
		{
    title: "版权声明",
    type: "text",
    content: "© 2026 Enik / Эник. All Rights Reserved."
}
    ]
};
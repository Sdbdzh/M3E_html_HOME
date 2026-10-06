# M3Ehtml 个人主页

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)
![Material You](https://img.shields.io/badge/UI-Material%203%20Expressive-984061?style=flat-square)

一个基于纯原生 HTML / CSS / JavaScript 构建的类 Android 12+ **M3E (Material 3 Expressive)** 风格个人主页。无需构建工具，单文件即可运行，所有内容高度集中配置，非常适合作为开发者的个人名片或卡片式主页。

- **在线演示**：[enik.de5.net](https://enik.de5.net/)
- **作者 GitHub**：[@sdbdzh](https://github.com/sdbdzh)
- **项目仓库**：[Sdbdzh/M3E_html_HOME](https://github.com/Sdbdzh/M3E_html_HOME)

---

## 📸 预览截图



![页面预览](./preview.png)


---

## ✨ 核心特性

### 🎨 视觉与动效 (M3E 规范)
- **底部充能波纹**：页面加载时，底部粉色光晕向上蔓延，卡片随之从下到上逐级浮现。
- **卡片充能亮起**：波纹扫过卡片时，卡片瞬间提亮并带有粉色外发光，随后内部文字交错浮现。
- **头像点击传导**：点击头像会从中心向四周扩散波纹，波纹扫过哪个卡片或设置按钮，哪个就瞬间亮起。
- **Q弹模糊浮现**：头像拥有强烈的果冻回弹效果，配合从模糊到清晰的过渡。
- **打字机循环**：名字打完后光标延迟消失；签名支持多文本无限循环打字、等待、删除。
- **精准水波纹**：区分卡片背景与内部标签（点卡片空白触发卡片波纹，点标签触发标签波纹）。

### ⚙️ 功能与体验
- **配置高度集中**：所有文本、链接、图片路径、动画时长全部收敛在 `SITE_CONFIG` 对象中，改内容不用翻代码。
- **全局防误触**：默认禁用文本高亮，防止连续点击时出现蓝色选中块；联系方式卡片保留可复制白名单。
- **主题切换**：支持浅色（Light）、深色（Dark）、跟随系统（System）三种模式，并自动写入 `localStorage` 持久化保存。
- **响应式设计**：完美适配 PC、平板和手机端布局，移动端设置面板自动变为底部弹窗。
- **零依赖**：无需 Node.js、无需 npm，双击 `index.html` 即可运行。

---


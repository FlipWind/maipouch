# MaiPouch 是什么？
MaiPouch 是一个面向广大 Maimai 玩家开发的多功能工具箱。  

我们的应用内部集成了许多功能，包括但不限于「Maimai DX 服务器状态」、「查找附近机厅」、「单曲 Rating 计算」以及最重要的「Best 50 查询」功能。

我们的开发是希望 Maimai 玩家通过 MaiPouch 能够更容易、更高效地推分，获得更自由的游玩体验。

## 当前状态 <Badge type="danger" text="Not Released" />
MaiPouch 当前**没有**发布。

::: tip
由于开发者是 2026 届高中生，进入高三，所以开发要推迟一年。  
虽然 Github 上仅有两个 Commit，但是本地已经有许多的 UI 写好，请多多期待吧！
:::

## 支持平台
理论上 MaiPouch 支持所有主流平台：Android、Desktop、Web 和 iOS。

但实际上，由于开发者的设备限制，我们无法面面俱到，因此 iOS 平台我们不能很好地支持到。
这时候就只能拜托志愿者来帮助我们啦。

对于不能安装软件的用户，我们推荐您通过 Web 访问我们的服务。
不必担心，所有我们支持的平台，用户所能使用的功能都是别无二至的（除了 Web 端可能的网速问题），
而为所有的用户提供相同的服务正是 MaiPouch 使用 [Kotlin Multiplatform](https://www.jetbrains.com/kotlin-multiplatform/) 的初衷。

同时，我们开放了源码及编译后的二进制文件，如果您有经验，我们非常欢迎您自主研究、或是加入我们的开发！

## 贡献
如果您也是一位开发者，我们欢迎您向该项目提交 PR 参与开发！  
我们也欢迎您加入我们喵。  
阅览 [交流](/docs/contact.md) 部分以联系我们。

下面是一些技术细节：
- [Kotlin Multiplatform](https://www.jetbrains.com/kotlin-multiplatform/) 架构
- 采用声明式框架 [Compose Multiplatform](https://www.jetbrains.com/compose-multiplatform/) 构建 UI以支持多个平台
- 使用 [Material Design 3](https://m3.material.io/) 作为设计语言
- [Diving-Fish/maimaidx-prober](https://www.diving-fish.com/maimaidx/prober/) 提供部分 API 服务
- [落雪咖啡屋](https://maimai.lxns.net/) 提供部分 API 服务

使用到的第三方库：
- 绘制图表 [KoalaPlot/koalaplot-core](https://github.com/KoalaPlot/koalaplot-core)

## License & 声明
本项目基于 `APGL-3.0 License`，二次开发前请仔细阅读。  
本项目（MaiPouch）是基于兴趣而开发，仅用于学习和测试。
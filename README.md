# Teyda_libonebot

[![OneBot](https://img.shields.io/badge/OneBot-12-black)](https://12.onebot.dev/)
[![Version](https://img.shields.io/github/v/tag/teyda/teyda_libonebot.svg)](https://github.com/teyda/teyda_libonebot/releases)
[![License](https://img.shields.io/github/license/teyda/teyda_libonebot)](https://github.com/teyda/teyda_libonebot/blob/main/LICENSE)

Deno 的 LibOneBot 库，可以帮助开发者快速在新的聊天机器人平台实现 OneBot v12 接口标准。

## 功能

- 提供 OneBot v12 标准 Event、Action、ActionResp 类型，以及相应的工具函数
- 提供 OneBot v12 实现端标准网络通讯协议

## 最小实例

```ts
import { OneBot, ImplConfig, DefaultHandler } from "./src/mod.ts"

const ob = new OneBot({
    impl: "idr",
    platform: "telegram",
    self_id: "114514",
    config: ImplConfig.Default(),
    action_handler: new DefaultHandler()
})

ob.run()
```

## 鸣谢

本项目的部分灵感来自 Walle-core，在此向其开发者致谢。

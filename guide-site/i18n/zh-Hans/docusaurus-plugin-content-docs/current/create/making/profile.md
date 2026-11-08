---
title: 美化作品介绍
seo_title: 美化作品介绍 - 封面、详细说明、类型与标签
description: 说明如何放入多张封面、用 Markdown 与 HTML 美化详细说明、用 Google AI Studio 制作介绍页，以及创作者指南、推荐模型、类型与标签。也回答封面最多可以放几张。
slug: /create/profile
sidebar_position: 3
last_update:
  date: 2026-11-08
---

# 美化作品介绍

用户在挑选作品前看到的，是**基本信息**分页的内容。填好封面、详细说明、创作者指南和推荐模型，就能完成作品介绍画面。写在这里的文字不会传给 AI。

:::info
这是专家模式的说明。简易模式请见[素材与 AI 图片](/create/simple/assets#设置个人资料图片)和[选填](/create/simple/extras#选填)。
:::

## 封面

封面可以放 1～10 张。有多张时，会依设置的间隔切换到下一张。

<ScreenStep src="/img/screens/zh-Hans/profile-cover.png" device="part" alt="作品封面预览、上传与从素材选取入口" caption="两张封面与切换间隔">

- **上传图片**：上传你已有的图片。可使用 JPG、PNG、WEBP、GIF、HEIC 文件，最大 5MB。
- **从素材选取**：把在**素材**分页做好的图片当作封面。
- **切换间隔**：切换到下一张的时间。每点一次按钮会增减 0.5 秒，直接输入时请输入 0.5 秒到 60 秒之间的值。

点击缩略图上的 **×** 按钮，就会移除该封面。

</ScreenStep>

<ScreenStep src="/img/screens/zh-Hans/profile-cover-picker.png" alt="从已有素材中选择作品封面" caption="从素材选取">

点击**从素材选取**，会显示素材分页中所有已完成的图片。选好要当封面的图片，点击**将 N 张加入封面**。

素材分页还没有图片的话，清单是空的。请先到[准备图片](/create/images)制作。

</ScreenStep>

:::tip[挑选封面]
封面是作品列表中最先看到的图片。第一张请放能清楚看到主角脸部的直式图片。有多张时，也可以为每个人物各放一张来介绍登场人物。
:::

## 详细说明

**详细说明**是作品介绍画面的本文。最多 50,000 字，可以混用一般文字、Markdown、HTML。

- **预览**：确认用户看到的样子。
- **用 Google AI Studio 制作**：在输入栏下方。和 Gemini 对话，制作 HTML 介绍页。步骤请见[下方](#用-ai-studio-制作介绍页)。

<ScreenStep src="/img/screens/zh-Hans/profile-description-preview.png" alt="作品详细说明的预览窗口" caption="详细说明预览">

在预览中，Markdown 的标题、清单、粗体会依格式显示。

介绍依照这个顺序写，读起来会比较顺。

1. 一两句话的作品摘要
2. 世界观与开场状况
3. 登场人物介绍
4. 玩法（可以试着做什么）

</ScreenStep>

### 用 AI Studio 制作介绍页

从详细说明字段下方的**用 Google AI Studio 制作**开始。和 Gemini 对话，制作包含角色插图与作品介绍的 HTML 页面。

1. 点击**复制作品信息**。作品设置、图片网址和目前写的详细说明会一起复制。
2. 点击**打开 Google AI Studio**。第一次使用时，用 **Remix** 创建自己的工作室。
3. 在输入框粘贴作品信息，再在下方写一两行想要的样子后送出。
4. 完成后，在上方确认已选择**프로필 HTML**（个人介绍 HTML），再点击 **MYMI에 붙여넣을 코드 복사**（复制 MYMI 代码）。
5. 贴到 MYMI 的**详细说明**字段，用**预览**确认后点击**保存草稿**。

点击**使用指南**，会打开分步骤的说明。实际的 AI Studio 画面请见[跟着 Google AI Studio 画面操作](/create/ai-studio)。

:::info
可在 Google 账号的免费请求额度内使用。不需要付款或 API 密钥。要放入插图，素材分页里需要有完成的图片，标示为成人向的图片不会使用。
:::

:::warning[删除图片之前]
用作品信息做出的 HTML 会包含图片的实际网址。如果在素材分页删除那张图片，介绍页上的图片也会无法显示。
:::

## 创作者指南

<ScreenStep src="/img/screens/zh-Hans/profile-guide.png" device="part" alt="创作者指南编辑与版本记录区域" caption="创作者指南">

**创作者指南**要写作品的玩法或添加的内容。它会另外显示在作品介绍画面。一则内容最多可写 5,000 字。

修改目前的内容，就是修改那一则。点击**写新内容**，目前的内容会加上版本号（V1、V2…）和日期移到下方清单，并可以写新的内容。

</ScreenStep>

> 范例：一开始先问民宇「这里是哪里？」。有关记忆的问题问书妍，就能一条一条获得线索。

## 推荐模型

<ScreenStep src="/img/screens/zh-Hans/profile-models.png" device="part" alt="推荐聊天模型的选择入口" caption="推荐模型">

可以先选好最多 5 个适合这部作品的聊天模型。它们在作品介绍画面和聊天的模型清单中会标示为**推荐**，用户仍然可以选择其他模型。

点击**选择**，会打开与聊天画面相同的模型清单。

</ScreenStep>

## 类型与标签

- **类型**：选 1～2 个。从浪漫、BL、GL、奇幻、武侠、科幻、「动作、冒险」、日常、剧情、喜剧、「悬疑、惊悚」、恐怖、「历史、古装」中挑选。
- **标签**：至少加入 1 个。简短写下作品的题材或气氛。例：`地下城市`、`失忆`、`反乌托邦`
- **读者群**（男性向、女性向）要在**其他设置**分页另外选择。

## 遇到问题时

<details>
<summary>复制的作品信息里没有图片网址</summary>

素材分页要有完成的图片，才会包含图片网址。请先上传或生成图片，再点击一次**复制作品信息**。

</details>

<details>
<summary>粘贴 HTML 之后，预览和我想的不一样</summary>

请在工作室的 **프로필 HTML**（个人介绍 HTML）分页点击 **MYMI에 붙여넣을 코드 복사**（复制 MYMI 代码），再把整段重新粘贴。如果版面还是跑掉，请 Gemini 修改。

</details>

<details>
<summary>封面最多可以放几张？</summary>

最多 10 张。想再放的话，请先移除一张。

</details>

## 下一步

<CardGrid>
<Card to="/create/prompt" icon="book" title="撰写提示词">撰写 AI 读取的设置。</Card>
<Card to="/create/images" icon="image" title="准备图片">制作封面与对话中要用的图片。</Card>
</CardGrid>

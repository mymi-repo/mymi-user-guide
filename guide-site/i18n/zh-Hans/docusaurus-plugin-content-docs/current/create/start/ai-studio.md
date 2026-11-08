---
title: 跟着 Google AI Studio 画面操作
seo_title: 跟着 Google AI Studio 画面操作 - 组件与 HTML
description: 用实际的 AI Studio 画面，说明如何用 Google AI Studio 制作组件与详细说明 HTML。从复制作品信息、Remix、提出需求、复制代码到贴到 MYMI，简易与专家模式步骤相同。
slug: /create/ai-studio
sidebar_position: 4
last_update:
  date: 2026-11-08
---

# 跟着 Google AI Studio 画面操作

这里用实际的 Google AI Studio 画面，说明在作品制作画面的**用 Google AI Studio 制作**点击**使用指南**后出现的步骤。黄色外框就是要点击的地方。

- 以电脑画面为准。在手机上位置不同的步骤，另外注明。
- AI Studio 画面会以英文显示。按钮名称照画面上显示的写。
- 简易模式和专家模式、组件和详细说明的步骤都一样。不同的地方写在该步骤里。

## 开始之前

在 MYMI 先点击**复制作品信息**，再点击**打开 Google AI Studio**。作品设置、图片网址和目前写的详细说明会一起复制。

- 组件：简易模式在**组件**步骤上方，专家模式在**组件**分页上方。
- 详细说明：简易模式在**选填**步骤的详细说明标题下方，专家模式在**基本信息**分页的详细说明字段下方。

:::info
可在 Google 账号的免费请求额度内使用。不需要付款或 API 密钥。
:::

## 1. 点击「Continue to the app」

这是一开始出现的 Google 提示，意思是这个应用程序是别人做的。这是 MYMI 做的工作室，直接继续就可以了。

<Screenshot src="/img/screens/ai-studio/continue.webp" alt="This app is from another developer 提示窗口。Continue to the app 按钮有黄色外框" caption="应用程序由其他开发者制作的提示" />

## 2. 点击右上角的「Remix」

**只有第一次**要做。复制共用工作室，创建自己的工作室。创建一次后，之后就跳过这个步骤。

在手机上，点击画面最下方右侧的 **⋯**，就能找到 Remix。

<Screenshot src="/img/screens/ai-studio/remix.webp" alt="共用工作室画面。右上角的 Remix 按钮有黄色外框" caption="共用工作室" />

## 3. 取好名称后点击「Remix app」

名称取个之后容易找到的就可以了。例：月光书店工作室。

<Screenshot src="/img/screens/ai-studio/remix-dialog.webp" device="part" alt="Remix 窗口。App name 字段和 Remix app 按钮有黄色外框" caption="Remix 窗口" />

## 4. 粘贴并写下想要的样子后送出

在左下方的输入框粘贴从 MYMI 复制的作品信息。在下方写一两行想要的样子，再点击箭头送出。

> 例：做成能看到好感度和今天日期的学生手册样式。

在手机上，点击画面最下方的 **Chat** 就会出现输入框。长按输入框来粘贴。

<Screenshot src="/img/screens/ai-studio/request.webp" alt="左下方的输入框里有作品信息和想要的样子，输入框和送出箭头有黄色外框" caption="粘贴作品信息并写下想要样子的输入框" />

## 5. 等待制作完成

出现「Running for …」这类英文的进度消息，就表示正在制作。组件通常需要 2～5 分钟，详细说明需要 1～3 分钟。请不要关闭窗口，耐心等待。看不懂 Gemini 回复里的表格和专有名词也没关系。

<Screenshot src="/img/screens/ai-studio/running.webp" alt="Gemini 显示 Running for 22s、正在制作的画面。进度消息有黄色外框" caption="制作中" />

## 6. 查看结果并复制代码

右侧出现「내 요청으로 만든 결과（依我的要求做出的结果）」就完成了。用下方的预览确认样子，再点击 **MYMI에 붙여넣을 코드 복사**（复制 MYMI 代码）。如果是详细说明，请先在上方确认已选择**프로필 HTML**（个人介绍 HTML）。想修改的地方，在第 4 步的输入框再说一次即可。

无法复制时，点击正下方的**직접 선택해서 복사**（自行选取复制）。在手机上，点击画面最下方的 **Preview** 就能看到结果。

<Screenshot src="/img/screens/ai-studio/copy-code.webp" alt="내 요청으로 만든 결과（依我的要求做出的结果）的标示与 MYMI에 붙여넣을 코드 복사（复制 MYMI 代码）按钮。复制按钮有黄色外框" caption="结果与复制代码按钮" />

## 7. 也复制写着何时显示的句子

**只有组件**要做。Gemini 的回复中有一句写着何时显示组件的句子。没有这句话，组件就不会出现在聊天中。

<Screenshot src="/img/screens/ai-studio/usage-sentence.webp" alt="左侧的 Gemini 回复中有写着何时显示的句子，并有黄色外框" caption="Gemini 回复中写着何时显示的句子" />

## 8. 贴到 MYMI 并保存

把复制的代码和句子贴到下方的字段，用预览确认样子后保存。

| 要做的东西 | 粘贴代码的位置 | 粘贴何时显示的位置 | 保存 |
|---|---|---|---|
| 简易模式组件 | **添加组件** → **JSX 代码**字段 | **使用描述**字段 | 右下角的箭头按钮 |
| 专家模式组件 | 组件分页的**添加组件** → **JSX 代码**字段 | 提示词分页。使用基本型时，贴到**组件输出规则**里该组件的字段 | **保存草稿** |
| 简易模式详细说明 | 选填步骤的详细说明选择**使用** → HTML 输入栏 | 无 | **完成** |
| 专家模式详细说明 | 基本信息分页的**详细说明**字段 | 无 | **保存草稿** |

## 之后从「My apps」打开

自己的工作室在 AI Studio 首页左侧的 **My apps** 里。从那里打开后，从第 4 步开始做就可以了。不需要再 Remix 一次。

<Screenshot src="/img/screens/ai-studio/my-apps.webp" device="part" alt="AI Studio 左侧菜单的 My apps 和自己的工作室清单有黄色外框" caption="My apps" />

:::note
如果 Google 变更 AI Studio 画面，按钮位置可能会不同。
:::

## 遇到问题时

<details>
<summary>出现「Failed to list API keys」之类的权限错误</summary>

请刷新页面，再点击一次 **Remix**。

</details>

<details>
<summary>Preview 是空白的</summary>

稍等一下，再点击 Preview 上方的刷新。

</details>

<details>
<summary>无法复制代码</summary>

点击**직접 선택해서 복사**（自行选取复制），选取全部代码后复制。

</details>

<details>
<summary>显示免费额度已用完</summary>

等额度恢复后再继续制作。

</details>

<details>
<summary>出现「AI Features」之类的建议</summary>

请不要点击。这些功能在 MYMI 的组件和详细说明中无法运作。

</details>

<details>
<summary>详细说明没有出现插图</summary>

素材里有完成的图片时，作品信息才会包含图片网址。制作图片后再复制一次。标示为成人向的图片不会用在详细说明中。

</details>

## 下一步

<CardGrid>
<Card to="/create/components" icon="code" title="加入组件">在专家模式修改组件并链接到提示词。</Card>
<Card to="/create/profile" icon="pen" title="美化作品介绍">美化专家模式的封面与详细说明。</Card>
<Card to="/create/simple/extras" icon="layers" title="设定集、组件与选填">填写简易模式的组件与详细说明。</Card>
</CardGrid>

---
title: 加入组件
seo_title: 加入组件 - 制作状态窗口、道具栏与选项
description: 说明如何用 JSX 代码或 AI Studio 制作状态窗口、道具栏、选项等在对话中弹出的 UI，确认变量默认值与预览，并链接到提示词。也说明组件输出规则与使用图片的组件。
slug: /create/components
sidebar_position: 9
last_update:
  date: 2026-11-08
---

# 加入组件

组件是**AI 在聊天中显示的 UI**。先做好状态窗口、道具栏、选项这类想呈现的内容，AI 就会在需要时调用。不懂代码也没关系，可以通过**用 Google AI Studio 制作**来做。

:::info
这是专家模式的说明。简易模式请见 [设定集、组件与选填](/create/simple/extras#components)。
:::

## 添加组件

1. 点击**添加组件**。
2. 把代码贴到 **JSX 代码**栏。点击**粘贴**，就会放入剪贴板中的代码。
3. 在预览确认聊天中的样子。

组件名称和变量会从代码自动读取。

<ScreenStep src="/img/screens/zh-Hans/components-editor.png" device="part" alt="StatusWindow 的预览、JSX 代码、变量默认值与调用标签" caption="编辑组件">

- **JSX 代码**：`function 名称({ 变量 = 默认值 })` 形式的代码。代码围栏和 import 语句会自动整理。最多可写 20,000 字。
- **变量默认值**：显示从代码读到的变量与默认值。默认值会成为 AI 填入值的范例，预览也会用到。
- **调用标记**：「AI 在聊天中会这样调用」下方的标记。点击**复制**，贴到提示词分页使用。

</ScreenStep>

这是范例作品的状态窗口代码。必须有函数名称（`StatusWindow`）和至少一个变量（`hp`、`mp`）。

```jsx
function StatusWindow({ hp = 100, mp = 40 }) {
  const bar = (value, color) => (
    <div className="h-2 w-full rounded-full bg-slate-700">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
  return (
    <div className="my-2 w-full max-w-sm rounded-xl border border-cyan-400/40 bg-slate-900/90 p-3 text-slate-100">
      <div className="mb-2 flex items-center justify-between text-[11px] font-bold tracking-widest text-cyan-300">
        <span>STATUS</span>
        <span>检疫所 B-3</span>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <div className="mb-1 flex justify-between"><span>体力</span><span>{hp}/100</span></div>
          {bar(hp, "bg-rose-400")}
        </div>
        <div>
          <div className="mb-1 flex justify-between"><span>魔力</span><span>{mp}/100</span></div>
          {bar(mp, "bg-sky-400")}
        </div>
      </div>
    </div>
  );
}
```

## 链接到提示词

只添加组件的话，AI 不知道何时该调用。要在**提示词**分页写下何时调用。

- **基本型**：在**组件输出规则**为每个组件写下出现的时机。标记会照组件分页显示的样子（`<StatusWindow hp={100} mp={40} />`），连同规则句子自动加上。
  例：`战斗开始时与体力变化时。hp = 体力，mp = 魔力。`
- **自行撰写**：调用标记、出现时机、变量的含义全部自己写。可以直接粘贴在组件分页**复制**的标记，也可以把值的位置改成 `{value}`。

如果是自行撰写，就这样写。

```text
### 组件输出规则
在符合规则的时刻，把下方标签原样以单独一行输出。
- `<StatusWindow hp={value} mp={value} />`: 战斗开始时与体力变化时。hp = 体力，mp = 魔力。
```

:::info[组件是用来呈现的工具]
组件只是把 AI 填入的值画得好看而已。像体力计算这类，数值对不对取决于 AI 的回复。就算写了规则，AI 偶尔还是可能漏掉标签，或填入不同的值。
:::

## 用 AI Studio 制作

不懂代码，也可以和 Gemini 对话来制作组件。从组件分页上方的**用 Google AI Studio 制作**开始。

1. 点击**复制作品信息**。作品设置、图片网址和目前写的详细说明会一起复制。
2. 点击**打开 Google AI Studio**。第一次使用时，用 **Remix** 创建自己的工作室。
3. 在输入框粘贴作品信息，再在下方写一两行想要的样子后送出。
4. 完成后点击 **MYMI에 붙여넣을 코드 복사**（复制 MYMI 代码），再贴到 MYMI 的**添加组件** → **JSX 代码**字段。
5. 复制 Gemini 回复中写着何时显示的句子，贴到提示词分页。使用基本型时，贴到**组件输出规则**里该组件的字段。

点击**使用指南**，会打开分步骤的说明。实际的 AI Studio 画面请见[跟着 Google AI Studio 画面操作](/create/ai-studio)。

:::info
可在 Google 账号的免费请求额度内使用。不需要付款或 API 密钥。
:::

## 使用图片的组件

- 想让 AI 依场景挑选图片，就让组件把图片当作**变量**接收，并在提示词里像 `img="{{URL}}/A/1.webp"` 这样，把整个值写成素材路径。像 `url({{URL}}/…)` 这样夹在其他文字中间的话，不会被换成网址。
- 写了不存在的路径，会放入空值。请把组件做成只有图片值存在时才绘制。
- 变量的**默认值**不要用 `{{URL}}`，请放实际的图片网址（以 https 开头）或空值。
- 固定写在代码里的图片网址，如果删除那个素材，就会无法显示。

## 遇到问题时

<details>
<summary>显示「有组件找不到 function 名称。」</summary>

请确认代码是否以 `function 名称(...)` 的形式开头。箭头函数或没有名称的函数，读不到名称。

</details>

<details>
<summary>显示「有组件没有变量。请声明至少一个变量。」</summary>

必须声明函数接收的变量，至少一个。例：`function StatusWindow({ hp = 100 })`

</details>

<details>
<summary>改了代码，变量默认值却没变</summary>

用**粘贴**按钮整段换掉代码时，会重新读取默认值。如果是在代码栏一点一点修改，之前的默认值会留着，所以修改后请确认**变量默认值**。

</details>

<details>
<summary>点了预览里的按钮，对话却没有送出</summary>

作品制作画面的预览只是确认样子的地方，不会送到实际对话。完成制作后，从完成画面的**查看作品**开始对话确认。想在其他用户看到之前先测试，可以把**公开设置**设为**不公开**再完成制作。

</details>

## 下一步

<CardGrid>
<Card to="/create/publish" icon="send" title="公开与修改">完成制作并公开作品。</Card>
<Card to="/create/limits" icon="list" title="限制与规则一览">一次确认字数与数量的限制。</Card>
</CardGrid>

---
title: 跟著 Google AI Studio 畫面操作
description: 用實際的 AI Studio 畫面，說明如何用 Google AI Studio 製作元件與詳細說明 HTML。從複製作品資訊、Remix、提出需求、複製程式碼到貼到 MYMI，簡易模式和專家模式的步驟都一樣。
slug: /create/ai-studio
sidebar_position: 4
last_update:
  date: 2026-10-24
---

# 跟著 Google AI Studio 畫面操作

這裡用實際的 Google AI Studio 畫面，說明在作品製作畫面的**用 Google AI Studio 製作**點選**使用指南**後出現的步驟。黃色外框就是要點選的地方。

- 以電腦畫面為準。在手機上位置不同的步驟，另外註明。
- AI Studio 畫面會以英文顯示。按鈕名稱照畫面上顯示的寫。
- 簡易模式和專家模式、元件和詳細說明的步驟都一樣。不同的地方寫在該步驟裡。

## 開始之前

在 MYMI 先點選**複製作品資訊**，再點選**開啟 Google AI Studio**。作品設定、圖片網址和目前寫的詳細說明會一起複製。

- 元件：簡易模式在**元件**步驟上方，專家模式在**元件**分頁上方。
- 詳細說明：簡易模式在**選填**步驟的詳細說明標題下方，專家模式在**基本資訊**分頁的詳細說明欄位下方。

:::info
可在 Google 帳號的免費請求額度內使用。不需要付款或 API 金鑰。
:::

## 1. 點選「Continue to the app」

這是一開始出現的 Google 提示，意思是這個應用程式是別人做的。這是 MYMI 做的工作室，直接繼續就可以了。

<Screenshot src="/img/screens/ai-studio/continue.webp" alt="This app is from another developer 提示視窗。Continue to the app 按鈕有黃色外框" caption="應用程式由其他開發者製作的提示" />

## 2. 點選右上角的「Remix」

**只有第一次**要做。複製共用工作室，建立自己的工作室。建立一次後，之後就跳過這個步驟。

在手機上，點選畫面最下方右側的 **⋯**，就能找到 Remix。

<Screenshot src="/img/screens/ai-studio/remix.webp" alt="共用工作室畫面。右上角的 Remix 按鈕有黃色外框" caption="共用工作室" />

## 3. 取好名稱後點選「Remix app」

名稱取個之後容易找到的就可以了。例：月光書店工作室。

<Screenshot src="/img/screens/ai-studio/remix-dialog.webp" device="part" alt="Remix 視窗。App name 欄位和 Remix app 按鈕有黃色外框" caption="Remix 視窗" />

## 4. 貼上並寫下想要的樣子後送出

在左下方的輸入框貼上從 MYMI 複製的作品資訊。在下方寫一兩行想要的樣子，再點選箭頭送出。

> 例：做成能看到好感度和今天日期的學生手冊樣式。

在手機上，點選畫面最下方的 **Chat** 就會出現輸入框。長按輸入框來貼上。

<Screenshot src="/img/screens/ai-studio/request.webp" alt="左下方的輸入框裡有作品資訊和想要的樣子，輸入框和送出箭頭有黃色外框" caption="貼上作品資訊並寫下想要樣子的輸入框" />

## 5. 等待製作完成

出現「Running for …」這類英文的進度訊息，就表示正在製作。元件通常需要 2～5 分鐘，詳細說明需要 1～3 分鐘。請不要關閉視窗，耐心等待。看不懂 Gemini 回覆裡的表格和專有名詞也沒關係。

<Screenshot src="/img/screens/ai-studio/running.webp" alt="Gemini 顯示 Running for 28s、正在製作的畫面。進度訊息有黃色外框" caption="製作中" />

## 6. 查看結果並複製程式碼

右側出現「내 요청으로 만든 결과（依我的要求做出的結果）」就完成了。用下方的預覽確認樣子，再點選 **MYMI에 붙여넣을 코드 복사**（複製 MYMI 程式碼）。如果是詳細說明，請先在上方確認已選擇**프로필 HTML**（個人介紹 HTML）。想修改的地方，在第 4 步的輸入框再說一次即可。

無法複製時，點選正下方的**직접 선택해서 복사**（自行選取複製）。在手機上，點選畫面最下方的 **Preview** 就能看到結果。

<Screenshot src="/img/screens/ai-studio/copy-code.webp" alt="내 요청으로 만든 결과（依我的要求做出的結果）的標示與 MYMI에 붙여넣을 코드 복사（複製 MYMI 程式碼）按鈕。複製按鈕有黃色外框" caption="結果與複製程式碼按鈕" />

## 7. 也複製寫著何時顯示的句子

**只有元件**要做。Gemini 的回覆中有一句寫著何時顯示元件的句子。沒有這句話，元件就不會出現在聊天中。

<Screenshot src="/img/screens/ai-studio/usage-sentence.webp" alt="Gemini 回覆的左上方有寫著何時顯示的句子，並有黃色外框" caption="Gemini 回覆中寫著何時顯示的句子" />

## 8. 貼到 MYMI 並儲存

把複製的程式碼和句子貼到下方的欄位，用預覽確認樣子後儲存。

| 要做的東西 | 貼上程式碼的位置 | 貼上何時顯示的位置 | 儲存 |
|---|---|---|---|
| 簡易模式元件 | **新增元件** → **JSX 程式碼**欄位 | **使用描述**欄位 | 右下角的箭頭按鈕 |
| 專家模式元件 | 元件分頁的**新增元件** → **JSX 程式碼**欄位 | 提示詞分頁。使用基本型時，貼到**元件輸出規則**裡該元件的欄位 | **儲存草稿** |
| 簡易模式詳細說明 | 選填步驟的詳細說明選擇**使用** → HTML 輸入欄 | 無 | **完成** |
| 專家模式詳細說明 | 基本資訊分頁的**詳細說明**欄位 | 無 | **儲存草稿** |

## 之後從「My apps」開啟

自己的工作室在 AI Studio 首頁左側的 **My apps** 裡。從那裡開啟後，從第 4 步開始做就可以了。不需要再 Remix 一次。

<Screenshot src="/img/screens/ai-studio/my-apps.webp" device="part" alt="AI Studio 左側選單的 My apps 和自己的工作室清單有黃色外框" caption="My apps" />

:::note
如果 Google 變更 AI Studio 畫面，按鈕位置可能會不同。
:::

## 遇到問題時

<details>
<summary>出現「Failed to list API keys」之類的權限錯誤</summary>

請重新整理頁面，再點選一次 **Remix**。

</details>

<details>
<summary>Preview 是空白的</summary>

稍等一下，再點選 Preview 上方的重新整理。

</details>

<details>
<summary>無法複製程式碼</summary>

點選**직접 선택해서 복사**（自行選取複製），選取全部程式碼後複製。

</details>

<details>
<summary>顯示免費額度已用完</summary>

等額度恢復後再繼續製作。

</details>

<details>
<summary>出現「AI Features」之類的建議</summary>

請不要點選。這些功能在 MYMI 的元件和詳細說明中無法運作。

</details>

<details>
<summary>詳細說明沒有出現插圖</summary>

素材裡有完成的圖片時，作品資訊才會包含圖片網址。製作圖片後再複製一次。標示為成人向的圖片不會用在詳細說明中。

</details>

## 下一步

<CardGrid>
<Card to="/create/components" icon="code" title="加入元件">在專家模式修改元件並連結到提示詞。</Card>
<Card to="/create/profile" icon="pen" title="美化作品介紹">美化專家模式的封面與詳細說明。</Card>
<Card to="/create/simple/extras" icon="layers" title="設定集、元件與選填">填寫簡易模式的元件與詳細說明。</Card>
</CardGrid>

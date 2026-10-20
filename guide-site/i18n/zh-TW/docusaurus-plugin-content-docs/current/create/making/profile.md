---
title: 美化作品介紹
description: 說明如何放入多張封面、用 Markdown 與 HTML 美化詳細說明、用 AI Studio 製作介紹頁，以及創作者指南與推薦模型。
slug: /create/profile
sidebar_position: 3
last_update:
  date: 2026-10-07
---

# 美化作品介紹

使用者在挑選作品前看到的，是**基本資訊**分頁的內容。填好封面、詳細說明、創作者指南和推薦模型，就能完成作品介紹畫面。寫在這裡的文字不會傳給 AI。

:::info
這是專家模式的說明。簡易模式請見[素材與 AI 圖片](/create/simple/assets#設定個人檔案圖片)和[選填](/create/simple/extras#選填)。
:::

## 封面

封面可以放 1～10 張。有多張時，會依設定的間隔切換到下一張。

<ScreenStep src="/img/screens/zh-TW/profile-cover.webp" device="part" alt="放入兩張封面，並把切換間隔設為 2 秒的畫面" caption="兩張封面與切換間隔">

- **上傳圖片**：上傳你已有的圖片。可使用 JPG、PNG、WEBP、GIF、HEIC 檔案，最大 5MB。
- **從素材選取**：把在**素材**分頁做好的圖片當作封面。
- **切換間隔**：切換到下一張的時間。每點一次按鈕會增減 0.5 秒，直接輸入時請輸入 0.5 秒到 60 秒之間的值。

點選縮圖上的 **×** 按鈕，就會移除該封面。

</ScreenStep>

<ScreenStep src="/img/screens/zh-TW/profile-cover-picker.webp" alt="從素材選取視窗。素材分頁的圖片以格狀顯示" caption="從素材選取">

點選**從素材選取**，會顯示素材分頁中所有已完成的圖片。選好要當封面的圖片，點選**將 N 張加入封面**。

素材分頁還沒有圖片的話，清單是空的。請先到[準備圖片](/create/images)製作。

</ScreenStep>

:::tip[挑選封面]
封面是作品列表中最先看到的圖片。第一張請放能清楚看到主角臉部的直式圖片。有多張時，也可以為每個人物各放一張來介紹登場人物。
:::

## 詳細說明

**詳細說明**是作品介紹畫面的本文。最多 50,000 字，可以混用一般文字、Markdown、HTML。

1. **預覽**：確認使用者看到的樣子。
2. **複製素材資訊**：複製素材分頁圖片的實際網址。貼到 Gemini 裡，就能做出使用那些圖片的介紹。
3. **開啟 AI Studio** — 按「開啟 AI Studio」並登入 Google。若出現此應用程式由其他開發者製作的提示，請按「Continue to the app」。MYMI App 會開啟外部瀏覽器。

<ScreenStep src="/img/screens/zh-TW/profile-description-preview.webp" alt="詳細說明預覽視窗，標題、登場人物、遊玩方式依格式顯示" caption="詳細說明預覽">

在預覽中，Markdown 的標題、清單、粗體會依格式顯示。

介紹依照這個順序寫，讀起來會比較順。

1. 一兩句話的作品摘要
2. 世界觀與開場狀況
3. 登場人物介紹
4. 玩法（可以試著做什麼）

</ScreenStep>

### 用 AI Studio 製作介紹頁

[開啟 AI Studio](https://aistudio.google.com/apps/5e37a6ef-b980-4613-9c34-38b888e1bd1e?showPreview=true&showAssistant=true)

想使用圖片時，請按**複製素材資訊**。沒有圖片也能開始製作。

1. **開啟工作室範本** — 按「開啟 AI Studio」並登入 Google。若出現此應用程式由其他開發者製作的提示，請按「Continue to the app」。MYMI App 會開啟外部瀏覽器。
2. **用 Remix 建立自己的工作室** — 範本載入完成後，按上方的「Remix（Copy app）」，輸入名稱後按「Remix app」。自己的工作室開啟後即可開始製作。
3. **告訴 Gemini 想要的效果** — 在左側 Gemini 輸入框提出需求，例如「用個人介紹 HTML 模式製作這部作品的介紹頁」。若已複製作品或素材資訊，也可一起貼上。
4. **在 Preview 確認並調整** — 建置完成後，在右側 Preview 選擇元件或個人介紹 HTML 分頁。若顯示 Launch，請按下啟動工作室。再請 Gemini 調整顏色、內容和排版。
5. **複製完成的 MYMI 程式碼** — 在個人介紹 HTML 分頁確認驗證結果後，按「MYMI에 붙여넣을 코드 복사（複製 HTML）」。若無法自動複製，請選取畫面上的完整 HTML 並複製。
6. **回到 MYMI 貼上** — 將 HTML 貼到基本資訊 → 詳細說明。在 MYMI 預覽中確認後儲存作品。

:::info
使用 Google 帳號即可在免費請求額度內製作。此流程不需要連結付費 API 金鑰或部署。
:::

:::tip
Remix 時若出現權限錯誤，請確認 Google 帳號，重新整理後再按 Remix。預覽空白時，請等建置完成後重新整理。免費額度用完後，請待額度重設再繼續。
:::

:::warning[刪除圖片之前]
用素材資訊做出的 HTML 會包含圖片的實際網址。如果在素材分頁刪除那張圖片，介紹頁上的圖片也會無法顯示。
:::

## 創作者指南

<ScreenStep src="/img/screens/zh-TW/profile-guide.webp" device="part" alt="創作者指南欄寫下使用提示的畫面" caption="創作者指南">

**創作者指南**要寫作品的玩法或新增的內容。它會另外顯示在作品介紹畫面。一則內容最多可寫 5,000 字。

修改目前的內容，就是修改那一則。點選**寫新內容**，目前的內容會加上版本號（V1、V2…）和日期移到下方清單，並可以寫新的內容。

</ScreenStep>

> 範例：一開始先問民宇「這裡是哪裡？」。有關記憶的問題問書妍，就能一條一條獲得線索。

## 推薦模型

<ScreenStep src="/img/screens/zh-TW/profile-models.webp" device="part" alt="推薦模型 0/5 與選擇按鈕" caption="推薦模型">

可以先選好最多 5 個適合這部作品的聊天模型。它們在作品介紹畫面和聊天的模型清單中會標示為**推薦**，使用者仍然可以選擇其他模型。

點選**選擇**，會開啟與聊天畫面相同的模型清單。

</ScreenStep>

## 類型與標籤

- **類型**：選 1～2 個。從浪漫、BL、GL、奇幻、武俠、科幻、「動作、冒險」、日常、劇情、喜劇、「懸疑、驚悚」、恐怖、「歷史、古裝」中挑選。
- **標籤**：至少加入 1 個。簡短寫下作品的題材或氣氛。例：`地下城市`、`失憶`、`反烏托邦`
- **讀者群**（男性向、女性向）要在**其他設定**分頁另外選擇。

## 遇到問題時

<details>
<summary>無法點選複製素材資訊按鈕</summary>

素材分頁要有完成的圖片才能複製。請先上傳或生成圖片，再點選一次。

</details>

<details>
<summary>貼上 HTML 之後，預覽和我想的不一樣</summary>

請確認 Gemini 做的程式碼區塊是否從頭到尾完整複製。只貼上一部分，版面可能會跑掉。請再請 Gemini 修改，然後把整段貼上。

</details>

<details>
<summary>封面最多可以放幾張？</summary>

最多 10 張。想再放的話，請先移除一張。

</details>

## 下一步

<CardGrid>
<Card to="/create/prompt" icon="book" title="撰寫提示詞">撰寫 AI 讀取的設定。</Card>
<Card to="/create/images" icon="image" title="準備圖片">製作封面與對話中要用的圖片。</Card>
</CardGrid>

---
title: 加入元件
description: 說明如何用 JSX 程式碼製作狀態視窗、道具欄、選項等在對話中彈出的 UI，確認變數預設值與預覽，並連結到提示詞。
slug: /create/components
sidebar_position: 9
last_update:
  date: 2026-10-03
---

# 加入元件

元件是**AI 在聊天中顯示的 UI**。先做好狀態視窗、道具欄、選項這類想呈現的內容，AI 就會在需要時呼叫。不懂程式碼也沒關係，可以用**用 Gem 製作**來做。

## 新增元件

<ScreenStep>

1. 點選**新增元件**。
2. 把程式碼貼到 **JSX 程式碼**欄。點選**貼上**，就會放入剪貼簿中的程式碼。
3. 在預覽確認聊天中的樣子。

元件名稱和變數會從程式碼自動讀取。

</ScreenStep>

<ScreenStep>

- **JSX 程式碼**：`function 名稱({ 變數 = 預設值 })` 形式的程式碼。程式碼圍欄和 import 語句會自動整理。最多可寫 20,000 字。
- **變數預設值**：顯示從程式碼讀到的變數與預設值。預設值會成為 AI 填入值的範例，預覽也會用到。
- **呼叫標記**：「AI 在聊天中會這樣呼叫」下方的標記。點選**複製**，貼到提示詞分頁使用。

</ScreenStep>

這是範例作品的狀態視窗程式碼。必須有函式名稱（`StatusWindow`）和至少一個變數（`hp`、`mp`）。

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
        <span>檢疫所 B-3</span>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <div className="mb-1 flex justify-between"><span>體力</span><span>{hp}/100</span></div>
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

## 連結到提示詞

只新增元件的話，AI 不知道何時該呼叫。要在**提示詞**分頁寫下何時呼叫。

- **基本型**：在**元件輸出規則**為每個元件寫下出現的時機。標記會照元件分頁顯示的樣子（`<StatusWindow hp={100} mp={40} />`），連同規則句子自動加上。
  例：`戰鬥開始時與體力變化時。hp = 體力，mp = 魔力。`
- **自行撰寫**：呼叫標記、出現時機、變數的含義全部自己寫。可以直接貼上在元件分頁**複製**的標記，也可以把值的位置改成 `{value}`。

如果是自行撰寫，就這樣寫。

```text
### 元件輸出規則
在符合規則的時刻，把下方標籤原樣以單獨一行輸出。
- `<StatusWindow hp={value} mp={value} />`: 戰鬥開始時與體力變化時。hp = 體力，mp = 魔力。
```

:::info[元件是用來呈現的工具]
元件只是把 AI 填入的值畫得好看而已。像體力計算這類，數值對不對取決於 AI 的回覆。就算寫了規則，AI 偶爾還是可能漏掉標籤，或填入不同的值。
:::

## 用 Gem 製作

不用自己寫程式碼也可以。在分頁下方的**用 Gem 製作**，和 Google Gemini 的 Gem 對話來製作。

1. 如果元件要用素材圖片，先點選**複製素材資訊**。素材分頁要有完成的圖片才能點選。
2. 點選**開啟 Gem**，在第一則訊息簡單介紹作品，並寫下想做的 UI。也要貼上複製的素材資訊。
3. 回答 Gem 的問題，確認整理好的規格後，請它製作。
4. 複製完成的程式碼，放到**新增元件**的**貼上**。
5. 把 Gem 一併告訴你的、要貼到提示詞分頁的句子，放進提示詞分頁。

:::tip[照 Gem 第一次回覆的指示做]
如果 Gem 請你把模型換成 **Gemini Flash** 或 **Pro**，請照做。想一邊看做好的樣子，請在 Gemini 輸入框下方開啟<strong>＋ → Canvas</strong>。
:::

## 使用圖片的元件

- 想讓 AI 依場景挑選圖片，就讓元件把圖片當作**變數**接收，並在提示詞裡像 `img="{{URL}}/A/1.webp"` 這樣，把整個值寫成素材路徑。像 `url({{URL}}/…)` 這樣夾在其他文字中間的話，不會被換成網址。
- 寫了不存在的路徑，會放入空值。請把元件做成只有圖片值存在時才繪製。
- 變數的**預設值**不要用 `{{URL}}`，請放實際的圖片網址（以 https 開頭）或空值。
- 固定寫在程式碼裡的圖片網址，如果刪除那個素材，就會無法顯示。

## 遇到問題時

<details>
<summary>顯示「有元件找不到 function 名稱。」</summary>

請確認程式碼是否以 `function 名稱(...)` 的形式開頭。箭頭函式或沒有名稱的函式，讀不到名稱。

</details>

<details>
<summary>顯示「有元件沒有變數。請宣告至少一個變數。」</summary>

必須宣告函式接收的變數，至少一個。例：`function StatusWindow({ hp = 100 })`

</details>

<details>
<summary>改了程式碼，變數預設值卻沒變</summary>

用**貼上**按鈕整段換掉程式碼時，會重新讀取預設值。如果是在程式碼欄一點一點修改，之前的預設值會留著，所以修改後請確認**變數預設值**。

</details>

<details>
<summary>點了預覽裡的按鈕，對話卻沒有送出</summary>

作品製作畫面的預覽只是確認樣子的地方，不會送到實際對話。完成製作後，從完成畫面的**查看作品**開始對話確認。想在其他使用者看到之前先測試，可以把**公開設定**設為**不公開**再完成製作。

</details>

## 下一步

<CardGrid>
<Card to="/create/publish" icon="send" title="公開與修改">完成製作並公開作品。</Card>
<Card to="/create/limits" icon="list" title="限制與規則一覽">一次確認字數與數量的限制。</Card>
</CardGrid>

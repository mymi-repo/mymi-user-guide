---
title: Google AI Studioの画面を見ながら進める
description: コンポーネントと詳細説明のHTMLをGoogle AI Studioで作る手順を、実際のAI Studioの画面で説明します。作品情報のコピー、Remix、依頼、コードのコピー、MYMIへの貼り付けまで、かんたんモードとエキスパートモードで同じ手順です。
slug: /create/ai-studio
sidebar_position: 4
last_update:
  date: 2026-10-24
---

# Google AI Studioの画面を見ながら進める

作品制作画面の**Google AI Studioで作る**にある**使い方**を押すと表示される手順を、実際のGoogle AI Studioの画面で紹介します。黄色い枠が押すところです。

- PCの画面を基準にしています。スマホで位置が違う手順は、別に書きました。
- AI Studioの画面は英語で表示されます。ボタン名は、画面に表示されるとおりに書きました。
- かんたんモードとエキスパートモード、コンポーネントと詳細説明で手順は同じです。違うところは、その手順に書きました。

## 始める前に

MYMIで**作品情報をコピー**を押しておき、**Google AI Studioを開く**を押します。作品の設定、画像のアドレス、今書いている詳細説明がまとめてコピーされます。

- コンポーネント: かんたんモードは**コンポーネント**ステップ、エキスパートモードは**コンポーネント**タブの上部にあります。
- 詳細説明: かんたんモードは**オプション**ステップの詳細説明の見出しの下、エキスパートモードは**基本情報**タブの詳細説明欄の下にあります。

:::info
Googleアカウントの無料リクエストの上限内で使えます。支払いやAPIキーは不要です。
:::

## 1. 「Continue to the app」を押す

最初に表示されるGoogleの案内です。ほかの人が作ったアプリという意味で、MYMIが作った作業スペースなので、そのまま進めて大丈夫です。

<Screenshot src="/img/screens/ai-studio/continue.webp" alt="This app is from another developerの案内画面。Continue to the appボタンに黄色い枠がある" caption="別の開発者が作ったアプリという案内" />

## 2. 右上の「Remix」を押す

**最初の1回だけ**行います。共用の作業スペースをコピーして、自分だけの作業スペースを作ります。一度作れば、次からはこの手順を飛ばします。

スマホでは、画面いちばん下の右にある<strong>⋯</strong>を押すとRemixがあります。

<Screenshot src="/img/screens/ai-studio/remix.webp" alt="共用の作業スペースの画面。右上のRemixボタンに黄色い枠がある" caption="共用の作業スペース" />

## 3. 名前を決めて「Remix app」を押す

名前は、あとで見つけやすいものにすれば大丈夫です。例: 月明かり書店の作業スペース。

<Screenshot src="/img/screens/ai-studio/remix-dialog.webp" device="part" alt="Remixの窓。App name欄とRemix appボタンに黄色い枠がある" caption="Remixの窓" />

## 4. 貼り付けて、希望を書いて送る

左下の入力欄に、MYMIでコピーした作品情報を貼り付けます。その下に希望を1〜2行書き、矢印を押して送ります。

> 例: 好感度と今日の日付が見える学生手帳のデザインにして。

スマホでは、画面いちばん下の**Chat**を押すと入力欄が表示されます。入力欄を長押しして貼り付けます。

<Screenshot src="/img/screens/ai-studio/request.webp" alt="左下の入力欄に作品情報と希望が入っていて、入力欄と送信の矢印に黄色い枠がある" caption="作品情報を貼り付けて希望を書いた入力欄" />

## 5. 完成するまで待つ

「Running for …」のような英語の進行メッセージが表示されていれば、作っている途中です。コンポーネントはふつう2〜5分、詳細説明は1〜3分かかります。ウィンドウを閉じずに待ちます。Geminiの返答にある表や専門用語は、わからなくても大丈夫です。

<Screenshot src="/img/screens/ai-studio/running.webp" alt="GeminiがRunning for 28sと表示しながら作っている画面。進行メッセージに黄色い枠がある" caption="作成中" />

## 6. 結果を見てコードをコピーする

右側に「내 요청으로 만든 결과（自分のリクエストで作った結果）」と表示されたら完成です。下のプレビューで見た目を確認し、**MYMI에 붙여넣을 코드 복사**（MYMI用コードをコピー）を押します。詳細説明なら、先に上部で**프로필 HTML**（プロフィールHTML）が選ばれているか確認します。直したいところは、手順4の入力欄にもう一度書けば大丈夫です。

コピーできないときは、すぐ下の**직접 선택해서 복사**（自分で選択してコピー）を押します。スマホでは、画面いちばん下の**Preview**を押すと結果が表示されます。

<Screenshot src="/img/screens/ai-studio/copy-code.webp" alt="내 요청으로 만든 결과（自分のリクエストで作った結果）の表示と、MYMI에 붙여넣을 코드 복사（MYMI用コードをコピー）ボタン。コピーボタンに黄色い枠がある" caption="結果とコードのコピーボタン" />

## 7. いつ表示するかを書いた文もコピーする

**コンポーネントだけ**行います。Geminiの返答に、コンポーネントをいつ表示するかを書いた文があります。この文がないと、チャットにコンポーネントが表示されません。

<Screenshot src="/img/screens/ai-studio/usage-sentence.webp" alt="Geminiの返答の左上に、いつ表示するかを書いた文があり、黄色い枠がある" caption="Geminiの返答にある、いつ表示するかの文" />

## 8. MYMIに貼り付けて保存する

コピーしたコードと文を下の欄に貼り付け、プレビューで見た目を確認してから保存します。

| 作るもの | コードを貼る場所 | いつ表示するかを貼る場所 | 保存 |
|---|---|---|---|
| かんたんモードのコンポーネント | **コンポーネントを追加** → **JSXコード**欄 | **用途の説明**欄 | 右下の矢印ボタン |
| エキスパートモードのコンポーネント | コンポーネントタブの**コンポーネントを追加** → **JSXコード**欄 | プロンプトタブ。基本型では**コンポーネント出力ルール**のそのコンポーネントの欄 | **下書き保存** |
| かんたんモードの詳細説明 | オプションステップの詳細説明で**使用** → HTMLの入力欄 | なし | **完了** |
| エキスパートモードの詳細説明 | 基本情報タブの**詳細説明**欄 | なし | **下書き保存** |

## 次からは「My apps」から開く

AI Studioのトップ画面の左にある**My apps**に、自分の作業スペースがあります。そこから開いて、手順4から進めれば大丈夫です。Remixをやり直す必要はありません。

<Screenshot src="/img/screens/ai-studio/my-apps.webp" device="part" alt="AI Studioの左メニューのMy appsと、自分の作業スペースの一覧に黄色い枠がある" caption="My apps" />

:::note
GoogleがAI Studioの画面を変えると、ボタンの位置が変わることがあります。
:::

## つまずいたときは

<details>
<summary>「Failed to list API keys」のような権限エラーが出る</summary>

ページを再読み込みして、もう一度**Remix**を押します。

</details>

<details>
<summary>Previewが空白</summary>

少し待ってから、Previewの上にある再読み込みを押します。

</details>

<details>
<summary>コードをコピーできない</summary>

**직접 선택해서 복사**（自分で選択してコピー）を押し、コード全体を選択してコピーします。

</details>

<details>
<summary>無料枠を使い切ったと表示される</summary>

上限が回復してから続きを作ります。

</details>

<details>
<summary>「AI Features」のようなおすすめが表示される</summary>

押さないでください。MYMIのコンポーネントと詳細説明では動きません。

</details>

<details>
<summary>詳細説明にイラストが表示されない</summary>

アセットに完成した画像があるときだけ、作品情報に画像のアドレスが入ります。画像を作ってから、もう一度コピーします。成人向けに設定した画像は、詳細説明には使いません。

</details>

## 次のステップ

<CardGrid>
<Card to="/create/components" icon="code" title="コンポーネントを入れる">エキスパートモードでコンポーネントを直し、プロンプトにつなげます。</Card>
<Card to="/create/profile" icon="pen" title="作品紹介を整える">エキスパートモードの表紙と詳細説明を整えます。</Card>
<Card to="/create/simple/extras" icon="layers" title="ロアブック・コンポーネント・オプション">かんたんモードのコンポーネントと詳細説明を埋めます。</Card>
</CardGrid>

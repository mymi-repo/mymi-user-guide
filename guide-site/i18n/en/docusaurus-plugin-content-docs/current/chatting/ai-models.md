---
sidebar_position: 4
last_update:
  date: 2026-10-05
description: How to choose the AI model that writes chat replies, Spark prices by model, and how many Sparks are deducted for longer replies and for replies that fail or are declined.
---

# AI model guide

How to choose the AI model that writes chat replies, what each model costs in Sparks, and what longer replies cost.

## Change the model

1. Select the ⚡ button to the left of the message box in a chat room. It appears only when you're logged in.
2. In the **Select Model** window, expand **MYMI Models**, **Gemini Models**, **Claude Models**, **xAI Models**, or **OpenAI Models**. The model you're using is shown next to its provider name.
3. Check the description and price, then select the model you want. Your next reply uses that model.

- **Gemini 3.1 Pro** is selected at first.
- The dot in front of a model name shows its current status: green is **Smooth**, orange is **Normal** (replies tend to be slow), and red is **Busy** (failures are more frequent). If replies keep failing, switch to a model with a green dot.
- Models with a **50% OFF** badge show the discounted price. Models marked **Temporarily Disabled** can't be chosen right now.
- The model you choose is saved in the browser or app you're using and stays the same in other chat rooms. Choose it again on another device.
- **Creator's recommended models** on a work's detail page are the creator's suggestions. Choose the model you chat with using the ⚡ button.
- Without logging in, you can try **Grok 4.6** for up to 5 messages.

## Prices by model

These are **list prices as of October 1, 2026**, in Sparks.

- **Base price**: The price of one reply, including the default length.
- **Per extra 100 tokens**: What you pay for length beyond the default when you raise the response length. Tokens are the unit the AI uses to count text.

Discounted models show the discounted price in the model selection window, so check it before you send.

### MYMI Models

| Model and strength | Base price | Per extra 100 tokens |
| --- | ---: | ---: |
| **MYMI Plus v2**<br />Rich description and in-depth conversation | 60 | 4 |
| **MYMI Lite v2**<br />Light, everyday conversation | 20 | 1 |

### Gemini Models

| Model and strength | Base price | Per extra 100 tokens |
| --- | ---: | ---: |
| **Gemini 3.1 Pro**<br />Strong context understanding | 120 | 8 |
| **Gemini 2.5 Pro**<br />Deep immersion and nuanced expression | 80 | 5 |
| **Gemini 3.8 Flash**<br />Keeps the story on track to the end | 100 | 6 |
| **Gemini 3.7 Flash**<br />Follows your setup closely | 100 | 6 |
| **Gemini 3 Flash**<br />Balance of fast replies and performance | 50 | 3 |
| **Gemini 2.5 Flash**<br />Fast replies at a low price | 40 | 2 |

### Claude Models

| Model and strength | Base price | Per extra 100 tokens |
| --- | ---: | ---: |
| **Claude Opus 4.6**<br />Deep reasoning | 300 | 20 |
| **Claude Sonnet 4.6**<br />Nuanced emotional expression | 100 | 6 |
| **Claude Sonnet 4.5**<br />Fast, stable conversation | 100 | 6 |

### xAI Models

| Model and strength | Base price | Per extra 100 tokens |
| --- | ---: | ---: |
| **Grok 4.6**<br />Thinks before it answers | 120 | 8 |
| **Grok 4.3**<br />Light, fast conversation | 60 | 4 |
| **Grok 4.20**<br />Creative replies | 60 | 4 |

### OpenAI Models

| Model and strength | Base price | Per extra 100 tokens |
| --- | ---: | ---: |
| **GPT-5.4**<br />Accurate understanding and reliable replies | 120 | 8 |

The descriptions are shortened from the model selection window. How replies actually feel depends on the work and the conversation.

## Get longer replies

Each model has a limit on reply length. To get longer replies, raise the response length.

1. In **Chat Settings** in the ⋮ menu, select **Response Length**. It appears only when you're logged in.
2. In the **Response Length** window, choose a length for each model. If you choose more than **Default**, "Up to +N Sparks per message" appears too.
3. The length you choose is saved in the browser or app you're using.

- You can choose 1,500 / 2,000 / 3,000 / 4,500 / 6,000 tokens. The default is 1,500 tokens for most models and 3,000 tokens for MYMI Plus v2.
- Raising it only charges for what's actually used. When you send, the amount for the chosen length is deducted first. When the reply finishes, it's recalculated by the actual length and the rest is returned.

**Example:** If you set MYMI Plus v2 to 4,500 tokens, **120 Sparks** are deducted first when you send. If the reply is 3,240 tokens, the 240 tokens over the default 3,000 round up to 3 units of 100 tokens, so only **60 + 3 × 4 = 72 Sparks** are charged. The remaining **48 Sparks** are returned.

:::warning[You need enough Sparks for the upfront deduction]
With a higher response length, that amount is deducted first when you send. If you have fewer Sparks than that, "Insufficient credits" appears and the message isn't sent. Lower **Response Length** to **Default**, or buy more Sparks.
:::

If a reply is cut off at the length limit, a "Max output limit reached" window appears. Select **Adjust** to choose a longer length.

## If a reply fails or is declined

| What happened | Sparks deducted |
| --- | --- |
| You got a reply normally | Calculated from the actual reply length |
| "The model declined to respond" | Only 20% of the base price. The rest is returned |
| An error occurred while the reply was being written | Everything deducted upfront is returned |
| "Reasoning used up the output limit" | Everything is returned. Your message stays in the message box, so send it again |

You can see deducted Sparks on the **Usage** tab in **Profile → My Spark → View Usage History**.

## If you get stuck

<details>
<summary>I don't see the ⚡ button</summary>

Without logging in, you can't choose a model and you chat with the trial model, **Grok 4.6**. Log in and the ⚡ button appears.

</details>

<details>
<summary>It says "The currently selected model is not available right now"</summary>

The model you chose can't be used right now. Select **Choose model** and pick another model.

</details>

<details>
<summary>Replies are slow or keep failing</summary>

Check the dot in front of the model name in the model selection window. If it's orange (**Normal**) or red (**Busy**), switch to a model with a green (**Smooth**) dot.

</details>

<details>
<summary>It says "Insufficient credits" and the message won't send</summary>

If you raised the response length, that amount is deducted first when you send. Lower **Response Length** to **Default**, or buy more Sparks.

</details>

<details>
<summary>The model is different on another device</summary>

The model and response length are saved separately on each device. Choose them again on that device.

</details>

## Next steps

<CardGrid>
<Card to="/payment/payment-methods" icon="card" title="Buying Sparks">Buy Sparks or get them for free.</Card>
<Card to="/chatting/chat-room-settings" icon="sliders" title="Chat room settings">Change how the AI replies and how the chat looks.</Card>
</CardGrid>

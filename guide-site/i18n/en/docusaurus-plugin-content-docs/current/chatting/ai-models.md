---
sidebar_position: 4
last_update:
  date: 2026-09-23
description: Choose a chat AI model, understand V1 and V2 creator recommendations, and check base prices, response limits, and charges.
---

# AI model guide

An AI model is the **engine that generates the next reply** in a chat. It does not change a story's world or characters. Switching models leaves earlier messages intact.

## What differs between V1 and V2 stories?

**The available chat models and charging rules are the same for V1 and V2 stories.** A V2 creator can recommend up to five models that suit the story. These appear as **Creator's recommended models** on the story profile. They are suggestions: they do not select a model automatically or prevent you from choosing another one. V1 story profiles do not have these recommendation chips.

The **v2 in MYMI Plus v2 / MYMI Lite v2 is the AI model version**. You can use these models in stories made with either the V1 or V2 editor.

## 1. Switch models in a chat

1. Sign in and select the ⚡ button to the **left of the chat input**.
2. In **Select Model**, expand the MYMI, Gemini, Claude, xAI, or OpenAI provider group.
3. Read the model description and displayed price. If there is a discount badge, check the discounted price before choosing.
4. Select a model. It will be used **from the next reply onward**; previous replies and the chat history stay as they are.

Your choice is **stored in this browser or app device and carries over to other chat rooms**. It is not locked separately for each room or automatically synced between web and app. A saved MYMI Plus/Lite v1 choice moves to the corresponding v2 model; Gemini 3.5/3.6 Flash moves to 3.8 Flash. If another saved model becomes unavailable, you may be asked to choose an available one.

In a guest trial, the model button is hidden and **Gemini 3.8 Flash** is used. Sign in to choose a model yourself.

## 2. Available models and regular prices

These are the **regular prices as of September 23, 2026**. The base price includes one message up to the model's included output limit. The extra rate applies per **100 actual output and reasoning tokens combined** beyond that limit. Amounts are in Spark-equivalent units. Limited-time promotions can change **both the base and extra rates**, so check the prices shown in Select Model and Response Length before sending a message.

### MYMI models

- **MYMI Plus v2:** Base 60 · 4 per extra 100 tokens. Designed for rich description and deeper conversations.
- **MYMI Lite v2:** Base 20 · 1 per extra 100 tokens. Designed for casual, everyday conversations.

### Gemini models

- **Gemini 3.1 Pro:** Base 120 · 8 per extra 100 tokens. Consider it when context understanding matters.
- **Gemini 2.5 Pro:** Base 80 · 5 per extra 100 tokens. Consider it for nuanced expression and immersion.
- **Gemini 3.8 Flash:** Base 100 · 6 per extra 100 tokens. The newer Flash option for keeping a story on track.
- **Gemini 3.7 Flash:** Base 100 · 6 per extra 100 tokens. A Flash option focused on following a story's setup.
- **Gemini 3 Flash:** Base 50 · 3 per extra 100 tokens. An option to compare for speed and expressiveness.
- **Gemini 2.5 Flash:** Base 40 · 2 per extra 100 tokens. A lower-cost option for fast replies.

### Claude models

- **Claude Opus 4.6 / Opus 4.5:** Each has a base price of 300 · 20 per extra 100 tokens. Consider them for deeper reasoning or creative writing.
- **Claude Sonnet 4.6 / Sonnet 4.5:** Each has a base price of 100 · 6 per extra 100 tokens. Consider them for nuanced emotion or balanced conversation.

### xAI and OpenAI models

- **Grok 4.3 / Grok 4.20:** Each has a base price of 60 · 4 per extra 100 tokens. Compare them for quick conversation or creative replies.
- **GPT-5.4:** Base 120 · 8 per extra 100 tokens. Consider it for accurate understanding and steady replies.

These descriptions summarize the **model selection screen**. Actual reply length and style depend on the story, conversation, and settings. Model availability and regular prices may change.

## 3. Response limits and actual charges

If you are signed in, choose a limit for each model under **⋮ at the top right → Chat Settings → Response Length**. [Chat room settings](/chatting/chat-room-settings.md) also explains where to find it.

- Most models include **1,500 tokens** in the base price. **MYMI Plus v2 includes 3,000 tokens.** Keeping the default limit adds no output charge.
- The available limits are **1,500 / 2,000 / 3,000 / 4,500 / 6,000 tokens**, starting at the selected model's included limit. Raising the limit allows a longer reply; it does **not** guarantee a reply that long.
- Extra usage is calculated from **actual output tokens plus reasoning tokens**, rounded up in 100-token units beyond the included limit.
- When you send a message, the maximum possible charge for your chosen limit is taken first. After a normal reply finishes, the charge is settled against actual usage and the unused amount is returned. Refused replies or failed generation follow separate settlement rules.
- Response limits are remembered **per model on this browser or app device**. They do not automatically sync to other devices.

**Regular-price example:** Set MYMI Plus v2 to a 4,500-token maximum. Up to 1,500 tokens beyond its included 3,000 are covered by a **120-Spark initial charge**. If a normal reply uses 3,240 output and reasoning tokens in total, the extra 240 tokens round up to three 100-token units. The final charge is **60 + 3 × 4 = 72 Sparks**, and **48 Sparks are returned**. During a promotion, use the discounted rates shown on screen instead.

For Gemini models, **Gemini-only Sparks are used first**; general Sparks can cover the remainder. Other providers use general Sparks. Check the final charge in **Profile → Spark History**.

If a reply is cut off by its output limit, the notice offers a way to adjust that limit. If your selected model disappears and you cannot send a message, use the ⚡ button beside the input to choose an available model.

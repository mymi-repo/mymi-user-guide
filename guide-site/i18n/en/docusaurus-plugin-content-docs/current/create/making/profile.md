---
title: Decorate your work page
description: Add several covers, style the description with Markdown and HTML, build an intro page with a AI Studio, and set the creator guide and recommended models.
slug: /create/profile
sidebar_position: 3
last_update:
  date: 2026-10-03
---

# Decorate your work page

What users see before choosing a work is the content of the **Basic info** tab. Fill in the cover, description, creator guide, and recommended models to finish the work page. None of this is sent to the AI.

:::info
This is the Expert mode guide. For Simple mode, see [Assets and AI images](/create/simple/assets#set-the-profile-image) and [Optional](/create/simple/extras#optional).
:::

## Cover

You can add 1–10 covers. With several, the cover switches to the next one at the interval you set.

<ScreenStep src="/img/screens/en/profile-cover.webp" device="part" alt="Two cover images added and the switch interval set to 2 seconds" caption="Two covers and the switch interval">

- **Upload image**: Upload an image you already have. JPG, PNG, WEBP, GIF, and HEIC files up to 5MB work.
- **Pick from assets**: Use an image you made in the **Assets** tab as a cover.
- **Interval**: The time before the next image. It changes by 0.5 s each time you select the button, and if you type it in, enter a value from 0.5 to 60 seconds.

Select the **×** on a thumbnail to remove that cover.

</ScreenStep>

<ScreenStep src="/img/screens/en/profile-cover-picker.webp" alt="The Pick from assets window, with the images from the Assets tab shown in a grid" caption="Pick from assets">

Select **Pick from assets** to see every finished image from the Assets tab. Choose the images you want as covers and select **Add N to covers**.

If the Assets tab has no images yet, the list is empty. Make them first in [Prepare images](/create/images).

</ScreenStep>

:::tip[Choosing a cover]
The cover is the first image people see in the work list. Put a vertical image that shows the main character's face clearly first. With several covers, you can also add one per character to introduce the cast.
:::

## Description

The **Description** is the body of the work page. It can be up to 50,000 characters, and you can mix plain text, Markdown, and HTML.

1. **Preview**: Check how users will see it.
2. **Copy asset info**: Copies the actual image addresses. Paste them into the Gemini input in your own workspace.
3. **Open AI Studio**: Opens the MYMI workspace template in a new tab.

<ScreenStep src="/img/screens/en/profile-description-preview.webp" alt="The description preview window, with the title, characters, and how to enjoy it shown in their formatting" caption="Description preview">

In the preview, Markdown headings, lists, and bold text appear formatted.

An introduction is easier to read in this order:

1. A one- or two-sentence summary of the work
2. The world and the starting situation
3. The characters
4. How to enjoy it (what to try)

</ScreenStep>

### Create an intro page with AI Studio

[Open AI Studio](https://aistudio.google.com/apps/5e37a6ef-b980-4613-9c34-38b888e1bd1e?showPreview=true&showAssistant=true)

Use **Copy asset info** if you want to include asset images. You can start creating without any finished images.

1. **Open the workspace template** — Select Open AI Studio and sign in with Google. If a notice says the app is from another developer, select Continue to the app. The MYMI app opens an external browser.
2. **Remix your own workspace** — After the template loads, select Remix (Copy app) at the top, choose a name, then select Remix app. Start creating when your own workspace opens.
3. **Tell Gemini what you want** — In the Gemini input on the left, ask for something like “Make an introduction page for this work in profile HTML mode.” Paste any copied work or asset information with your request.
4. **Preview and refine** — After the build finishes, choose the component or profile HTML tab in Preview on the right. If Launch appears, select it to start the workspace. Ask Gemini to adjust colors, content, and layout.
5. **Copy the finished code for MYMI** — Check the validation results in the profile HTML tab, then select MYMI에 붙여넣을 코드 복사 (Copy HTML). If automatic copying is blocked, select and copy all the displayed HTML.
6. **Paste it back into MYMI** — Paste the HTML into Basic info → Description. Check the MYMI preview, then save your work.

:::info
Create with a Google account within the free request allowance. This workflow needs no paid API key or deployment.
:::

:::tip
If Remix shows a permission error, check your Google account, reload, and try Remix again. If the preview is blank, reload after the build finishes. If you reach the free request limit, continue after it resets.
:::

:::warning[Before you delete images]
HTML built from asset info contains the real addresses of your images. If you delete an image in the Assets tab, it also disappears from the intro page.
:::

## Creator guide

<ScreenStep src="/img/screens/en/profile-guide.webp" device="part" alt="The Creator guide field with usage tips written in it" caption="Creator guide">

In the **Creator guide**, write how to enjoy the work or what you've added. It appears separately on the work page. One note can be up to 5,000 characters.

If you edit the current note, that note changes. Select **Write new** and the current note moves down to the list with a version number (V1, V2…) and a date, and you can write a new one.

</ScreenStep>

> Example: Start by asking Min-woo, "Where are we?" Ask Seo-yeon about your memory, and you'll get clues one at a time.

## Recommended models

<ScreenStep src="/img/screens/en/profile-models.webp" device="part" alt="Recommended models 0/5 and the Choose button" caption="Recommended models">

You can choose up to 5 chat models that suit the work. They're marked **Recommended** on the work page and in the chat model list, and users can still choose other models.

Select **Choose** to open the same model list as the chat screen.

</ScreenStep>

## Genres and hashtags

- **Genres**: Choose 1–2 from Romance, BL, GL, Fantasy, Wuxia, Sci-fi, Action & adventure, Slice of life, Drama, Comedy, Mystery & thriller, Horror, and Historical.
- **Hashtags**: Add at least 1. Briefly describe the work's subject or mood. Examples: `underground`, `amnesia`, `dystopia`
- **Audience** (For men, For women) is chosen separately in the **Settings** tab.

## If you get stuck

<details>
<summary>I can't select the Copy asset info button</summary>

It works only when the Assets tab has a finished image. Upload or generate an image, then select the button again.

</details>

<details>
<summary>I pasted the HTML, but the preview isn't what I expected</summary>

In the **profile HTML** tab, select **MYMI에 붙여넣을 코드 복사 (Copy code for MYMI)** and paste the complete result again. If the layout is still broken, ask Gemini to fix it.

</details>

<details>
<summary>How many covers can I add?</summary>

Up to 10. To add more, remove one first.

</details>

## Next steps

<CardGrid>
<Card to="/create/prompt" icon="book" title="Write the prompt">Write the settings the AI reads.</Card>
<Card to="/create/images" icon="image" title="Prepare images">Make the covers and the images to use in chats.</Card>
</CardGrid>

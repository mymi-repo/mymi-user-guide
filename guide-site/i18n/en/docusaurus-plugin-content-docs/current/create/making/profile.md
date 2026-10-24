---
title: Decorate your work page
description: Add several covers, style the description with Markdown and HTML, build an intro page with Google AI Studio, and set the creator guide and recommended models.
slug: /create/profile
sidebar_position: 3
last_update:
  date: 2026-10-24
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

- **Preview**: Check how users will see it.
- **Create with Google AI Studio**: It's below the input field. Chat with Gemini to make an HTML intro page. See the steps [below](#create-an-intro-page-with-ai-studio).

<ScreenStep src="/img/screens/en/profile-description-preview.webp" alt="The description preview window, with the title, characters, and how to enjoy it shown in their formatting" caption="Description preview">

In the preview, Markdown headings, lists, and bold text appear formatted.

An introduction is easier to read in this order:

1. A one- or two-sentence summary of the work
2. The world and the starting situation
3. The characters
4. How to enjoy it (what to try)

</ScreenStep>

### Create an intro page with AI Studio

Start from **Create with Google AI Studio** below the Description field. Chat with Gemini to make an HTML page with character art and an introduction to your work.

1. Select **Copy work info**. Your work's settings, image addresses, and current description are copied together.
2. Select **Open Google AI Studio**. If it's your first time, make your own workspace with **Remix**.
3. Paste the work info into the input, add a line or two about what you want below it, and send.
4. When it's done, check at the top that **프로필 HTML** (Profile HTML) is selected, then select **MYMI에 붙여넣을 코드 복사** (Copy code for MYMI).
5. Paste it into the **Description** field in MYMI, check it with **Preview**, then select **Save draft**.

Select **How to use** to open step-by-step instructions. To see the actual AI Studio screens, go to [Follow along in Google AI Studio](/create/ai-studio).

:::info
You can use it within your Google account's free request allowance. No payment or API key is needed. To include art, the Assets tab needs finished images, and images marked as adult-only are not used.
:::

:::warning[Before you delete images]
HTML built from your work info contains the real addresses of your images. If you delete an image in the Assets tab, it also disappears from the intro page.
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
<summary>The copied work info has no image addresses</summary>

Image addresses are included only when the Assets tab has finished images. Upload or generate an image, then select **Copy work info** again.

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

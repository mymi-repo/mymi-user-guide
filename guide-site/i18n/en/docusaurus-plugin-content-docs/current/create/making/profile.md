---
title: Decorate your work page
description: Add several covers, style the description with Markdown and HTML, build an intro page with a Gem, and set the creator guide and recommended models.
slug: /create/profile
sidebar_position: 3
last_update:
  date: 2026-10-03
---

# Decorate your work page

What users see before choosing a work is the content of the **Basic info** tab. Fill in the cover, description, creator guide, and recommended models to finish the work page. None of this is sent to the AI.

## Cover

You can add 1–10 covers. With several, the cover switches to the next one at the interval you set.

<ScreenStep>

- **Upload image**: Upload an image you already have. JPG, PNG, WEBP, GIF, and HEIC files up to 5MB work.
- **Pick from assets**: Use an image you made in the **Assets** tab as a cover.
- **Interval**: The time before the next image. It changes by 0.5 s each time you select the button, and if you type it in, enter a value from 0.5 to 60 seconds.

Select the **×** on a thumbnail to remove that cover.

</ScreenStep>

<ScreenStep>

Select **Pick from assets** to see every finished image from the Assets tab. Choose the images you want as covers and select **Add N to covers**.

If the Assets tab has no images yet, the list is empty. Make them first in [Prepare images](/create/images).

</ScreenStep>

:::tip[Choosing a cover]
The cover is the first image people see in the work list. Put a vertical image that shows the main character's face clearly first. With several covers, you can also add one per character to introduce the cast.
:::

## Description

The **Description** is the body of the work page. It can be up to 50,000 characters, and you can mix plain text, Markdown, and HTML.

<ScreenStep>

1. **Preview**: Check how users will see it.
2. **Copy asset info**: Copies the real addresses of the images in the Assets tab. Paste it into the Gem to build an intro that uses those images.
3. **Open Gem**: Opens the Gem that MYMI prepared in Google Gemini.

</ScreenStep>

<ScreenStep>

In the preview, Markdown headings, lists, and bold text appear formatted.

An introduction is easier to read in this order:

1. A one- or two-sentence summary of the work
2. The world and the starting situation
3. The characters
4. How to enjoy it (what to try)

</ScreenStep>

### Build an intro page with a Gem

You don't need to know HTML. You can talk with a Gem to build a styled intro page.

1. If the Assets tab has images, select **Copy asset info**. The button can't be selected if there isn't a single finished image.
2. Select **Open Gem** to open the Gem. In your first message, briefly describe the work, paste the asset info you copied, and send it.
3. The Gem asks you numbered questions about the mood and structure you want, the language of the work, and so on. Pick from the example answers or answer in your own words.
4. When the Gem shows the summary it put together, check it and ask it to build the page. Copy the finished code along with its whole code block.
5. Paste the copied code into the **Description** field and check it with **Preview**. If something needs fixing, tell the Gem and paste the whole thing again.

:::tip[When you use the Gem]
- If the Gem asks you in its first reply to switch to **Gemini Flash** or **Pro**, do it. Other models often break the result.
- To watch the result while you edit it, turn on **＋ → Canvas** below the Gemini input box before you ask.
- You can build the page without pasting asset info. If you paste it, the intro comes out with your real images.
:::

:::info
The Gem is a Google service outside MYMI. You may need a Google account to use it, and the result depends on what you discuss with the Gem.
:::

:::warning[Before you delete images]
HTML built from asset info contains the real addresses of your images. If you delete an image in the Assets tab, it also disappears from the intro page.
:::

## Creator guide

<ScreenStep>

In the **Creator guide**, write how to enjoy the work or what you've added. It appears separately on the work page. One note can be up to 5,000 characters.

If you edit the current note, that note changes. Select **Write new** and the current note moves down to the list with a version number (V1, V2…) and a date, and you can write a new one.

</ScreenStep>

> Example: Start by asking Min-woo, "Where are we?" Ask Seo-yeon about your memory, and you'll get clues one at a time.

## Recommended models

<ScreenStep>

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

Check that you copied the Gem's code block from start to finish. Pasting only part of it can break the layout. Ask the Gem to fix it again, then paste the whole thing.

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

---
title: Edit a 1.0 work
description: Learn how to open a work made with the legacy creation flow (1.0) in Content Management, edit it in the seven-step screen, and finish.
slug: /create/legacy/edit
sidebar_position: 2
last_update:
  date: 2026-10-03
---

# Edit a 1.0 work

A work made with the legacy creation flow (1.0) is edited in the earlier seven-step screen. Items are in different places from the current creation screen, so follow this page.

## How to open it and move around

1. In **Profile → Content Management**, select **Edit** on the work.
2. Go through the steps in this order: **Basic Info → Assets → Intro → Settings → Lorebook → Components → Optional**.
3. The **>** (Next) button at the bottom right checks the required items of the previous steps. If something is missing, a notice appears. If not, the changes you've made so far are saved and you go to the next step.
4. You can also select a tab to jump straight to a step. When you go forward, everything before that step is checked and saved. When you go back, nothing is checked or saved. Your changes are saved together the next time you go forward.
5. Select **Done** in the last **Optional** step, and every step is checked once more before you reach the complete screen.

:::warning[A public 1.0 work changes every time you go forward]
The 1.0 screen saves your changes to the work every time you go forward to a later step with **>** (Next) or a tab. If the work is already public, other users see the changed content from that moment. It doesn't wait until you select **Apply changes** like the current flow does. For big edits, write the new text in a notes app first, and paste it in before moving on.
:::

## What to edit in each step

### 1. Basic Info

<ScreenStep>

| Item | How to write it |
| --- | --- |
| Content Name | Up to 50 characters |
| Short Description | Up to 40 characters |
| Worldview | The background, such as the era, place, and situation |
| Characters | At least 1. A name and a description. Names must differ from each other |
| Secrets | Hidden settings the characters need to know (optional) |

You can write up to 10,000 characters across the worldview, the character descriptions, and the secrets. These fields are the settings the AI reads.

</ScreenStep>

### 2. Assets

<ScreenStep src="/img/screens/en/legacy-assets.webp" alt="The Assets step of the legacy creation screen. Each image has a name like img:AB3K9X and a description, and the star on the Kang Min-woo image is on as the profile image" caption="1.0 · Assets">

- Upload images or make them with **AI Image**. To go to the next step, you need at least 1 image. You can add up to 200.
- Select an image to open the **Enter description** window. In **Select Character**, choose the person in the image (choose **Shared** for an image with no person, such as a background), include that person's name, write the description in 60 characters or fewer, and select **Save**. It's what the AI uses to decide which scene this image is for.
- Use the **★** button at the top left of an image to choose one as the work's profile image.
- The `img:AB3K9X` shown on an image is its name. MYMI decides it from 6 uppercase letters and numbers, and you can't change it.

</ScreenStep>

### 3. Intro

Make at least one intro, and write the intro title and the first message. To add an image, put the cursor where you want it in the first message field and select the **Image** button. Choose an image in the **Insert Asset Image** window, and a mark like `img:[AB3K9X]` goes in at the cursor. Check in **Introduction Preview** that the image shows in the right place.

### 4. Settings

- **Hashtags**: Choose tags that describe the work. You must choose the **Target Audience** (For men, For women) in the window.
- **Visibility**: Choose Public or Private.
- **Publishing Scope**: You must choose **Original** (MYMI exclusive) or **General**. For a work set to Original, this item is locked for 3 months, and the days left until it unlocks are shown.
- **Image Source**: You must choose **MYMI Generated** or **External**.
- **Image Output Instructions**: **Internal Images** outputs uploaded images with `img:[slug]`, and **External Images** outputs them from the image addresses written in the settings. As the screen says, use only one of the two.
- **Content Rating**: Choose **Adult** or **All Ages**.

### 5–7. Lorebook · Components · Optional

| Step | How to write it |
| --- | --- |
| **Lorebook** | Use **Add Entry** to fill in the entry name, trigger keywords, and content. Entries are found and sent the same way as in the current flow's [lorebook](/create/lorebook). |
| **Components** | Fill in the code and the **Usage Description**. In the usage description, write when to call it and with what values. |
| **Optional** | Set the profile design (HTML), recommended personas, and the Creator's Note. If you add a recommended persona, fill in the **Nickname** (20 characters), **Gender**, **Date of Birth**, and **Details** (1,000 characters). |

## If you get stuck

<details>
<summary>It won't go to the next step</summary>

A required item is missing in an earlier step. Read the notice at the top. In the Assets step, check that there's at least 1 image and that every image has a description. In Settings, check that you chose the **Target Audience**, **Publishing Scope**, and **Image Source**.

</details>

<details>
<summary>The intro preview says "Image not found"</summary>

The Assets step has no image with the same name as the one inside the brackets of `img:[…]`. Check that you didn't delete that image in the Assets step, and that the name in the brackets matches the mark on the image. Instead of typing the name, delete that line and put the image in again with the **Image** button, and you won't make a mistake.

</details>

<details>
<summary>The edit screen has no Prompt tab</summary>

That's because it's a 1.0 work. A 1.0 work doesn't open in the current flow's screen. If you want to make it in the current flow, read [About the legacy creation flow (1.0)](/create/legacy/overview#to-rebuild-a-10-work-in-the-current-flow).

</details>

## Next steps

<CardGrid>
<Card to="/create/legacy/reference" icon="list" title="1.0 fields and syntax">See the 1.0 limits, image syntax, and where each field moved.</Card>
<Card to="/create/before-you-start" icon="compass" title="Before you start">Get to know the creation screen of the current flow.</Card>
</CardGrid>

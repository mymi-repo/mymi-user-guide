---
sidebar_position: 3
last_update:
  date: 2026-09-23
description: Edit a story made with the legacy creation flow (1.0) and find its fields in the current creation screen.
---

# Legacy creation flow (1.0): edit an existing story

**New story creation with the legacy flow has ended.** Open **My Page → Story Management** and select **Edit** on a story made with this flow to open its seven-step creation screen. To create a new story, use the bottom **Create** tab and follow [Create a new story](create-work.md).

The legacy creation screen has **Basic Info → Assets → Opening → Other Settings → Lorebook → Components → Optional**. Moving forward checks the required fields in earlier steps.

## 1. Basic Info: story rules for the AI

| Field | What to enter |
| --- | --- |
| Story name | Up to 50 characters. |
| Short description | Up to 40 characters. |
| World | The setting, time, and situation. |
| Characters | Add at least one. Give each a distinct name and a description. |
| Secrets | Add hidden facts the characters should know when needed. |

Keep the combined World, character descriptions, and Secrets within **10,000 characters**. The AI uses the world and character information during chat. In the current creation screen, you write this information in **Prompt**.

## 2. Assets: images and profile image

In **Assets**, upload or generate images used in the chat. Give each image a **situation description** so the AI knows when to use it. Choose a **profile image** for the story. At least one image is needed to move forward.

## 3. Opening: the first scene

Create at least one **Opening** and fill in its **title** and **message**. Multiple openings let readers choose a starting scene. You can insert a registered asset using the `img:[slug]` shown on the screen and check it in **Preview**.

## 4. Other Settings: classification and visibility

Choose a target audience (**male-oriented** or **female-oriented**), then set visibility, Original status, image source, and content rating. Add other tags that describe your story here. **Original** means publishing only on MYMI and keeping that setting for three months.

## 5–7. Add more when needed

| Step | What to do |
| --- | --- |
| **Lorebook** | Add information triggered by keywords. Fill in the name, keywords, and content for each entry you add. |
| **Components** | Add UI elements such as stats or inventory. Supply a purpose description and working code for each component you add. |
| **Optional** | Set a profile design, recommended personas, or a creator message. Fill in name, gender, birth date, and details for each persona you add. |

Review your changes and select **Done** in the last step to apply them.

## Where do these fields go in the current creation screen?

| Legacy creation screen | Current creation screen |
| --- | --- |
| **World, Characters, Secrets** in Basic Info | **Prompt**: Write Your Own or Basic Story Info |
| **Profile image** in Assets | **Cover** in Basic Info |
| **Situation descriptions** for images | **Image codes** in Assets and image usage rules in Prompt |
| First message in Opening | **Title and message** in Opening |
| Target audience and tags in Other Settings | **Target Audience** in Other Settings and **Hashtags** in Basic Info |
| Profile design and creator message in Optional | **Detailed Description** and **Creator Guide** in Basic Info |

When starting a new story, follow [Create a new story](create-work.md).

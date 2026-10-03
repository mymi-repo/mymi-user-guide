---
title: Limits and rules at a glance
description: The character and count limits of the Expert mode creation screen, what Publish checks, the code rules, and where {{user}} and {{char}} are replaced, all in one place.
slug: /create/limits
sidebar_position: 11
last_update:
  date: 2026-10-03
---

# Limits and rules at a glance

Here are the limits and rules of the Expert mode creation screen in one place. The details of how to use each item are on its own guide page.

:::info
This is the Expert mode guide. For Simple mode, see [Fields and limits](/create/simple/reference).
:::

## Characters and counts

| Tab | Item | Limit |
| --- | --- | --- |
| Basic info | Title | Required · 30 characters |
| | One-line description | Required · 40 characters |
| | Cover | Required · 1–10 images. Files: JPG, PNG, WEBP, GIF, HEIC · up to 5MB. The interval is 0.5–60 seconds (0.5 s per button press) |
| | Description | Required · 50,000 characters |
| | Genres | Required · 1–2 |
| | Hashtags | Required · at least 1, 30 characters each. Up to 30 together with the audience |
| | Creator guide | Optional · 5,000 characters per note |
| | Recommended models | Optional · up to 5 |
| Assets | Image files | JPG, PNG, WEBP, GIF, HEIC · up to 5MB |
| | Code / folder name | Letters and numbers, up to 30 characters |
| | Generation request at once | Up to 50 images |
| Components | JSX code | 20,000 characters. Needs a function name and at least 1 prop |
| Prompt | Write it myself | Required · 10,000 characters |
| | Basic | Required · 10,000 characters in total across the work info, code meanings, exceptions, and component rules |
| Openings | Openings | Required · at least 1, each with a title and content |
| | Title | 100 characters |
| | Content | 2,000 characters |
| Lorebook | Entries | Up to 100 |
| | Name | 50 characters |
| | Keywords | 5 per entry, 10 characters each |
| | Content | 400 characters |
| | Sent at once | Searched in the last 10 messages, up to 3 entries · 1,500 characters |
| Settings | Recommended personas | Optional. If you make one, it needs a name (20 characters), gender, birth date (14 or older), and details (1,000 characters) |

## What Publish checks

When you select **Publish** (**Apply changes** for a published work), it checks in the order below, then takes you to the tab of the first item it finds and shows a notice.

| Order | Tab | What it checks |
| --- | --- | --- |
| 1 | Basic info | Title, one-line description, at least 1 cover, description, 1–2 genres, at least 1 hashtag |
| 2 | Assets | Every image has a code, codes use only letters and numbers, no two images in a folder share a code, no blanks or rows waiting to be generated, base looks are finished |
| 3 | Components | Code, function name, at least 1 prop |
| 4 | Prompt | Write it myself: the prompt. Basic: the work info, the meanings of the character, situation, and other codes, when components appear, and no more than 10,000 characters in total |
| 5 | Openings | At least 1, and every one has a title and content |
| 6 | Lorebook | The keywords, content, and name of each entry you added |
| 7 | Settings | Publishing scope, monetization limits, image source, audience, marketing consent, and the four fields of each recommended persona you added |

Visibility (Public) and Content rating (All ages) are already chosen.

## Code rules

- Image codes and character folder names can use **only letters and numbers**. No spaces or special characters.
- Codes can't repeat within the same folder. Different folders can use the same code (`A/1`, `B/1`).
- Folders are one level deep.
- A path is `folder/code` inside a folder and `code` outside one. In chats and openings, write it like `![]({{URL}}/A/1.webp)` or `![]({{URL}}/BG1.webp)`.
- You can't move an image to another character folder. You can move it out of the folder.
- On a published work, you can't change folder names.

## `{{user}}` and `{{char}}`

| Where you use it | `{{user}}` | `{{char}}` |
| --- | --- | --- |
| Opening | Becomes the user's name in chat | Becomes the **work's title** in chat |
| Prompt | Use it to refer to the user | Not replaced automatically. Write the character's name yourself |
| Lorebook | Use it to refer to the user | Write the character's name yourself |

## Saving

| Situation | When it's saved |
| --- | --- |
| A work in progress | Automatically when you switch tabs if there are changes; when you first upload or generate a cover or asset image; when you select **Save draft**. After the draft exists, changes in the Assets tab are saved right away |
| A published work | Text and settings when you select **Apply changes**. Asset changes take effect right away |

## Free and verification

- Generating and regenerating images in the creation screen is free. To generate, you need phone verification.
- Adults only works can be used only by users who have completed age confirmation.
- Only accounts that have completed age confirmation can turn off the Safety Filter at the tag steps of image generation.

## If you get stuck

<details>
<summary>I selected Publish and it jumped to another tab</summary>

It took you to a tab with something missing and showed you which item. Fill in the field the notice mentions, then select **Publish** again. What each tab checks is in [What Publish checks](#what-publish-checks).

</details>

<details>
<summary>Saving or publishing shows an error, but everything looks filled in</summary>

A field may exceed a limit that doesn't stop you while you type but catches when you save. Check these fields first:

- **Basic info** hashtags: 30 characters each, up to 30 together with the audience
- **Basic info** cover interval: up to 60 seconds
- **Openings** title: up to 100 characters
- **Assets** codes and folder names: up to 30 characters

Fix them and save again. If the same error still appears, tell us which field of which work you changed, in the support channel on Discord (**Profile → Discord**) or at [contact@mymi.live](mailto:contact@mymi.live).

</details>

## Next steps

<CardGrid>
<Card to="/create/first-work" icon="pen" title="Create your first work">Follow along from the start.</Card>
<Card to="/create/publish" icon="send" title="Publish and edit">Learn about review and applying changes.</Card>
</CardGrid>

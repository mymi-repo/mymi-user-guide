---
title: 1.0 fields and syntax
description: The fields and limits of the legacy creation flow (1.0), the img:[slug] image syntax, and where each 1.0 item goes in the current creation screen.
slug: /create/legacy/reference
sidebar_position: 3
last_update:
  date: 2026-10-03
---

# 1.0 fields and syntax

Here are the fields, limits, and image syntax of the legacy creation flow (1.0) screen. There's also a table for moving a 1.0 work into a new work in the current flow.

## 1.0 fields and limits

| Step | Item | Limit |
| --- | --- | --- |
| Basic Info | Content Name | Required · 50 characters (the current title is 30 characters) |
| | Short Description | Required · 40 characters |
| | Worldview · Character descriptions · Secrets | 10,000 characters across the three fields. The worldview and at least 1 character are required |
| | Character name | 50 characters. Names can't repeat between characters |
| Assets | Images | 1–200 |
| | Description | Required for each image · 60 characters |
| | Profile image | One, chosen with ★ |
| Intro | Intros | At least 1, with a title and content |
| Settings | Target Audience | Required · one of For men or For women in the **Hashtags** window |
| | Publishing Scope · Image Source | Required |
| Lorebook | Entries | Up to 100. Entry name 50 characters, 5 trigger keywords (10 characters each), content 400 characters |
| Components | Usage Description | Required for each component · 500 characters |
| | Code | 10,000 characters (20,000 now) |
| Optional | Creator's Note | 3,000 characters (now 5,000 characters per creator guide note) |
| | Recommended personas | Optional · nickname 20 characters, details 1,000 characters |

## 1.0 image syntax

1.0 puts in images the way you chose in **Settings → Image Output Instructions**. As the screen says, use only one of the two.

| Method | Syntax | Used for |
| --- | --- | --- |
| Internal images | `img:[slug]` | Images uploaded to Assets. The asset card shows the name, like `img:AB3K9X` |
| External images | `![](image address)` | External image addresses written in the settings |

In the intro, write it like `img:[AB3K9X]`. The name is 6 uppercase letters and numbers that MYMI decides. With internal images, the AI chooses which image to put in by looking at the **description** written for each asset and the character it's linked to. With external images, the descriptions aren't sent to the AI.

:::warning[Not used in the current flow]
`img:[slug]` is syntax for 1.0 works only. In a work made in the current flow, use the Assets tab codes and `![]({{URL}}/A/1.webp)`.
:::

## Move items to the current flow

Here is where each item goes when you rebuild a 1.0 work in the current flow. Your existing work isn't changed automatically. You copy things into a new work yourself.

| Where you used it in 1.0 | Where you use it now | What to do when moving it |
| --- | --- | --- |
| Basic Info → Worldview | Prompt → work info (Basic) or text (Write it myself) | Copy over the era, places, and rules |
| Basic Info → Characters | Prompt → the characters in the work info | Under each name line, write the role, personality, speech, and relationship |
| Basic Info → Secrets | Prompt → the hidden settings in the work info | Write the condition for revealing them too. Don't move them to the description |
| Assets → linked character | The asset's character folder + the character code meanings in the prompt | Make a folder for each character, and match the folder code to the name |
| Assets → Description | The asset's image code + the situation code and other code meanings in the prompt | For the same situation, use the same code for every character |
| Assets → Profile image | Basic info → Cover | 1–10 covers. You can pick them from assets |
| `img:[slug]` in the intro | `![]({{URL}}/A/1.webp)` in the opening | Put it in again with **Insert asset image** |
| Settings → Hashtags (including Target Audience) | Basic info → genres and hashtags, Settings → audience | Choose 1–2 genres and write the hashtags again |
| Components → Usage Description | Prompt → component output rules (Basic) or text (Write it myself) | Copy over when to call it and with what values |
| Optional → HTML profile | Basic info → Description | The description is required. Check it in the preview |
| Optional → Creator's Note | Basic info → Creator guide | |
| Optional → Recommended Personas | Settings → Recommended personas | |
| Lorebook | Lorebook | Copy the name, keywords, and content as they are |

### Example: moving one image

Say that in 1.0 you have an image (`img:[AB3K9X]`) linked to the character **Kang Min-woo** with the description "Min-woo laughing". In the current flow, you move it like this:

1. In the work info of the **Prompt** tab, write Min-woo's role, personality, and speech.
2. In **Assets**, make the character folder `A` and put that image in with the code `1`.
3. With the Basic preset, write character code `A` = `Kang Min-woo` and situation code `1` = `laughing` in **Image output rules**.
4. With Write it myself, write in the text when and in what format to put the image, along with what it means.
5. Delete the `img:[AB3K9X]` you used in the intro, and put in `A/1` with **Insert asset image**.

## If you get stuck

<details>
<summary>I pasted a 1.0 intro into a new work and the image doesn't show</summary>

The current flow doesn't read `img:[…]`. The opening preview also shows "Could not load the image" in its place. Delete that line and put the image in again with **Insert asset image** in the first message field.

</details>

<details>
<summary>The work I moved shows no images in chats</summary>

In 1.0, MYMI gathered the descriptions and sent them to the AI, but now you have to write in the prompt when to show images. With Basic, fill in the code meanings in **Image output rules**. With Write it myself, write the image rules in the text. The steps are in [Show images in chat](/create/images-in-chat).

</details>

## Next steps

<CardGrid>
<Card to="/create/first-work" icon="pen" title="Create your first work">Make a new work in the current flow.</Card>
<Card to="/create/images-in-chat" icon="image" title="Show images in chat">Learn the image code rules of the current flow.</Card>
</CardGrid>

---
title: Fields and limits
description: The character and count limits of the Simple mode screen, the required items for each step, the img:[name] image syntax and where {{user}} and {{char}} are replaced, and when things are saved, all in one place.
slug: /create/simple/reference
sidebar_position: 7
last_update:
  date: 2026-10-07
---

# Fields and limits

This page collects the limits and rules of the Simple mode screen. The details of how to use each item are on its own guide page.

## Characters and counts

| Step | Item | Limit |
| --- | --- | --- |
| Basic Info | Title | Required · 30 characters |
| | One-line description | Required · 40 characters |
| | Story setting · Character descriptions · Secrets | 10,000 characters across the three fields combined. The story setting and at least 1 character (name and description) are required, and secrets are optional |
| | Character name | 50 characters. Characters can't share a name |
| Assets | Images | Required · 1–200. JPG, PNG, WEBP, GIF, HEIC · up to 5MB |
| | Situation description | Required for every image · 60 characters |
| | Profile image | Required · one, with ★ |
| | AI images made at once | Up to 2 base images and 1 variant image |
| Intro | Openings | Required · at least 1, each with both a title and content |
| | Content | 2,000 characters |
| Settings | Genres | Required · 1–2 |
| | Hashtags | Required · at least 1 (not counting the audience) |
| | Publishing scope · Monetization limits · Image source · Audience · Marketing consent | Required |
| Lorebook | Lore entries | Up to 100 |
| | Name | 50 characters |
| | Keywords | 5 per entry, 10 characters each |
| | Content | 400 characters |
| | Amount passed on at once | Found in the last 10 messages, at most 3 · 1,500 characters |
| Components | Usage Description | Required for each component · 500 characters |
| | JSX code | Required · 10,000 characters. Needs a function name and at least 1 variable |
| Optional | Description (HTML) | Optional · 50,000 characters |
| | Recommended personas | Optional. If you make one, it needs a name (20 characters), gender, birth date (14 or older), and details (1,000 characters) |
| | Creator's Note | Optional · 3,000 characters |

**Visibility** (Public), **Content rating** (All ages), and **Image Output Instructions** (Internal Images) are already chosen when you start.

## What's checked at Next and Done

When you select the next button or **Done**, it checks in the order below and shows the message for the first item it catches. **Done** checks all seven steps again.

| Order | Step | What's checked |
| --- | --- | --- |
| 1 | Basic Info | Title, one-line description, story setting, at least 1 character, each character's name and description, duplicate names |
| 2 | Assets | At least 1 image, a profile image, and a situation description for every image |
| 3 | Intro | At least 1 opening, and that each has a title and content |
| 4 | Settings | In the order Genres → Hashtags → Publishing scope → Monetization limits → Image source → Audience → Content rating → Marketing consent |
| 5 | Lorebook | A name, keywords, and content for each lore entry you added |
| 6 | Components | A usage description, code, a function name, and at least 1 variable for each component you added |
| 7 | Optional | A name, gender, birth date, and details for each recommended persona you added |

## Image syntax

Simple mode sends images in the way you chose in **Settings → Image Output Instructions**. Use just one.

| Method | Syntax | Where it's used |
| --- | --- | --- |
| Internal Images | `img:[name]` | Images uploaded to Assets. The card shows the name, like `img:AB3K9X` |
| External Images | `![](image address)` | External image addresses written in the settings |

In the intro, write it like `img:[AB3K9X]`. The name is 6 uppercase letters and digits chosen by MYMI. With internal images, the AI goes by the **situation description** you wrote for each asset and the character you linked to decide which image to put in. With external images, the situation descriptions aren't passed to the AI, and it puts in images by the image addresses or address rules written in the settings. If it can't tell an address, it doesn't put an image in.

:::warning[Not used in Expert mode]
`img:[name]` is Simple mode syntax. In a work made in Expert mode, use the codes in the Assets tab and `![]({{URL}}/A/1.webp)`.
:::

## `{{user}}` and `{{char}}`

| Where you use it | `{{user}}` | `{{char}}` |
| --- | --- | --- |
| Intro | Turns into the user's name when they chat | Turns into the **work's title** when they chat |

In the intro's preview they aren't replaced and show as they are. `{{char}}` puts in the work's title, not a character's name, so write character names out yourself.

## Saving

| Situation | When it's saved |
| --- | --- |
| Every work | When you select the next button, when you go forward by selecting a tab, and when you select **Done**. Everything you changed before then is saved together |
| Assets | Uploading and deleting images, **saving** a situation description, and changing the ★ profile image reach the work right away |
| A published work | The moment it's saved, other users see the change too |

## Free and verified

- Generating and regenerating images in work creation is free. To generate, you need phone verification.
- Adults only works can be used only by users who have completed adult verification.
- Only accounts that have completed adult verification can turn off the Safety Filter at the tag steps of image generation.

## If you get stuck

<details>
<summary>It says "Save failed."</summary>

The connection may have dropped during saving, or the server may have been busy for a moment. Select the next button again a little later. If the same message keeps appearing, tell us which step of which work it happened in, in the support channel on Discord (**Profile → Discord**) or at [contact@mymi.live](mailto:contact@mymi.live).

</details>

<details>
<summary>I can't type any more characters</summary>

Once a field reaches its limit, no more goes in. The Basic Info step has a limit of 10,000 characters across the story setting, character descriptions, and secrets combined, so check how much you've written in the other fields too.

</details>

## Next steps

<CardGrid>
<Card to="/create/simple/first-work" icon="pen" title="Create your first work in Simple mode">Follow along from the start.</Card>
<Card to="/create/simple/to-expert" icon="sliders" title="Move to Expert mode">Learn how to move a Simple mode work's settings into Expert mode.</Card>
</CardGrid>

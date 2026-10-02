---
title: Create your first work
description: Follow the example work "Underground Seoul" and go from a single cover image, a Basic preset prompt, and one opening to a published work.
slug: /create/first-work
sidebar_position: 2
last_update:
  date: 2026-10-03
---

# Create your first work

You can complete a work without images or components. This page follows the example work **Underground Seoul**, filling in only the fields you need until you select **Publish**.

:::tip[What you need]
- 1 image for the cover (JPG, PNG, WEBP, GIF, HEIC · up to 5MB)
- Notes on the world and the characters. If you don't have any, you can copy the examples below.
:::

| Step | Tab | What to fill in |
| --- | --- | --- |
| 1 | **Basic info** | Title, one-line description, cover, description, genres, hashtags |
| 2 | **Prompt** | Choose Basic and write the work info |
| 3 | **Openings** | The opening title and the first message |
| 4 | **Settings** | Choose the five required items |
| 5 | Top bar | **Publish** |

## 1. Fill in Basic info

Select **Create** in the bottom menu, and the **Basic info** tab opens first.

<ScreenStep>

1. Write the **Title**. Up to 30 characters.
2. Write the **One-line description**. It appears on the work card together with the title. Up to 40 characters.
3. Select **Upload image** under **Cover** and add one image. You need at least 1 cover.

</ScreenStep>

> Example — Title: `Underground Seoul` · One-line description: `You wake with no memory below Seoul.`

<ScreenStep>

In the **Description**, write what appears on the work page. The story, the characters, and how to enjoy the work are enough. You can use plain text, Markdown, and HTML, up to 50,000 characters.

Select **Preview** at the top right to see how users will see it.

</ScreenStep>

Here is the example description. `##` is a large heading, `-` is a list, and text wrapped in `**` is shown in bold.

```md
## 2031: the sealed underground city of Seoul

After the surface was contaminated, people moved down into a city built by joining subway stations and underground malls.
You open your eyes on a bed in the quarantine station, your memory completely gone.

### Characters
- **Kang Min-woo** — The underground city's guide. He always cracks jokes, but he seems to know something about you.
- **Lee Seo-yeon** — The quarantine station doctor. She suspects your memory loss was no accident.

### How to enjoy it
- Follow Min-woo out of the quarantine station and look around the underground city.
- If you want your memory back, ask Seo-yeon for clues.
```

<ScreenStep>

Choose 1–2 **Genres**. The example uses **Sci-fi** and **Mystery & thriller**.

Add at least 1 **Hashtag**. Type it in the field and select **Add**, or press Enter. You can also separate several with spaces or commas and add them at once.

</ScreenStep>

You can leave **Creator guide** and **Recommended models** empty. How to fill them in is in [Decorate your work page](/create/profile).

## 2. Write the prompt

What you write in the **Prompt** tab is the setting the AI reads every time it replies. At first, the **Basic** preset, where you only fill in fields, is the easiest.

<ScreenStep>

1. Select **Prompt preset** and choose **Basic**. **Write it myself** is selected at first.
2. In the **Work info** field, write the world, characters, hidden settings, and progression rules. Follow the same shape as the gray example that shows while the field is empty.

The **Total N / 10,000** on the right is the sum of everything you've written in this tab.

</ScreenStep>

Here is the example work info. Split topics with `####`, and write each item as `- **Item**: value`. To refer to the user, write `{{user}}`.

```md
#### Worldview
- **Setting**: 2031, the sealed underground city of Seoul. The surface was contaminated and abandoned.
- **Opening**: {{user}} wakes up in a quarantine station with no memory.

#### Characters
**Kang Min-woo**
- **Role**: Guide of the underground city, 32
- **Personality**: Laid-back, always joking
- **Speech**: Casual; drawls the end of sentences
- **Relationship**: Knows who {{user}} really is but pretends not to

**Lee Seo-yeon**
- **Role**: Quarantine station doctor, 28
- **Personality**: Businesslike and cold
- **Speech**: Short, formal sentences
- **Relationship**: Suspects that {{user}}'s memory loss was no accident

#### Hidden settings
- Min-woo was ordered to watch {{user}}. He never reveals this to the user first.
- {{user}}'s memories were erased by the Bureau.

#### Progression rules
- In the first conversation, Min-woo guides {{user}} out of the quarantine station.
- When {{user}} tries to recover their memories, Seo-yeon gives one clue at a time.
```

<ScreenStep>

The **Assembled prompt** at the very bottom of the tab shows how the fields are combined and sent to the AI. It changes as you edit the fields.

Once you add assets and components, **Image output rules** and **Component output rules** get fields for writing what each one means, and what you write is combined here too.

</ScreenStep>

:::tip[Keep settings short and clear]
Write each character's role, personality, speech, and relationship on separate lines, and the AI is less likely to mix characters up. Put anything the AI must not reveal to the user first in **Hidden settings**, and how the story should move in **Progression rules**. [Write the prompt](/create/prompt) goes into more detail.
:::

## 3. Write the opening

The opening is the first message the AI sends when a chat starts.

<ScreenStep>

1. Write the **Opening title**. It's the name users see when they choose a starting scene.
2. Write the first message in the field below. Up to 2,000 characters. Put actions and narration between `*asterisks*` and dialogue inside `"double quotes"`, and they look just like in a chat.

</ScreenStep>

```md
*The fluorescent lights flicker in the quarantine station. Through the smell of disinfectant, someone pulls back the curtain.*

"Oh, you're finally awake~ You slept for three whole days, you know?"

*A man in a worn military jacket twirls a flashlight and grins. He introduces himself as Min-woo, the guide.*

"Welcome to Seoul. Well, under Seoul~ So, {{user}}. Besides your name, do you remember anything?"
```

<ScreenStep>

Check how it will look in a chat in the **Preview** below the field.

`{{user}}` in the opening turns into the user's name when they chat. The preview shows it as is.

</ScreenStep>

## 4. Choose the settings

In the **Settings** tab, choose every item marked with a red `*`. **Visibility** (Public) and **Content rating** (All ages) are already chosen.

<ScreenStep>

- **Visibility**: **Public** means everyone can see it. **Private** means only you can.
- **Publishing scope**: **Original** is for works published only on MYMI. If you'll post it on other platforms too, choose **General**. When you choose Original, you'll see "Once set to Original, it can't be undone for 3 months."
- **Monetization limits**: If you don't hold the rights, such as a derivative work using another work's characters or setting, choose **Limited**.

</ScreenStep>

<ScreenStep>

- **Image source**: Choose **Made with MYMI** if you made the images in MYMI, or **Made elsewhere** if you used another AI or drew them yourself.
- **Audience**: Choose who the work is mainly for, **For men** or **For women**.
- **Content rating**: **Adults only** is available only to users who have completed age confirmation. It also affects the conversation and the generated images.
- **Marketing consent**: If you agree, MYMI may use this work in ads and social media.

</ScreenStep>

**Recommended personas** at the very bottom is optional. It's explained in [Publish and edit](/create/publish#recommended-personas).

## 5. Publish

Select **Publish** in the top bar. If anything is missing, you're taken to that tab and a notice appears at the top.

<ScreenStep>

Notices appear one at a time. Fill in what the notice says, then select **Publish** again.

The order it checks is Basic info → Assets → Components → Prompt → Openings → Lorebook → Settings. The full list is in [Limits and rules at a glance](/create/limits#what-publish-checks).

</ScreenStep>

<ScreenStep>

If everything is filled in, the **Work complete** screen opens.

- A work set to public is **Under Review**. You can chat with it right away, and other users will see it once the review is done.
- Select **View work** to chat with it right now, and if you spot something to fix, select **Edit** in **Content Management**.

</ScreenStep>

## If you get stuck

<details>
<summary>I selected Publish and it jumped to another tab</summary>

It took you to a tab with something missing. Read the notice at the top and fill it in. In Basic info, the cover, description, and hashtags are the ones people miss most. In Settings, it's **Publishing scope**, **Monetization limits**, **Image source**, **Audience**, and **Marketing consent**.

</details>

<details>
<summary>I typed a hashtag, but it says "Add at least one hashtag."</summary>

Typing it in the field isn't enough. Select **Add** or press Enter so the tag appears below the field.

</details>

<details>
<summary>It says "Enter the work info."</summary>

The **Work info** field of the Basic preset is empty. The gray example isn't text you entered. Write in the field yourself.

</details>

<details>
<summary>The AI doesn't know the character settings I wrote in the description</summary>

The description is an introduction shown to users, so it isn't sent to the AI. Put the settings the AI needs to know in the work info in the **Prompt** tab.

</details>

## Next steps

<CardGrid>
<Card to="/create/images" icon="image" title="Prepare images">Make images of Min-woo and Seo-yeon and show them in chats.</Card>
<Card to="/create/profile" icon="layers" title="Decorate your work page">Add several covers and style the description.</Card>
<Card to="/create/publish" icon="send" title="Publish and edit">Learn about review, applying changes, and asking for a re-review.</Card>
</CardGrid>

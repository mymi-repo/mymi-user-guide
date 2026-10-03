---
title: Show images in chat
description: Learn to write a code table and image output rules so the AI puts fitting images into a chat, plus exceptions and locking (Unlock required).
slug: /create/images-in-chat
sidebar_position: 7
last_update:
  date: 2026-10-03
---

# Show images in chat

An image in a chat shows up when the AI writes a line like `![]({{URL}}/A/1.webp)` into its reply. The AI decides which image to put in which scene by following the rules you wrote in the **Prompt**. This page is the step after you made assets in [Prepare images](/create/images).

## How it all connects

| Where | What | Example |
| --- | --- | --- |
| **Assets** tab | Set an image's path with a folder and a code | Folder `A` + code `1` → `A/1` |
| **Prompt** tab | Write what each code means and tell the AI when to show images | `A`=Kang Min-woo, `1`=laughing |
| Chat | The AI picks the code that fits the scene and puts it in the reply | `A/1` when Min-woo speaks with a laugh |

`{{URL}}` is the spot that is replaced with the real image address. You don't have to write the address yourself.

## Basic: write what each code means

<ScreenStep src="/img/screens/en/prompt-basic-codes.webp" device="part" alt="The image output rules of the Basic preset. Character codes A = Kang Min-woo and B = Lee Seo-yeon, situation codes 1 = laughing, 2 = sad, 3 = angry, other code BG1 = quarantine station corridor, and the exception that B/3 does not exist" caption="Basic · Image output rules">

With the Basic preset, the codes from the Assets tab appear as a table in **Image output rules**. You only need to write a short meaning.

- **Character codes**: The character's name. Example: `Kang Min-woo`
- **Situation codes**: When the image appears. Example: `laughing`
- **Other codes**: What it is. Example: `quarantine station corridor`
- **Exceptions**: A situation a character doesn't have. Example: `No B/3`

</ScreenStep>

What you write is combined with rule sentences and a code table like the one below and sent to the AI. You can check it in the **Assembled prompt** at the bottom of the tab.

```text
### Image output rules
Show the characters and backgrounds that actually appear in the scene as images, chosen from the code table below. At least one image per response — …
Format: `![]({{URL}}/character code/situation code.webp)`; for other codes, `![]({{URL}}/other code.webp)`. …
Character codes:
A=Kang Min-woo
B=Lee Seo-yeon
Situation codes:
1=laughing
2=sad
3=angry
Other codes:
BG1=quarantine station corridor
Exceptions: no B/3
Example: character code A + situation code 1 → `![]({{URL}}/A/1.webp)`
```

:::tip[When you write meanings]
- **For a character code, write only the name, briefly.** In Basic, this meaning is also used as the character's name on the chat screen. Put descriptions like personality and relationships in the work info.
- **Give situation codes the same meaning for every character.** If `1` is laughing for Min-woo but angry for Seo-yeon, the AI gets confused. Put an image of the same situation under the same code for every character.
- **Write missing combinations in Exceptions.** If Seo-yeon has no angry image, write `No B/3` so the AI doesn't call a path that doesn't exist.
:::

## Write it myself: write the rules yourself

With Write it myself, the rule sentences aren't added automatically. Write these three things in the prompt yourself:

1. **Which images exist**: A list of codes and their meanings
2. **When to show them**: Which code to use in which scene
3. **In what format**: On its own line like `![]({{URL}}/A/1.webp)`, and never invent a path that doesn't exist

The shortest version looks like this.

```text
When Seo-yeon greets with a smile, output the image below on its own line.
![]({{URL}}/B/1.webp)
Never invent an image path that is not registered.
```

You can also copy the whole set of rules that Basic builds. See **See the whole Write it myself example** in [Write the prompt](/create/prompt#write-with-write-it-myself).

## Put images in the opening

The opening is a first message you write ahead of time, so you choose where the images go yourself. Insert them with **Insert asset image** and check with the preview. The steps are in [Write the opening](/create/greetings#insert-images).

## Lock it, then unlock it in chat: Unlock required

<ScreenStep src="/img/screens/en/assets-image-sheet.webp" alt="The Unlock required switch in the image settings window" caption="Image settings · Unlock required">

1. In the Assets tab, select the thumbnail of the image to lock.
2. Turn on **Unlock required** in the settings window.
3. Select **Save**. It locks only once you save.

A locked image is blurred in the image list on the work page. When the image appears in a chat, it unlocks for that user only.

Use it when you want to save a special scene's image. The cover and the opening are visible from the start, so images used there stay visible even when locked.

</ScreenStep>

## If you get stuck

<details>
<summary>The AI doesn't put in images, or only sometimes</summary>

- Basic: Check that every code has a meaning and that the images are finished. The AI can't use a code that has no meaning.
- Write it myself: Check that you wrote the image output rules in the prompt.
- The AI's replies differ every time, so even with rules, one may occasionally be missed. Chat with it and refine the rule sentences.

</details>

<details>
<summary>Images don't show in chat, or look broken</summary>

The AI may have called a path that doesn't exist. Check that the codes in the Assets tab match the codes in the prompt, and that missing combinations are written in **Exceptions**. If you changed a folder name or a code, fix the paths in the prompt and the opening too.

</details>

<details>
<summary>A character's name looks wrong</summary>

In Basic, the meaning of a character code is used as the character's name on the chat screen. If you wrote a long description in the meaning, keep only the name and move the description to the work info.

</details>

## Next steps

<CardGrid>
<Card to="/create/components" icon="code" title="Add components">Show UI such as a status window in chats.</Card>
<Card to="/create/lorebook" icon="book" title="Write the lorebook">Write settings that are sent only when a keyword appears.</Card>
</CardGrid>

---
title: Write the opening
description: Learn to write the first message the AI sends when a chat starts, insert asset images, and make several starting scenes.
slug: /create/greetings
sidebar_position: 5
last_update:
  date: 2026-10-03
---

# Write the opening

The opening is the first message the AI sends when a chat starts. It's the first scene users meet, so it sets the first impression of your work. You need at least 1 opening.

## Make an opening

<ScreenStep src="/img/screens/en/first-greeting.webp" alt="The Openings tab, with the opening list, the title field, and the first message field" caption="Openings tab">

1. Write the **Opening title**. It's the name users see when they choose a starting scene. You can use up to 100 characters.
2. Write the first message in the field below. Up to 2,000 characters.

Select **Add** on the opening list row to make more openings. If you make several, users pick one when they start a chat. To delete one, select it in the list and then select the <strong>×</strong> next to its name. You can't delete an opening if it's the only one.

</ScreenStep>

Write the first message the way a chat shows it.

| How to write it | How it looks |
| --- | --- |
| `*The fluorescent lights flicker in the quarantine station.*` | Actions and narration (italic) |
| `"Oh, you're finally awake~"` | Dialogue (accent color) |
| `{{user}}` | Becomes the user's name in chat |
| `{{char}}` | Becomes the **work's title** in chat. It is not a character's name |

:::tip[Write character names yourself]
In a work with several characters, `{{char}}` puts in the work's title, not a character's name. In the opening, write names directly, like "Min-woo".
:::

## Insert images

If the Assets tab has images, you can put them in the opening. In a chat, the image appears where you put it.

<ScreenStep src="/img/screens/en/greeting-insert-image.webp" alt="The Insert asset image window, showing the asset images in a grid with their codes" caption="Insert an asset image">

1. In the first message field, select the spot where you want the image to go to place the cursor.
2. Select **Insert asset image**.
3. Select the image to insert, and a line like `![]({{URL}}/A/1.webp)` is added at the cursor.

An image appears in the list once you upload it in the Assets tab and set its code.

</ScreenStep>

<ScreenStep src="/img/screens/en/greeting-preview-images.webp" device="part" alt="The opening preview. The corridor background and the Kang Min-woo image appear between the narration and dialogue" caption="Opening preview with images">

Check where the images appear in the **Preview**. If no image matches a code, a notice saying "the Assets tab has no image for this code" appears in its place.

In the example, the corridor background is at the top, and Min-woo's smiling image comes right before his first line.

</ScreenStep>

```md
![]({{URL}}/BG1.webp)
*The fluorescent lights flicker in the quarantine station. Through the smell of disinfectant, someone pulls back the curtain.*

![]({{URL}}/A/1.webp)
"Oh, you're finally awake~ You slept for three whole days, you know?"
```

:::info[Locked images are visible in openings]
Images with **Unlock required** turned on in Assets are also shown from the start in the opening and the cover, because those are places users see right away. Don't put images you want to keep hidden in the opening.
:::

## Tips for a good first scene

- **End the first message by handing the user something to do.** The example ends with the question "Besides your name, do you remember anything?", so users can answer right away.
- **Match the opening's tone to the prompt.** If you wrote "Casual; drawls the end of sentences" in the prompt, write the opening's dialogue that way too. The AI tends to carry on the tone of the first message.
- **Try making several starting scenes.** Openings with different starting points in the same world let users choose where to begin. Examples: "Waking up in the quarantine station", "In front of Exit 7"

## If you get stuck

<details>
<summary>It says "Some openings have no title." or "Some openings have no content."</summary>

One of your openings has an empty title or content. Select each one in the opening list to check. To get rid of an opening you won't use, select it and then select the <strong>×</strong> next to its name.

</details>

<details>
<summary>I select Insert asset image and it says "Upload images and set their codes in the Assets tab to insert them."</summary>

There aren't any images you can insert yet. Upload or generate an image in the Assets tab, finish it, and set its code, and it appears in the list.

</details>

<details>
<summary>The preview shows `{{user}}` as it is</summary>

The preview doesn't replace it. It turns into the user's name in a real chat.

</details>

## Next steps

<CardGrid>
<Card to="/create/images" icon="image" title="Prepare images">Make the images to use in the opening and in chats.</Card>
<Card to="/create/publish" icon="send" title="Publish and edit">Publish your work and make it public.</Card>
</CardGrid>

---
title: Move to Expert mode
description: Learn how to copy a Simple mode work's settings into a new Expert mode work. It covers where each item goes, the things that are easy to miss, and how to tidy up the original work.
slug: /create/simple/to-expert
sidebar_position: 8
last_update:
  date: 2026-10-07
---

# Move to Expert mode

There's no way to change a work made in Simple mode into Expert mode. The content of the two modes isn't carried over automatically either. If you want to try writing the prompt yourself in Expert mode, make a **new work** and copy the settings over.

## Before you move

- A new work is a **separate work**. The chats, likes, and comments of the original work aren't carried over to the new one.
- Making a new work **leaves the original work as it is**. If you don't want to show it any more, open it from **Profile → Content Management → Edit**, change **Settings → Visibility** to **Private**, and select the next button to save.
- You'll need the original work's text while you move. It's easier to copy the story setting, character descriptions, secrets, and situation descriptions into a notepad, or to keep the original open on another device and look at it as you go.

## The steps

1. Copy the original work's text.
2. Select **Create** in the bottom menu. If a work opened from Content Management is in the editor, select <strong>↺</strong> to clear the editor. The original work in Content Management stays as it is.
3. In **Creation mode** at the top of the **Basic info** tab, select **Expert mode**. If it's your first time, select **Switch to Expert mode** in the window.
4. Copy the items over using the table below.
5. Select **Publish**.

## Where each item goes

| Where you wrote it in Simple mode | Where you write it in Expert mode | What to do when you move it |
| --- | --- | --- |
| Basic Info → Title · One-line description | Basic info → Title · One-line description | Copy them as they are |
| Basic Info → Story setting | Prompt → work info (Basic) or the body (Write it myself) | Copy the era, places, and rules |
| Basic Info → Characters | Prompt → the characters in the work info | Under each name line, write the role, personality, way of speaking, and relationships |
| Basic Info → Secrets | Prompt → the hidden settings in the work info | Write when they're revealed too. Don't move them into the description |
| Assets → character link | The character folders in Assets + what the character codes mean in the prompt | Make a folder for each character and match the folder code to the name |
| Assets → situation description | The image codes in Assets + what the situation and other codes mean in the prompt | For the same situation, use the same code for every character |
| Assets → profile image (★) | Basic info → Cover | A cover is 1–10 images. You can bring them in from Assets |
| `img:[name]` in the intro | `![]({{URL}}/A/1.webp)` in the opening | Put it in again with **Insert asset image** |
| Settings → Genres · Hashtags | Basic info → Genres · Hashtags | In Expert mode they're in the Basic info tab |
| Settings → the other cards | Settings | The cards and choices are the same. Choose them again |
| Components → Usage Description | Prompt → Component output rules (Basic) or the body (Write it myself) | Copy over when and with what values to call it |
| Optional → Description (HTML) | Basic info → Description | The description is required. You can use HTML too |
| Optional → Creator's Note | Basic info → Creator guide | Copy it as it is |
| Optional → Recommended personas | Settings → Recommended personas | Copy them as they are |
| Lorebook | Lorebook | Copy the name, keywords, and content as they are |

## Easy to miss

Don't stop after moving the story setting and character descriptions. Take care of these too.

1. **An image's situation description** → the codes in Assets and what they mean in the prompt. In Simple mode, MYMI gathered the situation descriptions and passed them to the AI, but in Expert mode you have to write in the prompt when to put images in.
2. **A component's usage description** → the prompt's Component output rules.
3. **`img:[name]` in the intro** → image lines made with the new asset codes. Expert mode doesn't read `img:[…]`.
4. **The description (HTML) and the Creator's Note** → the Description and the Creator guide.
5. **Chat examples you added long ago** → the prompt. The Simple mode screen doesn't show them now, but a work that had chat examples added earlier is still passing them to the AI. They aren't carried over to the new work, so write any way of speaking or examples you need into the prompt yourself.

### Example: move one image

Say in Simple mode you have an image (`img:[AB3K9X]`) linked to the character **Kang Min-woo** with the situation description "Kang Min-woo is smiling brightly." In Expert mode, move it like this.

1. In the **Prompt** work info, write Min-woo's role, personality, and way of speaking.
2. In **Assets**, make a character folder `A` and put that image in with the code `1`.
3. If you're using Basic, in the **Image output rules** write the character code `A` = `Kang Min-woo` and the situation code `1` = `laughing`.
4. If you're using Write it myself, write in the body what the image means and when and in what form to put it in.
5. Delete the `img:[AB3K9X]` you used in the intro and put in `A/1` with **Insert asset image**.

The Expert mode image system is explained in detail in [Prepare images](/create/images) and [Show images in chat](/create/images-in-chat).

## If you get stuck

<details>
<summary>I opened a Simple mode work and I can't select the Expert mode button</summary>

A work opened from Content Management is locked to the mode it was made in. Select <strong>↺</strong> to clear the editor, and the lock is released so you can choose a mode again. The original work in Content Management isn't deleted. ([Before you start](/create/before-you-start#a-work-opened-from-content-management-keeps-its-mode))

</details>

<details>
<summary>I pasted the Simple mode intro into Expert mode and the images don't show</summary>

Expert mode doesn't read `img:[…]`. The opening preview also shows "Could not load the image" in that spot. Delete that line and put the image in again with **Insert asset image** in the first message field.

</details>

<details>
<summary>The moved work's chats don't show images</summary>

In Simple mode, MYMI gathered the situation descriptions and passed them to the AI, but in Expert mode you have to write in the prompt when to put images in. If you're using Basic, fill in what the codes mean in **Image output rules**. If you're using Write it myself, write the image rules in the body. The steps are in [Show images in chat](/create/images-in-chat).

</details>

<details>
<summary>What I wrote in Simple mode isn't on the Expert mode screen</summary>

The two modes keep separate drafts. Simple mode's content isn't carried over to Expert mode. Copy it over by hand with the table above.

</details>

## Next steps

<CardGrid>
<Card to="/create/first-work" icon="pen" title="Create your first work in Expert mode">Follow along from the start in Expert mode.</Card>
<Card to="/create/prompt" icon="book" title="Write the prompt">Learn how to write the settings the AI reads.</Card>
</CardGrid>

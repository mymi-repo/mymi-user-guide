---
title: Assets and AI images
description: Learn how to upload images or make them with AI in Simple mode's Assets step, write a situation description and link a character for each image so the AI picks the right image for a scene, and how the profile image, Unlock required, and images in the intro work.
slug: /create/simple/assets
sidebar_position: 4
last_update:
  date: 2026-10-04
---

# Assets and AI images

You prepare the images to show in chats in the **Assets** step. You can upload images you already have, or make them for free in MYMI. When you write a **situation description** for each image, the AI reads it and picks which image to show in which scene.

:::info[Image generation is free, but it needs verification]
Generating and regenerating images in work creation is free. To generate, your account needs to have completed [phone verification](/account/adult-verification). Uploading images doesn't need verification.
:::

## What the Assets step looks like

<ScreenStep src="/img/screens/en/simple-assets-overview.webp" alt="The Assets step. At the top are the guidance text and the AI Image button, and below are the Add Asset slot and image cards in two columns. Each card has a star, a delete button, the image name, the character name, and the situation description" caption="The Assets step">

1. **AI Image**: Opens the window for making images in MYMI.
2. **Add Asset**: Upload an image, or bring in an image you made with AI.
3. Image cards: The <strong>★</strong> at the top left is the profile image, and the <strong>×</strong> at the top right deletes. At the bottom you see the image name (`img:AB3K9X`), the linked character's name, and the situation description.

</ScreenStep>

- You can add up to 200 images.
- MYMI gives each image name (`img:AB3K9X`) as 6 uppercase letters and digits. You can't change it.
- On a card with no situation description, the description area has a red border.

## Upload images you already have

1. Select **Add Asset**.
2. Select **File Upload** and choose an image. You can use JPG, PNG, WEBP, GIF, and HEIC files up to 5MB.
3. Select the uploaded card and write the situation description.

Images upload one at a time. While one uploads, the card shows a spinning indicator, and when it's done the image appears. The first image you upload automatically becomes the work's profile image.

## Write the situation description

The situation description is **what the AI uses to choose an image**. Users can't see it.

<ScreenStep src="/img/screens/en/simple-asset-sheet.webp" alt="The Enter Description window. A character list sits beside the image preview, with the Unlock required switch, the description field, and the Save button below" caption="Enter a situation description">

1. Select the image to open the **Enter Description** window.
2. In **Select Character**, choose the character in the image. The characters you wrote in the Basic Info step are in the list. A background, or an image for everyone, is **Shared**.
3. In the description field, write what scene it is, up to 60 characters.
4. Select **Save**. The description and the character link are saved only when you select it.

</ScreenStep>

The description field tells you to include the character's name. Without a name, the AI can't show the image correctly. This is how the example images are written.

| Image | Character | Situation description |
| --- | --- | --- |
| Min-woo laughing | Kang Min-woo | `Kang Min-woo is smiling brightly.` |
| Min-woo sad | Kang Min-woo | `Kang Min-woo lowers his head with a sad look.` |
| Min-woo angry | Kang Min-woo | `Kang Min-woo frowns in anger.` |
| Seo-yeon laughing | Lee Seo-yeon | `Lee Seo-yeon smiles faintly.` |
| Seo-yeon sad | Lee Seo-yeon | `Lee Seo-yeon lowers her gaze with a sad look.` |
| Corridor | Shared | `The quarantine station corridor lit in blue.` |

<Gallery items={[
  {src: '/img/example/A-1.webp', label: 'Min-woo laughing', alt: 'Kang Min-woo laughing'},
  {src: '/img/example/A-2.webp', label: 'Min-woo sad', alt: 'Kang Min-woo looking sad'},
  {src: '/img/example/A-3.webp', label: 'Min-woo angry', alt: 'Kang Min-woo looking angry'},
  {src: '/img/example/B-1.webp', label: 'Seo-yeon laughing', alt: 'Lee Seo-yeon with a faint smile'},
  {src: '/img/example/B-2.webp', label: 'Seo-yeon sad', alt: 'Lee Seo-yeon looking sad'},
  {src: '/img/example/BG1.webp', label: 'Corridor', alt: 'The quarantine station corridor lit in blue'},
]} />

:::tip[Describe images of the same character differently]
If you have several images of Min-woo, make the expression or action show, like "is smiling" or "lowers his head". If the descriptions are alike, the AI can't tell which image to pick. And if a description is missing or too short, there's no reason to pick that image.
:::

The image name (`img:AB3K9X`) is passed to the AI along with the situation description, and when the AI puts that name in a reply, the image shows in that spot.

## How images show up in a chat

With **Internal Images** (the starting value), the AI chooses, for **each character who speaks** in a reply, the image linked to that character that's closest to the current scene. The situation description is what it goes by. It doesn't borrow another character's image.

- In **Chat** and **1:1** views, each part of a reply starts with that character's image.
- In **Novel** view, the images of the characters in the scene are worked naturally into the text.

(You change a chat room's view in **UI Settings → UI Mode**, from the palette icon at the top right of the chat room. ([Chatting](/chatting/chat-with-character)))

So it helps to prepare them like this.

- **Link at least one image to every character.** A character with no linked image has nothing to show when they speak.
- **Prepare several images of the same character with different expressions and actions.** The AI picks the one that fits the scene.
- **Leave images that don't belong to a specific character, like backgrounds, as Shared.**

## Set the profile image

The profile image is the one image that represents your work. Select the <strong>★</strong> at the top left of an image card to make that image the profile image. On the current profile image, the ★ is lit yellow. There must always be a profile image.

- The first image you upload or bring in automatically becomes it.
- If you delete the profile image, the one you added first among the remaining images becomes it.
- Simple mode has no option to add several covers the way Expert mode does.

## Make images with AI

<ScreenStep src="/img/screens/en/simple-ai-panel.webp" alt="The AI Image Generation window. The Create New Base Image slot and base image cards for the background and each character are shown, and each character card has a Create Variant Image button" caption="The AI Image Generation window">

Select **AI Image** at the top right of the Assets step to open the **AI Image Generation** window. You can make a **Base Image** with AI, and then make a **Variant Image** on top of it.

- **Base Image**: The foundation image of one character (or one background).
- **Variant Image**: An image that keeps the base image's art style and impression and changes only the expression, pose, background, outfit, props, and composition.

</ScreenStep>

### Make a base image

1. In the window, select **Create New Base Image**.
2. On the first screen, choose **Character** or **Background** in **Select Image Type**. A background is an image focused on a place, with no character.
3. If you chose a character, **Assign to Character** and **Select Gender** follow. Choose the character from the ones you wrote in the Basic Info step. If you don't choose one, the image is saved as a shared image. For gender, choose **Female** or **Male**. Select **Next**.
4. In **Select Art Style**, choose an art style. **Recommended Styles** are the ones MYMI prepared, so start there. There are also your saved **My Styles** and **Direct Write**.
5. Choose tags in this order: **Background → Body - Hair → Body - Eyes → Body - Facial Features → Body - Skin → Body - Body Shape → Outfit → Props → Misc**. Skip any step you don't need with **Next**. For a background image, choose only the background tags.
6. In **Confirm & Generate**, check the tags you chose and select **Generate Image**.

If you unfold **Expert Mode** in the last step, you can change the elements to leave out and the generation settings. This **Expert Mode** is a different thing from the Creation mode you use to make the work. If you're not sure, leave it as it is.

While it's being made, the card shows **Submitting...**, **Queued...**, and <strong>Generating...</strong> in turn. You can make up to 2 base images at once, and variant images one at a time. When it's full, the card changes to **Base generation queued** or **Variant generation queued**. If it fails, the card shows **Generation Failed**. Try again a little later, or clear it with **Remove failed image card**.

### Make a variant image

1. Select a base image card. The list of variant images made from that base opens.
2. Select **Create New Variant Image**.
3. In steps like **What expression should they make?** and **What pose should they take?**, choose the **Expression**, **Pose**, and the **Background**, **Outfit**, **Props**, and **Composition** you want to change. Anything you don't choose stays the same as the base. (**Same as base**)
4. Select **Generate Image**.

On an image card, you can remake it with **Regenerate After Editing Prompt** or remove it with **Delete AI Image**. If you delete a base image, the variant images under it are deleted too.

### Bring the images you made into Assets

An image made with AI doesn't become an asset right away. You have to bring it in.

<ScreenStep src="/img/screens/en/simple-ai-picker.webp" alt="The Select from AI Images window. Base images and variant images are shown in a grid, with the selected button at the bottom" caption="Select from AI Images">

1. In the Assets step, select **Add Asset**, then **Select from AI Images**.
2. Select a base image to see its list of variant images.
3. Choose the images to bring in as assets. You can choose several at once.
4. Select the button at the bottom that shows how many you've picked, such as **3 selected**.

</ScreenStep>

The images you bring in keep the character you chose when you made the AI image. If a situation description is empty, select the card and write one. Assets are limited to 200, so you can't choose more than the room you have left.

## Unlock required: lock an image and release it in a chat

Use it when you want to save an image for a special scene.

1. Select the image to open the **Enter Description** window.
2. Turn on the **Unlock required** switch.
3. Select **Save**. It's locked only after you save.

A locked image is hidden from users, and it's released only to the user whose chat shows that image. A locked image card shows a lock mark.

## Put images in the intro

The intro is a first message you write in advance, so you also choose where the images go.

<ScreenStep src="/img/screens/en/simple-intro-insert.webp" alt="The Insert Asset Image window in the Intro step. Asset images are shown in a grid" caption="Insert Asset Image">

1. In the intro's first message field, select the spot where you want an image to put the cursor there.
2. Select the **Image** button at the top. If you have no assets at all, this button doesn't show.
3. In the **Insert Asset Image** window, select the image, and a line like `img:[AB3K9X]` goes in at the cursor.

</ScreenStep>

Check in **Preview** that the image shows in the right place. If no asset matches the name in the image line, it says "Image not found". Don't type the name yourself. Delete the line and put it in again with the **Image** button, and you won't get it wrong.

```md
*The fluorescent lights flicker in the quarantine station. Through the smell of disinfectant, someone pulls back the curtain.*

img:[AB3K9X]
"Oh, you're finally awake~ You slept for three whole days, you know?"
```

## Image output instructions

The **Image Output Instructions** card in the **Settings** step decides how the AI sends images. Use just one method.

| Method | What it means | What the AI goes by to choose an image |
| --- | --- | --- |
| **Internal Images** | Sends the images you uploaded to Assets as `img:[name]`. It's chosen from the start | The situation description you wrote for each asset and the character you linked |
| **External Images** | Sends the image addresses (URLs) you wrote in the settings as `![](address)` | The addresses, or rules for addresses, written in settings like the worldview and character descriptions. If it can't tell an address, it doesn't put an image in. The situation descriptions aren't passed to the AI |

If your work uses the images you uploaded in the Assets step, leave **Internal Images** as it is.

## If you get stuck

<details>
<summary>I try to make an image and it says "Identity verification is required to generate AI images."</summary>

Image generation in work creation is free, but only accounts that have completed phone verification can use it. You can't start verification on the creation screen, so do this:

1. Save what you've written with the next button.
2. Select **Check-in and get Sparks** in **Profile → Attendance Check** and complete phone verification.
3. Open the work again from **Profile → Content Management** and make the image.

You don't need verification just to upload images you already have. For how to verify, see [Age confirmation and phone verification](/account/adult-verification).

</details>

<details>
<summary>The image I made with AI isn't in my assets</summary>

Images you make aren't added to the assets automatically. Choose and bring them in from **Add Asset → Select from AI Images** in the Assets step.

</details>

<details>
<summary>It says "Please enter an asset description."</summary>

Some image has no situation description. Select the card whose description area has a red border, write it, and select **Save**.

</details>

<details>
<summary>The AI hardly shows images in chats</summary>

Check that **Image Output Instructions** in **Settings** is **Internal Images**. With **External Images**, the situation descriptions aren't passed to the AI, and if the settings have no image address, no image is put in.

If it's Internal Images and images still come out rarely, check these.

1. See whether the speaking character has an image **linked**. The AI only picks images linked to that character.
2. If a character has only one image, the same image comes out every time. Add images with different expressions and write clear situation descriptions.
3. How images come out differs with the chat room's UI mode. ([Chatting](/chatting/chat-with-character))

The AI's replies differ each time, so now and then it may not pick a fitting image.

</details>

<details>
<summary>On the iPhone app it says "Gallery access permission is required."</summary>

To upload images, MYMI needs to be able to access your photos. On the iPhone, allow photo access in **Settings → MYMI**, then select **File Upload** again.

</details>

<details>
<summary>It says the upload failed</summary>

Check the file type (JPG, PNG, WEBP, GIF, HEIC) and size (5MB). If it still doesn't work, try uploading again a little later.

</details>

<details>
<summary>The intro preview says "Image not found"</summary>

No image in the assets has the same name as the one inside the brackets of `img:[…]`. Check that you haven't deleted that image in the Assets step, and that the name in the brackets is the same as the name on the image card. Don't type the name yourself. Delete the line and put it in again with the **Image** button, and you won't get it wrong.

</details>

## Next steps

<CardGrid>
<Card to="/create/simple/extras" icon="layers" title="Lorebook, components, and optional items">See the extra steps that are worth adding.</Card>
<Card to="/create/settings" icon="list" title="Choose your work settings">Choose the image source and publishing scope.</Card>
</CardGrid>

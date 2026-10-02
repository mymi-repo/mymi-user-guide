---
title: Prepare images
description: Create character folders in the Assets tab, generate base looks, and make images for several characters at once with shared situation codes and the waiting list.
slug: /create/images
sidebar_position: 6
last_update:
  date: 2026-10-03
---

# Prepare images

You prepare the images to show in chats in the **Assets** tab. You can upload images you already have, or generate them for free in MYMI. Give each image a code, and you can call it by that code in the prompt and the opening.

:::info[Image generation is free, but it needs phone verification]
Generating and regenerating images in the creation screen is free. To generate, your account must have completed [phone verification](/account/adult-verification). You don't need verification just to upload images.
:::

## How the Assets tab works

<ScreenStep>

- **One folder is one character.** The folder name (for example `A`) becomes the **character code**.
- The code of an image inside a folder (for example `1`) is the **situation code**. This image's path is `A/1`.
- An image outside any folder (for example the background `BG1`) is called by its **other code**.
- Once you set a code, a line like `![]({{URL}}/A/1.webp)` appears under the row. Put that line in the prompt or the opening, and the image shows at that spot.

</ScreenStep>

Codes can only use letters and numbers, and they can't repeat within the same folder. You can only make folders one level deep.

<ScreenStep>

Select <strong>How do assets work?</strong> at the top of the tab to open help on codes and paths, character folders and base looks, generating and waiting, shared situation codes, and locking and unlocking.

</ScreenStep>

Here is how the example work was prepared.

| Path | Image | What the code means |
| --- | --- | --- |
| Folder `A` | Kang Min-woo | Character code A |
| `A/1`, `A/2`, `A/3` | Min-woo laughing, sad, angry | Situation codes 1, 2, 3 |
| Folder `B` | Lee Seo-yeon | Character code B |
| `B/1`, `B/2` | Seo-yeon laughing, sad | Situation codes 1, 2 (no B/3) |
| `BG1` | Quarantine station corridor | Other code BG1 |

<Gallery items={[
  {src: '/img/example/A-1.webp', label: 'A/1 laughing', alt: 'Kang Min-woo laughing'},
  {src: '/img/example/A-2.webp', label: 'A/2 sad', alt: 'Kang Min-woo looking sad'},
  {src: '/img/example/A-3.webp', label: 'A/3 angry', alt: 'Kang Min-woo looking angry'},
  {src: '/img/example/B-1.webp', label: 'B/1 laughing', alt: 'Lee Seo-yeon with a faint smile'},
  {src: '/img/example/B-2.webp', label: 'B/2 sad', alt: 'Lee Seo-yeon looking sad'},
  {src: '/img/example/BG1.webp', label: 'BG1 quarantine station corridor', alt: 'The quarantine station corridor lit in blue'},
]} />

## Upload images you already have

1. For an image that goes outside any folder, select **Upload image** at the bottom of the tab. For an image that goes in a character folder, select **Upload image** inside that folder.
2. Choose your images. You can upload several at once. JPG, PNG, WEBP, GIF, and HEIC files up to 5MB work.
3. Write a **code** on each uploaded row.

## Create a character folder and a base look

When you make several images of the same character, make the **base look** first. The base look is the folder's face. Images you generate in that folder inherit the base look's art style and impression.

<ScreenStep>

1. Select **Add character folder** and write a character code (for example `A`).
2. Select **✦ Create character** next to the folder name.

</ScreenStep>

<ScreenStep>

3. Under <strong>What kind of image?</strong>, choose **Character**. A place with no people is **Background**.
4. For a character, choose **Female** or **Male**, then select **Next**.

</ScreenStep>

<ScreenStep>

5. Choose the **Art Style**.
   - **Recommended Styles**: Styles MYMI prepared. If this is your first time, choose here.
   - **My Styles**: Styles you saved earlier.
   - **Direct Write**: Write the art style yourself as a prompt.

</ScreenStep>

<ScreenStep>

6. Choose tags in this order: **Background** → **Body - Hair** → **Body - Eyes** → **Body - Facial Features** → **Body - Skin** → **Body - Body Shape** → **Outfit** → **Props** → **Misc**. The tags you choose gather at the top. Skip steps you don't need with **Next**.
   - For hair, eye, and outfit tags that don't have a color yet (for example short hair), a window for choosing a color opens when you select them. Select a color, or select **Color already included** if you don't want to add one.
   - Find the tag you want in the **Search tags...** field.

</ScreenStep>

:::info[Some tag names may appear in Korean]
Tags found through search may be shown with Korean names. You choose them the same way, and the tag is turned into an English prompt.
:::

<ScreenStep>

7. Review the chosen tags in **Confirm & Generate**. The tags are turned into an English prompt and placed in the **char_prompt - final edit** field. You can edit this field yourself.
8. Select **Generate base look**. When it finishes, the base look appears next to the folder name.

</ScreenStep>

<ScreenStep>

Expand **Expert Mode** to change what to leave out (`negative_prompt`), the generation settings (guidance, steps, sampler, noise_schedule), and the image size. If you're not sure, leave them as they are.

</ScreenStep>

<ScreenStep>

Select a folder's base look to open this window.

- **Edit prompt**: Edit the tags and the prompt.
- **Regenerate**: Make it again with the same settings.
- **Add as image**: Add the base look itself as an image in the folder too. Give it a code, and you can use it in chats.

</ScreenStep>

:::tip[Tags for the example work]
Min-woo was made with the male recommended style and tags like brown messy short hair, droopy eyes, a military jacket, and a flashlight. Seo-yeon was made with the female recommended style, with hospital, indoor, and underground background tags added, and `simple background, white background` entered in the `negative_prompt` of Expert Mode. It's a method for when a style keeps giving you a plain white background.
:::

## Make more images in a folder

<ScreenStep>

Select **✦ Generate** in a folder to choose how to make the image.

- **Inherit the base look** (recommended): Keep the art style and look, and choose only the expression, pose, and background.
- **Start from scratch**: Choose the kind, gender, art style, and tags anew.

For a folder without a base look, choose between **Create the character first** and **Generate this image only**.

</ScreenStep>

On the last step, select **Generate now** to make it right away, or **Add to waiting list** to make it later along with others. You can set the code before generating.

## Make the same situation for several characters: shared situation codes

For situations every character needs, like "laughing" and "sad", prepare them all at once with **shared situation codes**.

<ScreenStep>

1. Select **✦ Situation codes** at the top right of the tab.
2. Use **Add situation code** to set a code (for example `1`) and tags such as the expression and pose.
3. Select **Apply** next to the situation code you made.

</ScreenStep>

<ScreenStep>

4. Choose the character folders to apply it to. You can't choose a folder that already has the same code.
5. Select **Apply to N characters**, and each folder gets a **blank** such as `A/3` and `B/3`.

Fill a blank by uploading an image or generating one. When you generate, the situation's tags are added on top of each folder's base look. You can make the base look after applying.

</ScreenStep>

## Generate in one go: the waiting list

<ScreenStep>

If you have images in the waiting list or blanks, the tab shows **View N waiting** (and **N blank** together when there are blanks).

1. Select it to open the **Generate images** window.
2. Check the images to make, then select **Generate N selected**. You can request up to 50 at once.
3. Rows that are generating show their status, and when they finish, each row fills in with its image.

</ScreenStep>

## Manage one image

<ScreenStep>

Select an image thumbnail to open its settings window.

- **Edit prompt** / **Regenerate**: For a generated image, you can edit it and make it again.
- **Location**: Move it out of the folder or into a folder. You can't move an image from one character folder to another.
- **Unlock required**: Turn it on and select **Save**, and the image is blurred in the image list on the work page until it appears in a user's chat, when it unlocks for that user.
- **Delete image**: Removes this image from the work.

</ScreenStep>

## Check before you publish

- Every image needs a code. Codes use only letters and numbers, and can't repeat within a folder.
- Fill in or delete blanks without images and rows waiting to be generated.
- For a folder where you decided to make a base look, the base look image must be finished too.
- With a Basic preset prompt, write what each code means. [Show images in chat](/create/images-in-chat) continues from here.

:::warning[When you edit assets after publishing]
On a published work, you can't change folder names (character codes). You can change codes, add new codes, and replace images. Changes to assets reach the work right away, without waiting for **Apply changes**.

If you change a code or delete an image on a public work, the image also disappears from existing chats that used it. To swap an image, keep the code and replace only the image. The paths you wrote in the prompt and the opening aren't updated automatically, so check them too.
:::

## If you get stuck

<details>
<summary>It says "Identity verification is required to generate AI images."</summary>

Only accounts that have completed phone verification can generate. You can't start verification on the creation screen, so do this:

1. Select **Save draft** at the top right (**Apply changes** for a work you've already published) to save your work.
2. Select **Check-in and get Sparks** in **Profile → Attendance Check** and complete phone verification.
3. Open the work again from **Profile → Content Management** and generate the image.

You don't need verification just to upload images.

</details>

<details>
<summary>It says "Some codes don't have an image yet."</summary>

Blanks made with shared situation codes, or rows waiting to be generated, are still there. Check them with **View N blank**, then generate or delete them. If a character doesn't need that situation, delete the blank and write it in the **Exceptions** of the Basic preset prompt (for example `No B/3`).

</details>

<details>
<summary>I want to move an image to another character folder</summary>

You can't move an image between character folders. An image you moved out of a folder can go back into a folder. If you need to, upload or generate the image again in the folder you want.

</details>

<details>
<summary>I can't turn off the Safety Filter switch</summary>

Only accounts that have completed age confirmation can turn off the Safety Filter at the top right of the tag steps.

</details>

## Next steps

<CardGrid>
<Card to="/create/images-in-chat" icon="image" title="Show images in chat">Give codes a meaning so the AI picks images that fit the scene.</Card>
<Card to="/create/greetings" icon="chat" title="Write the opening">Put images in the first scene.</Card>
<Card to="/create/profile" icon="layers" title="Decorate your work page">Use the images you made as covers.</Card>
</CardGrid>

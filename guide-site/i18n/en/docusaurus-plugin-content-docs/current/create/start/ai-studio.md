---
title: Follow along in Google AI Studio
description: See, on the actual AI Studio screens, how to make components and description HTML with Google AI Studio. From copying your work info through Remix, your request, and copying the code to pasting it into MYMI, Simple mode and Expert mode follow the same steps.
slug: /create/ai-studio
sidebar_position: 4
last_update:
  date: 2026-10-24
---

# Follow along in Google AI Studio

Here are the steps that appear when you select **How to use** in **Create with Google AI Studio** on the creation screen, shown on the actual Google AI Studio screens. The yellow outline marks what to select.

- It's based on the PC screen. Steps where the location differs on a phone are noted separately.
- AI Studio appears in English. Button names are written exactly as they appear on screen.
- Simple mode and Expert mode, and components and descriptions, all follow the same steps. Where something differs, it's noted in that step.

## Before you start

In MYMI, select **Copy work info** first, then select **Open Google AI Studio**. Your work's settings, image addresses, and current description are copied together.

- Components: in Simple mode, at the top of the **Components** step; in Expert mode, at the top of the **Components** tab.
- Description: in Simple mode, under the Description heading in the **Optional** step; in Expert mode, under the Description field in the **Basic info** tab.

:::info
You can use it within your Google account's free request allowance. No payment or API key is needed.
:::

## 1. Select 'Continue to the app'

This Google notice appears first. It means the app was made by someone else. It's the workspace MYMI made, so just go ahead.

<Screenshot src="/img/screens/ai-studio/continue.webp" alt="The 'This app is from another developer' notice, with a yellow outline on the Continue to the app button" caption="Notice that the app is from another developer" />

## 2. Select 'Remix' at the top right

Do this **only the first time**. It copies the shared workspace to make your own. Once it's made, skip this step from then on.

On a phone, select **⋯** at the bottom right of the screen to find Remix.

<Screenshot src="/img/screens/ai-studio/remix.webp" alt="The shared workspace screen, with a yellow outline on the Remix button at the top right" caption="The shared workspace" />

## 3. Name it and select 'Remix app'

Pick a name that's easy to find later. Example: Moonlight Bookstore workspace.

<Screenshot src="/img/screens/ai-studio/remix-dialog.webp" device="part" alt="The Remix window, with yellow outlines on the App name field and the Remix app button" caption="The Remix window" />

## 4. Paste it, describe what you want, and send

Paste the work info you copied in MYMI into the input at the bottom left. Below it, add a line or two about what you want, then select the arrow to send it.

> Example: Make it look like a student planner that shows affinity and today's date.

On a phone, select **Chat** at the bottom of the screen to bring up the input. Press and hold the input to paste.

<Screenshot src="/img/screens/ai-studio/request.webp" alt="The input at the bottom left holds the work info and what you want, with yellow outlines on the input and the send arrow" caption="The input with the pasted work info and what you want" />

## 5. Wait while it's being made

If you see a progress message in English like 'Running for …', it's still being made. A component usually takes 2–5 minutes, and a description 1–3 minutes. Keep the window open and wait. You don't need to understand the tables or technical terms in Gemini's reply.

<Screenshot src="/img/screens/ai-studio/running.webp" alt="Gemini making it while showing Running for 28s, with a yellow outline on the progress message" caption="In progress" />

## 6. Check the result and copy the code

When you see '내 요청으로 만든 결과' (Result made from my request) on the right, it's done. Check the look in the preview below, then select **MYMI에 붙여넣을 코드 복사** (Copy code for MYMI). For a description, first check at the top that **프로필 HTML** (Profile HTML) is selected. To change something, just say so again in the input from step 4.

If copying doesn't work, select **직접 선택해서 복사** (Select and copy) just below it. On a phone, select **Preview** at the bottom of the screen to see the result.

<Screenshot src="/img/screens/ai-studio/copy-code.webp" alt="The 내 요청으로 만든 결과 (Result made from my request) label and the MYMI에 붙여넣을 코드 복사 (Copy code for MYMI) button, with a yellow outline on the copy button" caption="The result and the copy code button" />

## 7. Also copy the sentence that says when to show it

Do this **for components only**. Gemini's reply has a sentence that says when to show the component. Without it, the component won't appear in chats.

<Screenshot src="/img/screens/ai-studio/usage-sentence.webp" alt="At the top left of Gemini's reply, the sentence that says when to show it, with a yellow outline" caption="The sentence in Gemini's reply that says when to show it" />

## 8. Paste into MYMI and save

Paste the code and the sentence you copied into the fields below, check the look in the preview, then save.

| What you're making | Where the code goes | Where the when-to-show sentence goes | Save |
|---|---|---|---|
| Simple mode component | **Add component** → **JSX code** field | **Usage Description** field | The arrow button at the bottom right |
| Expert mode component | **Add component** → **JSX code** field in the Components tab | Prompt tab. With Basic, that component's field under **Component output rules** | **Save draft** |
| Simple mode description | **Use** under Description in the Optional step → HTML field | None | **Done** |
| Expert mode description | **Description** field in the Basic info tab | None | **Save draft** |

## Next time, open it from 'My apps'

Your workspace is in **My apps** on the left of the AI Studio home screen. Open it there and start from step 4. You don't need to Remix again.

<Screenshot src="/img/screens/ai-studio/my-apps.webp" device="part" alt="My apps in the AI Studio left menu and the list of your workspaces, with a yellow outline" caption="My apps" />

:::note
If Google changes the AI Studio screens, the button positions may change.
:::

## If you get stuck

<details>
<summary>I see a permission error like 'Failed to list API keys'</summary>

Reload the page and select **Remix** again.

</details>

<details>
<summary>Preview is blank</summary>

Wait a moment, then select the reload button above Preview.

</details>

<details>
<summary>I can't copy the code</summary>

Select **직접 선택해서 복사** (Select and copy), then select all of the code and copy it.

</details>

<details>
<summary>It says I've used up the free allowance</summary>

Continue after the allowance refills.

</details>

<details>
<summary>I see suggestions like 'AI Features'</summary>

Don't select them. They don't work in MYMI components or descriptions.

</details>

<details>
<summary>The art doesn't show in the description</summary>

Image addresses are included in the work info only when your assets have finished images. Make the images, then copy again. Images marked as adult-only are not used in the description.

</details>

## Next steps

<CardGrid>
<Card to="/create/components" icon="code" title="Add components">Edit components in Expert mode and connect them to the prompt.</Card>
<Card to="/create/profile" icon="pen" title="Decorate your work page">Decorate the cover and description in Expert mode.</Card>
<Card to="/create/simple/extras" icon="layers" title="Lorebook, components, and optional items">Fill in components and the description in Simple mode.</Card>
</CardGrid>

---
title: About the legacy creation flow (1.0)
description: Learn how to tell a work made with the legacy creation flow (1.0), how it differs from the current creation screen, and how to rebuild a 1.0 work in the current flow.
slug: /create/legacy/overview
sidebar_position: 1
last_update:
  date: 2026-10-03
---

# About the legacy creation flow (1.0)

Works used to be made in a seven-step creation screen. We call that the <strong>legacy creation flow (1.0)</strong>. Make new works from **Create** in the bottom menu, in the current creation screen. When you edit a work made with 1.0, the earlier screen opens.

## Tell whether your work is 1.0

<ScreenStep>

Select **Edit** on a work in **Profile → Content Management**.

- If the tab row is **Basic Info · Assets · Intro · Settings · Lorebook · Components · Optional** and there's a **>** (Next) button at the bottom right, it's a 1.0 work.
- If there's a **Prompt** tab and **Save draft** and **Publish** (or **Apply changes**) at the top, it's a work made in the current flow.

</ScreenStep>

A 1.0 work isn't converted to the current flow automatically. How to edit it is in [Edit a 1.0 work](/create/legacy/edit).

## What changed

The biggest difference is **where you write the settings the AI gets**. In 1.0, you wrote them in separate fields and MYMI combined them. Now you build them yourself in the **Prompt** tab.

| | 1.0 | Current |
| --- | --- | --- |
| World, characters, secrets | In separate fields in **Basic Info** | The work info of the **Prompt** tab (Basic) or the prompt text (Write it myself) |
| What an image means | A **description** on each asset, linked to a character | The asset's folder and code, plus the code meanings in the prompt (Basic) or the image rules (Write it myself) |
| Putting an image in a chat | `img:[slug]` | `![]({{URL}}/A/1.webp)` |
| The work's main image | The one asset marked with ★ | 1–10 **Cover** images in **Basic info** |
| Work introduction | The HTML profile in **Optional** | The **Description** in **Basic info** (required) |
| A note from the creator | **Creator's Note** in **Optional** | The **Creator guide** in **Basic info** |
| When to use a component | The component's **Usage Description** | The component output rules in the prompt (Basic) or the text (Write it myself) |
| Categories | **Hashtags** in **Settings** (including Target Audience) | Genres and hashtags in **Basic info**, plus the audience in **Settings** |
| Recommended personas | **Optional** | **Settings** |
| Moving between steps | Fill in the required items of the previous step first | Start with any tab. Required items are checked when you **Publish** |

Openings and the lorebook exist in both.

## To rebuild a 1.0 work in the current flow

There's no feature for converting an existing work. Make a new work from **Create** in the bottom menu and copy the settings over. A new work is a separate work, so the chats, likes, and comments of the existing work don't move.

Making a new work leaves your existing 1.0 work as it is. If you don't want to show the old one any more, open it with **Edit**, change **Visibility** in the **Settings** step to **Private**, and select **>** (Next) to save.

When you move things over, don't stop at the world and character descriptions. Carry these over too:

1. **The description of each image** → the asset codes and the code meanings in the prompt
2. **The usage description of each component** → the component output rules in the prompt
3. **`img:[slug]` in the opening** → lines for images inserted with the new asset codes
4. **The HTML profile and the Creator's Note** → the description and the creator guide
5. **Sample dialogue you added before** → the prompt. It isn't shown in the 1.0 screen now, but it is still sent to the AI. It doesn't move to a new work, so write the speech style and examples you need in the prompt yourself.

Where each item goes is tabulated in [1.0 fields and syntax](/create/legacy/reference#move-items-to-the-current-flow).

## If you get stuck

<details>
<summary>I wanted to make a new work, but the earlier seven-step screen opened</summary>

**Edit** in **Content Management** opens the screen of the flow the work was made with. Make new works from **Create** in the bottom menu.

</details>

<details>
<summary>I can't find a button to change a 1.0 work to the current flow</summary>

There isn't one. You need to make a new work and copy the settings over. Follow [To rebuild a 1.0 work in the current flow](#to-rebuild-a-10-work-in-the-current-flow).

</details>

## Next steps

<CardGrid>
<Card to="/create/legacy/edit" icon="history" title="Edit a 1.0 work">Edit a work in the earlier seven-step screen.</Card>
<Card to="/create/legacy/reference" icon="list" title="1.0 fields and syntax">See the 1.0 limits, image syntax, and where each field moved.</Card>
<Card to="/create/first-work" icon="pen" title="Create your first work">Make a new work in the current flow.</Card>
</CardGrid>

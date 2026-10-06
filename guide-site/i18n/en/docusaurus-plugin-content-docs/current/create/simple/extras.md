---
title: Lorebook, components, and optional items
description: Learn how to use Simple mode's optional steps, Lorebook, Components, and Optional. It covers settings sent only when a keyword comes up, status windows that pop up in chats, a Description in HTML, recommended personas, and a Creator's Note.
slug: /create/simple/extras
sidebar_position: 5
last_update:
  date: 2026-10-07
---

# Lorebook, components, and optional items

**Lorebook**, **Components**, and **Optional** are optional steps. You can complete a work with them empty, and you fill them in when you want to add them. If you do add something, you have to fill in all its required fields before the next button lets you move on.

## Lorebook

The lorebook is **a set of settings whose content reaches the AI only when a keyword comes up in the chat**. Write things the AI doesn't need all the time but must know when a name comes up, like a world's terms, places, organizations, and a character's secrets.

The AI reads what you write in the story setting every time, but it reads a lore entry only when its keyword comes up. If you keep the settings needed every time in the story setting and characters of the Basic Info step, and the ones that come up now and then in the lorebook, the story setting stays short.

<ScreenStep src="/img/screens/en/simple-lorebook.webp" alt="The Lorebook step. Below the 2/100 count and the guidance text, two lore entries, The Bureau and Exit 7, are shown folded, with the Add entry button" caption="The Lorebook step">

1. Select **Add entry**. You can make up to 100.
2. Unfold the card and fill in the **Name**, **Keywords**, and **Content**.
3. Select the card again to fold it so only the name and keywords show. The trash icon on the card deletes it.

</ScreenStep>

- **Name**: The lore entry's name. Up to 50 characters. It's passed to the AI along with the content.
- **Keywords**: When one of these words comes up in the chat, the content is passed on. Up to 5, and up to 10 characters each. Write one and press Enter or a comma to add it. Upper and lower case aren't told apart.
- **Content**: Write only what the AI needs to know when the keyword comes up. Up to 400 characters.

These are the example work's lore entries.

| Name | Keywords | Content |
| --- | --- | --- |
| The Bureau | Bureau, Director | The organization that governs the underground city. It runs the quarantine station and the exits, and rumor has it that it erases the records of people who come down from the surface. Min-woo acts on the Bureau's orders. |
| Exit 7 | Exit 7, Exit-7 | The only exit to the surface. It has been closed since the city was sealed off in 2031, and you need a Bureau permit to get near it. |

**How entries are found and passed on**

- It looks for keywords in the message the user sent and in the **last 10 messages**.
- A keyword is found even inside another word. The keyword `Bureau` is also found in "Bureaucracy". Spaces matter, so `Exit 7` isn't found in "Exit7".
- If several lore entries match, it picks the one that came up most recently first, and passes on **at most 3, with a total of 1,500 characters**, at a time.

**Tips for choosing keywords**

- Write words that will actually come up in chats. Add abbreviations and nicknames too. For a name that can be written with or without a space, add both.
- Avoid very common words. They match in almost every chat, so the lore entry you actually need may not make it into the 3.
- Keep the content to short facts. Put the way of speaking and the direction of the story in the story setting and the character descriptions.

## Components

A component is **UI the AI shows during a chat**. Build things you want to show, like a status window, an inventory, or choices, and the AI calls them when needed. You can make one without knowing code by using a Gem.

<ScreenStep src="/img/screens/en/simple-components.webp" alt="The Components step. At the top are the Guide and Copy work context buttons, with a StatusWindow component card and its preview, and the Add component button" caption="The Components step">

1. Select **Add component** to make a card.
2. Unfold the card and paste your code into the **JSX code** field. The function name and variables are read from the code automatically.
3. In **Usage Description**, write when to use this component.
4. Check how it will look in the chat in the preview inside the card. The eye icon on the card folds and unfolds the preview.

</ScreenStep>

- **JSX code**: Code in the shape `function Name({ variable = default })`. You can write up to 10,000 characters. Code fences and import statements are tidied up automatically.
- **Default prop values**: Shows the variables read from the code and their defaults. The defaults are used in the preview and become examples of what the AI fills in.
- **Usage Description**: Up to 500 characters. It's what the AI goes by to decide when to use this component.

Here is the status window code for the example work. It needs a function name (`StatusWindow`) and at least one variable (`hp`, `mp`).

```jsx
function StatusWindow({ hp = 100, mp = 40 }) {
  const bar = (value, color) => (
    <div className="h-2 w-full rounded-full bg-slate-700">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
  return (
    <div className="my-2 w-full max-w-sm rounded-xl border border-cyan-400/40 bg-slate-900/90 p-3 text-slate-100">
      <div className="mb-2 flex items-center justify-between text-[11px] font-bold tracking-widest text-cyan-300">
        <span>STATUS</span>
        <span>Quarantine B-3</span>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <div className="mb-1 flex justify-between"><span>HP</span><span>{hp}/100</span></div>
          {bar(hp, "bg-rose-400")}
        </div>
        <div>
          <div className="mb-1 flex justify-between"><span>MP</span><span>{mp}/100</span></div>
          {bar(mp, "bg-sky-400")}
        </div>
      </div>
    </div>
  );
}
```

> Example — Usage Description: `Shown when a battle starts and when HP changes. hp = health, mp = mana.`

The AI reads the component's name, usage description, and variables with their defaults, and puts a tag like `<StatusWindow hp={100} mp={40} />` in a reply at the right time. If you write **when to use it** and **what each variable means** in the usage description, the AI fills in the values properly.

:::info[A component is a tool for showing things]
A component only draws the values the AI gives it in a nice way. Whether the values are right, like a health calculation, depends on the AI's reply. Even with a description, the AI may now and then leave out a tag or put in a different value.
:::

**Build it with a Gem**

You don't have to write the code yourself. Use the two buttons at the top of the step.

1. Select **Guide** to see the Gem instructions. They pop up on their own the first time you open this step.
2. Select **Copy work context**. Your work's introduction is copied, and **Open Gemini Gem** appears.
3. Open the Gem, paste the copied work info, and describe the UI you want. Answer the Gem's questions and it makes the code.
4. Paste the finished code into the **JSX code** field of the component card.

## Optional

The **Optional** step has a Description, recommended personas, and a Creator's Note. Since it's the last step, the button turns into **Done**.

### Description

Decorate the text shown on the work page with HTML. If you don't use it, the work page shows the story setting and the character descriptions as they are.

<ScreenStep src="/img/screens/en/simple-optional.webp" alt="The Optional step. Under Description, Use is chosen out of Use and Don't use, with the HTML field and the preview showing" caption="The Optional step · Description">

1. Choose between **Use** and **Don't use**. **Don't use** means only the standard profile is used.
2. If you choose **Use**, the HTML field appears. It can hold up to 50,000 characters.
3. A check result shows below the field. If it says "Safe HTML", you can use it as it is. Select **Auto clean** next to "Contains unsafe tags" to strip those tags. "Not HTML text" means the text isn't HTML code.
4. If it's HTML, a **Preview** appears below. Check how it will look to users.

</ScreenStep>

You don't need to know code. Select **Copy Work Info**, then **Open Gemini Gem**, and ask the Gem to make an introduction page. Select **Guide** to see how to use it.

:::info[The AI doesn't read the Description]
The Description is text shown on the work page. Write the settings the AI needs to know in the Basic Info step.
:::

### Recommended personas

This lets you prepare personas that users can pick when they start a chat. Use it to suggest a protagonist that suits the world of your work. You don't have to make any.

Select **Add persona** to make one. If you make one, you need to fill in all four fields before the next button or **Done** lets you move on.

- **Name**: Up to 20 characters
- **Gender**: Female or Male
- **Birth date**: Write the year, month, and day. The person must be at least 14 years old.
- **Details**: Write the personality, background, and way of speaking so the AI knows how to treat a user playing this persona. Up to 1,000 characters

### Creator's Note

Leave a message about your work. Up to 3,000 characters. It shows on the work page, and the AI doesn't read it. Select **Clear** to erase the text.

## If you get stuck

<details>
<summary>It says "Some lore entries have no keywords."</summary>

Check that you wrote a keyword and pressed Enter or a comma to add it. The keyword has to show on the card to be added. Delete half-made entries with the trash icon. An entry with an empty name or content gets the same message.

</details>

<details>
<summary>It says "Please write the component code as a function component."</summary>

Check that the code starts in the shape `function Name(...)`. The name can't be read from an arrow function or an unnamed function.

</details>

<details>
<summary>It says "Please add at least one variable name to the component."</summary>

The function has to declare at least one variable it takes. Example: `function StatusWindow({ hp = 100 })`

</details>

<details>
<summary>It says "Please enter the component usage description."</summary>

Unfold the component card and write the **Usage Description**. Check whether any component has a red note on its card, like "Usage description required" or "JSX code required".

</details>

<details>
<summary>It says "Please complete the recommended persona information."</summary>

Some persona you made has an empty name, gender, birth date, or details field. The birth date can't be a date that doesn't exist, in the future, or under 14 years old. Delete any persona you won't use.

</details>

<details>
<summary>The work page shows only HTML, not the story setting</summary>

That's because you set **Description** to **Use**. If you write an HTML introduction, that text is shown instead of the story setting and the characters. To show the story setting and the character descriptions, change it to **Don't use**.

</details>

## Next steps

<CardGrid>
<Card to="/create/simple/edit" icon="history" title="Edit a work">Reopen a work you made and change it.</Card>
<Card to="/create/publish" icon="send" title="Publish and edit">Learn about review, Content Management, and asking for a re-review.</Card>
</CardGrid>

---
title: Add components
description: Build UI that pops up during a chat, like status windows, inventories, and choices, with JSX code, check the default prop values and the preview, and connect it to the prompt.
slug: /create/components
sidebar_position: 9
last_update:
  date: 2026-10-03
---

# Add components

A component is **UI the AI shows during a chat**. Build things you want to show, like a status window, an inventory, or choices, and the AI calls them when needed. You can make one without knowing code by using **Build with a Gem**.

## Add a component

<ScreenStep src="/img/screens/en/components-top.webp" alt="The Components tab, showing the StatusWindow component preview, Add component, and Build with a Gem" caption="Components tab">

1. Select **Add component**.
2. Paste the code into the **JSX code** field. Select **Paste** to put in the code on your clipboard.
3. Check in the preview how it will look in a chat.

The component name and props are read from the code automatically.

</ScreenStep>

<ScreenStep src="/img/screens/en/components-editor.webp" device="part" alt="The StatusWindow component opened, showing the preview, JSX code, default prop values hp and mp, and the call tag with a Copy button" caption="Edit a component">

- **JSX code**: Code in the form `function Name({ prop = default })`. Code fences and import statements are cleaned up automatically. You can write up to 20,000 characters.
- **Default prop values**: Shows the props read from the code and their defaults. The defaults become examples of what the AI fills in, and the preview uses them too.
- **Call tag**: The tag under "This is how the AI calls it in chat." Select **Copy** and paste it into the Prompt tab.

</ScreenStep>

Here is the status window code for the example work. It needs a function name (`StatusWindow`) and at least one prop (`hp`, `mp`).

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

## Connect it to the prompt

Adding a component alone doesn't tell the AI when to call it. Write when to call it in the **Prompt** tab.

- **Basic**: In **Component output rules**, write when each component appears. The tag is added automatically, exactly as it appears in the Components tab (`<StatusWindow hp={100} mp={40} />`), together with the rule sentence.
  Example: `When a battle starts and when HP changes. hp = health, mp = mana.`
- **Write it myself**: You write the call tag, when it appears, and what the props mean. You can paste the tag you copied with **Copy** in the Components tab as is, or write `{value}` where the value goes.

With Write it myself, write it like this.

```text
### Component output rules
At the moment a rule applies, output the tag below on its own line, exactly as written.
- `<StatusWindow hp={value} mp={value} />`: when a battle starts and when HP changes. hp = health, mp = mana.
```

:::info[A component is just a display tool]
A component only draws the values the AI gives it. Whether the values are right, like an HP calculation, depends on the AI's reply. Even with rules, the AI may occasionally leave out the tag or fill in values differently.
:::

## Build with a Gem

You don't have to write the code yourself. In **Build with a Gem** under the tab, you build it by talking with a Google Gemini Gem.

1. If the component will use asset images, select **Copy asset info**. You can select it only when the Assets tab has a finished image.
2. Select **Open Gem**, and in your first message briefly describe the work and the UI you want to make. Paste the asset info you copied too.
3. Answer the Gem's questions, check the summary it puts together, and ask it to build.
4. Copy the finished code and put it in **Paste** under **Add component**.
5. Put the sentence the Gem also gives you for the Prompt tab into the Prompt tab.

:::tip[Follow what the Gem says in its first reply]
If the Gem asks you to switch to **Gemini Flash** or **Pro**, do it. To watch what it builds alongside, turn on <strong>＋ → Canvas</strong> below the Gemini input box.
:::

## Components that use images

- To let the AI choose an image for each scene, have the component take the image as a **prop**, and in the prompt write the whole value as an asset path, like `img="{{URL}}/A/1.webp"`. If you put it among other text, like `url({{URL}}/…)`, it isn't replaced with an address.
- If you write a path that doesn't exist, an empty value goes in. Build the component so it draws only when the image value exists.
- Don't use `{{URL}}` in a prop's **default value**. Use a real image address (starting with https) or an empty value.
- An image address written directly in the code stops showing if you delete that asset.

## If you get stuck

<details>
<summary>It says "Some components have no function name."</summary>

Check that the code starts in the form `function Name(...)`. Arrow functions and anonymous functions have no readable name.

</details>

<details>
<summary>It says "Some components have no props. Declare at least one prop."</summary>

You need to declare at least one prop that the function takes. Example: `function StatusWindow({ hp = 100 })`

</details>

<details>
<summary>I changed the code, but the default prop values stayed the same</summary>

When you replace all the code with the **Paste** button, the defaults are read again. If you edit the code field a little at a time, the earlier defaults stay, so check **Default prop values** after you edit.

</details>

<details>
<summary>I selected a button in the preview, but no message was sent</summary>

The preview in the creation screen is only for checking how it looks, so nothing is sent to a real chat. After you publish, start a chat with **View work** on the complete screen to check. To test before other users see it, set **Visibility** to **Private** and publish.

</details>

## Next steps

<CardGrid>
<Card to="/create/publish" icon="send" title="Publish and edit">Publish your work and make it public.</Card>
<Card to="/create/limits" icon="list" title="Limits and rules at a glance">Check the character and count limits in one place.</Card>
</CardGrid>

---
sidebar_position: 2
last_update:
  date: 2026-09-23
description: Manage chats, response settings, memories, display options, bookmarks and branches, and chat captures.
---

# Chat room settings

Stories made with either the V1 or V2 creation flow use the same basic settings menu in a chat room. The intros and recommended personas available on the story page may differ.

> **Know which button to use.** The **⋮ button at the top right** of the chat opens room management and conversation settings. The **palette icon beside it** opens UI settings for the text, colors, and reading mode. You do not need to look beside the message input for these menus.

## 1. Open room management

While chatting, select **⋮** at the top right. The **Room Management** drawer opens from the side. At the top, signed-in users see their Spark balance and guests see their remaining trial usage. Selecting that area opens Credits or a sign-in prompt, depending on the account.

Under **Conversation Management**, you can use:

- **Start New Chat:** Reopens the current story's detail page. Choose an intro and persona there, then select **Start new chat** to create a separate room. Selecting this menu item alone does not immediately create a room.
- **View Previous Chats:** Opens the rooms for this story. Select a room to preview its last message and choose **Continue**. You can also **Hide** or **Delete** a room from the list.
- **Copy Room ID:** Copies this room's ID to the clipboard. Use it when asking for help with a specific room.
- **Capture Chat:** Creates an image from a range of messages. See step 6 below.
- **Bookmarks:** Opens saved bookmarks, where you can create a branch or delete a bookmark.

**Hide and Delete are different.** A hidden room can be restored from the hidden chats list. A deleted conversation cannot be recovered, so check the room in the confirmation dialog before deleting it.

## 2. Change conversation settings

Open **⋮ → Chat Settings**. These options affect how the conversation continues; changing them does not rewrite messages already shown.

### User note and persona

- **User Note:** Write up to **2,000 characters** about your relationship with the character, background, speaking style, or circumstances the AI should keep in mind, then select **Save**. This note is available to the AI during the conversation. It does not edit the story's public settings or notes in other rooms.
- **My Info:** Edit your name and role for this room. To use a persona from your list, choose **Load → select a persona → Save**. Loading it without the final Save does not apply it to the room. See [Persona settings](/account/persona.md) for details.

### Writing style and response behavior

- **Writing Style:** **Novel** uses richer description and narrative prose; **Light Novel** is lighter and more dialogue-focused. This is separate from the **Novel UI mode** below, which changes how messages are displayed.
- **Story Booster:** When enabled, asks the AI to advance events more actively.
- **Allow God Modding:** When enabled, the AI may describe your actions or lines as well. Turn it off if you prefer to write your own actions.
- **One Cut:** When enabled, asks for one scene per response.
- **Response Length:** Signed-in users can choose the maximum response length for each model. If a choice shows additional usage or cost information, read the terms on the screen before selecting it. Guests do not see this item.

Changing a toggle or writing style does not regenerate earlier messages.

## 3. View long-term memory and memory fragments

Under **⋮ → Memory Management**, there are two different screens:

- **Long-term Memory:** View the summary of the conversation's overall flow. It may be empty until enough conversation has taken place.
- **Memory Fragments:** Browse and search important moments recorded from the conversation. Use **Use Memory Fragments** at the top of this screen to decide whether fragments are used in later responses.

The memory switch is **inside Memory Fragments**, not in the main Chat Settings list. Both screens display automatically generated information; they are not editors like User Note.

## 4. Change text and display options

Select the **palette icon at the top right → UI Settings**.

- **UI Mode:** Choose **Chat / 1:1 / Novel**. Each mode presents the same conversation history in a different way.
- **Reading layout:** Adjust font size, line height, chat height, chat opacity, and streaming speed. Streaming speed can be changed only when the control is enabled.
- **Fonts and colors:** Choose a font and separate colors for character/user dialogue and narration. **Show Character Names** appears in Chat mode; **Image Height** appears in Novel mode.
- **Video Settings:** Choose **Loop Video** or **Image Mode**, which shows images instead of video. A work without matching media may show no visible change.
- **Reset:** Restores the display defaults for the currently selected UI mode. It does not erase messages or room settings.

UI settings are **stored locally in the current browser or app**. You may see the same display choices in another room. They are not room-specific settings that automatically sync between web and app.

## 5. Add bookmarks and create a branch

1. During a chat, select the **bookmark icon** in the actions for the message you want to keep.
2. Optionally enter a bookmark label of up to **50 characters**.
3. Read the warning and select **Save**.
4. Later, open **⋮ → Bookmarks** to find the saved point.
5. To try another path, choose that bookmark's **branch icon → Confirm**. A new room opens from that point while the original conversation remains.

> **Check before saving a bookmark.** After it is saved, messages **before that point** cannot be edited, deleted, or regenerated. Make any planned corrections first.

The delete icon in Bookmarks **deletes the bookmark**. Check that you are choosing the intended action rather than branching from it.

## 6. Capture a conversation

1. Select **⋮ → Capture Chat**.
2. Select the first message to capture. To include a range, also select the last message. One selection is enough for a single message.
3. Turn on **Exclude my messages** on the web, or **Exclude my lines** in the app, if you want to omit your own messages.
4. Check the selected message count. Select **Download Image** on the web or **Save Image** in the app.

The web downloads an image file. Depending on the operating system, the app may ask for photo access or open a sharing screen; follow the on-screen prompt. The button is disabled if no messages remain to save. Select **Cancel** to leave capture mode.

## If a setting seems not to work

- After **Start New Chat**, choose the intro and persona on the story page and then select **Start new chat**.
- If you only **loaded** a persona, select the final **Save**.
- If a memory screen is empty, continue the chat and check again later.
- If changing the UI mode did not change the writing style, set **⋮ → Writing Style** separately.
- If a previous room is missing, check the hidden chats list under **View Previous Chats**.

For the steps to begin a conversation, see [Chat with a story](/chatting/chat-with-character.md).

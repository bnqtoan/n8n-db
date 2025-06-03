[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.telegram/common-issues.md "Edit this page")

# Telegram node common issues[#](#telegram-node-common-issues "Permanent link")

Here are some common errors and issues with the [Telegram node](../) and steps to resolve or troubleshoot them.

## Add a bot to a Telegram channel[#](#add-a-bot-to-a-telegram-channel "Permanent link")

For a bot to send a message to a channel, you must add the bot to the channel. If you haven't added the bot to the channel, you'll see an error with a description like: `Error: Forbidden: bot is not a participant of the channel`.

To add a bot to a channel:

1.  In the Telegram app, access the target channel and select the channel name.
2.  Label the channel name as **public channel**.
3.  Select **Administrators** > **Add Admin**.
4.  Search for the bot's username and select it.
5.  Select the checkmark on the top-right corner to add the bot to the channel.

## Get the Chat ID[#](#get-the-chat-id "Permanent link")

You can only use `@channelusername` on public channels. To interact with a Telegram group, you need that group's Chat ID.

There are three ways to get that ID:

1.  From the Telegram Trigger: Use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node in your workflow to get a Chat ID. This node can trigger on different events and returns a Chat ID on successful execution.
2.  From your web browser: Open Telegram in a web browser and open the group chat. The group's Chat ID is the series of digits behind the letter "g." Prefix your group Chat ID with a `-` when you enter it in n8n.
3.  Invite Telegram's [@RawDataBot](https://t.me/RawDataBot) to the group: Once you add it, the bot outputs a JSON file that includes a `chat` object. The `id` for that object is the group Chat ID. Then remove the RawDataBot from your group.

## Send more than 30 messages per second[#](#send-more-than-30-messages-per-second "Permanent link")

The Telegram API has a [limitation](https://core.telegram.org/bots/faq#broadcasting-to-users) of sending only 30 messages per second. Follow these steps to send more than 30 messages:

1.  **Loop Over Items node**: Use the [Loop Over Items](../../../core-nodes/n8n-nodes-base.splitinbatches/) node to get at most 30 chat IDs from your database.
2.  **Telegram node**: Connect the Telegram node with the Loop Over Items node. Use the **Expression Editor** to select the Chat IDs from the Loop Over Items node.
3.  **Code node**: Connect the [Code](../../../core-nodes/n8n-nodes-base.code/) node with the Telegram node. Use the Code node to wait for a few seconds before fetching the next batch of chat IDs. Connect this node with the Loop Over Items node.

You can also use this [workflow](https://n8n.io/workflows/772).

## Remove the n8n attribution from sent messages[#](#remove-the-n8n-attribution-from-sent-messages "Permanent link")

If you're using the node to [send Telegram messages](../message-operations/#send-message), the message automatically gets an n8n attribution appended to the end:

> This message was sent automatically with n8n

To remove this attribution:

1.  In the node's **Additional Fields** section, select **Add Field**.
2.  Select **Append n8n attribution**.
3.  Turn the toggle off.

Refer to [Send Message additional fields](../message-operations/#send-message-additional-fields) for more information.
[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.telegram/index.md "Edit this page")

# Telegram node[#](#telegram-node "Permanent link")

Use the Telegram node to automate work in [Telegram](https://telegram.org/) and integrate Telegram with other applications. n8n has built-in support for a wide range of Telegram features, including getting files as well as deleting and editing messages.

On this page, you'll find a list of operations the Telegram node supports and links to more resources.

Credentials

Refer to [Telegram credentials](../../credentials/telegram/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   [**Chat** operations](chat-operations/)
    *   [**Get**](chat-operations/#get-chat) up-to-date information about a chat.
    *   [**Get Administrators**](chat-operations/#get-administrators): Get a list of all administrators in a chat.
    *   [**Get Member**](chat-operations/#get-chat-member): Get the details of a chat member.
    *   [**Leave**](chat-operations/#leave-chat) a chat.
    *   [**Set Description**](chat-operations/#set-description) of a chat.
    *   [**Set Title**](chat-operations/#set-title) of a chat.
*   [**Callback** operations](callback-operations/)
    *   [**Answer Query**](callback-operations/#answer-query): Send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots/features#inline-keyboards).
    *   [**Answer Inline Query**](callback-operations/#answer-inline-query): Send answers to callback queries sent from inline queries.
*   [**File** operations](file-operations/)
    *   [**Get File**](file-operations/#get-file) from Telegram.
*   [**Message** operations](message-operations/)
    
    *   [**Delete Chat Message**](message-operations/#delete-chat-message).
    *   [**Edit Message Text**](message-operations/#edit-message-text): Edit the text of an existing message.
    *   [**Pin Chat Message**](message-operations/#pin-chat-message) for the chat.
    *   [**Send Animation**](message-operations/#send-animation) to the chat.
        *   For use with GIFs or H.264/MPEG-4 AVC videos without sound up to 50 MB in size.
    *   [**Send Audio**](message-operations/#send-audio) file to the chat and display it in the music player.
    *   [**Send Chat Action**](message-operations/#send-chat-action): Tell the user that something is happening on the bot's side. The status is set for 5 seconds or less.
    *   [**Send Document**](message-operations/#send-document) to the chat.
    *   [**Send Location**](message-operations/#send-location): Send a geolocation to the chat.
    *   [**Send Media Group**](message-operations/#send-media-group): Send a group of photos and/or videos.
    *   [**Send Message**](message-operations/#send-message) to the chat.
    *   [**Send Photo**](message-operations/#send-photo) to the chat.
    *   [**Send Sticker**](message-operations/#send-sticker) to the chat.
        *   For use with static .WEBP, animated .TGS, or video .WEBM stickers.
    *   [**Send Video**](message-operations/#send-video) to the chat.
    *   [**Unpin Chat Message**](message-operations/#unpin-chat-message) from the chat.
    
    Add bot to channel
    
    To use most of the **Message** operations, you must add your bot to a channel so that it can send messages to that channel. Refer to [Common Issues | Add a bot to a Telegram channel](common-issues/#add-a-bot-to-a-telegram-channel) for more information.
    
    ## Templates and examples[#](#templates-and-examples "Permanent link")
    

[Browse Telegram node documentation integration templates](https://n8n.io/integrations/telegram/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Telegram's API documentation](https://core.telegram.org/bots/api) for more information about the service.

n8n provides a trigger node for Telegram. Refer to the trigger node docs [here](../../trigger-nodes/n8n-nodes-base.telegramtrigger/) for more information.

## Common issues[#](#common-issues "Permanent link")

For common errors or issues and suggested resolution steps, refer to [Common Issues](common-issues/).
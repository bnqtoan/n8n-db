[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.telegram/chat-operations.md "Edit this page")

# Telegram node Chat operations[#](#telegram-node-chat-operations "Permanent link")

Use these operations to get information about chats, members, administrators, leave chat, and set chat titles and descriptions. Refer to [Telegram](../) for more information on the Telegram node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

## Get Chat[#](#get-chat "Permanent link")

Use this operation to get up to date information about a chat using the Bot API [getChat](https://core.telegram.org/bots/api#getchat) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **Chat**.
*   **Operation**: Select **Get**.
*   **Chat ID**: Enter the Chat ID or username of the target channel in the format `@channelusername`.
    *   To feed a Chat ID directly into this node, use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node. Refer to [Common Issues | Get the Chat ID](../common-issues/#get-the-chat-id) for more information.

Refer to the Telegram Bot API [getChat](https://core.telegram.org/bots/api#getchat) documentation for more information.

## Get Administrators[#](#get-administrators "Permanent link")

Use this operation to get a list of all administrators in a chat using the Bot API [getChatAdministrators](https://core.telegram.org/bots/api#getchatadministrators) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **Chat**.
*   **Operation**: Select **Get Administrators**.
*   **Chat ID**: Enter the Chat ID or username of the target channel in the format `@channelusername`.
    *   To feed a Chat ID directly into this node, use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node. Refer to [Common Issues | Get the Chat ID](../common-issues/#get-the-chat-id) for more information.

Refer to the Telegram Bot API [getChatAdministrators](https://core.telegram.org/bots/api#getchatadministrators) documentation for more information.

## Get Chat Member[#](#get-chat-member "Permanent link")

Use this operation to get the details of a chat member using the Bot API [getChatMember](https://core.telegram.org/bots/api#getchatmember) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **Chat**.
*   **Operation**: Select **Get Member**.
*   **Chat ID**: Enter the Chat ID or username of the target channel in the format `@channelusername`.
    *   To feed a Chat ID directly into this node, use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node. Refer to [Common Issues | Get the Chat ID](../common-issues/#get-the-chat-id) for more information.
*   **User ID**: Enter the unique identifier of the user whose information you want to get.

Refer to the Telegram Bot API [getChatMember](https://core.telegram.org/bots/api#getchatmember) documentation for more information.

## Leave Chat[#](#leave-chat "Permanent link")

Use this operation to leave a chat using the Bot API [leaveChat](https://core.telegram.org/bots/api#leavechat) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **Chat**.
*   **Operation**: Select **Leave**.
*   **Chat ID**: Enter the Chat ID or username of the channel you wish to leave in the format `@channelusername`.
    *   To feed a Chat ID directly into this node, use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node. Refer to [Common Issues | Get the Chat ID](../common-issues/#get-the-chat-id) for more information.

Refer to the Telegram Bot API [leaveChat](https://core.telegram.org/bots/api#leavechat) documentation for more information.

## Set Description[#](#set-description "Permanent link")

Use this operation to set the description of a chat using the Bot API [setChatDescription](https://core.telegram.org/bots/api#setchatdescription) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **Chat**.
*   **Operation**: Select **Set Description**.
*   **Chat ID**: Enter the Chat ID or username of the channel you wish to leave in the format `@channelusername`.
    *   To feed a Chat ID directly into this node, use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node. Refer to [Common Issues | Get the Chat ID](../common-issues/#get-the-chat-id) for more information.
*   **Description**: Enter the new description you'd like to set the chat to use, maximum of 255 characters.

Refer to the Telegram Bot API [setChatDescription](https://core.telegram.org/bots/api#setchatdescription) documentation for more information.

## Set Title[#](#set-title "Permanent link")

Use this operation to set the title of a chat using the Bot API [setChatTitle](https://core.telegram.org/bots/api#setchattitle) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **Chat**.
*   **Operation**: Select **Set Title**.
*   **Chat ID**: Enter the Chat ID or username of the channel you wish to leave in the format `@channelusername`.
    *   To feed a Chat ID directly into this node, use the [Telegram Trigger](../../../trigger-nodes/n8n-nodes-base.telegramtrigger/) node. Refer to [Common Issues | Get the Chat ID](../common-issues/#get-the-chat-id) for more information.
*   **Title**: Enter the new title you'd like to set the chat to use, maximum of 255 characters.

Refer to the Telegram Bot API [setChatTitle](https://core.telegram.org/bots/api#setchattitle) documentation for more information.
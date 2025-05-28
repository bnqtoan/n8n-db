## n8n Workflow: Telegram Sticker Info Bot

This workflow automates the process of extracting sticker information from Telegram messages and replying to the user.

### Use cases:

*   **Sticker Set Identification:** Quickly identify the sticker set a particular sticker belongs to when received in a Telegram chat.
*   **Sticker ID Retrieval:** Get the unique file ID of a Telegram sticker for use in other applications or workflows.
*   **Interactive Telegram Bot:** Create a Telegram bot that responds to users based on whether their message contains a sticker, providing a helpful and engaging experience.

### How it works:

1.  **Telegram Trigger:** The workflow starts with a "Telegram Trigger" node, which listens for new messages in a Telegram chat.  It's configured to trigger only on `message` updates.
2.  **Look for Sticker:** The "If" node, named "Look for Sticker", checks if the incoming message contains a sticker. It evaluates the expression `{{!!$node["Telegram Trigger"].data["message"]["sticker"]}}` which effectively checks for the presence of a sticker object within the message data.
3.  **Return Sticker (If Sticker Exists):** If a sticker is found (the condition in the "If" node is true), the workflow executes the "Return Sticker" node. This node sends a message back to the user, using the user's first name, the sticker's file ID, and the sticker set name.  It extracts this information from the incoming Telegram message data.
4.  **Return no Sticker found (If No Sticker Exists):** If the message does not contain a sticker, the workflow executes the "Return no Sticker found" node. This node sends a message informing the user that their message didn't contain a sticker, also using the user's first name.

### Services:

*   **Telegram:** The workflow interacts with the Telegram API to receive messages and send replies.

### Hashtags:

#n8n #Telegram #Automation #Bot #Sticker

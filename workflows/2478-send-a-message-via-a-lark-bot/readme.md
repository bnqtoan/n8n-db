# [hiroshidigital.com] Send Message In Larksuite

## Use cases

-   **Send automated messages to a Lark group chat:**  Notify a team channel about important updates, such as new articles or announcements from a website.
-   **Share links and information quickly:**  Distribute URLs to relevant resources or documentation within a Lark chat for easy access by team members.

## How it works

This workflow automates sending messages to a Lark chat using the Lark API. Here's a breakdown:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Input:** The "Input" node sets the `app_id`, `app_secret`, `chat_id`, and `text` variables.  The `app_id` and `app_secret` are used to authenticate with the Lark API. The `chat_id` specifies the target chat in Lark, and `text` is the message content.
3.  **Get Lark Token:** The "Get Lark Token" node makes a POST request to the Lark API to obtain an access token using the `app_id` and `app_secret` from the "Input" node. This token is required to authenticate subsequent requests.
4.  **Send Message:** The "Send Message" node sends a POST request to the Lark API to post a message to the specified chat. It uses the `chat_id` and `text` from the "Input" node, and uses the access token obtained in the previous step (configured in the "Header Auth" credential). The message type is set to "text."

## Services

-   **Lark API:** Used for authentication and sending messages to Lark chats.

## Hashtags

#n8n #LarkSuite #Automation #Messaging #Chatbot

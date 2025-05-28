# Line Message API Demo

## Use cases:

*   **Automated Customer Support:** Automatically reply to common customer inquiries received via Line, providing instant support and freeing up human agents for more complex issues.
*   **Personalized Notifications:** Send targeted promotional messages or updates to Line users based on specific triggers or user data.
*   **Interactive Bot Experiences:** Create a conversational bot that guides users through a series of steps, such as scheduling appointments or collecting feedback.

## How it works:

This workflow demonstrates how to interact with the Line Messaging API using n8n. It consists of two main parts:

1.  **Replying to Incoming Messages:**
    *   The workflow starts with a "Webhook from Line Message" node, which listens for incoming POST requests from the Line Messaging API when a user sends a message to the Line bot.
    *   The "If" node checks if the event type is "message".
    *   If the event type is "message", the "Line : Reply with token" node uses the reply token from the incoming webhook data to send a reply back to the user with same content.
2.  **Pushing Messages to Users (Requires Line UID):**
    *   The workflow can be manually triggered with the "When clicking ‘Test workflow’" node.
    *   The "Edit Fields" node sets the `line_uid` field to a Line User ID.  **Note:** You must replace `Uxxxxxxxxxxxx` with a real Line User ID to test this functionality.
    *   The "Line : Push Message" node sends a push message to the specified Line user.

## Services:

*   Line Messaging API

## Hashtags:

#n8n #LineAPI #Chatbot #Automation #Messaging

# Telegram Support Ticketing System with Broadcast

## Use Cases

- **Centralized Customer Support:** Automatically forward customer messages from Telegram to a dedicated support group as new tickets, enabling team collaboration.
- **Efficient Ticket Management:** Streamline support by creating and managing user-specific topics within a Telegram support group, preventing message deletion and ensuring history retention.
- **Broadcast Announcements:** Easily broadcast announcements and updates from a Telegram channel to all users who have interacted with the bot, excluding blocked users.

## How it Works

This workflow automates Telegram support ticketing and broadcasting using n8n. Here's a breakdown:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **User Data Check:** The workflow checks if the user exists in a Redis database using their chat ID.
3.  **New User Handling:** If the user is new:
    *   The workflow saves the user's data to Redis.
    *   A new topic (ticket) is created in the designated Telegram support group. The topic name includes the user's name and ID.
    *   The message is forwarded to the newly created topic.
    *   The topic ID from Telegram is saved in Redis, associated with the user's chat ID.
    *   The user receives a notification that a new ticket has been created.
4.  **Returning User Handling:** If the user exists:
    *   The workflow retrieves the topic (thread) ID associated with the user's chat ID from Redis.
    *   The message is forwarded to the existing topic in the support group.
5.  **Support Reply Handling:** When a support team member replies in the support group:
    *   The workflow checks if the reply is within a topic (ticket).
    *   If so, the reply is forwarded to the original user who created the ticket.
6.  **Topic Re-creation:** If a topic has been deleted or closed. The workflow will re-create a topic and associate with the user and store the new thread id.
7. **Broadcast Channel to Users:**
    *   Check is that the message is coming from the broadcast channel
    *   Retrieve all the users in database
    *   Filter all blocked users in database
    *   Copy the message to all users

## Services

-   **Telegram API:** Used for sending and receiving messages, creating topics, and forwarding messages.
-   **Redis:** Used as a fast data store for user information and topic (ticket) IDs.

## Hashtags

#n8n #Telegram #Automation #SupportTicketing #Broadcast

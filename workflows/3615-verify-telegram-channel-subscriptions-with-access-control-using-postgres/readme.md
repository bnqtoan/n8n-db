# TG-Bot-Module-Check_Subscription-v4-db-sell-full

## Use cases:

- **Telegram Bot Subscription Management:** Automatically manage Telegram bot subscriptions by allowing users to add or delete channels, and checking their subscription statuses.
- **Channel Content Distribution Management:** Facilitate content distribution by enabling users to request the addition or deletion of channels from the bot's distribution list.
- **Referral-Based Welcome Messaging:**  Provide customized welcome messages to new users based on whether they were referred, and track referral data.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user interacts with the Telegram bot, triggering the workflow.
2.  **Variable Initialization:** Initializes variables and checks if the user is an admin.
3.  **Admin Check:** Determines the flow based on user roles (admin or regular user).
4.  **Command Handling:** A switch node routes the flow based on the command received from the user (e.g., adding a channel, deleting a channel, checking subscriptions, or other commands).
5.  **Subscription Check:**  If the command is to check subscriptions, the workflow fetches channel data from a Postgres database and subscription statuses, and then unifies the data, then
6.  **Database Interaction:** The workflow interacts with a Postgres database to:
    *   Fetch bot status.
    *   Update bot status based on user actions (e.g., adding or deleting channels).
    *   Check user referral information.
7.  **Telegram Responses:** The workflow sends messages to the user via Telegram based on different conditions and actions:
    *   Welcome messages (customized for referred vs. non-referred users).
    *   Confirmation messages for channel addition or deletion requests.
    *   Error messages if a subscription check fails.
    *   Lists available channels.
8.  **Conditional Logic:** Uses "If" nodes to handle different scenarios, such as:
    *   Checking if a channel exists before adding it.
    *   Determining if a user was referred to provide the correct welcome message.
9.  **Get Subscription statuses**: Get subscription statuses from channels
10. **Union statuses**: Union to array
11. **Check**: Check success or failed
12. **Check failed**: Message for failed statuses
13. **Check success**: Message for succes statuses
14. **Get Referal**: Request get referal from database

## Services:

-   Telegram Bot API
-   PostgreSQL

## Hashtags:

#n8n #telegrambot #automation #subscriptionmanagement #database
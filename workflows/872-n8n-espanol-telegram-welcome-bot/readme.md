# N8N Español - BOT

## Use cases:

- **Automated welcome messages:** Automatically greet new members joining a Telegram group with a personalized message.
- **Automated farewell messages:** Automatically send a goodbye message when a member leaves a Telegram group.
- **Community management:** Streamline the management of a Telegram community by automating welcome and departure announcements.

## How it works:

This workflow automates welcome and farewell messages in a Telegram group. Here's how it functions:

1.  **Telegram Trigger (Saludos-TelegramTrigger):** This node listens for updates in a Telegram group (specified in the credentials). It triggers the workflow when a new member joins or someone leaves.
2.  **IF Node (Saludos-IF):** This node checks if the update is for a new member joining. It evaluates if the `first_name` field under `new_chat_member` is empty. If it's not empty (meaning a new member joined), it proceeds to the welcome message.
3.  **IF Node (Saludos-IF1):** This node checks if the update is for a member leaving. It evaluates if the `first_name` field under `left_chat_member` is empty. If it's not empty (meaning a member left), it proceeds to the farewell message.
4.  **Telegram Node (S-Telegram2):** If a new member joined, this node sends a welcome message to the specified Telegram group using the `first_name` of the new member.
5.  **Telegram Node (S-Telegram):** If a member left, this node sends a farewell message to the specified Telegram group using the `first_name` of the leaving member.

## Services:

-   **Telegram:** Used for monitoring group updates and sending messages.

## Hashtags:

#n8n #telegram #automation #communitymanagement #bot

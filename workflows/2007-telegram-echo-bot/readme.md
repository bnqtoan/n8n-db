# Telegram echo-bot

## Use cases:

- **Debugging Telegram Bots:**  Quickly inspect the raw JSON data received from Telegram when a bot interacts with users, aiding in troubleshooting and development.
- **Learning Telegram API Structure:** Understand the structure of Telegram's API responses for different message types (text, images, stickers, etc.) by observing the JSON output.
- **Simple Echo Bot Implementation:** Create a basic bot that mirrors user input, confirming connectivity and message processing.

## How it works:

This workflow creates a Telegram echo bot.  It listens for any incoming Telegram events (messages, commands, etc.) via the "Listen for incoming events" node, which is configured as a Telegram Trigger node. Upon receiving an event, the "Send back the JSON content of the message" node formats the entire JSON payload of the incoming message.  It then sends this formatted JSON data back to the user who initiated the interaction, using Markdown formatting for readability within Telegram. The workflow requires you to configure the Telegram API credentials for your bot in both the trigger and the send message node.

## Services:

- Telegram API

## Hashtags:

#n8n #Telegram #Bot #Automation #EchoBot

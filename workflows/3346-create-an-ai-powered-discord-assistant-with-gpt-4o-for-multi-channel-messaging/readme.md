# Discord Agent

## Use cases:
- Automated Discord Message Management: Automatically manage and respond to messages in Discord channels.
- AI-Powered Discord Assistant: An AI assistant that maintains context and responds in stylish Discord formats.
- Server Automation: Automate tasks within a Discord server, such as posting free guides or managing announcements.

## How it works:
The workflow operates in two primary modes: triggered by another n8n workflow or by direct chat messages in Discord.

1.  **Trigger Activation:**
    *   **Workflow Execution Trigger:** Receives input (a "Task") from another n8n workflow, providing the AI with a specific instruction.
    *   **Chat Message Trigger:** Activates when a new message is received in a Discord channel.

2.  **AI Processing:**
    *   The "AI Agent" node processes the input using the specified OpenAI model. The node uses the `gpt-4o-mini` model to process text, format it for Discord, and reduce it to under 1800 characters. It uses a Buffer Window Memory for context.
    *   The AI Agent uses configured "tools" to decide which Discord Channel to use, based on the Task requested.

3.  **Discord Interaction:**
    *   The workflow uses the "Discord" nodes (Discord, Discord1, Discord2) to interact with Discord.
    *   It can post messages to either the "ai-tools" or "free-guides" channels within a specified Discord server.
    *   The workflow includes settings for server (Guild) ID and channel IDs.

## Services:
*   Discord
*   OpenAI

## Hashtags:
#n8n #Discord #Automation #AIAgent #Workflow

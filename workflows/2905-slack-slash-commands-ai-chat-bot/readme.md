# My workflow 6

## Use cases:

- **AI-Powered Slack Assistant:**  Answer questions in a Slack channel using AI. When a user types `/ask [question]` in a Slack channel, the workflow uses an AI model (like GPT-4o-mini) to generate a response and post it back to the channel.
- **Custom Slack Commands:** Extend Slack's functionality with custom commands. This allows users to interact with external services or trigger specific actions directly from Slack using slash commands like `/another`.
- **Automated Slack Responses:** Automate responses to specific commands in Slack. Instead of manually answering common questions, the AI chatbot can provide instant and accurate responses.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a user triggers a Slack slash command (e.g., `/ask`) which sends a POST request to the n8n Webhook node.
2.  **Command Routing:** The `Switch` node analyzes the `command` parameter from the incoming Slack request. It routes the workflow based on the specific command used (e.g., `/ask` or `/another`).
3.  **AI Message Creation:** If the `/ask` command is used, the `Basic LLM Chain` node takes the text entered after the `/ask` command as input and generates a response using the `OpenAI Chat Model`. The `text` parameter of the LLM Chain node is set to `{{ $json.body.text }}`.
4.  **Send to Slack:** The `Send a Message` node posts the AI-generated response back to the Slack channel where the command was initiated. The `channelId` parameter is dynamically set to the channel ID from the original Slack request.

## Services:

-   Slack
-   OpenAI (via Langchain)

## Hashtags:

#n8n #automation #slack #chatbot #ai

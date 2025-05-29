# My Workflow

## Use Cases

- **Personal Task Management via Telegram:** Users can manage their Notion tasks by sending voice or text messages to a Telegram bot, which then uses an AI agent to interact with a Notion database.
- **Voice-Controlled Task Creation:** Allows users to quickly add tasks to their Notion database by simply recording a voice message and sending it via Telegram. The workflow transcribes the voice message and uses it as input for task creation.
- **AI-Powered Task Management Assistant:** Integrates an AI agent to provide smart suggestions, prioritize tasks, or automatically set deadlines based on user input and historical data.

## How it works

1.  **Telegram Trigger:** The workflow starts when a user sends a message (text or voice) to a Telegram bot.
2.  **Voice or Text Message:** A Switch node routes the workflow based on whether the incoming message is text or a voice message.
    *   **Voice Message Path:** If the message is a voice message, it's downloaded using the "Download Voice File" node. The "Transcribe" node (using OpenAI) converts the voice message to text. The transcribed text is then passed to the "Set text1" node to prepare it for the AI Agent.
    *   **Text Message Path:** If the message is text, it's directly passed to the "Set text" node to be processed by the AI Agent.
3.  **AI Agent:** The "AI Agent" node, powered by Langchain, receives the text from either path. It uses the "Notion Tasks Manager Tool" (a separate workflow, presumably) to interact with a Notion database. The AI Agent uses a "Simple Memory" node to store conversation history and the "OpenAI Chat Model" to generate responses.
4.  **Notion Tasks Manager Tool:** This tool workflow (not detailed in the JSON) handles the interaction with Notion. It likely includes nodes to "Get Tasks," "Add Task," "Complete Task," and "Set Task Time," connecting to a Notion database.
5.  **Choose Method:** This switch routes depending on input from the agent to different notion actions such as "Get Tasks", "Add Task", "Complete Task" and "Set Task Time".
6.  **Response User:** The "Response user" node sends a message back to the user via Telegram, confirming the action or providing information requested.
7. **Setup:** The setup node is used to start the workflow from manual trigger, "When executed by another workflow" or by "When clicking ‘Test workflow’"

## Services

-   Telegram
-   OpenAI
-   Notion

## Hashtags

#n8n #automation #workflow #telegram #notion #ai #taskmanagement

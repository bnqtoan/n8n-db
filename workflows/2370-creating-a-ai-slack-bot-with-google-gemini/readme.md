# Slack AI Assistant with Google Gemini and Memory

## Use cases:

- **Instant AI-powered support in Slack:**  Respond to employee questions about automation, workflows, and internal processes directly within Slack.
- **Context-aware conversations:**  The bot remembers previous interactions in the channel, providing more relevant and personalized assistance.
- **Customized company assistant:** The bot has a customizable system message, so it can act and be customized with tools or data sources to make it more tailored for your company.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a message is sent to a specific Slack channel and is received by the "Webhook to receive message" node on the `/slack-bot` endpoint.
2.  **AI Agent Processing:** The "Agent" node receives the Slack message text and a system message. The agent processes the text using the specified AI model.
3. **Chat LLM:** The data passes via an "Google Gemini Chat Model" to process the prompt using Google Gemini.
4.  **Memory Management:** The "Window Buffer Memory" node stores the conversation history using the Slack message's `token` as the chat session ID.
5.  **Slack Response:** The "Send response back to slack channel" node sends the AI-generated response back to the original Slack channel, referencing the original message.

## Services:

-   Slack
-   Google Gemini AI

## Hashtags:

#n8n #Slack #AI #Automation #Chatbot

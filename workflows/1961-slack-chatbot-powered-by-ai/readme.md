# Slack Gilfoyle AI Agent

## Use cases:

- **Automated Cynical Customer Support:**  Automatically respond to customer inquiries in a Slack channel with Gilfoyle's signature sarcastic and blunt style, filtering out bot messages to focus on genuine user interactions.
- **Humorous Team Collaboration:**  Integrate Gilfoyle-esque responses into team discussions, providing cutting remarks and straightforward answers to foster a unique and potentially entertaining communication dynamic.
- **Information Retrieval with Attitude:** Allow team members to query information via Slack. The AI Agent, acting as Gilfoyle, will utilize tools like SerpAPI and Wikipedia to retrieve information and present it with a cynical and sarcastic tone.

## How it works:

1.  **Slack Webhook:** The workflow starts with a Slack webhook that listens for new messages in a specified channel.
2.  **Filter Bot Messages:** The `Is user message?` node checks if the incoming message is from a user (not a bot) by checking if the `bot_id` field exists in the Slack event.
3.  **AI Agent (Gilfoyle):** If the message is from a user, the message text is passed to the `AI Agent` node. This node uses Langchain to process the message. The system message is configured to give the AI Agent the persona of Gilfoyle from the Silicon Valley TV show.
4.  **Memory:** `Simple Memory` node store the conversation history, which is then used by AI Agent to make conversation more contextual.
5.  **Tools:** The `AI Agent` can use available tools like `SerpAPI` for searching the web and `Wikipedia` for retrieving information.
6.  **OpenAI Chat Model:** `OpenAI Chat Model` that allows AI agent to process prompt and respond back.
7.  **Slack Response:** The response from the AI Agent is then sent back to the Slack channel as a message from the bot to the specific user who initiated the conversation.

## Services:

*   Slack
*   OpenAI
*   SerpAPI
*   Wikipedia

## Hashtags:

#n8n #automation #Slack #AIAgent #Langchain

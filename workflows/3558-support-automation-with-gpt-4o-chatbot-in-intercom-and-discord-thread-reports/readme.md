# Intercom Chatbot with Discord Thread Reports

## Use Cases

- **Centralized Customer Support:** Automatically creates a Discord thread for each new Intercom conversation, allowing support teams to manage discussions and collaborate in a dedicated channel.
- **AI-Powered Customer Interactions:** Uses an AI agent to understand and respond to customer queries in Intercom, while also keeping a record of the conversation and agent's actions in a Discord thread.
- **Real-time Notifications and Collaboration:**  Notifies a Discord channel when the chatbot is activated or deactivated, and posts user messages and admin replies, facilitating real-time monitoring and intervention.

## How it Works

1.  **Intercom Webhook Trigger:** The workflow starts when an event (e.g., a new message) occurs in Intercom. It filters out bot replies to prevent loops.
2.  **New Conversation Check:** Checks if the event is a new conversation.
    *   **If New:** Creates a new thread in Discord using the "[Discord] Create Thread" node and posts the first message using "[Discord] Type first message into the thread".  It then stores the Discord thread ID back to Intercom as a 'note' using "[Intercom] Store the thread ID as a 'note'".
    *   **If Not New:** Retrieves the conversation data from Intercom using "[Intercom] GET conversation".
3.  **Message Processing:**
    *   Extracts and aggregates textual messages from Intercom.
    *   Extracts the Discord thread ID from the Intercom conversation notes.
4.  **Data Preparation:** Prepares and merges data for use by the AI Agent.
5.  **AI Agent Interaction:** If the bot is active, the "AI Agent" node, powered by the "OpenAI Chat Model" and "Simple Memory", processes the conversation and generates a response.
6.  **Replies:** The AI Agent's response is sent to both Intercom ("\[Intercom] Reply") and Discord ("\[Discord] Reply").
7.  **Discord Notifications:** Sends notifications to Discord channels about bot activation/deactivation, user messages, and human admin replies.
8.  **Agentic Use:** "preparing data for Agentic use" node make use of the tokens and ids to process the relevant data for the agent to function properly

## Services

*   Intercom
*   Discord
*   OpenAI (via Langchain)

## Hashtags

#n8n #automation #intercom #discord #chatbot
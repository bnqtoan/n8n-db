# My Workflow

## Use Cases

1.  **Telegram Chatbot with Enhanced Memory:** Enables a Telegram bot to engage in more context-aware conversations. The bot remembers previous interactions using chat memory, providing more relevant and personalized responses.
2.  **AI-Powered Calculator:** Allows users to perform calculations through a Telegram bot. The bot leverages an AI agent and a calculator tool to understand and execute mathematical queries.
3.  **Meta Ads Insights Retrieval:** Automates fetching and providing insights about Meta Ads (formerly Facebook Ads) through a Telegram bot.

## How it Works

1.  **Trigger:** The workflow starts either when a message is received via Telegram or a chat message is received via webhook.
2.  **Filter by Chat ID:** The Telegram trigger sends data to a filter node that verifies the chat ID.
3.  **Set Session ID:** A session ID is set for each user/chat to maintain context across multiple interactions.
4.  **AI Agent:** The core of the workflow is an AI Agent, likely using a Large Language Model (LLM) from OpenAI. The agent processes the user's input and determines the appropriate action.
5.  **Tools:**
    *   **Calculator:** If the user input involves a calculation, the AI Agent uses the Calculator tool to perform the calculation.
    *   **Meta Ads Insights:** If the user requests data about Meta Ads, the AI Agent uses the Meta Ads Insights tool (via HTTP Request) to fetch the information.
    *   **Clean Memory:** The AI Agent can use a workflow (Clean Memory) to manage or reset the chat memory.
6.  **Chat Memory:** The workflow uses a Buffer Window Memory to store previous interactions.
7.  **Send Message:** Finally, the AI Agent's response is sent back to the user via Telegram.

## Services

*   Telegram
*   OpenAI
*   Meta Ads API (via HTTP Request)

## Hashtags

#n8n #automation #TelegramBot #AI #Chatbot

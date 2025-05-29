# Telegram AI Agent with Bright Data MCP Tool

## Use cases:

-   **Telegram-based AI Assistant:** Users can interact with an AI assistant directly through Telegram, asking questions, seeking information, or requesting assistance with tasks.
-   **Web Research and Automation via Telegram:** Users can trigger web searches, data extraction, and browser automation tasks through the AI agent via Telegram messages.
-   **Personalized Telegram Bot:** Build and customize a Telegram bot that provides unique information, insights, and interactions based on user queries.

## How it works:

1.  **Receive Telegram Message:** The workflow is initiated when a user sends a message to the Telegram bot via a webhook.
2.  **Trigger Typing Action Sub-workflow:** A sub-workflow is triggered to simulate a "typing" indicator in Telegram. This enhances the user experience by signaling that the bot is processing the request.  This sub-workflow triggers an execution of a separate workflow that starts the typing action, waits for 10 seconds and checks if the execution in n8n is finished,
3.  **AI Agent Processing:**
    *   The user's message is passed to an AI Agent node, which leverages a language model (OpenRouter Chat Model) to understand the request and generate a response.
    *   The AI agent has access to the Bright Data MCP tool, enabling it to perform web searches, scrape data, or automate browser interactions as needed.
    *   The AI agent also uses a simple memory buffer to maintain context over multiple messages.
4.  **Send Response to Telegram:** The AI Agent's output is then sent back to the user via Telegram.
5.  **Error Handling:** The workflow implements error handling to catch potential issues during execution. If an error occurs, an error message is sent to the user via Telegram.

## Services:

*   Telegram API: Used for receiving messages and sending responses to users.
*   OpenRouter API: Provides access to various language models for AI Agent functionality.
*   Bright Data MCP (Managed Cloud Proxy): Enables web search, scraping, and browser automation capabilities for the AI agent (requires a configured Supergateway SSE server).

## Hashtags:

#n8n #automation #telegrambot #aiagent #brightdata #webscraping

# CoinMarketCap_Exchange_and_Community_Agent_Tool

## Use cases:

- **Cryptocurrency Exchange Analysis:** Gather comprehensive information about cryptocurrency exchanges, including metadata (launch date, country, social links) and asset holdings, to evaluate their operational characteristics and financial status.
- **Market Sentiment Monitoring:** Track the cryptocurrency market's overall sentiment using the Fear and Greed Index to inform investment decisions based on crowd psychology.
- **Index Composition Tracking:** Analyze the composition of the CMC 100 Index to understand the top cryptocurrencies' performance and their relative weights within the broader market.

## How it works:

1.  **Trigger:** The workflow is initiated by another n8n workflow, receiving a `message` (the user's query) and a `sessionId` for context.
2.  **AI Agent:** The `CoinMarketCap Exchange and Community Agent` node acts as the central processing unit. It uses a large language model (LLM) to understand the user's query and determine the appropriate tool to use. The agent has access to the following tools:
    *   **Exchange Map:** Retrieves a list of cryptocurrency exchanges with their IDs, names, and slugs.
    *   **Exchange Info:** Fetches metadata for a specific exchange (description, launch date, country, etc.).
    *   **Exchange Assets:** Provides information on the token holdings of an exchange.
    *   **CMC 100 Index:** Returns the latest data for the CoinMarketCap 100 Index.
    *   **Fear and Greed Latest:** Retrieves the latest value of the Fear and Greed Index.
3.  **Tool Execution:** Based on the query, the AI agent uses the appropriate tool (an HTTP Request node) to interact with the CoinMarketCap API. The agent will use the `Exchange Map` tool to get the required `id` for the `Exchange Info` and `Exchange Assets` tools.
4.  **Response:** The AI Agent will formulate a response based on the data retrieved from the CoinMarketCap API.

## Services:

-   CoinMarketCap API
-   OpenAI API (via the `LM ChatOpenAi` node)

## Hashtags:

#n8n #automation #cryptocurrency #CoinMarketCap #AIagent

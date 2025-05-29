# CoinMarketCap_Crypto_Agent_Tool

## Use cases:

- **Cryptocurrency Price Tracking:**  A user can query the current price of a specific cryptocurrency in a desired fiat currency (e.g., "What is the current price of BTC in USD?").
- **Market Analysis and Research:** An analyst can use the agent to retrieve and analyze cryptocurrency market data, such as the top 10 cryptocurrencies by market capitalization or the global cryptocurrency market capitalization.
- **Cryptocurrency Conversion:**  A user can convert a specific amount of one cryptocurrency into another cryptocurrency or fiat currency (e.g., "Convert 5 ETH to USD").

## How it works:

1.  **Trigger**: The workflow is triggered by the "When Executed by Another Workflow" node, receiving a `message` (user query) and `sessionId`.
2.  **AI Agent**: The "CoinMarketCap Crypto Agent" node, powered by a Langchain agent, receives the user's message. This agent uses GPT-4o-mini to parse the request and determine the user's intent. The agent uses the proper CoinMarketCap tool to retrieve the needed info, based on the tool descriptions.
3.  **Tools**: Depending on the request, the AI Agent will use one of the available CoinMarketCap tools:
    *   **Crypto Map**: Retrieves CoinMarketCap IDs, symbols, and names for cryptocurrencies.
    *   **Crypto Info**: Retrieves metadata for cryptocurrencies, including descriptions, websites, and social links.
    *   **Crypto Listings**: Retrieves a ranked list of cryptocurrencies sorted by market cap.
    *   **CoinMarketCap Price**: Retrieves real-time price, volume, and market cap data for cryptocurrencies.
    *   **Global Metrics**: Retrieves global cryptocurrency market statistics.
    *   **Price Conversion**: Converts between cryptocurrencies and fiat currencies.
4.  **Memory & Brain**: The Crypto Agent Memory and Crypto Agent Brain nodes maintain session context and process the user input using the OpenAI API (gpt-4o-mini model).
5.  **API Calls**: The "ToolHttpRequest" nodes (e.g., "CoinMarketCap Price", "Crypto Map") make calls to the CoinMarketCap API to fetch the required data, and returns the data to the AI Agent.
6.  **Output**: The AI agent formulates a response based on the data retrieved from the API and returns it.

## Services:

-   CoinMarketCap API
-   OpenAI API

## Hashtags:

#n8n #automation #cryptocurrency #AI #CoinMarketCap

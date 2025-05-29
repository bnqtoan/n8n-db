# CoinMarketCap_AI_Data_Analyst_Agent

## Use cases:

1.  **Real-time Crypto Market Analysis:** Allow users to ask questions about current cryptocurrency prices, market capitalization, trading volumes, and other metrics and get up-to-date answers via Telegram.
2.  **Comprehensive Crypto Research:** Enable users to delve deeper into specific cryptocurrencies, exchanges, and decentralized trading pairs by retrieving data from multiple sources (CoinMarketCap APIs) and consolidating it into a single, easily digestible response.
3.  **Personalized Crypto Alerts and Insights:** Set up automated alerts for significant price changes, new listings, or changes in market sentiment based on user-defined criteria.

## How it works:

1.  **Telegram Input:** The workflow is triggered by a message sent to a Telegram bot.
2.  **Adds SessionId:** A unique session ID is generated and assigned based on the Telegram chat ID. This ID is used to maintain context throughout the conversation.
3.  **CoinMarketCap AI Data Analyst Agent:** This is the core node that uses a Large Language Model (LLM) to understand user queries and orchestrate the data retrieval process. It uses the GPT-4o Mini model to route the query to the appropriate sub-agent tool.
4.  **Sub-Agent Tools:** The main agent coordinates among three sub-agent tools
    *   **CoinMarketCap Crypto Agent Tool:** Retrieves data about cryptocurrencies (e.g., price, market cap, volume).
    *   **CoinMarketCap Exchange and Community Agent Tool:** Fetches data related to exchanges, community sentiment, and the Fear and Greed Index.
    *   **CoinMarketCap DEXScan Agent Tool:** Collects data from decentralized exchanges (DEXs), such as liquidity, trading volume, and OHLCV (Open, High, Low, Close, Volume) data.
5.  **CoinMarketCap Agent Brain & Memory:** The GPT-4o mini model with memory buffer handle natural language processing and maintain the context of the conversation, while the memory stores historical interactions.
6.  **Telegram Send Message:** The final output, a synthesized response containing the requested information, is sent back to the user via Telegram.

## Services:

*   Telegram
*   CoinMarketCap API
*   OpenAI API (GPT-4o Mini)

## Hashtags:

#n8n #automation #cryptocurrency #AI #CoinMarketCap
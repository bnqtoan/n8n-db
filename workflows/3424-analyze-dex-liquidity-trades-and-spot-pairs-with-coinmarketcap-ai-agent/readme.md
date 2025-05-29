# CoinMarketCap DEXScan Agent Tool

## Use Cases

- **Real-time DEX Monitoring:** Track liquidity, volume, and trading activity across various decentralized exchanges to identify trends and opportunities.
- **Historical Data Analysis:** Analyze historical OHLCV data for specific DEX trading pairs to perform technical analysis and backtesting strategies.
- **DEX Metadata Retrieval:** Gather essential information such as logos, URLs, and launch dates for decentralized exchanges to build comprehensive DEX directories or dashboards.

## How it Works

1.  **Trigger:** The workflow is initiated by another n8n workflow, receiving a `sessionId` and a `message` as input.
2.  **AI Agent:** The `CoinMarketCap DEXScan Agent` node acts as the central processing unit. It takes the input `message` (the user's query) and uses a large language model (LLM) to understand the intent.
3.  **Language Model and Memory:** The `DEXScan Agent Brain` (powered by GPT-4o Mini) processes the user's request and decides which of the available tools to use. The `DEXScan Agent Memory` node maintains context across multiple interactions.
4.  **Tool Selection & Execution:** Based on the user's query, the AI Agent selects one or more of the `DEXScan` tools (e.g., `DEX Metadata`, `DEX Pair Quotes Latest`, `DEX OHLCV Historical`). These tools make HTTP requests to the CoinMarketCap DEXScan API. Each Tool has defined description for the Agent to use it correctly.
5.  **Data Retrieval:** The selected tool fetches data from the CoinMarketCap API using the appropriate endpoint and query parameters.
6.  **Response Handling:** The data retrieved from the API is processed by the Agent.
7.  **Output:** The Agent provides a structured response based on the retrieved data, which can then be used by the calling workflow.

## Services

-   CoinMarketCap DEXScan API

## Hashtags

#n8n #automation #workflow #CoinMarketCap #DEXScan #AIagent

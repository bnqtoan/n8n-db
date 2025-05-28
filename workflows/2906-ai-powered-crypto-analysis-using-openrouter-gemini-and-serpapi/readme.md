# Prod: AI-Powered Crypto Analysis Automation

## Use cases:

- **Real-time Cryptocurrency Trading Assistant:**  Analyzes crypto price charts and news to provide instant buy/sell recommendations for day traders.
- **Long-Term Investment Analysis:** Gathers and analyzes daily and short-term crypto data to provide insights for long-term investment strategies.
- **Automated Cryptocurrency Research:**  Automatically researches and summarizes information about a specific cryptocurrency, saving time for analysts.

## How it works:

This workflow automates cryptocurrency analysis using AI agents and historical data.

1.  **Provide Crypto Symbol:**  The workflow starts by triggering on a webhook event, capturing the target cryptocurrency symbol.
2.  **crypto\_symbol:** Stores the cryptocurrency symbol for further use in API calls.
3.  **1d\_Chart:** Fetches daily candlestick chart data for the specified cryptocurrency using an HTTP Request node.
4.  **Long Term Agent:** Uses an AI agent with long-term memory and a chat model to analyze the daily chart data and potentially other information fetched by the tool to identify long-term trends.
5. **5m_Chart:** Fetches 5-minute candlestick chart data for the specified cryptocurrency.
6. **AI Agent:** An AI agent analyzes 5-minute chart data.
7. **SerpAPI:** This provides the AI agent with general information about the cryptocurrency or related news.
8.  **Window Buffer Memory:** Provides short-term memory for the AI Agents.
9.  **OpenRouter Chat Model:** Provides a chat model to the AI Agents for generating insights and recommendations.

## Services:

-   OpenRouter (AI Language Model API)
-   SerpAPI (Search Engine Results API)
-   [Assuming] Cryptocurrency Data API (for candlestick chart data)

## Hashtags:

#n8n #automation #cryptocurrency #AI #trading

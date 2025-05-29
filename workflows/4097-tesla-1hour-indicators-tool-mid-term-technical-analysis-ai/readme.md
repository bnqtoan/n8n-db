# Tesla 1hour Indicators Tool n8n

## Use cases:

*   **Real-time Tesla Stock Analysis:** Automatically analyze Tesla's (TSLA) stock market conditions on a 1-hour timeframe to identify potential trading opportunities or risks.
*   **Integration with Trading Bots:** Provide technical indicator analysis to trading bots for automated decision-making on spot or leveraged trades.
*   **Financial Reporting:** Generate structured JSON summaries of Tesla's market trends and indicator values for inclusion in financial reports.

## How it works:

This workflow is triggered by another workflow (**Tesla Financial Market Analyst Tool**), receiving a message. It then uses the **Tesla 1hour Indicators Agent**, which leverages an OpenAI Chat Model (GPT-4.1) to analyze Tesla (TSLA) market conditions on the 1-hour timeframe. The agent fetches indicator data (RSI, BBANDS, SMA, EMA, ADX, MACD) from **Alpha Vantage Premium API** via a webhook call to `https://treasurium.app.n8n.cloud/webhook/1hourData`. The agent interprets the latest 20 data points from each indicator, determines the current trend (Trending / Consolidating / Reversing, Overbought / Oversold, Strength of momentum), and outputs a structured JSON object containing a summary of the mid-term trend and the latest values for each indicator. A **Simple Memory** module maintains context across requests within the same session.

## Services:

*   **Alpha Vantage Premium API:** Provides real-time and historical stock market data.
*   **OpenAI GPT-4.1:** Used for natural language processing and trend analysis based on the technical indicators.

## Hashtags:

#n8n #automation #workflow #Tesla #TechnicalAnalysis

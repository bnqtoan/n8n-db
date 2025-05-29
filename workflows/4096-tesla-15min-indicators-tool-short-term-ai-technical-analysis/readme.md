# Tesla 15min Indicators Tool n8n

## Use cases:

- **Real-time Tesla (TSLA) Stock Analysis:**  Analyze short-term market conditions for TSLA using real-time technical indicators to support intraday trading decisions.
- **Automated Trading Signal Generation:**  Generate structured JSON outputs of market conditions, trend states, and indicator values to feed into trading algorithms or automated trading systems.
- **Scalping Strategy Optimization:** Provide insights into scalping signals, intraday volatility, and momentum evaluation based on 15-minute timeframe analysis.

## How it works:

This workflow is triggered by another workflow, specifically the "Tesla Financial Market Data Analyst Tool."  It receives a message and session ID as input.  It then utilizes an OpenAI Chat Model (GPT-4.1) to analyze technical indicators for Tesla (TSLA) stock at a 15-minute interval.  The "Tesla 15min Indicators Agent" node uses a LangChain Agent to process the input message and generate a market analysis based on indicators like RSI, MACD, BBANDS, SMA, EMA, and ADX.  These indicators are retrieved via an HTTP Request to a webhook, formatted, and passed to the AI agent. The AI's short-term memory is managed by the "Simple Memory" node, allowing for consistent logic between requests within the same session. The "15min Data" node calls a secure webhook to fetch the indicator data from the Alpha Vantage Premium API. Finally, the agent provides a structured JSON output summarizing market conditions, trend states, and indicator values.

## Services:

- **OpenAI (GPT-4.1):** Used for natural language processing and market analysis.
- **Alpha Vantage Premium API:** Provides real-time stock data and technical indicators.

## Hashtags:

#n8n #automation #workflow #Tesla #StockAnalysis #TechnicalIndicators

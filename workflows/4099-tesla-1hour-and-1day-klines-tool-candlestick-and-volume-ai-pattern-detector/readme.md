# Tesla 1hour and 1day Klines Tool n8n

## Use cases:

- **Automated Technical Analysis:** This workflow automates the analysis of Tesla's stock (TSLA) candlestick patterns and volume, providing timely insights without manual chart analysis.
- **Trading Signal Generation:** The identified candlestick patterns and volume divergences can be used as signals for potential buy or sell opportunities.
- **Integration with Trading Systems:** The structured JSON output can be easily integrated into automated trading systems or dashboards for real-time monitoring.

## How it works:

1.  **Trigger Activation:** The workflow is initiated by another workflow, specifically the "Tesla Financial Market Analyst Tool," receiving a message and session ID as input.
2.  **Data Fetching:** The workflow fetches Tesla's stock data from Alpha Vantage API:
    *   "Candlestick Data Hour": Retrieves 1-hour interval OHLCV (Open, High, Low, Close, Volume) data.
    *   "Candlestick Data Day": Retrieves daily OHLCV data.
3.  **AI-Powered Analysis:** The "Tesla 1hour and 1day Klines Agent" node, powered by a LangChain Agent and OpenAI's GPT-4.1 model, analyzes the candlestick patterns and volume data. It identifies:
    *   Reversal Candlestick Patterns (e.g., Hammer, Doji, Engulfing)
    *   Volume Divergence (Bullish/Bearish)
4.  **Memory Management**: The "Simple Memory" node is used to maintain conversation context and prior states across request to keep track of the pattern analysis.
5.  **Structured Output:** The AI agent returns a structured JSON output containing a summary of the analysis, identified candlestick patterns for both 1-hour and 1-day timeframes, volume divergence indications, and key OHLCV data.

## Services:

*   Alpha Vantage API: Used to retrieve historical candlestick data (OHLCV) for Tesla (TSLA).
*   OpenAI: Utilized via the OpenAI Chat Model node (GPT-4.1) to analyze data, identify patterns, and generate insights.

## Hashtags:

#n8n #automation #trading #Tesla #technicalanalysis

# Daily Crypto Market Summary Bot

## Use cases:

- **Automated Crypto Portfolio Tracking:**  Receive hourly updates on the performance of key cryptocurrencies (BTC, ETH, SOL) in a Telegram channel, helping you stay informed about market movements without constant manual checks.
- **Market Analysis & Alerting:**  Quickly identify gainers and losers within a specific set of cryptocurrencies, allowing for timely investment decisions or risk mitigation.
- **Crypto Community Updates:**  Share automated, formatted market summaries in crypto-focused Telegram groups to provide valuable insights to members.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, configured to run every hour at minute 5.
2.  **Binance 24h Price Change:** An `HTTP Request` node fetches the last 24-hour price change data for all trading pairs from the Binance API.
3.  **Analyze & Format Market Data:** A `Function` node processes the raw data received from Binance. It performs several calculations:
    *   Filters data for `SOLUSDC`, `BTCUSDC`, and `ETHUSDC` pairs.
    *   Calculates volatility, bid-ask spread, and momentum.
    *   Formats the data into a human-readable HTML message, summarizing market overview, top gainers, and losers. It also ensures that the final message is broken down into smaller chunks, each under 4000 characters, to meet Telegram's limitations.
4.  **Send Telegram Message:**  The formatted market summary is sent to a specified Telegram chat ID using the `Telegram` node. The message is sent in HTML format for improved readability.

## Services:

-   Binance API: Used to retrieve cryptocurrency price data.
-   Telegram: Used to send formatted market summaries to a chat or group.

## Hashtags:

#n8n #automation #cryptocurrency #binance #telegram

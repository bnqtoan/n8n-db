# Crypto Market Alert System with Binance and Telegram Integration

## Use cases:

*   **Real-time Cryptocurrency Price Change Alerts:** Monitors Binance for significant price changes in cryptocurrencies and sends alerts to a Telegram group, enabling users to react quickly to market movements.
*   **Personalized Investment Tracking:** Allows users to track specific cryptocurrencies and receive notifications only when those assets experience price fluctuations exceeding a defined threshold.
*   **Automated Market Analysis:** Provides automated monitoring of the crypto market, identifying potential opportunities or risks based on predefined price change criteria.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which periodically (every 5 minutes by default) activates the workflow.
2.  **Binance 24h Price Change:** The `Binance 24h Price Change` node fetches data from the Binance API regarding the price changes of all coins in the last 24 hours.
3.  **Filter by 10% Change rate:** The `Filter by 10% Change rate` node filters the data, identifying coins with a price change of 15% or more (up or down). It formats the data to includes symbol, priceChangePercent, and lastPrice.
4.  **Aggregate:** The `Aggregate` node aggregates all the filtered items into a single data structure.
5.  **Split By 1K chars:** The `Split By 1K chars` node splits the aggregated data into chunks of approximately 1000 characters to comply with Telegram's message length limit.
6.  **Send Telegram Message:** The `Send Telegram Message` node sends the formatted message to a specified Telegram chat ID, alerting users about the significant price changes.

## Services:

*   **Binance API:** Used to fetch real-time cryptocurrency price data.
*   **Telegram API:** Used to send alert messages to a Telegram chat.

## Hashtags:

#n8n #automation #cryptocurrency #Binance #Telegram

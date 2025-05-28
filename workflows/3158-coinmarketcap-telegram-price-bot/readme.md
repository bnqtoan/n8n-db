# Coinmarketcap Price Agent

## Use cases:

- **Real-time Cryptocurrency Price Alerts:** Users can query the bot for the current price of a specific cryptocurrency and receive instant updates via Telegram.
- **Crypto Portfolio Tracking:** Integrating this workflow into a larger system allows users to track the value of their crypto portfolio by querying multiple cryptocurrency prices.
- **Educational Tool:** New cryptocurrency enthusiasts can use the bot to quickly check prices and learn about different cryptocurrencies.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot (`Telegram Trigger1`).
2.  **Adds SessionId:** A unique session ID is created based on the Telegram chat ID (`Adds SessionId`) to maintain context for each user.
3.  **CoinMarketCap Price Agent:** Takes the user's message and sends it to OpenAI Chat Model, and Window Buffer Memory. With this information, determines the intent and responds appropriatelly (`CoinMarketCap Price Agent`).
4.  **CoinMarketCap Price:** The tool takes the user's message and calls CoinMarketCap to get the latest price data (`CoinMarketCap Price`).
5.  **OpenAI Chat Model:** the OpenAI Chat Model determines the user intent and creates a tool for CoinMarketCap Price (`OpenAI Chat Model`).
6.  **Window Buffer Memory:** the history of the previous interactions is stored in memory (`Window Buffer Memory`).
7.  **Telegram Send Message:** Finally, the workflow sends the formatted price information back to the user via Telegram (`Telegram Send Message`).

## Services:

-   Telegram
-   CoinMarketCap API
-   OpenAI API

## Hashtags:

#n8n #automation #cryptocurrency #telegram #coinmarketcap

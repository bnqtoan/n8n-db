# Get OHLC BTC, ETH, SOL, BNB With Gecko Coin and Send

## Use cases:

- **Cryptocurrency Price Monitoring:** Schedule daily or hourly updates on the OHLC (Open, High, Low, Close) values of Bitcoin, Ethereum, Solana, and Binance Coin and have them emailed to you for easy tracking.
- **Portfolio Performance Reporting:** Automatically generate reports on the price movements of key cryptocurrencies and send them to stakeholders or investors.
- **Algorithmic Trading Input:** Use the OHLC data as input for automated trading strategies, allowing you to react quickly to market changes (requires modification to send data to a trading platform).

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule` trigger, which can be configured to run at specific intervals (e.g., daily, hourly).
2.  **Get OHLC Data:** Four `HTTP Request` nodes (`Get BITCOIN OHLC`, `Get ETHEREUM OHLC`, `Get SOLANA OHLC`, and `Get BINANCECOIN OHLC`) fetch OHLC data for BTC, ETH, SOL, and BNB respectively. The exact API endpoint is not included, so it can't be determined if it uses Gecko Coin.
3.  **Format Data:** Four `Code` nodes (`Format BTC`, `Format ETH`, `Format SOL`, and `Format BNB`) format the data received from the API calls, presumably extracting and structuring the relevant OHLC values. The exact code in each node is unavailable, so there may be some error.
4.  **Merge Data:** The `Merge` nodes (`Merge 1 (BTC + ETH)`, `Merge 2 (+SOL)`, and `Merge 3 (+BNB)`) combine the formatted data for all four cryptocurrencies into a single data structure.
5.  **Combine all Coins** A `Code` node to combine all coins data into a structured email format.
6.  **Send Email:** Finally, the `Send Gmail` node sends an email containing the combined OHLC data.  The email's content and recipients are configured within this node.

## Services:

-   Gmail API

## Hashtags:

#n8n #automation #cryptocurrency #ohlc #emailreport

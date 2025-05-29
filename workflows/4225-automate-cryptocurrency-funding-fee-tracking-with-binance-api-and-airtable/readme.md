# Binance Funding Fees to Airtable and Token Price Updater

## Use cases:

- **Automated Tracking of Binance Funding Fees:**  Automatically collect and record funding fees from Binance Futures, providing a detailed log for accounting and performance analysis.
- **Real-time Updating of Token Prices in Airtable:** Regularly fetch and update token prices from Binance in an Airtable database, ensuring the data is always current for informed decision-making.
- **Centralized Crypto Portfolio Management:** Combine funding fee data with position information to get a comprehensive view of portfolio performance in Airtable, including liquidation prices and position sizes.

## How it works:

This workflow automates two main scenarios: logging Binance funding fees and updating token prices in Airtable.

**Scenario 1: Logging Funding Fees**

1.  **Schedule Trigger:** (Disabled by default) Can be enabled to run the workflow on a defined schedule.
2.  **Edit Fields4:** Sets the `timestamp` to the current time and `startTime` to 8 hours prior, used to query the Binance API for funding fees within that window.
3.  **Crypto3:** Generates a SHA256 HMAC signature for the Binance API request, using the timestamp and startTime, ensuring secure communication.
4.  **Get Fees2:** Retrieves funding fee data from the Binance API for the past 8 hours. It sends a signed request with the timestamp, startTime, and a specified `recvWindow`.
5.  **Aggregate Fees:** Combines all the retrieved funding fee items into a single data structure.
6.  **Edit Fields1:** Sets the timestamp to the current time.
7.  **Crypto2:** Creates a SHA256 HMAC signature, for authentication when retrieving position risk data from Binance.
8.  **Get Positions:** Fetches current position risk data from Binance Futures API, also using a timestamped and signed request.
9.  **Aggregate Positions:** Aggregates the position data into a single item.
10. **Get Tokens:** Retrieves token data from the specified Airtable base and table "Tokens".
11. **Aggregate Tokens:** Aggregates the token data into a single item.
12. **Edit Fields2:** Combines data from the "Aggregate Fees" and "Aggregate Positions" nodes to create a structured array. It retrieves data for each funding fee, its position amount and mark price, and the token ID (if present) from Airtable.
13. **Split Out:** Splits the aggregated data into individual items for each funding fee entry.
14. **If:** Check if the TokenId is found in airtable.
15. **Create Statement:** Create a funding statement record in Airtable including time, asset, token, amount, mark price, position size and liquidation price.
16. **Create Token:** Create a token record in Airtable.
17. **Create Statement1:** Create a funding statement record in Airtable using the newly created token.

**Scenario 2: Updating Token Prices**

1.  **Schedule Trigger1:** Triggers the workflow every 4 hours.
2.  **Get Tokens1:** Retrieves a list of tokens from the specified Airtable base and table.
3.  **Get Price:** For each token, fetches the current price from the Binance API. The URL uses the token name.  Error handling is set to continue on error, so that if one price fetch fails, the workflow continues processing the remaining tokens.
4.  **Update Token Prices1:** Updates the token price in the Airtable "Tokens" table. It matches records based on the 'id' column and updates the 'price' field with the fetched price.

## Services:

-   **Binance API:** Used to fetch funding fees and token prices.
-   **Airtable:** Used as a database to store and manage token information and funding statements.

## Hashtags:

#n8n #automation #cryptocurrency #binance #airtable

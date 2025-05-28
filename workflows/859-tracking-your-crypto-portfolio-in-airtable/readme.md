# Update Crypto Values

## Use cases:
- Automatically update cryptocurrency prices in a portfolio tracker stored in Airtable.
- Track the total value of a cryptocurrency portfolio in real-time.
- Log the historical value of your portfolio to monitor its performance over time.

## How it works:
1.  **Run Top of Hour:** The workflow starts with a Cron node that triggers the workflow every hour.
2.  **Get Portfolio:** It retrieves a list of cryptocurrency symbols from an Airtable base named "Portfolio".
3.  **CoinGecko:** For each cryptocurrency symbol, it fetches the current market data (specifically the current price in USD) from the CoinGecko API.
4.  **Set:** It prepares the data to be written to Airtable, which includes the current price from CoinGecko API and the ID coming from the "Get Portfolio" node
5.  **Update Values:** It updates the "Present Price" field in the "Portfolio" table in Airtable with the current price obtained from CoinGecko for each corresponding cryptocurrency, using the ID provided by the "Get Portfolio" node to select what record to update.
6.  **Get Portfolio Values:** Retrieves all the "Present Value" fields from the "Portfolio" table from Airtable, in order to calculate the total value of the portfolio.
7.  **Determine Total Value:** Calculates the total portfolio value by summing up all the "Present Value" entries.
8.  **Append Portfolio Value:** Appends the calculated total portfolio value to a separate Airtable table named "Portfolio Value" to keep track of historical data.

## Services:
- CoinGecko API
- Airtable

## Hashtags:
#n8n #automation #cryptocurrency #airtable #portfolio

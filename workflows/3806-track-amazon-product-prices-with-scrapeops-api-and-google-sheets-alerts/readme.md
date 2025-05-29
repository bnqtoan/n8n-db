# Amazon Product Price Tracker

## Use cases:
- **Price Drop Alerts:** Receive immediate email notifications when the price of a desired Amazon product falls below a specified threshold, enabling timely purchase decisions.
- **Competitor Price Monitoring:** Track the pricing of products from different sellers or brands on Amazon to stay competitive and adjust pricing strategies accordingly.
- **Historical Price Analysis:** Analyze long-term price trends to identify optimal buying or selling times based on seasonal variations or market dynamics.

## How it works:

1.  **Schedule Trigger:** The workflow starts based on a set schedule (e.g., hourly).
2.  **Setup:** Configuration data like the Google Sheet URL, ScrapeOps API key, sender and receiver email addresses are initialized.
3.  **Products to Monitor (Google Sheets):** Reads a list of Amazon product ASINs and alert thresholds from a specified Google Sheet. The sheet URL is configured in Setup node.
4.  **Loop Over Items:** Splits the list of products into individual items for processing.
5.  **Last Price (Set):** Stores the last known price to be used in the calculation of price change.
6.  **Scrapeops - Amazon Product (HTTP Request):** Uses the ScrapeOps API to retrieve the current price and details of the Amazon product based on its ASIN.
7.  **Fields (Set):** Extracts the product name, converts the pricing to a numerical value, and constructs the Amazon product URL.
8.  **Check Valid Price (IF):** Checks whether the product price is greater than 0.
9.  **Price Change (Set):** Calculates the absolute and percentage price change compared to the last known price.
10. **Alert Status (Set):** Determines the alert status ("High", "Low", or empty) based on whether the percentage price change exceeds the defined thresholds from the Google Sheets.
11. **Update - Products to Monitor (Google Sheets):** Updates the Google Sheet with the current price, alert status, and last updated timestamp.
12. **Insert - Price History (Google Sheets):** Appends a new row to the "Price History" sheet with the ASIN, current price, and timestamp.
13. **Alert Decision (IF):** Checks to see if an alert status has been assigned
14. **Send Email (Email Send):** Sends an email notification if the alert status is "High" or "Low", containing the product details and price change information.

## Services:

*   Google Sheets
*   ScrapeOps API
*   SMTP (for sending emails)

## Hashtags:

#n8n #automation #amazon #pricetracker #webscraping

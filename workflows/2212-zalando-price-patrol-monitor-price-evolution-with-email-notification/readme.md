# Zalando Product Price Monitor

## Use cases:

- **Track price drops on Zalando:** Automatically monitor the price of specific products on Zalando and receive notifications when the price falls below a desired threshold.
- **Create a price history log:** Maintain a historical record of product prices to analyze trends and make informed purchasing decisions.
- **Competitor price monitoring:** Track competitor pricing on similar products by monitoring Zalando listings.

## How it works:

1.  **Add Product via Form or Schedule:** The workflow starts either when a user submits a Zalando product link and desired alert price via a web form, or on a schedule.
2.  **Store Product Details:** The "Add Product" node saves the product link and desired alert price into a Google Sheet.
3.  **List Products:** The "List Products" node retrieves product links and alert prices from a Google Sheet.
4.  **Scrap Product:** The "Scrap Product" node fetches the HTML content of the Zalando product page using the product link.
5.  **Format Product:** The "Format Product" node parses the HTML content to extract the product name and price.
6.  **Update Google Sheets:**
    -   The "Add Log in History" node appends the extracted price, name, and link to a separate Google Sheet for historical tracking.
    -   The "Update Products Infos" node updates the "price" column for the items being monitored.
7.  **Check for Price Reduction:** The "If price below price alert" node compares the current price with the user-defined alert price.
8.  **Send Notification (if applicable):** If the current price is below the alert price, the "Notify Price Reduction" node sends an email notification with the product details and a link to the product page.

## Services:

*   Google Sheets
*   Gmail
*   Zalando

## Hashtags:

#n8n #automation #priceMonitoring #zalando #webScraping

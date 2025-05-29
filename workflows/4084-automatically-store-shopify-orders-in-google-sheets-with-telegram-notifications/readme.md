# Automatically Store Shopify Orders in Google Sheets with Telegram Notifications

## Use cases:

- Automatically log all new Shopify orders into a Google Sheets spreadsheet for easy tracking and analysis.
- Receive instant Telegram notifications for each new order, keeping you informed in real-time.
- Streamline order management by centralizing order data and providing immediate alerts.

## How it works:

1.  **Receive New Shopify Order:** The workflow starts when a new order is placed on your Shopify store. A webhook is configured in Shopify to send order data to n8n whenever a new order is created.
2.  **Transform Order Data to Standard Format:** The raw order data received from Shopify is transformed into a consistent and standardized format using a Function node. This includes extracting customer information, shipping details, line items, and total price. The function converts nested objects into strings for proper data storage in Google Sheets.
3.  **Save Order to Google Sheets:** The transformed order data is then appended to a specified Google Sheet. The workflow utilizes the Google Sheets node to add a new row containing the order details.
4.  **Success?:** An IF node checks if the Google Sheets operation was successful. This is a basic boolean check and may need enhancement for robust error checking.
5.  **Send Success Notification1 / Send Error Notification:** Based on the success of the Google Sheets operation, a notification is sent to a specified Telegram chat ID using the Telegram node. A success notification includes order details such as order number, customer name, total price, and order date. An error notification is sent if the Google Sheets operation fails, including the error message and timestamp. The Telegram chat ID is read from the "Variables" node.

## Services:

-   Shopify
-   Google Sheets
-   Telegram

## Hashtags:

#n8n #automation #shopify #googlesheets #telegram

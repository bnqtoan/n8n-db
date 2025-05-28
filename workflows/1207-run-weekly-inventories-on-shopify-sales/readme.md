# Shopify Orders Summary Workflow

## Use cases

*   **Weekly Sales Report:** Automatically generate and send a weekly sales report to a Slack channel. This keeps the team informed about order volume and total revenue.
*   **Data Backup and Analysis:** Append weekly sales data to a Google Sheet for historical tracking and further analysis. This provides a long-term view of sales performance.
*   **Threshold Alerting:** (This is not explicitly implemented but could be an extension) Modify the workflow to include a conditional check (IF node) to trigger alerts in Slack if the total order value exceeds a certain threshold.

## How it works

1.  **Schedule Trigger:** The `Cron` node triggers the workflow every week.
2.  **Fetch Orders:** The `Shopify` node retrieves all orders from your Shopify store using the Shopify API.
3.  **Extract Order Date:** The `Date & Time` node extracts the order creation date from each order.
4.  **Filter by Date (Conditional):** The `IF` node filters orders based on their creation date, comparing it to "2021-08-17T15:00:53.223Z". Only orders meeting this condition will proceed.
5.  **Set Order Price:** The `Set price` node extracts total price, rename it to `orderPrice` from each order.
6.  **Aggregate Data:** The `Function` node processes the filtered orders. It calculates the total number of orders (`totalOrders`) and the sum of all order prices (`ordersSum`).
7.  **Send Slack Notification:** The `Slack` node sends a message to a specified Slack channel with a summary of the week's orders, including the total number of orders and the total revenue.
8.  **Append to Google Sheets:** The `Google Sheets` node appends the total orders and total revenue data to a Google Sheet for record-keeping and analysis.

## Services

*   Shopify API
*   Slack API
*   Google Sheets API

## Hashtags

#n8n #Shopify #Automation #SalesReport #Ecommerce

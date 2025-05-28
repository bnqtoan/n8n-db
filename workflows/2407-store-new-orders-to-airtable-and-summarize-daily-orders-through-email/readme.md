# Aggregate Daily Orders with Airtable

## Use cases:

- **Daily Sales Report:** Automatically compile and email a daily summary of sales orders to stakeholders.
- **Order Tracking and Analysis:** Store order data in Airtable for future analysis and reporting.
- **Automated Inventory Management:** Trigger updates to inventory levels in a separate system based on new orders received.

## How it works:

1.  **New Order via Webhook:** When a new order is placed in your system, a POST request is sent to the n8n Webhook node. The request should include the `orderID` and `orderPrice`.
2.  **Set Order Fields:** The `Set Order Fields` node extracts the `orderID` and `orderPrice` from the webhook data and sets `time` with current date time.
3.  **Store Order in Airtable:** The extracted order information (`time`, `orderID`, and `orderPrice`) is then stored as a new record in a specified Airtable base and table.
4.  **Daily Summary at 7 PM:** Every day at 7 PM, the `Everyday at 7PM` trigger starts the daily summary process.
5.  **Calculate Yesterday's Date:** The `Yesterday Date` node calculates the date for yesterday and today at 7 PM in ISO format.
6.  **Get Today's Orders from Airtable:** The `Airtable Get Today's Orders` node searches the Airtable table for all orders placed between yesterday and today at 7 PM.
7.  **Generate HTML Table:** The `HTML` node takes the data retrieved from Airtable and generates an HTML table containing the order details.
8.  **Send Email via Gmail:** Finally, the `Send to Gmail` node sends an email with the HTML table embedded in the body, providing a daily summary of orders.

## Services:

-   **Airtable:** Used for storing and retrieving order data.
-   **Gmail:** Used for sending the daily order summary email.

## Hashtags:

#n8n #automation #Airtable #Gmail #DailySummary

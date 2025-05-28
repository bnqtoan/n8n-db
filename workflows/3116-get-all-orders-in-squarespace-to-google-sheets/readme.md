# Get all orders in Squarespace to Google Sheets

## Use cases:

*   **Sales Reporting:** Automatically collect and store all Squarespace order data in a Google Sheet for easy analysis and reporting on sales trends, product performance, and customer demographics.
*   **Inventory Management:**  Use the order data to track which products are being sold and update inventory levels in a separate system, ensuring accurate stock levels and preventing overselling.
*   **Customer Service Enhancement:**  Quickly access order details like shipping addresses, order dates, and purchased items directly in a Google Sheet to provide faster and more informed customer support.

## How it works:

1.  **Trigger:** The workflow is triggered either manually by clicking 'execute' or automatically based on a schedule.
2.  **Globals:** Sets global variables such as `api-version`, `modifiedAfter`, `modifiedBefore`, `cursor`, `fulfillmentStatus` and `maxPage` for the Squarespace API request. These parameters are used to filter and paginate through the orders.
3.  **Query Orders:** An HTTP Request node queries the Squarespace Orders API to fetch order data. It uses the credentials named `Squarespace API key - Apps script` to authenticate. The node is configured for pagination, using the `cursor` parameter to retrieve subsequent pages of results until all orders are fetched or the `maxPage` is reached. Filters like `modifiedAfter`, `modifiedBefore`, and `fulfillmentStatus` are also applied based on the global parameters.
4.  **Split Out Order:** A Split Out node separates the array of orders received from Squarespace into individual order items for processing.
5.  **Squarespace Orders Spreadsheet:** The extracted order details are then appended or updated in a Google Sheets spreadsheet. The node uses the `googleSheetsOAuth2Api` credential for Google Sheets authentication. Data such as email, total amount, currency, order ID, billing and shipping information, and fulfillment status are mapped to specific columns in the spreadsheet.

## Services:

*   Squarespace API
*   Google Sheets

## Hashtags:

#n8n #Squarespace #GoogleSheets #Automation #eCommerce

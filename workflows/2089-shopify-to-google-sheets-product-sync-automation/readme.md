# Shopify to Google Sheets Product Sync Automation

## Use Cases:

- **Inventory Management:** Automatically keep a Google Sheets document updated with the latest product information from a Shopify store, including titles, descriptions, tags, and prices, for easy inventory tracking.
- **Reporting and Analytics:** Use the synchronized data in Google Sheets to create custom reports and dashboards for analyzing product performance, sales trends, and inventory levels.
- **Product Catalog Backup:** Create a backup of your Shopify product catalog in Google Sheets, providing a readily accessible copy of product information in case of data loss or store migration.

## How it works:

This workflow automates the process of synchronizing product data from a Shopify store to a Google Sheets document. Here's a breakdown:

1.  **Schedule Trigger:** The workflow is initiated automatically based on a predefined schedule (e.g., daily at 7:00 AM).
2.  **Batch Size and Cursor Handling:**
    *   It determines the batch size (defaulting to 100 products per request) to fetch from Shopify.
    *   It checks for existing cursor data in Google Sheets to continue from the last synchronized product (incremental synchronization). If no cursor exists, it fetches the initial set of products and cursor using the "shopify-initial" node.
3.  **Shopify Data Retrieval:**
    *   The workflow uses a GraphQL query to retrieve product details (title, tags, description, variants with price) from the Shopify store.
    *   The query uses pagination to handle large product catalogs, fetching products in batches based on the "batchsize" parameter and cursor position.
4.  **Data Transformation and Splitting:** The "Split output" code node splits the batched product data into individual product entries for easier processing.
5.  **Google Sheets Update:**
    *   The workflow appends the extracted product data (title, description, tags, and price) to a specified Google Sheets document.
    *   The "writing first product details" node populates the first product information and the other "writing remaning product info to google sheets" will write the other products info.
6.  **Pagination Handling:**
    *   It checks if there are more pages of products available on Shopify using the "Check if there is next page" node.
    *   If more pages exist, it updates the cursor in Google Sheets using "Set cursor" to point to the next batch of products and waits for a specified time (10 seconds) before fetching the next batch.
7. **Update Cursor:** Node to update the current cursor on a separate sheet to keep track of the sync progress.

## Services:

-   Shopify (via GraphQL API)
-   Google Sheets

## Hashtags:

#n8n #automation #shopify #googlesheets #productsync

# Shopify Orders to Google Sheets Sync

**Automatically sync Shopify orders with Google Sheets including paginated API results**

## Use cases
1. **Daily order reporting**: Maintain an up-to-date spreadsheet of all Shopify orders for financial tracking or inventory management
2. **Customer service workflow**: Create a spreadsheet-based system to track order notes and processing statuses
3. **Data backup**: Automatically preserve order records in Google Sheets as a secondary data store

## How it works
This workflow handles Shopify's paginated API to collect all orders, then updates a Google Sheet:
1. Starts via manual trigger or scheduled run
2. Fetches 250 orders/page from Shopify API using store credentials
3. Checks for pagination token (`page_info`) in response headers
4. Automatically loops through all pages using header parsing
5. Merges results from all paginated requests
6. Splits orders into individual records
7. Updates a Google Sheet with order ID, email, processing timestamp, and notes

Key nodes:
- **Code node**: Extracts pagination token from API headers
- **Loop mechanism**: Repeatedly fetches pages until all orders are retrieved
- **Google Sheets node**: Performs smart updates (appends new records or updates existing ones)

## Services
- **Shopify** (via REST API)
- **Google Sheets**

## Hashtags
#n8n #Shopify #GoogleSheets #automation #ecommerce

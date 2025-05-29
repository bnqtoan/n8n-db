# Shopify Customers to Google Sheets and Squarespace Contacts

## Use cases:

- **Customer Data Backup:** Regularly back up Shopify customer data (email, first name, last name, and Shopify Customer ID) to a Google Sheets spreadsheet for safekeeping and analysis.
- **Squarespace Contact List Update:** Automatically update Squarespace contacts from Shopify customer data, formatted as a CSV file suitable for import into Squarespace.
- **Shopify Customer Data Migration:** Migrate customer data from Shopify to other systems.

## How it works:

1. **Trigger:** The workflow starts either manually ("When clicking ‘Test workflow’" node) or on a schedule ("Schedule Trigger" node).
2. **Get Customers:** An HTTP Request node retrieves customer data from the Shopify Admin API using the provided store URL and API credentials. It fetches a limited number of customers (250 by default) with specific fields (id, email, first_name, last_name). It paginates through the customers.
3. **Check page_info existence:** A condition to verify the existence of additional pages with customers.
4. **Extract page_info:** Extract URL for the other pages and set it as parameter
5. **Merge Loop items:** If more pages exists, get all customers from all pages.
6. **List Customers:** The "Split Out" node separates the "customers" array from the Shopify API response into individual items for further processing.
7. **Customers Spreadsheet:** The Google Sheets node appends or updates the customer data to a specified Google Sheet. It maps the Shopify customer fields (email, first name, last name, Shopify Customer ID) to the corresponding columns in the Google Sheet. It uses the Shopify Customer ID as a matching column to update existing entries.
8. **Extract customers data:** Extract data to convert to Squarespace format.
9. **Convert to Squarespace contacts csv:** Formats the customer data into a CSV file that can be imported into Squarespace.

## Services:

- Shopify: Retrieves customer data via the Shopify Admin API.
- Google Sheets: Appends or updates customer data in a Google Sheet.
- Squarespace: Generates a CSV file of Shopify customer data that's formatted for upload as Squarespace contacts.

## Hashtags:

#n8n #automation #shopify #googlesheets #squarespace #customerdata

# Convert Squarespace Profiles to Shopify Customers in Google Sheets

## Use cases:

- **Migrating Customer Data:** Seamlessly transfer customer profiles exported from Squarespace to a format compatible for importing into Shopify, streamlining the platform migration process.
- **Centralized Customer Management:** Consolidate customer data from Squarespace into a Google Sheets spreadsheet, which can then be used for reporting, analysis, or integration with other systems.
- **Automated Customer Onboarding:** Automatically add or update Shopify customer data based on new profile submissions or updates received from a Squarespace site through a webhook.

## How it works:

1.  **Webhook Trigger (Webhook):** Listens for POST requests at the `/submit-profiles` endpoint. This allows external services (like Squarespace via a form submission) to trigger the workflow.
2.  **Extract items from webhook submission:** Extract the binary file and process to the next step.
3.  **Append Squarespace profiles (Google Sheets):** Appends all data from Squarespace profiles to the Google Sheet selected.
4.  **Loop Over Items (Split in Batches):** Processes the received data in batches to avoid issues with large datasets.
5.  **Shopify Customers (Google Sheets):** Appends or updates customer data in a designated Google Sheets document, formatting the data to match Shopify's customer import requirements. The workflow uses formulas to generate Shopify-compatible columns and add tags.
6.  **Read Squarespace profiles (Google Sheets):** Manually trigger to extract all data from Squarespace profiles to the Google Sheet selected.

## Services:

-   Google Sheets
-   Squarespace (indirectly via Webhook)
-   Shopify (indirectly via formatted Google Sheets data)

## Hashtags:

#n8n #automation #shopify #squarespace #googleSheets

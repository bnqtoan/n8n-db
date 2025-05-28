# Import multiple Manufacturers from Google Sheets to Shopware 6

## Use cases:

- Automatically import a list of manufacturers from a Google Sheets document into your Shopware 6 store, saving time and effort compared to manual entry.
- Keep manufacturer information in Shopware 6 synchronized with a Google Sheet, allowing for easy updates and centralized management.
- Enrich product data in Shopware 6 by automatically adding manufacturer details, including names, websites, descriptions, and logos, from a Google Sheet.

## How it works:

1.  **Trigger:** The workflow starts when you manually execute it using the "When clicking 'Execute Workflow'" node.
2.  **Settings:** The "Settings" node defines global variables like your Shopware 6 URL and the default language code.
3.  **Get Manufacturer from Google Sheet:** Reads manufacturer data (name, website, description, logo URL, translations) from a specified Google Sheet.
4.  **Create Import Request Body:** Formats the data from Google Sheets into the format required by the Shopware 6 API for importing manufacturers. It also creates an MD5 hash to prevent media duplicates.
5.  **Loop Over Manufacturers:** Splits the data, so each manufacturer will be handled on its own.
6.  **Import Manufacturer:** Sends a POST request to the Shopware 6 API to create or update the manufacturer.
7.  **If has Logo:** Checks the result of the manufacturer import for each manufacturer. If the media entity exists, the logo will be uploaded.
8.  **Upload Manufacturer Logo:** Uploads the manufacturer's logo to Shopware 6 using a POST request to the media upload endpoint. The filename, extension and name are taken from the values in Google Sheet.

## Services:

-   Google Sheets
-   Shopware 6 API

## Hashtags:

#n8n #automation #Shopware6 #GoogleSheets #eCommerce

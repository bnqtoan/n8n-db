# Automated Lead Scraper: Apify to Google Sheets

## Use cases:

- Automatically collect business leads (company name, address, phone number) from the web using Apify and store them in a Google Sheet for further processing or outreach.
- Regularly update a Google Sheet with the latest leads scraped from specified websites using an Apify actor task.
- Build a database of potential customers or partners by scraping relevant online directories and automatically organizing the data in a structured format.

## How it works:

1.  The workflow starts with a **Manual Trigger**, allowing you to initiate the process whenever needed.
2.  The **Variables** node stores your Apify API token (`APIFY_TOKEN`) and Task ID (`APIFY_TASK_ID`). *Important: You need to replace the placeholder values with your actual credentials.*
3.  The **Run Apify Scraper** node uses the HTTP Request node to call the Apify API, triggering the specified actor task and retrieving the scraped data. The API endpoint is constructed using the `APIFY_TOKEN` and `APIFY_TASK_ID` variables. The `splitIntoItems` options splits the result into individual items.
4.  The **Clean Data** node uses a Function node to process the raw data received from Apify. It extracts relevant fields (company name, phone, address), standardizes phone number formatting by removing non-numeric characters, and converts email addresses to lowercase.
5.  The **Export to Google Sheets** node appends the cleaned lead data to a specified Google Sheet.  It maps the fields `phone`, `address`, and `title` to the corresponding columns in the Google Sheet (`company name`, `phone`, `Address`). The Google Sheet ID is set using the `YOUR_GOOGLE_SHEET_ID` variable.

## Services:

-   Apify
-   Google Sheets

## Hashtags:

#n8n #automation #leadgeneration #webscraping #googlesheets

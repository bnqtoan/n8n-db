# Extract Product Info from Webpage Screenshots using Dumpling AI and GPT-4o

## Use cases:

- **Competitor Price Monitoring:** Automatically track product prices and details from competitor websites, updating a Google Sheet with the latest information.
- **E-commerce Product Data Extraction:** Extract product specifications, descriptions, and pricing from online stores for market research or inventory management.
- **Automated Report Generation:** Compile product data from various sources into a structured format for generating reports and presentations.

## How it works:

1.  **Trigger on New URL in Sheet:** The workflow starts when a new URL is added to a specified Google Sheet.
2.  **Take Full-Page Screenshot using Dumpling AI:** Dumpling AI takes a full-page screenshot of the URL.
3.  **Extract All Visible Data from Screenshot (Dumpling AI):** Dumpling AI extracts all the visible text and UI elements from the screenshot.
4.  **Download Screenshot File:** The screenshot is downloaded as a file.
5.  **Save Screenshot to Drive Folder:** The downloaded screenshot is saved to a specified Google Drive folder.
6.  **Log Screenshot URL to Spreadsheet:** The original URL and the screenshot URL are logged back to the initial Google Sheet.
7.  **Extract Product Info from Screenshot Text with GPT-4o:** GPT-4o analyzes the extracted text and identifies product-related information like name, price, ratings, and purchase volume, and extract specific fields for each product in JSON format.
8.  **Split Each Product into Individual Record:** The extracted JSON is split into individual records for each product.
9.  **Save Products info to Google Sheet:** The structured product information is saved to a new Google Sheet for analysis and reporting.

## Services:

*   Google Sheets
*   Dumpling AI
*   Google Drive
*   GPT-4o (OpenAI)

## Hashtags:

#n8n #automation #webscraping #ecommerce #googlesheets

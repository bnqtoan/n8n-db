# Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel

## Use cases:

1.  **Price Monitoring:** Automatically track the prices of books on a specific website and receive a daily/weekly email with a CSV file containing the latest prices.
2.  **Data Backup and Analysis:** Regularly scrape data from a website, store it in Google Sheets and Microsoft Excel for backup purposes and later analysis.
3.  **Competitor Analysis:** Gather data from competitor websites and analyze their product offerings and pricing strategies, storing the data in Google Sheets and Microsoft Excel for review.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking \"Test workflow\"" node.
2.  **Fetch Website Content:** The "Fetch website content" node retrieves the HTML content from the specified URL (`http://books.toscrape.com`).
3.  **Extract All Books:** The "Extract all books from the page" node extracts list items using the CSS selector `.row > li` into an array named books.
4.  **Split Out:** The "Split Out" node splits the books array into individual items for processing.
5.  **Extract individual book price:** The "Extract individual book price" node extracts the title and price of each book from the HTML content, using CSS selectors.
6.  **Sort by price:** Sorts the extracted data descending by the price using the "Sort by price" node.
7.  **Save to Microsoft Excel 365:** The "Save to Microsoft Excel 365" node appends the extracted data to a specified Microsoft Excel worksheet. *Note: Requires Microsoft Azure credentials with Microsoft Graph permissions.*
8.  **Convert to CSV File:** The "Convert to CSV File" node converts the extracted data into a CSV file.
9.  **Save to Google Sheets:** The "Save to Google Sheets" node appends the extracted data to a specified Google Sheet. *Note: Requires Google Drive, Sheets and Gmail APIs enabled in your Google Cloud Account.*
10. **Send CSV via e-mail:** The "Send CSV via e-mail" node sends an email with the generated CSV file as an attachment.

## Services:

*   HTTP Request (for fetching website content)
*   Google Sheets
*   Microsoft Excel 365
*   Gmail

## Hashtags:

#n8n #webscraping #automation #googlesheets #microsoftexcel

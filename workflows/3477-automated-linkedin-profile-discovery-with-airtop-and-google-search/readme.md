# LinkedIn Profile Discovery

## Use Cases

*   **Lead Generation:** Automatically enrich lead lists with LinkedIn profile URLs for sales and marketing outreach.
*   **Recruiting:** Quickly find and verify the LinkedIn profiles of potential candidates based on their names.
*   **Data Enrichment:** Enhance existing databases with LinkedIn profile data for more comprehensive professional information.

## How it works

1.  **Trigger:** The workflow starts when you manually click "Test workflow."
2.  **Read Person Info from Google Sheets:** It reads person's name or details from a specified Google Sheets document. The sheet and document are defined using their IDs, and the workflow fetches data from the sheet.
3.  **Search Profile using Airtop:** It uses the Airtop node to search for the person on Google and extract their LinkedIn profile URL. Airtop uses a prompt to specifically target the LinkedIn URL from the search results.
4.  **Parse Response (Code Node):** A code node then extracts the LinkedIn URL from the Airtop response. It combines this URL with the original data fetched from Google Sheets.
5.  **Update Row in Google Sheets:** Finally, the workflow updates the same Google Sheets document with the extracted LinkedIn URL in a new column.

## Services

*   Google Sheets
*   Airtop (for web scraping and data extraction)

## Hashtags

#n8n #automation #LinkedIn #leadgeneration #datascraping

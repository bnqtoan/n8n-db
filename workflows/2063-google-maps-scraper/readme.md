# Google Maps Scraper with SerpAPI

## Use cases:

- **Lead Generation:** Extract contact information (phone numbers, websites, addresses) of businesses from Google Maps for targeted marketing campaigns.
- **Market Research:** Gather data on local businesses within a specific area to analyze competition, identify trends, and understand market dynamics.
- **Data Enrichment:** Enhance existing business databases with up-to-date information scraped from Google Maps.

## How it works:

1.  **Trigger:** The workflow starts either manually via the "When clicking Execute Workflow" node or automatically on a schedule defined in the "Run workflow every hours" node.
2.  **Fetch Search Queries:** The "Google Sheets - Get searches to scrap" node retrieves Google Maps search URLs from a specified Google Sheet. This sheet should contain a list of search queries to be executed.
3.  **Extract Keyword and Location:** The "Extract keyword and location from URL" node parses the Google Maps URL to extract the keyword and geographical coordinates.
4.  **Scrape Google Maps:** The "SERPAPI - Scrape Google Maps URL" node uses the SerpAPI service to scrape data from Google Maps based on the extracted keyword, location, and pagination start value.  If an error occurs during the scraping, the "Update Status to Error" node will update the Google Sheet.
5.  **Extract Next Start Value:** The "Extract next start value" uses a code node to determine the next pagination token (start parameter) from the SERPAPI response to enable iterative scraping of multiple pages.
6.  **Conditional Loop:** The "Continue IF Loop is complete" node checks if the next page token exist to continue scraping, then redirects the workflow back to the "SERPAPI" node. Also redirects to "Merge all values from SERPAPI" node to continues the workflow with already scraped results.
7.  **Merge and Process Data:** The "Merge all values from SERPAPI" node combines the results from multiple SERPAPI calls.
8.  **Split, Filter, and Transform:** The workflow then splits the combined data ("Split out items"), removes empty values ("Remove empty values"), and transforms the data into the desired format ("Transform data in the right format").
9.  **Remove Duplicates:** The "Remove duplicate items" node removes duplicate entries based on the `place_id`.
10. **Add to Google Sheets:** The "Add rows in Google Sheets" node appends the scraped and transformed data to a specified Google Sheet.
11. **Update Status:** Finally, the "Update Status to Success" node updates the status of the processed URL in the initial Google Sheet to "✅" to indicate completion.

## Services:

*   Google Sheets
*   SerpAPI

## Hashtags:

#n8n #automation #webscraping #googlemaps #serpapi

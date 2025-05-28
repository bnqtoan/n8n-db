# Google Maps Email Scraper Template

## Use cases:

- **Lead Generation for Local Businesses:**  A marketing agency can use this workflow to quickly generate leads for clients by scraping email addresses of businesses listed on Google Maps for specific search queries (e.g., "dentist in Los Angeles").
- **Market Research:**  A company can use this to identify potential competitors or partners within a specific geographic area and industry.  By scraping emails, they can understand the market landscape and identify key players.
- **Sales Prospecting:** A sales team can automate the process of finding potential customers by scraping email addresses from Google Maps listings based on relevant keywords.

## How it works:

This workflow automates the process of scraping email addresses from Google Maps listings based on search queries you provide. Here's a breakdown:

1.  **Manual Trigger:** The workflow is initiated by a manual trigger node ("Run workflow"). This node contains a list of Google Maps search queries.
2.  **Loop over Queries:** The workflow iterates through each query in the list.
3.  **Execute Scraper for Query:**  For each query, a sub-workflow ("Starts scraper workflow") is executed. This is the main scraper workflow that runs in the background.
4.  **Search Google Maps with query:**  The sub-workflow uses the Google Maps search query to perform a search.
5.  **Scrape URLs from results:**  The HTML content of the Google Maps search results page is scraped to extract URLs of business listings.
6.  **Filter irrelevant URLs:** Irrelevant URLs (e.g., those from Google itself, ad sites) are filtered out using a regular expression.
7.  **Remove Duplicate URLs:** Duplicate URLs are removed to ensure only unique business listings are processed.
8.  **Loop over URLs:** The workflow iterates through each extracted and filtered URL.
9.  **Request web page for URL:** The HTML content of each business listing page is fetched.
10. **Scrape emails from page:** The HTML content is scraped to extract email addresses using a regular expression.
11. **Aggregate arrays of emails**: All the emails scrapped are aggregated into one single array.
12. **Split out into default data structure**: Each element of the array is split out.
13. **Remove duplicate emails:** Duplicate emails are removed.
14. **Filter irrelevant emails:** Irrelevant emails (e.g., those from Google itself, ad sites) are filtered out using a regular expression.
15. **Save emails to Google Sheet:** Finally, the extracted and cleaned email addresses are saved to a specified Google Sheet.
16. **Wait between executions:** The workflow waits for a defined period between executions to avoid being blocked by Google Maps.

## Services:

*   Google Maps
*   Google Sheets

## Hashtags:

#n8n #automation #webscraping #googlescraper #emailscraper

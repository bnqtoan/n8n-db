# Get Recent Fundraising in Google Sheets

## Use cases:

- **Lead Generation:** Identify recently funded companies for potential sales or partnership opportunities.
- **Market Research:** Track investment trends and emerging players in specific industries by monitoring funding rounds.
- **Competitive Analysis:** Monitor competitors who have recently raised funds to understand their growth strategies and potential market impact.

## How it works:

1.  **Schedule Trigger - Run Workflow Every Day:** The workflow starts automatically every day at 8:00 AM.
2.  **Piloterr - Get Recent Fundraise (Serie A, Serie B, Seed):** It sends API requests to Piloterr (using your API key) to retrieve recent fundraising events for Series A, Series B, and Seed rounds, filtering for announcements within the last day.
3.  **Split results:** Separates the results from the Piloterr API into individual items.
4.  **Prepare data:** Extracts and prepares key data points from the funding round information, such as the investment type, amount raised, announcement date, company name, and links.
5.  **Piloterr - Enrich company:** For each company, uses the Piloterr API to retrieve additional company information based on the company's Crunchbase URL.
6.  **Get Linkedin URL from object:** Extracts the LinkedIn URL from the enriched company data.
7.  **Prepare data before importing to Gsheets:** Extracts more information from piloterr results, such as `website_url`, `monthly_traffic_semrush`, `funding_total`, `linkedin_url`, `employee_count`, `country` and `founded_date`
8.  **Merge:** Combines data from prepare data and prepare data before importing to Gsheets.
9.  **Google Sheets:** Appends or updates the Google Sheet with the extracted information for each funding round. The sheet is identified by its URL and the workflow uses the "appendOrUpdate" operation, matching rows based on the "event_link" column.

## Services:

*   Piloterr: API for accessing Crunchbase data, including funding rounds and company information.
*   Google Sheets: Spreadsheet service for storing and managing the extracted data.
*   Semrush: Used in Piloterr enriched information.

## Hashtags:

#n8n #automation #leadgeneration #fundraising #googlesheets

# Live Link Checker

## Use cases:

- **SEO Audits:**  Automatically check the status of backlinks on a regular basis to identify lost or nofollow links, ensuring link equity is maintained.
- **Link Building Campaign Monitoring:**  Track the effectiveness of link building campaigns by verifying if newly acquired backlinks are live and dofollow.
- **Competitor Analysis:**  Monitor competitor backlinks to identify potential link building opportunities and track the effectiveness of their SEO strategies.

## How it works:

1. **Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2. **Read Google Sheets:** It reads a Google Sheet containing a list of backlinks to check.  The sheet should have columns named "Backlink URL" (the URL containing the backlink) and "Landing page" (the target URL on your website where the backlink should point). The data range should be defined explicitly (e.g., D1:E).
3. **Clean Backlink URL:** Extracts the domain name from the "Backlink URL" column using a code node.
4. **Loop Over Items:** Iterates through each backlink URL extracted from the Google Sheet.
5. **DataForSEO Task Post Request:** Sends a POST request to the DataForSEO API's `on_page/task_post` endpoint for each URL. This tells DataForSEO to crawl the page and look for links. It uses the extracted domain and full backlink URL from the sheet.
6. **Wait:** Pauses the workflow for 20 seconds to allow DataForSEO to crawl the page.
7. **DataForSEO Links Request:** Sends a POST request to the DataForSEO API's `on_page/links` endpoint. This retrieves the results of the crawl performed in the previous step.
8. **Check Backlink Status:** A code node analyzes the DataForSEO response. It checks if the backlink exists on the target page ("Landing page" column from the Google Sheet) and determines if the link is dofollow or nofollow.  It sets the "status" to "Live", "Lost", or "Lost (Nofollow)".
9. **Send data to Google Sheets:** Updates the original Google Sheet with the "Status" of each backlink. It matches the rows based on the "Backlink URL" and updates the "Status" column with the determined status.

## Services:

- **Google Sheets:** Used to store and update the list of backlinks and their statuses.
- **DataForSEO API:**  Used to crawl web pages and extract link information.

## Hashtags:

#n8n #automation #SEO #backlink #dataforseo

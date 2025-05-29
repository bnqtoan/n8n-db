# Monitor Competitor Pricing

## Use cases:
- **Automated Price Tracking:** Regularly monitor competitor pricing pages and automatically identify changes in pricing plans.
- **Real-time Notifications:** Receive immediate alerts in a Slack channel when significant price differences are detected.
- **Pricing History Documentation:** Maintain a historical record of competitor pricing in a Google Sheet for analysis and reporting.

## How it works:

1. **Trigger:** The workflow starts when you manually click "Test workflow".
2. **Fetch Pricing URLs:** The "Get Pricing URLs" node retrieves a list of competitor pricing page URLs from a specified Google Sheet ("Copy of Monitor Pricing"). This sheet should have columns including "Pricing URL" and "row_number".
3. **Extract Pricing Information:** The "Check pricing" node uses Airtop to scrape the pricing information from each URL.  It summarizes the pricing plans, compares them to previously stored pricing (also retrieved from the Google Sheet), and determines if there are significant price differences. Airtop extracts the `pricing_summary`, `differences_summary`, and `status` ([DIFF], [SIMILAR], or [NEW]).
4. **Merge Data:** The "Merge" node combines the original data (row number and Pricing URL) fetched from the Google sheet in step 2 with the extracted pricing data from step 3.
5. **Parse response:** The "Parse response" node parses Airtop JSON response.
6. **Filter out similar:** The "Filter out similar" node filters out result flagged as "SIMILAR".
7. **Update Google Sheet:** The "Update pricing" node updates the Google Sheet with the current pricing summary and timestamp for each competitor's URL. This node uses the row_number to identify which row to update.
8. **Notify via Slack:** The "Notify pricing change" node sends a notification to a specified Slack channel ("pricing-changes") if a price change is detected (status is not "SIMILAR").  The notification includes the URL of the pricing page and a summary of the price differences.

## Services:

- **Google Sheets:** Used to store and retrieve competitor pricing URLs and historical pricing data.
- **Airtop:** Used to scrape and summarize pricing information from competitor websites.
- **Slack:** Used to send notifications about pricing changes.

## Hashtags:

#n8n #automation #pricing #competitorAnalysis #webScraping

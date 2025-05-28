# Facebook Ads Insights to Google Sheets

## Use cases:

- **Daily Performance Reporting:** Automatically collect and store Facebook Ads insights (general metrics, monetary, and non-monetary actions) into a Google Sheet every day for easy tracking.
- **Action-Based Analysis:** Categorize and analyze Facebook Ad performance based on different action types (monetary vs. non-monetary), providing granular insights into campaign effectiveness.
- **Scheduled Data Backups:** Regularly back up Facebook Ads data to a Google Sheet, ensuring data availability for historical analysis and reporting.

## How it works:

1.  **Trigger:** The workflow starts either manually (using "When clicking ‘Test workflow’") or automatically every day at 3 AM (using "Everyday at 3am").
2.  **Fetch Ad Insights:** The "Ad insights from yesterday" node fetches Facebook Ads insights for the previous day.
3.  **Split Data:** The "data column only" node splits the incoming data.
4.  **Split Actions:** The "split actions" node splits the data related to actions performed in the ads.
5.  **Add General Metrics:** The "Add General Metrics" node appends the general metrics data to a specified Google Sheet.
6.  **Split Action Values:** The "split action values" node splits the action data again.
7.  **Filter Monetary Actions:** The "Only monetary actions" node filters the actions to isolate those that are monetary.
8.  **Filter by Action Type:** The "filter by action type" node filters actions based on their type.
9.  **Filter by Monetary Action Type:** The "filter by monetary action type" node filters monetary actions based on their specific type.
10. **Add Non-Monetary Actions:** The "Add Non-Monetary actions" node adds the filtered non-monetary action data to a Google Sheet.
11. **Add Monetary Actions:** The "Add Monetary actions" node adds the filtered monetary action data to a Google Sheet.

## Services:

-   Facebook Graph API
-   Google Sheets

## Hashtags:

#n8n #facebookads #googleSheets #automation #marketing

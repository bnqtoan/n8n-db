# Send financial metrics monthly to Mattermost

## Use cases:

*   **Monthly Financial Reporting:** Automatically post key financial metrics to a designated Mattermost channel for team review.
*   **Performance Monitoring:** Keep track of customer growth, revenue, and other important KPIs over time, without manual data gathering.
*   **Automated Notifications:** Ensure stakeholders are promptly informed about the company's financial health at the start of each month.

## How it works:

1.  **Cron Trigger:** The workflow starts at 9:00 AM on the first day of each month (defined by the "Cron" node).
2.  **Fetch ProfitWell Data:** The "ProfitWell" node retrieves monthly financial metrics (active customers, trailing customers, new customers, growth rate, recurring revenue) from the ProfitWell API.
3.  **Send to Mattermost:** The "Mattermost" node constructs a message using the data fetched from ProfitWell and sends it to the specified Mattermost channel.  The message includes active customers, trailing customers, new customers, growth rate and recurring revenue.

## Services:

*   ProfitWell API
*   Mattermost

## Hashtags:

#n8n #automation #mattermost #profitwell #financialmetrics

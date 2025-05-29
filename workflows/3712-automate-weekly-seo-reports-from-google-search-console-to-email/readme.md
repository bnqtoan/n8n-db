# My workflow 3

## Use cases

- **Weekly SEO Performance Monitoring:** Automatically retrieve and send a weekly report of the top search queries, clicks, impressions, CTR, and average position from Google Search Console.
- **Competitor Analysis (with modifications):** Adapt the workflow to monitor keyword performance for different websites, enabling basic competitor analysis.
- **Trend Identification:** Track changes in click-through rate (CTR) and impressions over time to identify emerging trends in search queries.

## How it works

This workflow automates the process of retrieving and sending a weekly SEO report from Google Search Console.

1.  **Weekly Trigger (Monday 7AM):** The workflow is initiated every Monday at 7 AM using a cron trigger.
2.  **Get SEO Data from GSC:** An HTTP Request node fetches data from the Google Search Console API. It uses a URL that needs to be configured with the correct site URL. The node uses HTTP Basic Authentication
3.  **Generate SEO Report:** A Function node processes the raw data received from Google Search Console. It extracts the top 10 search queries, along with their clicks, impressions, CTR, and position. This data is then formatted into a human-readable report string.
4.  **Send Weekly Report by Email:** The formatted SEO report is sent via Gmail to a specified recipient.

## Services

-   Google Search Console API
-   Gmail

## Hashtags

#n8n #SEO #Automation #GoogleSearchConsole #EmailReport

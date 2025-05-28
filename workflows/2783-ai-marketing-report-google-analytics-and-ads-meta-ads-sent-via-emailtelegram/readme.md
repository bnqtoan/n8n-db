# Online Marketing Weekly Report

## Use cases:

- **Automated Performance Monitoring:** Automatically generate weekly reports on online marketing performance, saving time and resources for marketing teams.
- **Cross-Platform Analysis:** Consolidate data from Google Analytics, Google Ads, and Meta Ads into a single report for a holistic view of marketing efforts.
- **Historical Comparison:** Compare current performance against the same period in the previous year to identify trends and patterns.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered every week on Monday at 7 AM.
2.  **Data Retrieval:**
    *   **Google Analytics:** Fetches data for the last 7 days and the corresponding period from the previous year for multiple domains.
    *   **Google Ads:** Retrieves campaign performance metrics (impressions, clicks, conversions, cost, etc.) for the last 7 days and the previous year using the Google Ads API.
    *   **Meta Ads:** Retrieves campaign performance metrics for the last 7 days and the previous year using the Facebook Graph API.
3.  **Data Formatting and Summarization:**
    *   The data from each platform is formatted and summarized to calculate key metrics like impressions, CPM, clicks, CTR, conversions, cost per conversion, ROAS, and spend.
4.  **AI-Powered Analysis:**
    *   Formatted data is sent to an OpenAI Chat Model (GPT-4o) for analysis. The AI generates a brief summary and a table comparing current and previous year data, including percentage changes.
5.  **Report Generation:**
    *   The summaries and tables from Google Analytics, Google Ads, and Meta Ads are compiled into a comprehensive HTML email report by an AI Agent.
6.  **Report Delivery:**
    *   The generated HTML report is sent via email.
    *   A summarized version of the report is formatted for Telegram and sent as a message (optional).

## Services:

-   Google Analytics API
-   Google Ads API
-   Facebook Graph API
-   OpenAI API
-   SMTP (Email)
-   Telegram API

## Hashtags:

#n8n #automation #marketingreport #googleanalytics #googleads #metaads

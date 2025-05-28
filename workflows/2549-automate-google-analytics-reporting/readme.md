# Automate Google Analytics Reporting - AlexK1919

## Use cases:

- **Automated Weekly Performance Reports:** Automatically generate and email a weekly report comparing website engagement, search performance, and country views against the previous week, providing insights into trends and changes.
- **SEO Monitoring:** Track and compare Google Search Console metrics (clicks, impressions, average position) to quickly identify improvements or declines in search visibility.
- **Website Engagement Analysis:** Monitor key engagement metrics such as page views, active users, and event counts to understand user behavior and optimize content.

## How it works:

This workflow automates the process of collecting, aggregating, and formatting Google Analytics data before sending it as an email. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow is initiated either manually via the "When clicking ‘Test workflow’" trigger or on a schedule using the "Schedule Trigger".
2.  **Data Retrieval (Google Analytics):**
    -   It fetches data for the current week and the previous week for:
        -   Page engagement statistics (page views, active users, etc.) using the "Get Page Engagement Stats for this week/prior week" nodes.
        -   Google Search Console results (clicks, impressions, average position, etc.) using the "Get Google Search Results for this week/prior week" nodes.
        -   Country views data (active users, new users, etc.) using the "Get Country views data for this week/prior week" nodes.
    -   All "Google Analytics" nodes use the same Google Analytics OAuth2 credentials (`KBB Google Analytics account`) and property ID (`420633845`).
3.  **Data Parsing (Code Nodes):** The data from Google Analytics is in a complex format. The following nodes extract and simplify the data into JSON strings:
    -   "Parse - Get Page Engagement This Week/Prior Week"
    -   "Parse - Get Google Search This Week/Prior Week"
    -   "Parse - Country Views This Week/Prior Week"
    -   The extracted data includes page, pageViews, activeUsers, viewsPerUser and eventCount for page engagement.  It includes page, activeUsers, engagedSessions, engagementRate, eventCount, avgPosition, ctr, clicks, and impressions for search results.  And it includes country, activeUsers, newUsers, engagementRate, engagedSessions, eventCount, totalUsers, and sessions for country views.
    -   The encoded JSON strings are stored as `urlString1`, `urlString2`, `urlString3`, `urlString4`, `urlString5` and `urlString6` in the "Set urlStrings" node
4.  **Data Aggregation (Code Node):** The "Aggregate Data" node takes the URL-encoded JSON strings for the current and previous weeks for each data set and aggregates them into a single JSON object.  The node uses the `decodeUrlString` function to decode the JSON strings.
5.  **Data Formatting (Code Node):** The "Format Data" node takes the aggregated data and transforms it into an HTML table format using the generateTable function, making it readable for email.
6.  **Email Sending (Gmail Node):** The "Email the Report" node sends the formatted HTML report via Gmail to `info@alexk1919.com`. The email subject includes the title generated in the "Format Data" node.

## Services:

-   Google Analytics
-   Gmail

## Hashtags:

#n8n #googleanalytics #automation #reporting #seo

# Google analytics template

## Use cases:

- **Automated SEO Performance Monitoring:** Automatically track and analyze website performance metrics from Google Analytics, providing regular insights into key areas such as page engagement, search performance, and audience demographics.
- **AI-Powered SEO Recommendations:** Use AI to compare current and historical Google Analytics data, generating actionable SEO recommendations for improving website visibility and user engagement.
- **Data-Driven Content Optimization:** Analyze Google Analytics data with AI to identify high-performing content and areas for improvement, enabling data-driven decisions for content strategy.

## How it works:

1.  **Trigger:** The workflow is triggered either on a weekly schedule or manually via the "Test workflow" button.
2.  **Fetch Page Engagement Stats:** Retrieves page engagement statistics (screenPageViews, activeUsers, screenPageViewsPerUser, eventCount) from Google Analytics for the current week and the previous week.
3.  **Fetch Google Search Results:** Fetches Google Search Console data (activeUsers, engagedSessions, engagementRate, eventCount, organicGoogleSearchAveragePosition, organicGoogleSearchClickThroughRate, organicGoogleSearchClicks, organicGoogleSearchImpressions) for the current and previous weeks.
4.  **Fetch Country Views:** Obtains country-specific data (activeUsers, newUsers, engagementRate, engagedSessions, eventCount, sessions) from Google Analytics for both the current and prior weeks.
5.  **Parse Data:** Parses the raw data from Google Analytics into a simplified JSON format, extracting relevant metrics and dimensions.
6.  **AI-Powered Analysis:** Sends the parsed data for page engagement stats, Google Search Console data and Country Views data to the Openrouter AI API, prompting it to compare the data from the past two weeks, provide a markdown table summarizing the findings, and generate five SEO improvement suggestions.
7.  **Save to Baserow:** Saves the AI-generated SEO analysis and suggestions, along with the name of the blog and the current date and time, into a Baserow database table.

## Services:

-   Google Analytics
-   Openrouter AI API
-   Baserow

## Hashtags:

#n8n #automation #googleanalytics #seo #ai

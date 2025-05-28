# Umami analytics template

## Use cases:

- **Automated SEO Analysis:** Automatically analyze website traffic data from Umami, generate insights using AI, and save the results to Baserow for tracking SEO performance.
- **Content Optimization:** Identify top-performing pages and areas for improvement based on Umami analytics and AI-powered suggestions, helping to optimize content strategy.
- **Performance Monitoring and Reporting:** Schedule daily or weekly analyses of website performance, providing a summary of key metrics and actionable recommendations in Baserow for easy access and review.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger," runs weekly on Thursdays).
2.  **Get View Stats from Umami:** Fetches website traffic data (pageviews, visitors, visits, bounces, and total time) from Umami Analytics for the past week using the Umami API.
3.  **Parse Umami Data:** Parses the raw Umami data into a simplified JSON format that is URL-encoded, focusing on extracting key metrics and their previous values.
4.  **Send data to A.I.:** Sends the extracted Umami data to an AI model (via OpenRouter) for analysis. The AI acts as an SEO expert, providing a markdown table summary of the data.
5.  **Get Page Data from Umami:** Retrieves page-specific traffic data (pageviews for each URL) from Umami for the current week.
6.  **Parse Umami data1:** Encodes the current week's page data.
7.  **Get page view data from Umami:** Retrieves page-specific traffic data from Umami for the previous week.
8.  **Parse Umami:** Encodes the previous week's page data.
9.  **Send data to A.I.1:** Sends both the current and previous week's page data to the AI model for comparison. The AI generates a markdown table summarizing the changes and provides five suggestions for improvement.
10. **Save data to Baserow:** Saves the analysis summaries, top pages, date, and blog name to a Baserow database for record-keeping and future reference.

## Services:

*   Umami Analytics
*   OpenRouter (AI Model)
*   Baserow

## Hashtags:

#n8n #automation #analytics #SEO #umami

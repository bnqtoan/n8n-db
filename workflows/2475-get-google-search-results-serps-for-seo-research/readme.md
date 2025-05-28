# Get Google Search Results (SERPs) for SEO Research

## Use cases:

- **Keyword Rank Tracking:** Monitor the position of specific keywords in Google search results to understand website ranking performance over time.
- **Competitor Analysis:** Analyze the search engine results pages (SERPs) for target keywords to identify and assess competitor websites.
- **SEO Opportunity Discovery:** Discover new long-tail keywords and content ideas by examining the "People Also Ask" section in SERPs.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Keyword Input:** Keywords are either pulled from your database using the "Connect to your own database" node (connect this to your own database) or defined as an array in the "Set Keywords to get SERPs for" node.
3.  **Split Keywords:** The "Split out Keywords" node splits the array of keywords into individual items.
4.  **ScrapingRobot API Request:** The "GET SERP" node sends a POST request to the ScrapingRobot API to retrieve Google search results for each keyword. It uses the "GoogleScraper" module.  You **must** update the HTTP Query Auth and HTTP Header Auth credentials with your own ScrapingRobot API key and token.
5.  **Parse SERP Results:** The "SERP results" node extracts relevant information from the API response, including organic search results, "People Also Ask" questions, search query, and paid ads.
6.  **Split Organic Results:** The "Separate" node splits the array of organic search results into individual result items.
7.  **Filter Empty Titles:** The "Title <> Empty" node filters out results where the title is empty
8.  **Assign Search Query:** The "Assign SearchQuery" node assigns the search query to each SERP result.
9.  **Assign Position:** The "Assign SERP #pos" node assigns a position to each organic search result based on its ranking within the SERP for each query.
10. **Output:** The "Connect to your own database2" node (connect this to your own database) is a placeholder to send the processed data (search query, title, URL, position, etc.) to your own database for analysis.

## Services:

-   **ScrapingRobot API:** Used for scraping Google search results.
-   **Your Own Database:** Used as a source for input keywords and storage of output data.

## Hashtags:

#n8n #SEO #SERP #KeywordTracking #Automation

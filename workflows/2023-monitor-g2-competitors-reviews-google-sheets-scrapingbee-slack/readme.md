# G2 Review Monitor Workflow

## Use cases:

- **Competitor Monitoring:** Track customer reviews of your competitors on G2 to understand their strengths and weaknesses, identify areas for improvement in your own product, and stay informed about market trends.
- **Reputation Management:** Get real-time notifications when new reviews are posted about your company on G2, allowing you to promptly address concerns, engage with customers, and maintain a positive brand image.
- **Sales & Marketing Intelligence:** Gather insights from customer reviews to inform sales strategies, refine marketing messages, and create targeted content that addresses specific customer needs and pain points.

## How it works:

1.  **Schedule Trigger:** The workflow starts daily at 8 am.
2.  **Get Past Reviews:** Retrieves all existing reviews from a specified Google Sheets document.
3.  **Competitor List:** A code node stores a list of competitor names (e.g., Zendesk, Intercom, Dixa).
4.  **ScrapingBee Integration:** For each competitor, it uses the ScrapingBee API to scrape the most recent reviews from their G2 page. The API Key should be added on the relative node.
5.  **HTML Extraction:** Extracts the HTML content of each review from the scraped data.
6.  **Review Iteration:** Iterates through each extracted review.
7.  **Data Structuring:** Extracts structured data from each review, including the date, review text, user profile URL, rating, and review URL.
8.  **Markdown Conversion:** Converts the review HTML content into Markdown format.
9.  **New Review Check:** Compares the extracted review URLs with the URLs of the existing reviews in Google Sheets. Only new reviews proceed to the next steps.
10. **Slack Notification:** Sends a message to a specified Slack channel with details of the new review, including rating, user profile link, review link, and review content.
11. **Google Sheets Update:** Appends the new review data to the Google Sheets document for historical tracking.

## Services:

-   **G2:** Review platform where competitor data is scraped from.
-   **ScrapingBee:** Web scraping API used to extract data from G2 pages.
-   **Google Sheets:** Used to store and track historical review data.
-   **Slack:** Used to send real-time notifications about new reviews.

## Hashtags:

#n8n #automation #webscraping #competitoranalysis #reputationmanagement

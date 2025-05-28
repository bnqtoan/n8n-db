# RSS Feed News Processing and Distribution Workflow

## Use cases:

- **Content Aggregation and Curation:** Automatically gather the latest news from multiple AI/Tech RSS feeds and compile them into a single, filtered update for content curators or researchers.
- **Team News Updates:** Deliver a daily or weekly digest of relevant news articles to a team via Trello, ensuring everyone stays informed about important industry trends.
- **Competitive Intelligence:** Monitor competitor blogs or news sources via RSS, filter out old content, and receive summarized updates to track their activities and announcements.

## How it works:

1.  **Schedule Trigger:** The workflow starts automatically based on a defined schedule (e.g., weekly on Mondays at 7 AM).
2.  **RSS Feed Reading:** It fetches the latest articles from three RSS feeds: Testing Catalog, Marktechpost and Artificial Intelligence Blog.
3.  **Merging Data:** All the data from all three RSS feeds are merged into one single flow of items.
4.  **Transforming Date:** Standardizes the date format.
5.  **Filtering by Date:** Filters out articles older than 7 days, ensuring only recent news is processed.
6.  **Sorting by Date:** Sorts the remaining articles by date in descending order, so the newest articles appear first.
7.  **Limiting the Number of Articles:** Limits the number of articles to the latest 10 to prevent overwhelming the Trello board.
8.  **Transforming to Markdown:** Converts the news articles into a Markdown format for readability. Includes the article title, a link to the original source, and a content snippet.
9.  **Publishing a Trello Comment:** Posts the formatted news summary as a comment on a specific Trello card.
10. **Sending Revision Email:** Sends an email notification to a specified email address to review the published Trello comment.

## Services:

-   RSS Feeds (Testing Catalog, Marktechpost, Artificial Intelligence Blog)
-   Trello
-   Gmail

## Hashtags:

#n8n #automation #RSS #Trello #Gmail #NewsAggregation

# Reddit n8n Monitor

## Use cases:

- **Brand Monitoring:** Track mentions of "n8n" on Reddit to understand community sentiment and identify potential advocates or detractors.
- **Content Discovery:** Find relevant discussions and content about n8n to stay updated on community needs and trends.
- **Community Engagement:** Automatically identify and engage in relevant conversations about n8n on Reddit, providing support or sharing valuable insights.

## How it works:

1.  **Trigger:** The workflow starts when you manually click "Execute Workflow".
2.  **Reddit Search:** It searches Reddit for posts containing the keyword "n8n" across all subreddits, sorted by the newest posts.
3.  **Filtering:** The workflow filters these posts based on several conditions:
    *   The post has at least 5 upvotes.
    *   The post contains original text (is not empty).
    *   The post was created within the last 7 days.
4.  **Data Extraction:** Extracts relevant information from the filtered Reddit posts, including:
    *   Number of upvotes.
    *   Subreddit size (number of subscribers).
    *   A trimmed version of the post's text (first 500 characters).
    *   Subreddit name.
    *   Post creation date.
    *   Post URL.
5.  **Classification:** Determines whether the post is actually about n8n using OpenAI.
6.  **Summarization:** The workflow uses OpenAI to generate a concise summary (one sentence) of the Reddit post.
7.  **Final data selection:** Selects the final data with the final formatting and includes the summary.

## Services:

*   Reddit API
*   OpenAI API

## Hashtags:

#n8n #automation #Reddit #OpenAI #CommunityMonitoring

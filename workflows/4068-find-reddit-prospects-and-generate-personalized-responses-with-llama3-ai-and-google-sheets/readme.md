# Reddit Content Moderation and Commenting Workflow

## Use cases:

*   **Automated Content Moderation:** Automatically identifies and flags relevant Reddit posts in specific subreddits based on predefined criteria, reducing the manual effort required for moderation.
*   **Targeted Engagement:** Automatically posts comments on relevant Reddit posts, increasing engagement and driving traffic to a specific website or community.
*   **Community Building:** By identifying trending topics and engaging in relevant discussions, this workflow can help build a community around a specific niche or interest.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger, simulating a real-time activation.
2.  **Fetch Reddit Posts:** Retrieves new posts from a specified Reddit subreddit using the "Get Reddit Posts" node.
3.  **Process Post Fields:** The "Process Post Fields" node likely formats the data from the Reddit posts into a standardized format for easier handling.
4.  **Get Existing Posts:** Retrieves existing posts from a Google Sheets spreadsheet using the "Get Existing Posts1" node. This is likely used to avoid duplicate processing or commenting.
5.  **Filter New Posts:** The "Filter New Posts" node compares the newly fetched posts with the existing posts (from Google Sheets) to identify only new posts that haven't been processed yet.
6.  **Process One Post at a Time:** Splits the new posts into individual items to be processed sequentially. This will loop through posts individually.
7.  **AI Relevance Analysis:** Uses a Langchain Agent to analyze the content of each post and determine its relevance based on some criteria.
8.  **Parse AI Response:** Parses the response from the AI model (likely a JSON or text response) to extract the relevance score or classification.
9.  **Is Post Relevant?**: A condition to check if the post is relevant based on relevance score returned by AI model.
10. **Log Relevant/Irrelevant Posts:** Based on the result of the relevancy check, the workflow logs relevant posts in the "Log Relevant Post" Google Sheets and irrelevant posts in the "Log Irrelevant Post" Google Sheets.
11. **Post Reddit Comment:** If the post is deemed relevant, the workflow posts a comment on the Reddit post using the "Post Reddit Comment" node.

## Services:

*   Reddit API
*   Google Sheets
*   Ollama (AI model for language processing)
*   Langchain (Framework for developing applications powered by language models)

## Hashtags:

#n8n #reddit #automation #contentmoderation #communityengagement

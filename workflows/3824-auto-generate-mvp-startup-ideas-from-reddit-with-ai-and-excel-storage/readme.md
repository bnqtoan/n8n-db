# Reddit MVP Generator

## Use cases:

-   **Identify trending product ideas:** Analyze Reddit trends to discover potential MVP (Minimum Viable Product) ideas based on community discussions.
-   **Gather user feedback on existing products:** Collect comments from Reddit posts related to specific products or services to extract user sentiment and suggestions for improvement.
-   **Generate concise MVP descriptions:** Automatically generate MVP descriptions, target audience, and features based on Reddit data using AI.

## How it works:

1.  **Trigger:** The workflow starts with a "Select a subreddit" trigger node that initiates the workflow to start.
2.  **Fetch Trending Posts:** Get trending posts from Reddit using the "Get Trending Posts" node from a selected subreddit.
3.  **Fetch previously processed Reddit Post Slugs:** The workflow check againts a list of used posts from an Excel file.
4.  **Data transformation for new and old slugs**: The workflow then extract the ID from the slugs and prepares a list of all possible slugs for filtering later in the process.
5.  **Filter used posts:** Filter out posts that have already been processed to avoid duplicates.
6.  **Fetch comments** Uses the Reddit API to get the comments for a list of Reddit posts to then be used by the AI model.
7.  **AI-Powered MVP Generation:** An LLM Chain node, powered by OpenRouter, analyzes post content and comments to generate MVP (Minimum Viable Product) data.
8.  **Spreadsheet Integration:** Finally, the generated MVP data is appended to an Excel sheet.

## Services:

-   Reddit API
-   OpenRouter
-   Microsoft Excel

## Hashtags:

#n8n #automation #reddit #mvp #ai #langchain

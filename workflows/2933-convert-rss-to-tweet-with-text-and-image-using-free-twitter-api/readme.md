# My Workflow

## Use cases:

- **Automated News Sharing on X (Twitter):** Automatically fetches the latest article from an RSS feed, extracts key information, summarizes it, and posts it to X with a relevant image.
- **Content Curation and Social Media Promotion:** Curate articles from specific RSS feeds, summarize them using AI, and create engaging tweets to drive traffic to the original content.
- **AI-Powered Social Media Management:** Utilizes AI to generate concise summaries and relevant images for articles, streamlining the process of sharing valuable content on X.

## How it works:

1.  **Get the latest article from the feed:** The workflow starts by monitoring an RSS feed for new articles using the `RSS Feed Read Trigger` node.
2.  **Fetches the article’s HTML content:** Retrieves the HTML content of the latest article using the `HTTP Request` node.
3.  **Extracts the main image:** Extracts the main image URL from the fetched HTML content using the `HTML` node.
4.  **Summarize the Website API Perplexity:** Extracts the article summary using the `HTTP Request` node, calling the Perplexity API.
5.  **AI Agent:** The `AI Agent` node orchestrates interactions with a language model to create a social media post from provided data.
6.  **OpenRouter Chat Model:** `OpenRouter Chat Model` node provide Language Models.
7.  **Verify tweet constraints:** The `IF` node verifies if the tweet constraints are valid.
8.  **Downloads image:** Downloads the extracted image using the `HTTP Request` node.
9.  **Upload image to X server with Twitter API v1:** Uploads the downloaded image to X using the Twitter API v1 via the `HTTP Request` node.
10. **X:** Finally, the workflow posts the summarized text with the uploaded image to X (Twitter) using the `Twitter` node.

## Services:

-   **X (Twitter):** Used for posting the summarized article and image.
-   **Perplexity AI API:** Used for summarizing the content of the fetched article.
-   **OpenRouter Chat Model:** Used to provide language models.

## Hashtags:

#n8n #automation #RSS #Twitter #AI #SocialMedia

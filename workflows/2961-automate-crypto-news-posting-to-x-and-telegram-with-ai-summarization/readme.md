# X/Twitter Crypto News AI-Influencer

## Use cases:

*   **Automated Crypto News Dissemination:** This workflow can automatically fetch, summarize, and post crypto news on X (formerly Twitter) and send to telegram channels, saving time and effort for crypto influencers.
*   **Content Curation for Social Media:** It can curate relevant content from various sources and present it in a concise and engaging manner for social media followers.
*   **Consistent Social Media Presence:** By scheduling regular posts, it helps maintain a consistent presence on social media platforms, improving engagement and reach.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Set the posting interval" node, which uses a schedule trigger to initiate the workflow at predefined intervals.
2.  **Fetch Crypto News:** The "Get Crypto news from CryptoPanic" node fetches crypto news from the CryptoPanic API using an HTTP Request.
3.  **Extract Title and URL:** The "Extract title and URL" node takes the data from CryptoPanic and extracts the news title and URL using a Code node.
4.  **Visit News Page:** The "Visit the News Page" node uses the extracted URL to visit the news page using an HTTP Request.
5.  **Content Extraction with GPT:** The "ContentExtraction GPT3.5" node uses the Langchain OpenAI node to extract relevant content from the news page.
6.  **Merge News:** The "Merge all the news together" node aggregates all extracted content.
7.  **Summarize News with GPT:** The "Summary news GPT" node utilizes the Langchain OpenAI node to create a concise summary of the merged news.
8.  **Post to X/Twitter and Telegram:** The "Automatically post to X" and "Send a news report to Telegram" nodes post the summarized news on X (formerly Twitter) using the Twitter node and sends the news report to a telegram channel, respectively.
9.  **No Operation:** The "No Operation, do nothing" node ends the workflow.

## Services:

*   **CryptoPanic API:** Fetches cryptocurrency news.
*   **X/Twitter API:** Posts tweets.
*   **Telegram API:** Sends messages to Telegram channels.
*   **OpenAI API:** Used for content extraction and summarization.

## Hashtags:

#n8n #automation #crypto #socialmedia #ai

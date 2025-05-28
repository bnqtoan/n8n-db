# AI-Powered Information Monitoring with OpenAI, Google Sheets, Jina AI and Slack

## Use cases:

- **Competitive Intelligence:** Monitor industry news and competitor mentions to stay ahead of market trends and identify potential threats or opportunities.
- **Research and Development:** Track the latest research papers and scientific publications in a specific field to inform R&D efforts and identify potential breakthroughs.
- **Brand Monitoring:** Monitor news articles and blog posts for mentions of a company or product to gauge public perception and identify potential PR issues.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a predefined schedule (default: every 15 minutes).
2.  **Google Sheets - Get Article Monitored Database & RSS Feed URLs Followed:** It retrieves a list of already monitored articles and RSS feed URLs from two different sheets within a specified Google Sheets document.
3.  **Set Field - existing\_url:** Sets the "existing\_url" field based on data from Google Sheets, handling potential errors if the sheet is initially empty.
4.  **RSS Read:** Fetches the latest articles from the RSS feeds retrieved from Google Sheets.
5.  **Code Node:** Filters out articles that have already been summarized by comparing URLs against the Google Sheets database.
6.  **IF Node:** Checks if new articles were found. If no new articles are available, the workflow stops.
7.  **Relevance Classification for Topic Monitoring:** Uses OpenAI to classify the relevance of each new article based on its title and content snippet.
8.  **Jina AI - Read URL:** Extracts the full content of relevant articles using the Jina AI API to convert webpage content into Markdown text for LLM processing.
9.  **OpenAI Chat Model:** Uses OpenAI to summarize the article content and format it as a Slack-compatible message.
10. **Slack:** Posts the summarized article to a specified Slack channel.
11. **Set Fields - Relevant/Not relevant articles:** Prepares the article's metadata (URL, summary, website, fetch date, publish date, summarized: YES/NO) to be saved into Google Sheets.
12. **Google Sheets - Add Relevant/Not relevant article:** Appends the article metadata to the "article\_database" sheet in Google Sheets, tracking processed articles.

## Services:

-   **Google Sheets:** Used to store RSS feed URLs and a database of already summarized articles.
-   **OpenAI:** Used for article relevance classification and content summarization.
-   **Jina AI:** Used to extract full article content from URLs.
-   **Slack:** Used to post article summaries to a specified channel.

## Hashtags:

#n8n #automation #AISummarization #topicmonitoring #Slack

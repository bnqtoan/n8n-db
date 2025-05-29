# Daily AI News Translation & Summary with GPT-4 and Telegram Delivery

## Use cases:

- **Daily AI News Digest:** Delivers a translated and summarized daily digest of AI-related news to a Telegram channel or group, keeping members informed about the latest developments in the field.
- **Personalized News Feed:** Allows individuals to receive a curated selection of AI news tailored to their preferred language and delivered directly to their Telegram account.
- **Content Creation Inspiration:** Provides writers, researchers, or developers with a daily dose of AI news, helping them stay up-to-date and generate fresh ideas for their projects.

## How it works:

The workflow automates the process of fetching, translating, and summarizing AI news from multiple sources and delivering it to a Telegram channel. Here's a breakdown:

1.  **Scheduled Trigger:** The workflow starts at 8 am daily using the "Trigger at 8am daily" node.
2.  **Fetch News:** The workflow fetches AI-related news articles from two sources: GNews and NewsAPI, using the "Fetch GNews articles" and "Fetch NewsAPI articles" nodes. These nodes use HTTP requests to retrieve data from the respective APIs.
3.  **Data Preparation:** The "GNews: Map to articles" and "NewsAPI: Map to articles" nodes extract the 'articles' from the JSON response.
4.  **Merge Articles:** The "Merge GNews & NewsAPI" node combines the articles from both sources into a single list.
5.  **AI Summarization & Translation:** The "AI summarizer & translator" node uses the GPT-4.1 Model via the "GPT-4.1 Model" node to select the 15 most relevant articles, translate them to Traditional Chinese (excluding technical terms), and create a concise summary including the article URLs and current date.
6.  **Telegram Delivery:** Finally, the "Send summary to Telegram" node sends the generated summary to a specified Telegram chat using the Telegram Bot API.

## Services:

-   **GNews API:** Used to fetch AI-related news articles.
-   **NewsAPI:** Used to fetch AI-related news articles.
-   **OpenAI API (GPT-4.1 Model):** Used for summarizing and translating the news articles.
-   **Telegram Bot API:** Used to send the summary to a Telegram chat.

## Hashtags:

#n8n #automation #AINews #GPT4 #Telegram

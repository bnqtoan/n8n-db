# AI Daily News

## Use cases:

- **Daily AI News Digest:** Automatically gathers the latest AI-related news from multiple sources and sends a summarized version to a Telegram channel at a specific time each day.
- **AI Research Monitoring:** Track AI advancements by collecting news articles, summarizing them, and sending a summary to a Telegram group for discussion among researchers.
- **Personalized AI News Feed:** Customize news sources to receive an AI-generated news update focused on the topics of interest.

## How it works:

1.  **Trigger:** The workflow starts with a "Schedule Trigger" node that activates the workflow at 6:00 AM every day.
2.  **Date Calculation:** A "Substract Current date by one" node subtracts one day from the current date.
3.  **News Sources:**
    *   "News Source: NewsAPI" and "News Source: GNewsAPI" nodes fetch news articles from the NewsAPI and GNewsAPI, respectively, using the calculated date.
4.  **Extract News:** The "ExtractAllNews" and "ExtractAllNews1" nodes process the responses from the news APIs, extracting the relevant news.
5.  **Merge:** The "Merge" node combines the news from both sources into a single data stream.
6.  **AI Agent:** This uses the LLM "Google Gemini Chat Model" and is responsible for generating the news summery.
7.  **Telegram:** Finally, the "Telegram" node sends the news summary as a message to a specified Telegram chat.

## Services:

-   NewsAPI
-   GNewsAPI
-   Telegram
-   Google Gemini Chat Model

## Hashtags:

#n8n #automation #AINews #Telegram #NewsAggregation

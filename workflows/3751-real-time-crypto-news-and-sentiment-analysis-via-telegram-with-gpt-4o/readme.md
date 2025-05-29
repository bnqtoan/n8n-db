# Crypto News & Sentiment

## Use cases:

- **Real-time Cryptocurrency News Aggregation and Sentiment Analysis:** Users can receive up-to-date news and sentiment analysis on specific cryptocurrencies or blockchain companies directly in Telegram, helping them stay informed about market trends.
- **Automated Monitoring of Crypto Portfolio:** Investors can set up the workflow to automatically gather news related to the cryptocurrencies in their portfolio and receive a summarized sentiment analysis, enabling quicker decision-making.
- **Instant News Briefings for Traders:** Crypto traders can use the workflow to get a quick summary of the latest news and market sentiment for specific coins before making trades, enhancing their trading strategy.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message via Telegram to the bot.
2.  **Add Session ID:** Stores the user's Telegram chat ID as a session ID for managing the conversation.
3.  **Extract Keyword from User Input (OpenAI Chat Model & Agent):** An OpenAI Chat Model is used to extract a single-word keyword from the user's message. This keyword represents the cryptocurrency or company the user is interested in.
4.  **Set Query:** Saves the extracted keyword and session ID for later use.
5.  **Fetch News Articles (RSS Feeds):** The workflow fetches the latest news articles from multiple cryptocurrency news sources (Cointelegraph, Bitcoinmagazine, Coindesk, Bitcoinist, Newsbtc, Cryptopotato, 99bitcoins, Cryptobriefing, Crypto.news) using RSS feeds.
6.  **Merge Articles:** Combines all fetched news articles into a single list.
7.  **Filter Articles:** Filters the merged list of articles to include only those containing the extracted keyword in their title, content snippet, or full content.
8.  **Build Prompt:** Create prompt to summarize current news and market sentiment for keyword based on the filtered articles.
9.  **Summarize News & Sentiment (GPT-4o):** Uses OpenAI's GPT-4o model to summarize the filtered news articles and analyze market sentiment related to the keyword.
10. **Prepare Telegram Message:** Formats the AI-generated summary and sentiment analysis into a message suitable for sending via Telegram.
11. **Send Response:** Sends the formatted message containing the news summary, sentiment analysis, and links to the relevant articles back to the user via Telegram.

## Services:

-   **Telegram:** Used as the primary interface for user input and output.
-   **OpenAI:** Utilized for keyword extraction and sentiment analysis using the GPT-4o model.
-   **Multiple Crypto News RSS Feeds:** Providing the source of news articles.

## Hashtags:

#n8n #cryptocurrency #sentimentanalysis #automation #telegrambot

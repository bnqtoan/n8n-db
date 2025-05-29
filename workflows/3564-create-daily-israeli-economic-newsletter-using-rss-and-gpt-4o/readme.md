# AI-Powered Daily News Digest for Executives

## Use cases:

- **Daily Briefing for Executives:** Automatically compiles and sends a concise summary of the most relevant news articles to a senior executive, saving them time and ensuring they stay informed.
- **Personalized News Curation:** Tailors news selection based on specific criteria (e.g., economic, technological, strategic) and individual preferences.
- **Competitive Intelligence:** Monitors news sources and identifies key developments in the market, providing a strategic advantage.

## How it works:

1.  **Data Collection:** The workflow starts with a schedule trigger that runs daily. It fetches news articles from two RSS feeds: Calcalist and Mako.
2.  **Data Processing:** Each article is processed to extract relevant information, clean the title, and standardize the publication date. The articles from both sources are then merged into a single list, duplicates are removed, and the list is sorted by publication date, keeping the 50 most recent articles.
3.  **AI Selection:** The cleaned list of articles is fed into a GPT-4o node. The AI selects the top 5 most relevant articles based on predefined criteria for a senior executive. These criteria include relevance to economic, technological, and strategic topics, with at least one article related to current affairs and security.
4.  **Email Generation:**
    -   Extracts the full HTML content from the url of each article.
    -   Cleans the HTML text and creates a short summary of the article.
    -   Aggregate all of the data to be used in the HTML email.
    -   Generates a formatted HTML email containing the selected articles, their summaries, and links to the full articles.
    -   The current date is added to the email subject.
5.  **Delivery:** Sends the generated HTML email to the specified recipient (Elay Guez) via SMTP.

## Services:

-   **Calcalist RSS Feed:** Provides news articles from Calcalist, an Israeli financial newspaper.
-   **Mako RSS Feed:** Provides news articles from Mako, an Israeli news website.
-   **OpenAI (GPT-4o):** Used for selecting the most relevant articles based on specified criteria and generating summaries.
-   **SMTP:** Used for sending the generated email.

## Hashtags:

#n8n #automation #newsAggregator #AISummary #executiveBriefing

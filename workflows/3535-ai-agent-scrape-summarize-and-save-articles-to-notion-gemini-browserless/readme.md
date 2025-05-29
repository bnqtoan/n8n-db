# Research AI Agent: Scrape and Summarize Articles and save to Notion (Gemini, Browserless)

## Use cases:

-   **Automated Research:** Automatically scrape, summarize, and save articles to a Notion database for research purposes.
-   **Content Curation:** Curate content from various websites and create a structured knowledge base in Notion.
-   **News Monitoring:** Monitor specific websites for relevant articles and receive notifications about new content.

## How it works:

1.  **Trigger:** The workflow is initiated when a chat message is received via the "When chat message received" trigger node.
2.  **AI Agent:** The "Save Article To Notion" node, configured as a Langchain Agent, orchestrates the scraping, summarization, and saving process.
3.  **Web Scraping:** The agent uses the "website\_scraper" tool (an HTTP Request node configured for Browserless) to scrape content from the provided URL.
4.  **Summarization and Data Extraction:** The agent uses the "Gemini 2.5 PRO" node to summarize the scraped content and extract relevant information such as the title, description, tags, publication date, key concepts, code snippets, and conclusions.
5.  **Notion Integration:** The agent uses the "save\_to\_notion" tool to save the extracted information into a Notion database, formatting the content according to predefined blocks and properties.
6.  **Discord Notification:** Finally, the agent uses the "discord\_notification" tool to send a message to a Discord channel, notifying users that the research is available and providing a link to the Notion page.

## Services:

*   **Google Gemini API:** Used for content summarization and information extraction.
*   **Browserless:** Used for web scraping.
*   **Notion:** Used as the knowledge base for storing articles.
*   **Discord:** Used for notifications.

## Hashtags:

#n8n #automation #workflow #AI #Notion #WebScraping #Gemini #Browserless #Discord

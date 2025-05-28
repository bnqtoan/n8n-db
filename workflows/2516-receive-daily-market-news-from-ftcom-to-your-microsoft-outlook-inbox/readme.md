# Financial News Summarization Workflow

## Use cases:

- **Daily News Briefing:** Automatically send a daily summary of top financial news headlines to your email.
- **Competitor Monitoring:**  Track specific topics or companies in the financial news and receive summarized updates.
- **Trend Analysis:** Quickly identify emerging trends in the financial markets based on aggregated news content.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a predefined schedule (e.g., daily at 7 AM).
2.  **Get financial news online:**  An HTTP Request node fetches content from the specified URL (https://www.ft.com/).
3.  **Extract specific content:** The HTML node extracts relevant information from the fetched content, such as headlines, editor's picks, and spotlight articles.
4.  **Gather the elements:** The Set node prepares the extracted data for further processing.
5.  **AI Agent:** The Langchain Agent node, powered by an AI model, processes the information.
6. **Google Gemini Chat Model:** The Google Gemini Chat Model (via Langchain) provides the language processing capabilities for the AI Agent.
7.  **Send the summary by e-mail:** Finally, the Microsoft Outlook node sends an email containing the summarized financial news.

## Services:

-   FT.com: Financial Times website.
-   Google Gemini: Google's AI model for language processing.
-   Microsoft Outlook: Email service for sending the summary.

## Hashtags:

#n8n #automation #financialnews #AISummary #workflow

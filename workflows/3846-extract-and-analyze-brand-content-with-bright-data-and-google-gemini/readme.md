# Brand Content Extract, Summarize & Sentiment Analysis with Bright Data

## Use cases:

- **Brand Monitoring:** Automatically extract content from websites, summarize it, and analyze the sentiment to track brand perception and identify potential issues.
- **Competitor Analysis:** Scrape competitor websites for product information, marketing messages, and customer reviews, then summarize and analyze the sentiment to gain insights into their strategies and customer satisfaction.
- **Product Feedback Analysis:** Gather customer reviews from e-commerce sites, summarize the key points, and analyze the sentiment to identify areas for product improvement and address customer concerns.

## How it works:

1.  The workflow starts with a manual trigger ("When clicking ‘Test workflow’").
2.  The "Set URL and Bright Data Zone" node sets the target URL and the Bright Data zone for web scraping.
3.  The "Perform Bright Data Web Request" node uses Bright Data's Web Unlocker to extract content from the specified URL in Markdown format.
4.  The workflow then branches into three parallel processes:
    *   **Summarization:** The extracted content is passed to the "Summarize Content" node, which uses a Langchain summarization chain (prompted by "Google Gemini Chat Model for Summary") to create a concise summary. The summary is then saved to a JSON file. A webhook notification is also sent containing the summary.
    *   **Textual Data Extraction:** The extracted content is converted from Markdown to plain text using the "Markdown to Textual Data Extractor" node, supported by "Google Gemini Chat Model for Data Extract" node. The cleaned text is saved to a JSON file, and a webhook notification is sent.
    *   **Sentiment Analysis:** The original Markdown content is analyzed for sentiment using the "AI Sentiment Analyzer with the structured response" node, which leverages a Langchain information extraction model. The "Google Gemini Chat Model for Sentiment Analyzer" node is used for sentiment analysis, providing structured output with sentiment, confidence score, and a sentence explaining the sentiment. The sentiment analysis result is saved to a JSON file and a webhook notification is triggered.
5.  Finally, the extracted text, summary and sentiment analysis data are written to separate JSON files on disk using "Write the textual file to disk", "Write the summary file to disk", and "Write the AI Sentiment analysis file to disk" respectively. Also, webhook notifications are sent throughout the process to a specified URL.

## Services:

*   **Bright Data:** Used for web scraping and content extraction.
*   **Google Gemini:** Used for generate summary and sentiment analysis.
*   **Webhook:** Used for data transformation.

## Hashtags:

#n8n #automation #webscraping #sentimentanalysis #AI

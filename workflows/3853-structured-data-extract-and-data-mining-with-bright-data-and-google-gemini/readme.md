# Structured Data Extract, Data Mining with Bright Data & Google Gemini

## Use cases:

1.  **Market Trend Analysis:** Automatically extract and analyze trends from news articles or websites, categorizing them by location and industry to provide insights into emerging markets or consumer behaviors.
2.  **Content Summarization and Topic Extraction:** Extract the main topics and generate summaries from articles. This is useful for quickly understanding the content of multiple articles.
3.  **Custom Sentiment Analysis for Brand Monitoring:** Analyze online content (e.g., reviews, social media posts) to extract sentiment and key topics related to a specific brand or product, providing structured feedback for improvement.

## How it works:

1.  **Trigger:** The workflow starts when manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Set URL and Bright Data Zone:** Sets the target URL and Bright Data Zone for web scraping, defining the website to extract data from and the Bright Data proxy zone to use.
3.  **Perform Bright Data Web Request:** Uses the Bright Data Web Unlocker to retrieve the content of the specified URL in Markdown format, handling potential anti-bot measures.
4.  **Markdown to Textual Data Extractor:** Converts the markdown data into plain text. It uses the `Langchain` node with Google Gemini model to extract the plain text.
5.  **Trends by location and category with the structured response:** Extracts emerging trends from the textual data extracted in the previous steps, categories them by location and category, and outputs structured information like the trend, its score, summary, and related keywords.
6.  **Topic Extractor with the structured response:** Extracts the main topics from the textual data extracted, scores them, adds summaries and keywords and outputs them as a structured response.
7. **Google Gemini Chat Model for Data Extract, Google Gemini Chat Model, Google Gemini Chat Model for Sentiment Analyzer**: Uses the Google Gemini Chat Model to perform the analysis.
8.  **Initiate Webhook Notifications:** Sends the extracted data to a specified webhook URL (using httpRequest), in order to notify the trends by location and category, text and the summary outputted from the AI sentiment analyzer.
9.  **Create a binary data:** Converts structured outputs into a binary file.
10. **Write the files to disk:** Writes the binary data into a file to disk.

## Services:

*   Bright Data: For web scraping and bypassing anti-bot measures.
*   Google Gemini API (via Langchain): For AI-powered topic extraction and sentiment analysis.
*   Webhook.site: For testing and receiving data via webhooks.

## Hashtags:

#n8n #automation #webscraping #datamining #AI #Gemini #BrightData #structureddata
# Google Trend Data Extract, Summarization with Bright Data & Google Gemini

## Use cases:

1.  **Market Trend Analysis:** Automatically extract trending topics from Google Trends, summarize them, and receive daily or weekly email updates on the latest trends in specific industries.
2.  **Content Creation:** Generate content ideas by identifying trending topics and creating summaries that can be used as a basis for blog posts, articles, or social media content.
3.  **Competitive Intelligence:** Monitor competitor activity by extracting and summarizing trends related to their products or services, providing insights into their marketing strategies and customer interests.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Set URL and Bright Data Zone:** Sets the target URL (Google Trends) and Bright Data Zone for web unlocking.
3.  **Perform Bright Data Web Request:** Uses Bright Data's Web Unlocker to bypass bot detection and retrieve the Google Trends page content in markdown format.
4.  **Markdown to Textual Data Extractor:** Converts the markdown content to textual data using LLM Chain, removing any links, scripts, or CSS.
5.  **Structured Data Extractor:** Extracts structured data (topics and descriptions) from the textual data using Information Extraction with Google Gemini.
6.  **Summarize Google Trends:** Summarizes the extracted Google Trends data using Summarization Chain.
7.  **Notifications:** Sends the extracted textual data, structured data, and summary to a designated Webhook URL and Sends the summary to a Gmail address.
8.  **Save to Disk:** Save the extracted structured data to a JSON file on disk.

## Services:

*   Bright Data
*   Google Gemini
*   Gmail
*   Webhook.site

## Hashtags:

#n8n #automation #webscraping #googletrends #llm #brightdata #gemini #summarization

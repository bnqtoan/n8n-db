# Extract & Summarize Indeed Company Info with Bright Data and Google Gemini

## Use cases:

- **Company Research and Analysis:** Automatically extract and summarize information about companies from Indeed for market research, competitive analysis, or investment decisions.
- **HR and Recruitment Automation:** Streamline the process of gathering company information for recruitment purposes, such as preparing company profiles for candidates or identifying potential employers.
- **Content Creation for Job Seekers:** Generate summaries of company profiles on Indeed to provide valuable insights to job seekers, helping them make informed decisions about their career paths.

## How it works:

This workflow automates the extraction and summarization of company information from Indeed, leveraging Bright Data for web scraping and Google Gemini for AI-powered summarization.

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" trigger node.
2.  **Set Search Query:** The "Set Indeed Search Query" node sets the Indeed search query (e.g., "Starbucks") and a Bright Data zone for web scraping.
3.  **Perform Indeed Web Request:** The "Perform Indeed Web Request" node sends a request to Bright Data to scrape the Indeed company page based on the search query.  It uses the Bright Data Web Unlocker to bypass anti-scraping measures.
4.  **Markdown to Textual Data Extractor:** The "Markdown to Textual Data Extractor" node uses a Langchain LLM Chain to convert the scraped Markdown data into a textual format suitable for further processing by AI models.
5.  **Indeed Summarization:** The "Indeed Summarization" node employs a Langchain Summarization Chain and Google Gemini to generate a concise summary of the extracted company information.
6.  **Indeed Expert AI Agent:** The "Indeed Expert AI Agent" formats the search result and pushes it to the Webhook via HTTP Request
7.  **Google Gemini Chat Model, Google Gemini Chat Model For Summarization, Google Gemini Chat Model for AI Agent:** these 3 nodes perform their task using the model: models/gemini-2.0-flash-exp
8.  **Convert Markdown to HTML:** The scraped data is also converted to HTML using the "Convert Markdown to HTML" node.
9.  **Webhook Notifications:** The workflow sends the summary, and the HTML conversion to predefined webhook URLs using HTTP Request nodes (e.g., "Initiate a Webhook Notification for Markdown to HTML Response", "Initiate a Webhook Notification for Summarization").

## Services:

-   **Indeed:** For company information and web scraping targets.
-   **Bright Data:** For web scraping and unlocking capabilities.
-   **Google Gemini (PaLM) API:** For AI-powered text summarization and data extraction.
-   **Webhook.site:** For receiving webhook notifications with summarized data.

## Hashtags:

#n8n #automation #webscraping #AI #companyresearch

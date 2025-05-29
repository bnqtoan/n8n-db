# Crunchbase B2B Lead Discovery Pipeline with Bright Data & OpenAI

## Use Cases

1.  **Automated Lead Generation:** Automatically extract and structure data from Crunchbase profiles of target companies to identify potential leads for sales and marketing teams.
2.  **Market Research:** Gather and summarize key information about companies in a specific industry or region for market analysis and competitive intelligence.
3.  **Data Enrichment:** Enhance existing CRM or database records with up-to-date information from Crunchbase, such as employee count, funding history, and contact details.

## How it Works

1.  **Trigger:** The workflow starts when you manually click 'Test workflow'.
2.  **Set URL and Bright Data Zone:** Defines the target Crunchbase URL and the Bright Data zone for web unlocking.
3.  **Perform Bright Data Web Request:** Uses Bright Data's Web Unlocker to bypass anti-bot measures and retrieve the Crunchbase page content in Markdown format.
4.  **Markdown to Textual Data Extractor:** Converts the Markdown content into plain textual data using an OpenAI LLM to remove scripts, links and CSS.
5.  **Summarize the content:** Uses Langchain to summarize the textual data using OpenAI.
6.  **Structured Data Extractor:** Uses Langchain to extract structured information from the textual content using OpenAI based on the provided JSON schema.
7.  **Structured Output Parser:** Parse the structured output based on the json schema example.
8.  **Google Sheets:** Appends the extracted structured data to a specified Google Sheets document.
9.  **Create Binary Data:** Create binary data with the summary or structured data for disk writing.
10. **Write to Disk:** Writes the extracted summary or structured data to JSON files on disk.
11. **Webhook Notification:** Sends the extracted structured data summary to a specified webhook URL.

## Services

*   **Crunchbase:** For company data and lead discovery.
*   **Bright Data:** For web unlocking and data extraction.
*   **OpenAI:** For text summarization, structured data extraction.
*   **Google Sheets:** For storing and managing extracted data.
*   **Webhook.site:** For receiving the extracted structured data summary via a webhook.

## Hashtags

#n8n #automation #leadgeneration #webscraping #datascience

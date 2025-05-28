# Open Deep Research - AI-Powered Autonomous Research Workflow

## Use Cases:

- **Market Research:** Automatically gather and analyze data on a specific market segment to identify trends, competitor analysis, and potential opportunities.
- **Scientific Literature Review:** Conduct comprehensive literature reviews on a specific research topic, extracting key findings and relevant information from various sources.
- **Due Diligence:** Automate the process of gathering and summarizing information on a company or individual for due diligence purposes.

## How it works:

1.  The workflow starts with a "**Chat Message Trigger**" node, which receives a user's query via webhook.
2.  The "**Generate Search Queries using LLM**" node uses a Large Language Model (LLM) via OpenRouter to generate multiple precise search queries based on the user's input.
3.  The "**Parse and Chunk JSON Data**" node receives a JSON string from the previous node, removes any Markdown code blocks, parses the JSON into an array, and splits the array into four chunks.
4.  The "**Split Data for SerpAPI Batching**" node splits the data into individual items, allowing for batch processing of the search queries.
5.  The "**Perform SerpAPI Search Request**" node then performs a search request to SerpAPI with specific query and API Key.
6.  The "**Format SerpAPI Organic Results**" node extracts and formats the organic search results from SerpAPI, extracting the title, URL, and source.
7.  The "**Split Data for Jina AI Batching**" node splits the data into individual items, allowing for batch processing of the search results.
8.  The "**Perform Jina AI Analysis Request**" node performs a request to Jina AI with a URL.
9.  The "**Extract Relevant Context via LLM**" node extracts relevant context from the search results using another LLM, utilizing memory buffers to maintain context.
10. The "**Generate Comprehensive Research Report**" node compiles a comprehensive research report based on the extracted contexts, memory buffers, and the original user query.
11. The "**LLM Response Provider (OpenRouter)**" node is used by multiple LLM nodes to send the information and get a comprehensive response with the requested parameters.
12. The "**Fetch Wikipedia Information**" node is used to get data from wikipedia to improve the report.

## Services:

*   **SerpAPI:** Used for automated web scraping of search engine results pages (SERPs).
*   **OpenRouter:** Used for accesing different LLMs.
*   **Jina AI:** Used for AI analysis.
*   **Wikipedia:** Used as a source of information for the research report.

## Hashtags:

\#n8n \#automation \#workflow \#research \#AI

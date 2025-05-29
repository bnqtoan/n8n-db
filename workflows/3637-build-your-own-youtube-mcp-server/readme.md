# Apify Youtube MCP Server

## Use cases:

- **YouTube Research Assistant:**  Allows users to easily search YouTube for videos on a specific topic and retrieve their transcripts for in-depth analysis, summarization, or content extraction.
- **Competitive Analysis:** Enables businesses to monitor their competitors' YouTube channels, track their video content, and analyze audience engagement by extracting video metadata and transcripts.
- **Content Creation Tool:** Provides content creators with a tool to research trending topics on YouTube, gather inspiration from existing videos, and generate content ideas based on transcript analysis.

## How it works:

1.  **MCP Server Trigger:** The workflow is initiated by an MCP (Multi-Cloud Provider) Server trigger, which listens for requests from an MCP client or agent. This trigger expects input parameters for `operation`, `query`, and `urls`.
2.  **Operation Switch:** The workflow uses a Switch node to route the execution based on the `operation` parameter received from the trigger. It can perform one of three operations: `youtube_search`, `youtube_transcripts`, or `usage_metrics`.
3.  **YouTube Search (youtube_search):**
    -   Sends a request to the Apify YouTube Scraper API to search for videos based on the `query` parameter.
    -   Simplifies the search results by extracting relevant information such as channel name, title, URL, description, view count, and likes.
    -   Aggregates all simplified search results into a single `response` field.
4.  **YouTube Transcripts (youtube_transcripts):**
    -   Sends a request to the Apify YouTube Scraper API to download subtitles (transcripts) from the provided `urls`.
    -   Simplifies the transcript results by extracting the video title, URL, and transcript text.
    -   Aggregates all simplified transcript results into a single `response` field.
5.  **Usage Metrics (usage_metrics):**
    -   Fetches the Apify account's monthly usage metrics and limits through HTTP requests to the Apify API.
    -   Simplifies the usage metrics by extracting key information such as the start and end dates of the monthly usage cycle, the current monthly usage in USD, and the usage of various Apify services (Actor compute units, dataset reads/writes, data transfer, etc.).
6.  **Tool Workflows:** The `Youtube Search`, `Youtube Transcripts`, and `Usage Report` nodes are actually calling dedicated workflow tools that encapsulate the Apify logic. The main workflow acts as an orchestrator, passing the request context to the respective tool workflow.

## Services:

-   [APIFY.com](https://www.apify.com?fpr=414q6): Used for YouTube scraping (search and transcript downloading) and for fetching usage metrics.

## Hashtags:

#n8n #automation #workflow #youtube #apify
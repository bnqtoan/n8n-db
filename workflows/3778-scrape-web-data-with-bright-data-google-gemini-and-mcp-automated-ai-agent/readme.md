# Scrape Web Data with Bright Data, Google Gemini and MCP Automated AI Agent

## Use cases:

*   **Automated Content Aggregation:** Automatically scrape data from multiple websites and aggregate it into a single, formatted document (e.g., a Markdown file). Ideal for research or monitoring industry news.
*   **AI-Powered Data Extraction:** Use the AI agent to intelligently extract specific information from web pages based on natural language queries. For example, "find the company's mission statement and key executives from their about us page."
*   **Dynamic Web Scraping and Webhook Integration:** Trigger web scraping tasks based on real-time events and send the extracted data to other applications via webhooks, facilitating immediate data processing and integration.

## How it works:

This workflow automates web scraping using Bright Data's MCP (Managed Cloud Proxy) tools, orchestrated by an AI agent powered by Google Gemini.

1.  **Trigger and Initialization:** The workflow starts with a manual trigger. It then uses MCP Client to list available tools and sets URLs to scrape.
2.  **AI Agent Orchestration:** The AI Agent node receives a URL and a format instruction. Google Gemini is used to understand the request and determine the best MCP tool (scrape_as_markdown, scrape_as_html) for the task.
3.  **Web Scraping with Bright Data MCP:** The workflow executes the selected MCP tool to scrape the web page, extracting content based on the specified format.
4.  **Data Processing and Webhook:** The scraped data (`result.content[0].text`) is then sent to a specified webhook URL.
5.  **Data Persistence:** In parallel, the scraped data is converted to a binary format and written to a JSON file on disk.
6.  **Memory:** The simple memory node is used to retain the scraping session.
7.  **Tool listing** The workflow also lists the available Bright Data web scraper tools using "MCP Client List all tools" and "MCP Client to Scrape as HTML/Markdown" nodes, though they do not seem to be directly connected to the main flow of execution.

## Services:

*   **Bright Data MCP (Managed Cloud Proxy):** Used for web scraping with advanced configuration options.
*   **Google Gemini (PaLM API):** Used by the AI Agent for natural language understanding and tool selection.
*   **Webhook.site:**  Used as an example webhook endpoint to receive scraped data.

## Hashtags:

#n8n #automation #webscraping #aiagent #brightdata

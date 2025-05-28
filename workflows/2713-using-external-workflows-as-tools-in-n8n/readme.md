# get_a_web_page

## Use cases:

- **Content Extraction for AI Agents:** Enables AI agents to crawl and extract content from web pages in a structured markdown format, facilitating tasks like content summarization or knowledge base creation.
- **Automated Content Archiving:** Automatically fetches and saves web page content in markdown for offline access, archiving, or creating local documentation.
- **Website Monitoring and Change Detection:** Regularly crawls web pages, stores the markdown output, and compares it to previous versions to detect content changes.

## How it works:

1.  **Execute Workflow Trigger:** This node initiates the workflow. It listens for a query parameter `url` to be passed in the request, containing the URL of the webpage to be crawled.
2.  **FireCrawl:** This node sends a POST request to the Firecrawl API (`https://api.firecrawl.dev/v1/scrape`). It passes the `url` received from the trigger node in the body, formatted as JSON. The Firecrawl API extracts the content from the specified URL and converts it into markdown format. Authentication is handled using an HTTP Header Auth credential named "Firecrawl".
3.  **Edit Fields:** This node receives the JSON response from the Firecrawl API and extracts the `markdown` content located at `$json.data.markdown`. It then assigns this extracted content to a new field named `response`.

## Services:

-   **Firecrawl API:** Used for web scraping and content conversion to markdown format.

## Hashtags:

#n8n #automation #webscraping #markdown #contentextraction

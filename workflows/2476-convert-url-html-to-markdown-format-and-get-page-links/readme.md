# Convert URL HTML to Markdown and Get Page Links

## Use cases:

- **Content Aggregation for AI Training:**  Transform web page content into a clean, AI-friendly Markdown format for training large language models (LLMs). Extract structured text from various websites to create a comprehensive dataset.
- **Website Archiving and Analysis:**  Extract the content and links from a website for archiving purposes. This can be used to track changes to a website over time or to analyze the link structure of a website.
- **Automated Content Repurposing:**  Automatically extract and convert web page content into Markdown for use in other applications, such as documentation generators, knowledge bases, or content management systems.

## How it works:

1.  **Trigger:** The workflow starts when you manually trigger it.
2.  **Get URLs:** Retrieves a list of URLs either from a database or by using the example `Set` node for initial testing.
3.  **Split URLs:** Splits the array of URLs into individual items using the `Split Out` node.
4.  **Limit Items:** Limits the amount of urls that are send at a time.
5.  **Split in Batches**: Splits the requests in batches of 10 to respect the API limits.
6.  **Firecrawl API Request:** Sends a POST request to the Firecrawl.dev API for each URL. The API converts the HTML content of the web page into Markdown format and extracts all links.
7.  **Wait:** Limits the request to 10 per minute to respect the API limits.
8.  **Extract Data:** Extracts the relevant data (title, description, content, and links) from the JSON response of the API.
9.  **Connect to your own data source:** Placeholder to allow you to output the final data to your own data source, such as Airtable.

## Services:

-   [Firecrawl.dev](https://www.firecrawl.dev/): Used to convert HTML to Markdown and extract links from web pages.
-   *Database (Optional):*  Your own database to store data.

## Hashtags:

#n8n #automation #webscraping #markdown #firecrawl

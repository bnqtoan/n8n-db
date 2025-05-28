# My Workflow

## Use cases:

- **Automated Product Data Enrichment:** Automatically extract product details (title, description, model, material, color, condition) from images stored in Airtable, saving time for surveyors or data entry personnel.
- **AI-Powered Inventory Management:** Enhance inventory records in Airtable with AI-generated descriptions and attributes, improving data quality and searchability.
- **Reverse Image Search Automation:** Use AI to identify products in images by leveraging reverse image search and web scraping, enabling quick identification of similar products or sources of information.

## How it works:

1.  **Airtable Data Retrieval:** The workflow starts by fetching rows from an Airtable base that contains product images and a flag indicating whether the AI analysis has been performed (`AI_status=FALSE`).

2.  **Image Analysis with OpenAI Vision:** The `Analyse Image` node uses the OpenAI Vision model to analyze the product image and extract a detailed description, model, material, color, and condition.

3.  **AI Agent for Data Enrichment:** The `Object Identifier Agent` node employs an AI agent (powered by OpenAI) to further enrich the product data.
    *   It leverages two custom tools: `reverse_image_search` (using SERP API) and `webpage_url_scraper_tool` (using Firecrawl) to gather additional information from the internet.
    *   The agent uses the image description from the previous step and the tools to find the product's title, description, model, material, color, and condition.

4.  **Tool Routing:** The `Actions Router` node determines which tool to execute based on the `route` parameter. This determines whether the workflow trigger either executes `SERP Google Reverse Image API` or `Firecrawl Scrape API` nodes.
        *    If using `SERP Google Reverse Image API` then the result is formatted by the `Reverse Image Search Response` node.
        *   If using `Firecrawl Scrape API` then the workflow checks if the crawl was successful via the `Scrape Success?` node and formats the results to markdown.
    *   If neither tools were called then `Fallback Response` returns an error.

5.  **Data Parsing** `Structured Output Parser` will parse the results from step 3 and format the properties into a structured format: `title`, `description`, `model`, `material`, `color` and `condition`.

6.  **Update Airtable:** The workflow updates the original Airtable record with the enriched product data, including the AI-generated title, description, model, material, color, condition, and setting the `AI_status` flag to `true`.

## Services:

*   Airtable
*   OpenAI
*   SERP API
*   Firecrawl

## Hashtags:

#n8n #automation #ai #airtable #imageRecognition

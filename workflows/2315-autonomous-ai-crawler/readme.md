# Autonomous AI Crawler

## Use cases:

- **Social Media Lead Generation:** Automatically identify social media profiles for a list of companies to enhance lead generation efforts.
- **Competitor Analysis:** Gather social media presence data for competitor companies to understand their marketing strategies and audience engagement.
- **Data Enrichment:** Enhance existing company databases with social media URLs to provide a more comprehensive view of each organization.

## How it works:

1.  **Retrieve Company Data:** The workflow starts by fetching company names and websites from a Supabase database ("Get companies").
2.  **Select Company Name and Website:** Selects only the "name" and "website" fields from the retrieved data.
3.  **Crawl Website:** Uses an OpenAI Agent to crawl the given website ("Crawl website"). It is configured to extract social media URLs. The agent utilizes two custom tools:
    *   **Text Retrieval Tool:** Extracts all the text content from a given website using the "Text" node, which employs an HTTP Request to fetch the HTML and converts it to Markdown.
    *   **URL Retrieval Tool:** Extracts all the URLs from a given website using the "URLs" node, which employs an HTTP Request to fetch the HTML and extracts `href` attributes from `a` tags. It handles relative URLs and removes duplicates.
4.  **Parse JSON Output:** Parses the structured JSON output from the OpenAI agent, defining the schema for social media platforms and their URLs ("JSON Parser").
5.  **Create Social Media Array:** Save the extracted social media URLs into an array.
6.  **Map company name and website:** Save the company name and company website to variables.
7.  **Merge all data:** Merges the extracted social media data with the original company information.
8.  **Insert Data into Supabase:** Inserts the combined data into another Supabase table ("Insert new row").

## Services:

*   n8n
*   Supabase
*   OpenAI API

## Hashtags:

#n8n #automation #webcrawler #socialmedia #leadgeneration

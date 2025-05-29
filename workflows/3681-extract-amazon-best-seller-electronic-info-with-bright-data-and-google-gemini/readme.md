# Extract Amazon Best Seller Electronic Information with Bright Data and Google Gemini

## Use cases:

- **Market Trend Analysis:** Automatically extract and structure data from Amazon's best-selling electronics to identify trending products, brands, and categories.
- **Competitor Monitoring:** Track competitor product performance on Amazon by extracting bestseller rankings, ratings, and pricing information.
- **Product Research:** Gather detailed product information and customer feedback from Amazon bestsellers to inform new product development or identify market gaps.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Set Amazon URL with Bright Data Zone:** Sets the target Amazon URL (e.g., the bestsellers in electronics) and the Bright Data zone for web scraping.
3.  **HTTP Request to fetch the Amazon Best Seller Products:** Uses an HTTP Request node with Bright Data credentials to scrape the HTML content of the specified Amazon URL. It sends a POST request to the Bright Data API.
4.  **Structured Data Extractor:** Utilizes a Langchain Information Extractor node with a predefined JSON schema to extract structured data (product title, rank, rating, price, etc.) from the scraped HTML content.
5.  **Google Gemini Chat Model:** This node is connected to the output of the Structured Data Extractor, but its purpose isn't immediately clear from the JSON (it is connected as an ai\_languageModel). Assuming that the data is being parsed to this node to generate a summary of the extracted information.
6.  **Webhook Notifier:** Sends the structured data (or summary from LLM node) to a specified webhook URL (e.g., a webhook.site URL) for further processing or storage.

## Services:

-   **Amazon:** Used as the data source for extracting product information.
-   **Bright Data:** A web scraping service used to bypass anti-bot measures and extract HTML content from Amazon.
-   **Google Gemini:** Language model used for information extraction and structured data generation.
-   **Webhook.site (or other webhook endpoint):** A service to receive and display the extracted data sent by the workflow.

## Hashtags:

#n8n #automation #webscraping #amazon #brightdata #googlegemini #informationextraction

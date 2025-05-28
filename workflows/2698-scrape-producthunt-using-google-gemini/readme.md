# My workflow

## Use cases:

- **Product Information Aggregation:** Automatically extracts product details from a website when a request is received (e.g., via a webhook), and formats the information into a structured JSON response.
- **Dynamic Product Data API:** Creates an API endpoint that dynamically fetches and parses product information from various e-commerce sites, allowing for real-time access to product details without manual scraping.
- **Competitor Price Monitoring:** Extracts prices and other details from competitor websites based on product requests, and delivers the data in JSON format, facilitating automated price comparisons.

## How it works:

1.  **Receive Product Request:** The workflow starts when a webhook receives a request, likely containing a product identifier (e.g., a product name in the query parameter).
2.  **Fetch Product HTML:** The workflow uses the `HTTP Request` node to fetch the HTML content of the product page from a website. The URL should be contructed based on the request.
3.  **Extract Inline Scripts:** The `Code` node then extracts inline JavaScript scripts from the fetched HTML content, as that is where the information is available for the workflow.
4.  **Process Script with LLM and Analyze Script with Google Gemini:** The `LLMChain` node utilizes a Large Language Model (LLM) to process the extracted script and extract relevant product information. `Google Gemini` is the language model to analyze the script, while `OutputParserStructured` parses the data for the LLM.
5.  **Format Product Data to JSON:** The `OutputParserStructured` node formats the extracted product data into a structured JSON format.
6.  **Send JSON Response to Client:** Finally, the `Respond to Webhook` node sends the formatted JSON data back as a response to the initial webhook request.

## Services:

-   **Websites:** Interacts with external websites to fetch product pages.
-   **Google Gemini:** Uses Google's Gemini language model for script analysis and data extraction.

## Hashtags:

#n8n #automation #webscraping #LLM #productdata

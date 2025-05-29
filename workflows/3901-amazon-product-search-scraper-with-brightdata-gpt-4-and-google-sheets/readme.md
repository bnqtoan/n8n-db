# Web Scraper with LLM-Powered Data Extraction and Google Sheets Integration

## Use Cases:

- **E-commerce Product Monitoring:** Automatically extract product details (name, description, price, rating, reviews) from various e-commerce websites and store them in Google Sheets for price comparison and competitor analysis.
- **Market Research:** Scrape product information based on specific keywords, then use the extracted data to perform market research, identifying trends and popular products.
- **Data Aggregation:** Collect and organize data from different websites into a structured format within Google Sheets for reporting and analysis.

## How it works:

1. **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2. **Get URLs from Google Sheets:** The "get urls to scrape" node retrieves a list of URLs from a specified Google Sheet. The sheet ID and sheet name are defined using n8n expressions.
3. **Split URLs into Batches:** The "url" node splits the list of URLs into individual items for processing.
4. **Scrape Web Page:** The "scrap url" node uses the Bright Data Web Scraper API to retrieve the HTML content of each URL. It sends a POST request with the URL and other parameters to the Bright Data API. Authentication is handled via an API key stored as an environment variable.
5. **Clean HTML:** The "clean html" node cleans the scraped HTML by removing doctype declarations, script tags, style tags, comments, head sections, and class attributes. It also filters for specific allowed HTML tags (h1-h6, p, ul, ol, li, strong, em, a, blockquote, code, pre) to extract relevant content.
6. **Extract Data with LLM:** The "extract data" node uses a Langchain Chain LLM node in conjunction with OpenRouter to extract the product information from the scraped and cleaned HTML. It uses a prompt engineered to retrieve specific data points such as product name, description, rating, number of reviews, and price. The URL search term is dynamically inserted into the prompt.
7. **Structured Output Parser:** The LLM response gets parsed into structured JSON using the 'Structured Output Parser' node.
8. **Split Items:** The 'Split items' node divides the `output` array into individual items for further processing.
9. **Append Data to Google Sheets:** The "add results" node appends the extracted product information to another specified Google Sheet. The sheet ID and sheet name are defined using n8n expressions, and the data includes name, price, rating, reviews, and description.
10. **Loop:** The workflow loops back to process the next URL from the "url" node.

## Services:

- **Google Sheets:** Used for storing the initial URLs and the extracted product data.
- **Bright Data Web Scraper API:** Used to retrieve the HTML content of the specified URLs.
- **OpenRouter:** Used as an LLM provider, specifically the `openai/gpt-4.1` model for extracting structured data from text.

## Hashtags:

#n8n #webscraping #automation #llm #googlesheets

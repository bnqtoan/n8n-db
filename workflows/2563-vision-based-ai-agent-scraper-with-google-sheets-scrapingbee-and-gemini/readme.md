# Vision-Based AI Agent Scraper - with Google Sheets, ScrapingBee, and Gemini

## Use cases:

- **E-commerce product monitoring:** Automatically extract product details (title, price, brand, promotions) from various online stores and track price changes or promotional offers over time.
- **Competitor analysis:** Gather product information from competitor websites to compare pricing, branding, and promotional strategies.
- **Lead generation:** Scrape websites for specific product information or services to identify potential leads or customers.

## How it works:

1.  The workflow starts with a manual trigger ("When clicking ‘Test workflow’") or can be replaced with a trigger of your choice.
2.  It fetches a list of URLs from a Google Sheet ("Google Sheets - Get list of URLs"). This sheet contains the URLs to be scraped and a results page for storing the extracted data.
3.  For each URL, it sets the `url` field ("Set fields") to be used in subsequent nodes.
4.  The workflow uses ScrapingBee to capture a full-page screenshot of the URL ("ScrapingBee - Get page screenshot"). ScrapingBee is configured to take a full-page screenshot.
5.  The core of the workflow is the "Vision-based Scraping Agent". This node uses the Gemini-1.5-Pro model to extract data from the screenshot.
    *   If the AI Agent fails to extract the necessary data from the screenshot, it uses a fallback mechanism to retrieve the HTML content of the webpage.
    *   The "HTML-based Scraping Tool" workflow is triggered, which uses ScrapingBee to get the HTML of the page ("ScrapingBee- Get page HTML"). The HTML is converted to Markdown ("HTML to Markdown") to save tokens before being sent back to the AI Agent.
6.  The extracted data is then parsed into a structured JSON format ("Structured Output Parser").  The JSON is designed for an e-commerce webpage but can be customized.
7.  The "Split Out" node splits the array of extracted data into individual rows.
8.  Finally, the extracted data is appended as new rows to the "Results" sheet in the Google Sheet ("Google Sheets - Create Rows").

## Services:

-   **Google Sheets:** Used for managing URLs to scrape and storing the extracted results.
-   **ScrapingBee:** Used to capture full-page screenshots and retrieve HTML data for fallback extraction.
-   **Google Gemini API:** Utilized within the "Vision-based Scraping Agent" for vision-based scraping.

## Hashtags:

#n8n #automation #webscraping #aiagent #googlesheets

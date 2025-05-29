# Real Estate Intelligence Tracker with Bright Data & OpenAI

## Use cases:

1.  **Real Estate Market Analysis:** Automatically extract and analyze property data (descriptions, features, reviews) from real estate websites for market research and trend identification.
2.  **Competitor Monitoring:** Track listings and reviews of competitors' properties to understand their offerings and customer feedback.
3.  **Lead Generation:** Identify potential investment opportunities by extracting structured data about properties that meet specific criteria.

## How it works:

1.  **Trigger:** The workflow starts when manually triggered.
2.  **Set Variables:** Sets the target real estate website URL and Bright Data zone for web unlocking.
3.  **Web Scraping (Bright Data):** Uses Bright Data's web unlocking capabilities to scrape the content of the specified URL, retrieving raw HTML data in Markdown format.
4.  **Markdown to Text Conversion (OpenAI):** Converts the scraped Markdown content into plain text using an OpenAI Chat Model.
5.  **Data Extraction (OpenAI):**
    *   Extracts customer reviews using the OpenAI Chat Model.
    *   Extracts structured data (property details, pricing, etc.) using the OpenAI Chat Model.
6.  **Data Aggregation:** Merges the extracted review data and structured data into a single dataset.
7.  **Data Output:**
    *   Appends the aggregated data to a Google Sheet for easy analysis and storage.
    *   Sends the structured data via a webhook to a specified URL for real-time notifications.
    *   Writes the structured data to a JSON file on disk for local storage.

## Services:

*   **Bright Data:** Used for web scraping and unlocking capabilities.
*   **OpenAI:** Used for natural language processing to convert Markdown to text and extract structured information and reviews.
*   **Google Sheets:** Used for storing and analyzing the extracted data.
*   **Webhook:** Used for sending real-time notifications with the structured data.

## Hashtags:

#n8n #automation #webscraping #realestate #openai

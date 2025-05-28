# Scrape Trustpilot Reviews with DeepSeek, Analyze Sentiment with OpenAI

## Use cases:

*   **Brand Monitoring:** Automatically collect and analyze customer reviews from Trustpilot to understand brand perception and identify areas for improvement.
*   **Competitor Analysis:** Scrape reviews of competitors to identify their strengths and weaknesses based on customer feedback.
*   **Market Research:** Gather customer opinions on specific products or services to inform product development and marketing strategies.

## How it works:

This workflow automates the process of scraping Trustpilot reviews, extracting relevant information, analyzing sentiment, and storing the results in a Google Sheet.

1.  **Manual Trigger:** The workflow starts when triggered manually.
2.  **Set Parameters:** Sets the `company_id` (the Trustpilot company name) and `max_page` (the number of pages to scrape).
3.  **Get reviews:** Scrapes Trustpilot reviews page by page, up to the specified `max_page`.
4.  **Extract:** Extracts the URLs of individual reviews from the scraped HTML.
5.  **Split Out:** Splits the array of review URLs into individual items for processing.
6.  **Limit:** Limits the number of items to process.
7.  **Get Single Review:** Retrieves the HTML content of each individual review page.
8.  **Extract Review:** Extracts the main review content (the article element).
9.  **DeepSeek Chat Model:** Connects with the DeepSeek API.
10. **Information Extractor:** Extracts specific information from the review HTML using DeepSeek, such as author, rating, date, title, text, number of reviews, and country.
11. **Get Google Sheets:** Retrieves data from a specified Google Sheets document and sheet.
12. **Get rows:** Retrieves all rows from a Google Sheet to check if the review already exists
13. **If:** Checks if the review ID already exists in the Google Sheet.
14. **OpenAI Chat Model:** Connects with the OpenAI API.
15. **Sentiment Analysis:** Analyzes the sentiment of the review text using OpenAI, categorizing it as Positive, Neutral, or Negative.
16. **Update Sheet:** Appends or updates a row in the Google Sheet with the extracted review information and sentiment analysis results.

## Services:

*   Trustpilot
*   Google Sheets
*   DeepSeek API
*   OpenAI API

## Hashtags:

#n8n #automation #webscraping #sentimentanalysis #trustpilot

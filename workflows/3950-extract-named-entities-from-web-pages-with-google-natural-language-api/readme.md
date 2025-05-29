# Google Page Entity Extraction Template

## Use cases:

*   **Content Analysis:** Analyze articles, blog posts, or web pages to automatically identify key entities mentioned, such as people, organizations, and locations.
*   **Lead Generation:** Extract company names and relevant contact information from websites to identify potential leads.
*   **Sentiment Analysis Preparation:** Pre-process text data by identifying entities before performing sentiment analysis on specific entities.

## How it works:

1.  **Webhook Trigger (Get Url):** The workflow starts when a POST request is sent to a specific webhook URL. The request should contain a JSON payload with a "url" field specifying the URL of the web page to analyze.
2.  **Fetch Page Content (Get URL Page Contents):** The workflow retrieves the HTML content of the provided URL using an HTTP Request node.
3.  **Prepare Data for Google API (Respond with detected entities):** The HTML content is then prepared for the Google Natural Language API. This step likely involves cleaning the HTML and formatting the data into the expected JSON structure. The HTML content is trimmed to be less than 100000 characters.
4.  **Call Google Natural Language API (Google Entities):** An HTTP Request node sends a POST request to the Google Natural Language API's `analyzeEntities` endpoint, including the prepared HTML content.  A Google API key is required for authentication.
5.  **Respond to Webhook (Respond to Webhook):** The entities extracted by google API are returned as a response.

## Services:

*   Google Cloud Natural Language API

## Hashtags:

#n8n #GoogleNLP #EntityExtraction #WebScraping #Automation

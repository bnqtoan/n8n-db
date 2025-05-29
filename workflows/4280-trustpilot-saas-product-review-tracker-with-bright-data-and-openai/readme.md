# TrustPilot SaaS Product Review Tracker with Bright Data & OpenAI

## Use cases:

- **Monitor Brand Reputation:** Automatically track and analyze customer reviews on TrustPilot for a specific SaaS product, providing insights into customer sentiment and potential issues.
- **Competitor Analysis:** Monitor reviews of competitor SaaS products to identify their strengths and weaknesses, informing product development and marketing strategies.
- **Automated Alerting:** Trigger notifications when specific keywords or sentiment changes are detected in customer reviews, enabling rapid response to critical feedback.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Set URL and Bright Data Zone:** Defines the TrustPilot URL for the SaaS product reviews and the Bright Data zone to be used for the web request.
3.  **Perform Bright Data Web Request:** Uses Bright Data's Web Unlocker to bypass anti-bot measures and retrieve the HTML content of the TrustPilot review page. It transforms the content into markdown format.
4.  **Markdown to Textual Data Extractor:** Employs an OpenAI Language Model to convert the markdown to textual data.
5.  **Structured JSON Data Extractor:** Employs an OpenAI Language Model to extract structured data from the textual review content, adhering to a predefined JSON schema.
6.  **Summarization Chain:** Employs an OpenAI Language Model to produce a concise summary of the extracted textual data, that helps to have a better insights on the data.
7.  **Data Transformation and Aggregation:** Extracts the first element, merges the responses, and aggregates all the extracted data into a single object.
8.  **Outbound Data Push:** The structured data, its summary and other insights are then pushed to:
    *   **Google Sheets:** Appends the aggregated review data to a specified Google Sheet.
    *   **Write the structured content to disk:** Writes the structured JSON data to a file on disk.
    *   **Webhook Notification:** Sends a webhook notification containing the extracted summary data to a specified URL.

## Services:

-   TrustPilot
-   Bright Data
-   OpenAI
-   Google Sheets
-   Webhook

## Hashtags:

#n8n #automation #webscraping #trustpilot #openai #brightdata #saas #reviews #llm

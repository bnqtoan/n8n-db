# Amazon Keywords

## Use cases:

- **Amazon Product Research:** Discover relevant keywords for optimizing product listings on Amazon, improving visibility and search ranking.
- **Competitor Analysis:** Analyze competitor product listings to identify high-performing keywords and incorporate them into your own strategy.
- **Keyword Trend Monitoring:** Track trending keywords related to specific products or niches on Amazon to stay ahead of market changes.

## How it works:

1.  **Receive Keyword (Webhook):** The workflow starts by receiving a keyword via a webhook. This can be triggered manually or by an external application like Airtable.
2.  **Get airtable data (Airtable):** Retrieves data from an Airtable base and table using an ID provided in the webhook query parameters.
3.  **Get Amazon keywords (HTTP Request):** Sends an HTTP request to Amazon's completion API, using the received keyword as a prefix to retrieve keyword suggestions.
4.  **Format output (Split Out):** Splits the `suggestions` array from the Amazon API response into individual items for further processing.
5.  **Clean Keywords (Set):** Extracts the `value` field from each item in the suggestions array to create a clean array of keywords.
6.  **Aggregate keywords (Aggregate):** Aggregates the array of keywords into a single item containing the combined list.
7.  **Combine into string (Code):** Combines the aggregated array of keywords into a comma-separated string.
8.  **Save keywords (Airtable):** Updates the original record in Airtable with the generated comma-separated string of Amazon keywords, linking the input keyword with the suggested outputs.

## Services:

-   **Amazon Completion API:** Used to retrieve keyword suggestions based on a given prefix.
-   **Airtable:** Used to store the original keywords and the generated Amazon keyword suggestions.

## Hashtags:

#n8n #automation #amazonkeywords #keywordresearch #ecommerce

# Autogenerate Keywords Workflow

## Use cases:

- **SEO Keyword Research:**  Quickly generate a list of related keywords for a given seed keyword to improve search engine optimization efforts.
- **Content Idea Generation:**  Discover potential topics and phrases related to a specific theme for blog posts, articles, or social media content.
- **Market Research:**  Identify trending search terms within a specific niche to understand customer interests and needs.

## How it works:

1.  **Receive Keyword (Webhook):** The workflow starts when a keyword is sent to the designated webhook URL. The URL includes a query parameter `q` which contains the keyword (e.g., `http://localhost:5678/webhook/your-webhook-id?q=keyword research`).
2.  **Autogenerate Keywords (HTTP Request):** The workflow then takes the keyword received by the webhook and sends it to the Google Suggest API, which is used to receive keywords that Google recommends.
3.  **Format Keywords (XML):** The response from the Google Suggest API, which is in XML format, is parsed into a more structured JSON format.
4.  **Split Out:** Splits `toplevel.CompleteSuggestion` into multiple items.
5.  **Clean Keywords (Set):** Formats the extracted keywords into an array.
6.  **Aggregate:** Transform all items into one item containing an array.
7.  **Return Keywords (Respond to Webhook):** Finally, the workflow responds to the initial webhook request with the formatted list of related keywords.

## Services:

-   **Google Suggest API:** Used for generating keyword suggestions based on the input keyword.

## Hashtags:

#n8n #automation #SEO #keywordresearch #googlesuggest

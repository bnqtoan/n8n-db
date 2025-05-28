# My Workflow

## Use cases:

- **Sales Call Data Enrichment:** Automatically extract and process data from sales calls to identify competitors, integrations mentioned, objections raised, and potential use cases.
- **Centralized Knowledge Base:** Create a structured repository of sales call insights in Notion, making it easier for sales, product, and marketing teams to access and analyze key information.
- **Improve Sales Strategy:** Use the extracted data to refine sales strategies, address common objections, and better understand customer needs.

## How it works:

1.  **Trigger:** The workflow starts with the "Execute Workflow Trigger" node, which receives data from another workflow, likely one processing data from Gong sales calls with AI. The input data includes AI-generated insights like competitor mentions, integration data, objections, use cases, call summary, next steps, sentiment, and customer pain points.
2.  **Core Data Processing:** The workflow begins by updating the Notion Call object with the overall AI data in the “Update Notion Call object with AI data”, with the following values: Call Summary, Next Steps, Sentiment and Customer Pain Points
3.  **Conditional Checks:** The workflow then branches out to different conditional checks based on the AI output:
    *   **Integration Data:** Checks if any integrations were mentioned. If yes, it splits the integration data, creates corresponding entries in the "Integrations Database" in Notion, and waits for rate limiting for the Notion API.
    *   **Competitor Data:** Checks if any competitors were mentioned. If yes, it splits the competitor data, creates entries in the "Competitors Database" in Notion, and waits for rate limiting for the Notion API.
    *   **Objection Data:** Checks if any objections were raised during the call. If yes, it splits the Objection Tags and adds to Notion, including steps to handle Notion API rate limits.
    *   **Use Case Data:** Checks if any use cases were discussed. If yes, it splits the use case data and creates corresponding entries in the "Use Cases" database in Notion, and waits for rate limiting for the Notion API.

## Services:

-   **Notion:** This workflow heavily relies on Notion to create and update database pages.

## Hashtags:

#n8n #automation #workflow #sales #notion #ai

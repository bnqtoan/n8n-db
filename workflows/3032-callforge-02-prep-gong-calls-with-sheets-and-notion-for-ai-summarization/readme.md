# CallForge - The AI Gong Sales Call Pre-Processor

## Use cases:

*   **Automated Sales Call Analysis:** Automatically extract key information from Gong sales calls, such as competitor mentions, integration discussions, and potential mispronunciations.
*   **Enriched AI Prompting:** Supplement AI prompts with accurate product data (integrations, competitor names) to improve the precision of AI analysis of call transcripts.
*   **Data-Driven Sales Insights:** Provide sales teams and management with structured, actionable data extracted from sales calls for better decision-making.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or by an "Execute Workflow Trigger" node.
2.  **Fetch Gong Calls:** Retrieves Gong call data for the last two days using the Gong API.
3.  **Fetch Integrations and Competitors:** Extracts lists of product integrations from a Google Sheet and competitor names from a Notion database.
4.  **Data Aggregation:** Combines the Gong call data, integrations, and competitor lists into a single data structure.
5.  **Duplicate Removal:** Checks a Notion database for previously processed calls and removes them from the current processing queue.
6.  **Call Splitting:** Splits the aggregated call data into individual call records to be processed separately.
7.  **Call Processing:**
    *   The workflow loops through each call.
    *   Each call transcript is then sent to one of two sub-workflows, either the "Transcript Processor" or the "Call Processor Demo", to get a clean transcript or more structured data.
8.  **Final Output:** The processed call data can then be used for reporting, analysis, or further automation.

## Services:

*   Gong API
*   Google Sheets
*   Notion API

## Hashtags:

#n8n #automation #sales #gong #ai

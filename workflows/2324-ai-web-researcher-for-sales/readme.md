# AI Company Researcher

## Use cases:

- **Lead Enrichment:** Automatically enrich lead data in a spreadsheet with key information like LinkedIn URLs, market segment (B2B/B2C), pricing details, and integration information.
- **Competitive Analysis:** Research competitors to gather insights into their pricing, features (API, enterprise plan, free trial), and technology integrations.
- **Sales Intelligence:** Provide sales teams with up-to-date information on potential clients, helping them personalize their outreach and tailor their sales strategies.

## How it works:

1.  **Trigger:** The workflow starts either manually via "Test workflow" or on a schedule (every 2 hours).
2.  **Get rows to enrich**: Retrieves rows from a Google Sheet where the "enrichment\_status" column is not marked as "done".
3.  **Input & Looping:** Takes the Google Sheet data, setting the `company_input` and `row_number` from each row. Then iterates through each retrieved company.
4.  **AI-Powered Research:** An "AI Agent" node uses the company name or domain as input and sends a prompt to OpenAI to gather details:
    *   Company LinkedIn URL
    *   Domain
    *   Market segment (B2B/B2C)
    *   Cheapest plan
    *   Latest case study URL
    *   API availability
    *   Enterprise plan availability
    *   Free trial availability
    *   Key integrations
        The Agent uses tools like Google Search (via SerpAPI or ScrapingBee) and a website content extraction sub-workflow to find the information.
5.  **Structured Output Parsing:** The AI Agent's response is parsed into a structured format, defining data types (string, number, boolean, array) for each extracted property.
6.  **Data Merging:** The original row data (including the row number) from the Google Sheet is merged with the AI-enriched data.
7.  **Google Sheets Update:** Updates the corresponding row in the Google Sheet with the extracted information (domain, LinkedIn URL, market, pricing, features, integrations, case study link) and marks the "enrichment\_status" as "done."

## Services:

*   **Google Sheets:** Used as a data source and to store the enriched company information.
*   **OpenAI:** Powers the AI Agent for information extraction.
*   **SerpAPI:** Used by the AI Agent to perform Google searches.
*   **ScrapingBee:** Alternative to SerpAPI for performing Google searches.

## Hashtags:

#n8n #automation #AI #leadEnrichment #salesIntelligence

# CallForge - The AI Gong Sales Call Processor

## Use cases:

- **Automated Sales Call Analysis:** Automatically process sales calls recorded in Gong to extract key information like talking points, customer concerns, and action items, saving sales representatives and managers time in reviewing calls manually.
- **Enriched CRM Data:** Enhance customer data in Salesforce with insights gathered from Gong calls, such as competitor mentions, customer needs, and product feedback, providing a more comprehensive view of the customer relationship.
- **AI Prompt Engineering:** Preprocesses the call transcripts and enriches call metadata in preparation to pass the data to an AI system for downstream tasks such as sentiment analysis, topic extraction, or lead scoring.

## How it works:

This workflow automates the process of extracting data from Gong sales calls, enriching it with Salesforce data, and preparing it for AI-driven analysis.

1.  **Trigger:** The workflow is triggered by an "Execute Workflow Trigger" node.
2.  **Get Gong Transcript and Call Details**: The trigger sends a call ID into an HTTP Request node that returns Gong call transcripts and detailed call data.
3.  **Format Call Transcript:** The data from the Gong API is split into a transcript and call data, with the transcript being transformed. It uses code nodes to separate speakers into "Internal" (sales team) or "External" (customers).
4.  **Enrich Call Data:** Salesforce data is retrieved based on the Gong call details and external attendees.
5.  **Aggregate and Isolate Data:** Finally, all the extracted and enriched data is aggregated and isolated into a final data blob. This data is for an AI prompt.

## Services:

-   Gong API
-   Salesforce

## Hashtags:

#n8n #automation #sales #Gong #Salesforce #AI

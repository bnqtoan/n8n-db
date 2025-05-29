# Retell AI Call Analysis to Airtable/Google Sheets/Notion

## Use cases:

- **Call Center Analytics:** Automatically log and analyze customer service calls to identify trends, improve agent performance, and track key metrics.
- **Sales Call Logging:** Record details of sales calls, including transcripts, summaries, and sentiment analysis, to optimize sales strategies and training.
- **Voice Agent Performance Monitoring:** Track the performance of AI-powered voice agents by storing call data and analytics for review and improvement.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a `call_analyzed` event is received from Retell AI via a webhook.
2.  **Filter:** The workflow filters the data to ensure that only `call_analyzed` events are processed. This ensures the workflow only runs when all the necessary data points are present.
3.  **Set Fields:** Extracts key information from the Retell AI webhook payload, such as:
    *   Call ID, Start/End Datetime, and Duration.
    *   Transcript and Call Summary.
    *   User Sentiment.
    *   Phone Number (determined by call direction).
    *   Total Cost in Dollars (converted from cents).
4.  **Save to Multiple Destinations:** Saves the extracted information to:
    *   Airtable: Creates a new record in a specified Airtable base and table.
    *   Google Sheets: Appends a new row to a specified Google Sheet.
    *   Notion: Creates a new page in a specified Notion database.

## Services:

-   Retell AI: For voice call analysis and webhook events.
-   Airtable: For structured data storage and management.
-   Google Sheets: For spreadsheet-based data logging and analysis.
-   Notion: For documentation and project management.

## Hashtags:

#n8n #automation #workflow #retellAI #voiceAI #callAnalysis

# Track Token Usage and Cost for LLM Calls

## Use cases:

- **Client Billing for AI Services:** Accurately track token usage and associated costs for each client using your AI-powered services, enabling precise and transparent billing.
- **Internal Cost Monitoring:** Monitor the token consumption and costs of different workflows or projects to optimize resource allocation and manage expenses effectively.
- **Budgeting and Forecasting:** Gather historical token usage data to forecast future AI service costs and establish realistic budgets.

## How it works:

1.  **Form Submission:** A user uploads a PDF resume/CV via an n8n form, triggering the workflow.
2.  **PDF Parsing:** The "Parse PDF Upload" node extracts text content from the uploaded PDF file.
3.  **Attribute Logging:** The "Logging Attributes" node sets values for `workflow_id`, `execution_id`, and `client_id`.
4.  **Resume Data Extraction:** The "Extract Resume Data" node uses an LLM (OpenAI GPT-4o-mini) to extract structured information from the parsed text based on a predefined JSON schema.
5.  **Custom LLM Subnode:** The "Custom LLM Subnode" leverages the Langchain Code node to intercept the LLM's response, capturing token usage metadata (input tokens, output tokens, total tokens). It then calculates the cost based on predefined input and output token prices and store the logs to Google Sheets.
6.  **Display JSON Document:** "Display JSON Document" displays extracted resume data.
7.  **[Optional] End-of-Month Invoice Generation:**
    *   The "Every End of Month" node triggers the process at the end of each month.
    *   The "Get Client Logs" node retrieves all usage logs for a specific client ID from a Google Sheet.
    *   The "Filter Last Month" node filters records from the Google Sheet to only include log entries within the current month.
    *   The "Calculate Totals" node calculates the sum of `total_tokens` and `total_cost` for the filtered logs.
    *   The "Send Invoice" node sends an email with the calculated usage and cost details to the client via Gmail.

## Services:

-   Google Sheets: Used for storing client usage logs.
-   OpenAI: Used for extracting information from the uploaded document.
-   Gmail: Used for sending invoices (optional).

## Hashtags:

#n8n #automation #workflow #LLM #tokenUsage #billing

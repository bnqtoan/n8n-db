# Get Model Token Count and Tools

## Use cases:

*   **AI Usage Monitoring:** Track the token consumption and tool usage of AI models within a workflow to understand costs and optimize performance.
*   **Cost Estimation:** Estimate the cost of running AI models based on token count and pricing data, enabling better budgeting and resource allocation.
*   **AI Model Performance Analysis:** Analyze the usage patterns of different AI models and tools to identify areas for improvement and optimization.

## How it works:

1.  **Trigger:** The workflow starts either manually ("When clicking 'Test workflow'") or when triggered by another workflow ("When Executed by Another Workflow").
2.  **Get Execution Data:** The "n8n Get Execution Data" node retrieves data from the current n8n execution.
3.  **Get AI Usage Data:** The "Get AI Usage Data" Code node processes the execution data, presumably to extract information about AI model usage, such as token counts and tools used.
4.  **Set AI Run Data:** The "Set Ai\_Run\_Data" node saves the extracted AI usage data into variables.
5.  **Get AI Pricing:** The "Get AI Pricing" HTTP Request node retrieves pricing information for the AI models from an external source. This node is configured to continue even if the request fails.
6.  **Get Models Price and Add Summary:** The "Get Models Price and Add Summary" Code node combines the AI usage data and pricing information to calculate the cost and generates a summary.
7.  **Google Sheets:** The "Google Sheets" node saves the cost summary and other relevant data to a specified Google Sheet for tracking and analysis.

## Services:

*   Google Sheets
*   External AI Pricing API (via HTTP Request)

## Hashtags:

#n8n #AI #Automation #CostTracking #Workflow

# AI-Powered Supply Chain Analytics with BigQuery

## Use cases:

- **Real-time Shipment Monitoring:** Allow users to ask questions about shipment status, delays, and performance metrics through a chat interface and get instant answers from BigQuery data.
- **Custom Reporting:** Enable users to request specific reports on supply chain operations, such as identifying trends in on-time delivery or analyzing performance by city or store.
- **Data-Driven Decision Making:** Facilitate data-driven decisions by providing a simple way for users to query and explore supply chain data, empowering them to identify areas for improvement and optimize processes.

## How it works:

1.  **Chat Trigger:** The workflow starts with a chat trigger, allowing users to input their questions or requests in natural language (e.g., via a chat interface like Telegram or Slack).
2.  **AI Agent (Control Tower):** The AI Agent, powered by a chat model (e.g., GPT-4o-mini), receives the user's request and uses a system prompt to act as a supply chain analytics expert with access to BigQuery. It formulates an SQL query based on the request and the BigQuery schema information defined in the prompt.
3.  **Call Query Tool:** The AI agent uses a the `bigquery_tool` to execute the SQL query, this tool is linked to a separated n8n workflow.
4.  **BigQuery Workflow (called by the Tool):**
    *   **Trigger Execution**: The trigger is executed by the AI tool
    *   **Sanitize the Query**: This node clean the query send by the AI agent to avoid any code injection.
    *   **BigQuery Query:** The SQL query is sent to Google BigQuery to retrieve the requested data from the `transport.shipments` table.
5.  **Chat Memory**: The Chat Memory node store the past conversation
6.  **Return to the AI Agent** The result from BigQuery is send back to the agent which is returned to the user.

## Services:

-   Google BigQuery
-   OpenAI (Chat Model)

## Hashtags:

#n8n #automation #AI #BigQuery #SupplyChain #Analytics

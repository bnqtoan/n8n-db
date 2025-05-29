# Track & Analyze Personal Finances with WhatsApp AI Assistant

## Use cases:

1.  **Daily Financial Reporting:** Automatically receive a daily summary of your finances via WhatsApp every morning at 8 AM. This can include income, expenses, and overall balance.
2.  **Custom Financial Queries:** Ask specific questions about your finances through WhatsApp, such as "What were my expenses on groceries last month?" and receive a detailed report.
3.  **Transaction Tracking:** Record your expenses and incomes through a WhatsApp chat, and automatically save them to your Postgres database. The workflow validates the input and confirms the insertion.

## How it works:

1.  **Daily Report Generation (Scheduled):**
    *   The workflow starts daily at 8 AM, triggered by "Daily 8AM Trigger".
    *   "Build Daily Report Query" uses an AI agent to create a Postgres query for a daily financial report.
    *   "Transform Query for Postgres" converts the query into a format suitable for Postgres.
    *   "Execute Daily Report Query" runs the query against the Postgres database.
    *   "Build Daily Financial Summary" uses an AI agent to summarize the data from the Postgres query.
    *   "WhatsApp: Send Daily Report" sends the daily financial summary to your WhatsApp number.
2.  **Custom Report Generation (On-Demand):**
    *   "Incoming WhatsApp Trigger" listens for incoming messages on WhatsApp.
    *   "Message Intent Classifier" determines the user's intent (e.g., request for custom report, transaction tracking, or simple question).
    *   If the intent is to query data, "Route by Intent" directs the flow to "SQL Query Builder"
    *   "SQL Query Builder" allows the user to build a custom query using natural language.
    *   "Transform Custom Query for Postgres" prepares the query for Postgres execution.
    *   "Execute Custom Report Query" executes the custom query in the Postgres database.
    *   "Format Custom Query Results" transforms the data into a readable format.
    *   "Convert Report to CSV" converts the report to CSV format.
    *   "Build Custom Financial Summary" uses an AI agent to summarize the custom query results.
    *   "WhatsApp: Send Custom Report" sends the custom report to your WhatsApp number.
3.  **Transaction Tracking (On-Demand):**
    *   If the user's intent is to log a transaction through WhatsApp, the flow is directed to "Parse & Validate Transaction."
    *   "Parse & Validate Transaction" extracts and validates transaction details (amount, category, date, etc.) using an AI agent.
    *   "Split Transaction Lines" splits the transaction into individual lines.
    *   "Format Transaction JSON" converts the transaction data into JSON format.
    *   "Validate Transaction Fields" performs further validation of the transaction fields.
    *   "Insert Transaction into DB" inserts the validated transaction data into the Postgres database.
    *   "Build Confirmation Message" uses an AI agent to create a confirmation message.
    *   "WhatsApp: Send Transaction Confirmation" sends the confirmation message to your WhatsApp number.
4.  **Simple Conversation (On-Demand):**
    *   If the user's intent is for a normal conversation, the flow is directed to "simple conversation".
    *   "simple conversation" uses an AI agent to create a message.
    *   "WhatsApp: Normal Conversation" sends the message to your WhatsApp number.

## Services:

*   WhatsApp
*   PostgreSQL
*   OpenRouter (LLM Provider)

## Hashtags:

#n8n #automation #finance #whatsapp #AI

# Daily order report AI agent using Supabase

## Use cases:

- **Daily Sales Reporting:** Automatically generate and email a daily summary of new e-commerce orders to stakeholders, providing insights into sales performance.
- **Order Monitoring:** Keep track of recent orders, customer details, and product information to identify trends or potential issues.
- **Executive Dashboard Updates:** Provide executives with a concise overview of the previous day's sales activity, highlighting key metrics and individual order details.

## How it works:

1.  **Schedule Trigger (Daily 8am):** The workflow starts automatically at 8:00 AM every day based on the defined timezone
2.  **Set Sender Email:** Sets the recipient email address for the daily report using the "Set" node. The default value is "setEmailHere" which should be configured.
3.  **AI Agent:** Orchestrates the entire process using a Large Language Model.
    *   It is instructed to retrieve data using specific tools: `Get Orders`, `Get Order Items`, `Get Clients`, and `Get Products`.
    *   It filters for orders placed within the last 24 hours.
    *   It generates a summary including the total number of new orders and total revenue.
    *   It creates a detailed list of each order with ID, date, client name, total value, and product details.
    *   It then sends the generated summary via email using the `Send Gmail Summary` tool.
4.  **Supabase Tools (Get Orders, Get Order Items, Get Clients, Get Products):** These nodes query a Supabase database to retrieve necessary data for generating the report. The "limit" parameter for these nodes seems to be handled by the AI Agent.
5.  **Gmail Tool (Send Gmail Summary):** Sends the generated order summary via email to the configured recipient.
6.  **OpenAI Chat Model:** powers the AI agent, using the `gpt-4.1` model

## Services:

-   Supabase: Database to store orders, order items, clients, and products data.
-   Gmail: Email service for sending the daily order summary.
-   OpenAI: Powers the AI Agent to generate the report

## Hashtags:

#n8n #automation #ecommerce #dailyreport #supabase #openai

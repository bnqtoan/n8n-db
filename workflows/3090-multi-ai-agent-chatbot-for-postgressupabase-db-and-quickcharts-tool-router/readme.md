# ✨📊Multi-AI Agent Chatbot for Postgres/Supabase DB and QuickCharts + Tool Router

## Use cases:

1.  **Data Visualization Chatbot:** Allow users to ask questions about data stored in a Postgres or Supabase database and receive automatically generated charts as visual responses. For example, a user could ask, "What are the top 5 products by sales this month?" and receive a bar chart showing the results.

2.  **Database Query Assistant:** Enable users to query a database using natural language. The workflow translates the natural language query into SQL, executes it against the database, and returns the results in a readable format.

3.  **Automated Reporting:** Generate regular reports with charts based on database data. This can be scheduled to run automatically and deliver insights to stakeholders.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a chat message is received (e.g., via a webhook).

2.  **Primary AI Agent:** The primary AI agent (using `gpt-4o-mini`) receives the chat input and uses tools to formulate a response. The agent is configured with a system message that instructs it to use available tools.

3.  **Tool Selection:** The primary AI agent can choose between two tools:
    *   `query_database_tool`: used to query the Postgres/Supabase database.
    *   `generate_chart_tool`: used to generate a chart with QuickChart.

4.  **Tool Agent Router:** Based on the selected tool, the workflow routes to the corresponding secondary agent.

5.  **Secondary Postgres Agent:** If the `query_database_tool` is selected:
    *   The secondary Postgres agent formulates a SQL query based on the user's input.
    *   The SQL query is executed against the Postgres/Supabase database.
    *   The results are returned to the primary AI agent.

6.  **Secondary QuickChart Agent:** If the `generate_chart_tool` is selected:
    *   The secondary QuickChart agent (using `gpt-4o-mini`) receives the user's prompt and the database records.
    *   It generates a JSON object representing a Chart.js configuration.
    *   The JSON object is used to create a URL for QuickChart.io.
    *   An HTTP request is made to QuickChart.io to generate the chart image.
    *   The URL of the generated chart is returned to the primary AI agent.

7.  **Chat Memory:** The workflow uses Postgres Chat Memory to store the conversation history, allowing the AI agents to have context for follow-up questions.

8.  **Output:** The final output, including the database query results and/or the QuickChart URL, is returned to the user (details of where is not specified in the JSON workflow definition)

## Services:

*   Postgres/Supabase database
*   OpenAI API
*   QuickChart.io

## Hashtags:

#n8n #automation #workflow #chatbot #AI #Postgres #Supabase #QuickChart #DataVisualization

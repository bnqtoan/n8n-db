# Translate questions about e-mails into SQL queries and run them

## Use cases:
1.  **Email Data Analysis:** Allows users to query their email data using natural language, such as "find all emails from John about the budget." The workflow translates the query into SQL, executes it, and returns the results.
2.  **Email Thread Insights:** Helps users quickly extract insights from specific email threads by asking questions like "find the latest email in thread 123".
3.  **Ad-hoc Reporting:** Enables users to generate custom reports on their email data without needing SQL knowledge, for instance, "show me all emails received yesterday".

## How it works:
1.  **Trigger:** The workflow is initiated either via a chat trigger (e.g., a chatbot interface) or a manual trigger, accepting a natural language query.
2.  **Schema Loading:** It checks for a local file containing the database schema. If the file doesn't exist, it connects to a Postgres database, extracts the schema of the `emails_metadata` table (or another table name if provided), and saves it as a JSON file.
3.  **Query Generation:** The natural language query and database schema are passed to an AI Agent (powered by Ollama Chat Model), which uses a prompt to generate a SQL query. The prompt instructs the AI to adhere to the provided schema, use appropriate SQL operators, and output only the raw SQL statement.
4.  **Query Execution:** The generated SQL query is executed against the Postgres database. Before execution, the workflow ensures the query ends with a semicolon.
5.  **Result Formatting:** The results from the SQL query are formatted into a readable table.
6.  **Output:** Finally, the workflow combines the query result and chat answer and provides the formatted SQL results or an empty response if no results are found.

## Services:
*   Postgres
*   Ollama Chat Model

## Hashtags:
#n8n #automation #SQL #email #database

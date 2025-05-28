# Generate SQL queries from schema only - AI-powered

## Use cases:

1.  **Self-service data exploration:** Enable non-technical users to query a database using natural language, without needing to write SQL or understand the database schema directly.
2.  **Rapid prototyping of SQL queries:** Quickly generate SQL queries for different analytical tasks based on a database schema, and then refine and execute them.
3.  **Educational tool for learning SQL:** Provide a tool where users can input natural language questions and see the corresponding SQL queries generated, aiding in understanding SQL syntax and database concepts.

## How it works:

This workflow automates the generation of SQL queries based on natural language input, leveraging the power of AI.

1.  **Database Schema Extraction (Run Once):**
    *   The "When clicking 'Test workflow'" trigger starts the process.
    *   "List all tables in a database" node fetches all the tables from a specified MySQL database.
    *   "Extract database schema" node retrieves the schema (column names, data types) for each table.
    *   "Add table name to output" adds the table name to the schema information.
    *   "Convert data to binary" converts the schema data to JSON format.
    *   "Save file locally" saves the schema to a local JSON file (`./chinook_mysql.json`).

2.  **Chat-Based Query Generation (On Every Chat Message):**
    *   The "Chat Trigger" node receives a natural language question via a webhook.
    *   "Load the schema from the local file" node reads the database schema from the local JSON file.
    *   "Extract data from file" converts the JSON file content into JSON format.
    *   "Combine schema data and chat input" node combines the schema information and the user's question into a single data structure.
    *   "AI Agent" (powered by OpenAI) uses the combined data to generate an SQL query. The system prompt is designed to help the Agent to use only the database schema to generate SQL queries.
    *   "Extract SQL query" node extracts the generated SQL query from the AI Agent's response using a regular expression.
    *   "Check if query exists" node checks if the agent's response contains an SQL query.

3.  **SQL Execution and Output:**
    *   If an SQL query is generated, the "Run SQL query" node executes the query against the MySQL database.
    *   "Format query results" node formats the output of the SQL query into a readable format (table).
    *   "Combine query result and chat answer" node combines the AI agent's response and the SQL query result for a comprehensive output.
    *   "Prepare final output" node prepares the final output, combining both the chat answer and the formatted SQL result and output it.
    *   If no query is generated, only the agent's answer is output.

## Services:

*   MySQL: Interacts with a MySQL database to retrieve schema information and execute queries.
*   OpenAI: Leverages the OpenAI API (specifically the Chat Model) to generate SQL queries from natural language input.

## Hashtags:

#n8n #automation #SQL #AI #database

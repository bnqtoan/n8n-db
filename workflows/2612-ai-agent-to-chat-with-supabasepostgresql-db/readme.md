# AI Agent to Chat with Supabase/PostgreSQL DB

## Use cases:

- **Data Analysis for Non-Technical Users**: Allows users without SQL knowledge to retrieve and analyze data from a Supabase database using natural language queries.
- **Automated Reporting**: Enables the creation of automated reports and summaries by querying the database and presenting the results in a user-friendly format.
- **Conversational Data Exploration**: Facilitates interactive data exploration, where users can ask follow-up questions and refine their queries based on the AI agent's responses.

## How it works:

1.  **Chat Trigger**: The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  **AI Agent**: The "AI Agent" node, powered by Langchain, processes the user's input and determines the appropriate action. It uses OpenAI's language model and tools.
3.  **Tool Selection**: The AI Agent can use 3 tools:
    *   **DB Schema**: Retrieves a list of available tables in the PostgreSQL database.
    *   **Run SQL Query**: Executes custom SQL queries on the database to fetch, aggregate, and analyze data based on the user's request.
    *   **Get table definition**: Get the definitions of a specific table.
4.  **SQL Query Execution**: If the AI agent determines that a SQL query is needed, the "Run SQL Query" node executes the query against the Supabase database.
5.  **Response Generation**: The AI Agent then formulates a response to the user based on the query results or the database schema information.
6.  **Chat Model**: OpenAI Chat Model receive all information and sends the message.

## Services:

-   **Supabase**: Provides the PostgreSQL database.
-   **OpenAI**: Powers the AI agent for natural language processing and SQL query generation.

## Hashtags:

#n8n #automation #AI #database #PostgreSQL #Supabase #OpenAI #Langchain

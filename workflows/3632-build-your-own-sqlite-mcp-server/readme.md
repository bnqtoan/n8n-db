# SQLite MCP Server

## Use cases:

- **Business Intelligence:** Allow a large language model (LLM) or agent to query and analyze business data stored in a SQLite database to gain insights.
- **Automated Data Management:** Enable an agent to create, update, and read records in a SQLite database based on user requests or predefined rules.
- **Chatbot Integration:** Integrate a chatbot with a SQLite database, allowing users to interact with the data through natural language.

## How it works:

This workflow creates an MCP (Model Context Protocol) server that allows an agent to interact with a SQLite database. It works as follows:

1.  **MCP Server Trigger:** The workflow starts with a "SQLite MCP Server" node, which listens for requests from an MCP client (e.g., Claude Desktop).
2.  **Tool Definitions:** The workflow defines several tools (ListTables, DescribeTables, CreateRecords, UpdateRows, ReadRows) that the agent can use to interact with the database.
    *   `ListTables`: Returns a list of available tables in the SQLite database.
    *   `DescribeTables`: Returns the schema of a specified table.
    *   `CreateRecords`: Creates a new record in the specified table.
    *   `UpdateRows`: Updates existing records in the specified table based on specified criteria.
    *   `ReadRows`: Reads records from the specified table based on specified criteria.
3.  **Operation Routing:** The `When Executed by Another Workflow` node receives request with operation name and data (`tableName`, `values`, `where`). The "Operation" Switch node routes the request to the correct handler (Read, Insert, or Update) based on the `operation` parameter.
4.  **Data Handling:**  The request is validated and the provided parameters are used to perform the corresponding operation in SQLite Database.
5.  **SQL Execution:** Code nodes ("CreateRecord", "UpdateRecord", "ReadRecords") dynamically construct and execute SQL queries based on the provided parameters. This helps prevent SQL injection attacks. The data operation is performed on `/home/node/test.db`.
6.  **Response:** The results of the query are then sent back to the MCP client.

## Services:

-   **SQLite:** A lightweight disk-based database.
-   **MCP (Model Context Protocol):** A protocol enabling structured interactions with models and tools.

## Hashtags:

#n8n #automation #workflow #SQLite #MCP #database #LLM #agent

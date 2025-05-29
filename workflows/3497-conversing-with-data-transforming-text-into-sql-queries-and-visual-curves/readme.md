# Conversing with Data: Transforming Text into SQL Queries and Visual Curves

## Use Cases:

- **Data Exploration through Natural Language:** Allow users to ask questions about their database in plain English and receive SQL queries and visual representations of the data as answers.
- **Automated Report Generation:** Generate reports with data visualizations by simply asking questions about the data, automating a process that typically requires manual SQL querying and chart creation.
- **Interactive Data Dashboards:** Create interactive dashboards where users can dynamically explore data by asking questions and seeing the results visualized in real-time.

## How it Works:

1.  **Data Input:** The workflow is triggered either manually or via a chat trigger, receiving a user's question.
2.  **Schema Extraction:** It fetches the database schema using PostgreSQL nodes and converts it into a JSON format, storing it in a local file.
3.  **AI Agent Interaction:** The user's question is combined with the database schema and sent to an AI Agent node (Langchain). This AI agent, powered by a DeepSeek chat model, transforms the question into a SQL query. A memory buffer window is used to keep track of the conversation.
4.  **SQL Execution:** The generated SQL query is then executed against the PostgreSQL database.
5.  **Data Visualization:** The query results are formatted and passed to another AI Agent which is prompted to provide a plot related to the SQL query, based on a structured output parser.
6.  **Final Output:** Finally, The visual curve information is combined with the query answer and provided to the user.

## Services:

-   PostgreSQL: Interacts with a PostgreSQL database to extract schema information and execute SQL queries.
-   Langchain: Framework to create AI agents.
-   Deepseek LLM: AI language model used to generate SQL queries and other related information.

## Hashtags:

#n8n #automation #SQL #AI #DataVisualization

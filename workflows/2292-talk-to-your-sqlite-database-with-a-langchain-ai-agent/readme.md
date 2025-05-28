# SQL agent with memory

## Use cases:

- **Interactive Data Exploration:** Allows users to ask questions about a SQL database in natural language and receive answers based on the data. For example, asking "What are the top 5 best selling music albums?".
- **Automated Report Generation:** Can be used to generate reports or summaries from a SQL database based on specific prompts. For example, generating a monthly sales report for a music store.
- **Database Schema Understanding:** Helps users understand the structure and content of a SQL database by answering questions about tables, columns, and relationships. For example, asking "Please describe the database".

## How it works:

The workflow is divided into two main parts: one for setting up the database and another for interacting with it using natural language.

1.  **Database Setup (Run Once):**
    *   A manual trigger starts the workflow when you click "Test workflow".
    *   It downloads a sample SQLite database (`chinook.zip`) from a specified URL.
    *   The zip file is extracted.
    *   The extracted database file (`chinook.db`) is saved locally.

2.  **Chat Interaction (On Every Message):**
    *   A "Chat Trigger" node listens for incoming chat messages (presumably from a user).
    *   The local SQLite database (`chinook.db`) is loaded.
    *   The chat input is combined with the loaded database file for the AI Agent.
    *   An "AI Agent" uses the LangChain SQL Agent to interact with the database:
        *   An OpenAI Chat Model is used for generating SQL queries and interpreting results.
        *   Window Buffer Memory provides a short-term memory of previous interactions, allowing for contextual conversations.
    *   The Agent formulates SQL queries based on the chat input, executes them against the database, and returns the results in natural language.

## Services:

*   **OpenAI:** Used via the OpenAI Chat Model node for generating SQL queries and interpreting results.
*   **SQLite:** Interacts with a SQLite database file.

## Hashtags:

#n8n #automation #SQL #LangChain #OpenAI

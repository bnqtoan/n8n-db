# My workflow 4

## Use cases:

*   **AI-Powered Chatbot:** Create a chatbot that can answer user questions and interact with PostgreSQL databases to provide relevant information.
*   **Database Query Assistant:** Assist users in formulating and executing PostgreSQL queries through natural language, simplifying database interactions.
*   **Automated Data Retrieval:** Automatically retrieve and present data from a PostgreSQL database based on user input received via a chat message.

## How it works:

This workflow creates an AI agent that interacts with a PostgreSQL database based on chat messages.

1.  **When chat message received:** The workflow starts when a chat message is received.
2.  **AI Agent:** The AI Agent node processes the chat message. It uses a Groq Chat Model for language processing, Chat History for memory, and PostgreSQL tools for interacting with the database.
3.  **Groq Chat Model:** Provides the language model capabilities for the AI agent.
4.  **Chat History:**  Stores the chat history to provide context for the AI agent's responses.
5.  **PostgreSQL:** This node allows the AI agent to query a PostgreSQL database.
6.  **PostgreSQL Schema & Definition:** Provides the AI Agent with the Database definitions for better processing.

The AI agent can use the PostgreSQL database to answer questions, retrieve data, or perform other tasks based on the chat message.

## Services:

*   **Groq:** Provides the Chat Model.
*   **PostgreSQL:** The database used for data retrieval and interaction.

## Hashtags:

#n8n #AI #Chatbot #PostgreSQL #Automation

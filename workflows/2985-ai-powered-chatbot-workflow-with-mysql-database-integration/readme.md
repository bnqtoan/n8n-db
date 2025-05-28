# AI Chatbot with MySQL Integration

## Use cases:

- **Database-Driven Customer Support:**  A chatbot can answer customer queries by retrieving information from a MySQL database, providing accurate and up-to-date responses.
- **Intelligent Data Retrieval:** Users can ask natural language questions, and the chatbot will query a MySQL database to fetch and present the relevant data.
- **Automated Report Generation:** The chatbot can be used to generate reports by querying a MySQL database and summarizing the results.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received (`When chat message received` node).
2.  **AI Agent Initialization:** The incoming message is fed to an AI Agent (`AI Agent` node).
3.  **Memory Management:** The `Chat History` node retains past conversation context to provide more relevant and accurate responses.
4.  **Language Model Processing:** The `Groq Chat Model` processes the input and generates a response.
5.  **MySQL Interaction**: The AI Agent uses MySQL tool to connect to and extract relevant information from MySQL database (`MySQL`, `MySQL Schema`, `MySQL Definition` nodes).
6.  **Intelligent Response:** The AI Agent uses all its tools and memory to generate an appropiate answer to the user.

## Services:

-   MySQL
-   Groq

## Hashtags:

#n8n #automation #chatbot #ai #mysql

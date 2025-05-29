# e-mail Chatbot with both semantic and structured RAG, using Telegram and Pgvector

## Use cases:

- **E-mail Information Retrieval:** Users can ask questions about their e-mails via Telegram, and the bot will search both a structured SQL database and vectorized embeddings to provide accurate and contextually relevant answers. For example, "What were the main topics discussed in meetings last week?"
- **Interview Preparation:** Candidates can use the bot to quickly find e-mails related to upcoming interviews, including dates, times, and interviewer information. For instance, "What time is my interview tomorrow?"
- **Email Database Summarization:** Users can request summaries or specific information contained in their e-mail communications, leveraging the bot's ability to combine structured data and semantic understanding. For example, "Summarize the key points from e-mails with John Doe about project X."

## How it works:

1.  **Telegram Trigger/Chat Trigger:** The workflow starts when a message is received either via a Telegram bot or n8n's chat interface.
2.  **Generate Session ID:** Create a session ID for the message based on the message or reply to message ID.
3.  **AI Agent:** An AI Agent powered by Langchain receives the user's query. It's configured to use two tools: "email_vector_search" (PGVector Store for semantic search) and "email_sql_search" (an external workflow that translates natural language into SQL queries). The agent is designed to leverage both the vectorized embeddings for semantic understanding and the structured SQL data for precise information.
4.  **Postgres PGVector Store:** This node uses the Langchain PGVector integration to retrieve relevant e-mail embeddings based on the user's query, using vector similarity search.
5.  **Call the SQL composer Workflow:** This node calls another n8n workflow (Translate questions about e-mails into SQL queries and run them).
6.  **Simple Memory:** Stores the conversation context
7.  **OpenAI Chat Model:** (although ollama-m4pro credentials are used), uses a language model to generate a coherent and informative response based on the combined search results.
8.  **Came from Telegram?** Checks where the message was originated.
9.  **Beautify Chat Response:** Set node that assign output from agent to "output" variable.
10. **Split Text into Chunks:** Code node to split the text in multiple chunks.
11. **Loop Over Items:** Loops over the array created in the last step.
12. **Escape Markdown:** Escapes special Markdown characters to avoid formatting issues when sending the response to Telegram.
13. **Respond on Telegram in Batches:** Sends the formatted response back to the user via the Telegram bot or in n8n's chat interface. The response is sent in batches if it exceeds Telegram's message size limit.

## Services:

-   **Telegram:** Used for receiving user queries and sending responses.
-   **PostgreSQL with PGVector:** Used as a vector database to store e-mail embeddings for semantic search.
-   **Ollama:** Used for the embedding model.
-   **Ollama/OpenAI Chat Model:** Used for generating responses.
-   **Translate questions about e-mails into SQL queries and run them Workflow:** Used as the email_sql_search tool.

## Hashtags:

#n8n #automation #chatbot #emailsearch #langchain #rag

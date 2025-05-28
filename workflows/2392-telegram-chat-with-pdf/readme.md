# Telegram RAG pdf

## Use cases:

- **PDF Document Q&A via Telegram:** Users can send a PDF document to a Telegram bot and then ask questions about its content directly within the Telegram chat. The bot uses the document to provide accurate answers.
- **Knowledge Base Population and Query:** Automatically ingest PDF documents sent via Telegram into a Pinecone vector database to build a searchable knowledge base. Users can then query this database via Telegram.
- **Automated Information Retrieval:** Use the bot to quickly retrieve information from large PDF documents without manually searching through them.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a message is received via Telegram.
2.  **Check If is a document:** Verifies if the received message includes a document.
3.  **Document processing:** If the message contains a PDF document:
    *   **Telegram get File:** Retrieves the PDF file from Telegram using the file ID.
    *   **Change to application/pdf:** Ensures the binary data is correctly labeled as "application/pdf".
    *   **Embeddings OpenAI:** Generates embeddings for each chunk of text in order to provide context in semantic searches.
    *   **Pinecone Vector Store:** Inserts the document content into Pinecone in a vector database, after the document is embedded by an AI
    *   **Limit to 1:** Limits the process to 1, to avoid timeouts
    *   **Telegram Response about Database:** Sends a confirmation message back to the Telegram chat, indicating the number of pages saved.

4.  **Question Answering:** If the message is a question:
    *   **Groq Chat Model:** Uses Groq Chat Model to process the message.
    *   **Vector Store Retriever:** Retrieves relevant text chunks from the Pinecone vector database based on the user's question.
    *   **Question and Answer Chain:** Uses the retrieved information to answer the question, and retrieves context from Groq
    *   **Telegram Response:** Sends the answer back to the Telegram chat.
5.  **Error Handling:** Includes error handling to catch and log issues, sending an error message to Telegram in case of failures.

## Services:

-   Telegram API
-   OpenAI API
-   Pinecone
-   Groq

## Hashtags:

#n8n #automation #TelegramBot #PDF #RAG

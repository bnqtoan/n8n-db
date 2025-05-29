# RAG AI Agent with Milvus and Cohere

## Use cases:

- **Automated Document Q&A:** Use this workflow to automatically answer questions based on the content of PDF documents stored in a Google Drive folder. Whenever a new document is added, it is processed and made available for querying via a chat interface.
- **Chatbot for Internal Knowledge Base:** Build a chatbot that can access and retrieve information from a collection of company documents (e.g., policies, procedures, training materials) stored as PDFs.
- **Research Assistant:** Create a system that helps researchers quickly find relevant information within a large collection of research papers or articles stored in Google Drive.

## How it works:

1.  **Watch New Files (Google Drive Trigger):** Monitors a specific Google Drive folder for new PDF files.
2.  **Download New (Google Drive):** Downloads the newly added PDF file.
3.  **Extract from File:** Extract the content from the downloaded PDF file.
4.  **Embeddings Cohere:** Generates embeddings for text chunks using Cohere's `embed-multilingual-v3.0` model.
5.  **Insert into Milvus:** Inserts the document chunks and their corresponding embeddings into a Milvus vector store for efficient similarity search.
6.  **When chat message received (Chat Trigger):** Listens for incoming chat messages to initiate the query process.
7.  **Retrieve from Milvus:** Searches the Milvus vector store for the most relevant document chunks based on the user's query, using Cohere embeddings.
8.  **OpenAI 4o:** Use OpenAI's `gpt-4o` model to generate final answer.
9.  **RAG Agent:** Uses the retrieved document chunks and language model to formulate a response to the user's query.
10. **Memory:** Using a buffer memory windows, to track conversations history.

## Services:

-   Google Drive
-   Cohere
-   Milvus
-   OpenAI

## Hashtags:

#n8n #RAG #AI #Milvus #Cohere #OpenAI #Chatbot #Automation #VectorDatabase

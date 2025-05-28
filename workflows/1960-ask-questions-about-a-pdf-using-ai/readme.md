# Chat with Pinecone Vector Store Workflow

## Use cases:

- **Document Q&A:** Allow users to ask questions about the content of a specific document (e.g., a whitepaper) stored in Google Drive, with the answers generated using a Pinecone vector store and OpenAI.
- **Data loading into Pinecone:** Automate the process of loading and indexing data from a Google Drive document into a Pinecone vector database for efficient retrieval and querying.
- **Chatbot Integration:** Integrate a chatbot that can answer user queries based on information stored in a Pinecone database, triggered by incoming chat messages.

## How it works:

This workflow automates the process of loading data from a Google Drive file into a Pinecone vector store, and then answering questions about that data via chat.

1.  **Trigger 1 (Load Data):** The workflow starts when the "Test Workflow" button is clicked.
2.  **Set Google Drive File URL:** Sets the URL of the Google Drive file to be processed.
3.  **Google Drive:** Downloads the specified file from Google Drive.
4.  **Recursive Character Text Splitter**: Splits the text into chunks.
5.  **Default Data Loader**: Loads the chunks, default binary
6.  **Embeddings OpenAI:** Generate vector embeddings for each data chunk using OpenAI's embedding model.
7.  **Pinecone Vector Store:** Inserts the data chunks and their embeddings into a Pinecone vector store (index name "test-index"). The namespace is cleared before inserting new data.
8.  **Trigger 2 (Chat):** The workflow also listens for incoming chat messages.
9.  **Embeddings OpenAI1:** Embeds the incoming chat message.
10. **Pinecone Vector Store1:** Retrieves relevant chunks from the Pinecone vector store based on the embedded chat message.
11. **OpenAI Chat Model:**  Uses the GPT chat model, along with the retrieved context from Pinecone, to generate an answer to the user's question.
12. **Question & Answer:** Passes the tool and embeddings to the main agent.
13. **Returns answer:** The answer is returned to the user.

## Services:

-   **Google Drive:** Used to download the document.
-   **Pinecone:** Vector database used for storing and retrieving document chunks.
-   **OpenAI:** Used for generating embeddings and answering questions.

## Hashtags:

#n8n #automation #vectorstore #pinecone #openai #chatbot #documentqa

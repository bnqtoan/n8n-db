# Local File Search Workflow

## Use Cases

- **Automated Document Indexing:** Automatically index and create embeddings for documents (e.g., bank statements, contracts) stored in a local directory for efficient searching and retrieval.
- **AI-Powered Document Q&A:** Create a Q&A system that can answer questions based on the content of documents in a specific folder, leveraging the power of large language models.
- **Real-time Document Synchronization:** Keep a vector database (Qdrant) synchronized with a local file system, ensuring that document updates, additions, and deletions are reflected in the vector store for accurate search results.

## How it works

1.  **File Monitoring:** The workflow starts with a "Local File Trigger" node, which monitors a specified directory for file changes (additions, modifications, or deletions).
2.  **Variable Setting:** When a file event occurs, the "Set Variables" node extracts relevant information, such as the directory, the file path, and the type of event. It also sets a variable for the Qdrant collection name.
3.  **Event Handling:** The "Handle File Event" node uses a switch to determine the type of file event (created, changed, or deleted) and routes the flow accordingly.
    *   **File Deletion:** If a file is deleted, the workflow searches the Qdrant vector database for the corresponding vector point and deletes it to maintain synchronization.
    *   **File Change:** If a file is modified, the workflow searches for the existing vector point, deletes it, and then processes the file as if it were newly added.
    *   **File Addition:** If a file is added, the workflow reads the file content using the "Read File" node.
4.  **Embedding Generation:** The "Prepare Embedding Document" node preprocesses the file content and prepares it for embedding generation. The "Embeddings Mistral Cloud" node generates embeddings (vector representations) of the file content using the Mistral AI cloud service.
5.  **Vector Storage:** The "Qdrant Vector Store" node stores the generated embeddings in the Qdrant vector database, along with metadata for filtering and retrieval.
6.  **Question Answering Setup:** A "Chat Trigger" node is used to initiate a chat interface. User questions are then processed by a "Question and Answer Chain" node which uses a "Vector Store Retriever" configured to use the Qdrant vectorstore and then the "Mistral Cloud Chat Model" to return the final answer.

## Services

*   **Mistral AI Cloud:** Used for generating embeddings and as the Large Language Model (LLM) for the Question and Answer chain.
*   **Qdrant:** A vector database used to store and manage document embeddings for similarity search and retrieval.

## Hashtags

#n8n #automation #vectorDatabase #Qdrant #MistralAI #documentManagement #RAG

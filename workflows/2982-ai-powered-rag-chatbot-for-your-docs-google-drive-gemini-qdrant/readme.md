# 🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant

## Use cases:

- **Document Q&A:** Answer user questions based on the content of documents stored in Google Drive, providing accurate and context-aware responses.
- **Knowledge Management:** Create a searchable knowledge base from Google Drive documents, allowing users to quickly find information.
- **Customer Support:** Develop a chatbot that can answer customer queries by accessing relevant documentation stored in Google Drive.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or via a webhook when a chat message is received.
2.  **Google Drive File Retrieval:** The workflow retrieves files from a specified Google Drive folder using the "Find File Ids in Google Drive Folder" node.  The folder ID is set in the "Google Folder ID" node.
3.  **File Processing Loop:** The workflow iterates through each file found in Google Drive.
4.  **Download and Extract:** For each file, the workflow downloads the file content using the "Download File From Google Drive" node and extracts the text using the "Get File Contents" node.
5.  **Metadata Extraction:** The "Extract Meta Data" node extracts relevant metadata from the document using a Large Language Model (LLM).
6.  **Data Chunking:** The "Token Splitter" node splits the document content into smaller chunks.
7.  **Embedding Generation:** Embeddings are generated from the text chunks using the "text-embeddings-3-large" node.
8.  **Qdrant Vector Store Upsert:** The workflow inserts the embeddings and associated metadata into a Qdrant vector store using the "Qdrant Vector Store" node.
9.  **Chat Interface:** User queries are processed by the "AI Agent" node, which retrieves relevant context from the Qdrant vector store via the "Qdrant Vector Store Tool" node and uses Google Gemini to generate responses.
10. **Human Verification (Deletion):** Includes a human-in-the-loop approval process via Telegram to verify the deletion of points from the Qdrant vector store.
11. **Chat History:** Chat history is stored in Google Docs.

## Services:

*   Google Drive
*   Google Gemini
*   Qdrant
*   OpenAI
*   Telegram
*   Google Docs

## Hashtags:

#n8n #RAG #chatbot #automation #googledrive #gemini #qdrant

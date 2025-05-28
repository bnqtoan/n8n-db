# My Workflow

## Use cases:
- **Document Q&A:** Allows users to ask questions about the content of a document (e.g., a whitepaper, a report) stored in Google Drive and receive answers based on the document's content.
- **Contextual Chatbot:** Enables building a chatbot that provides responses grounded in the information contained within a specific document, offering more accurate and relevant answers.
- **Information Retrieval:** Facilitates the extraction of specific information from large documents by leveraging vector embeddings and semantic search capabilities.

## How it works:
1.  **Trigger:** The workflow is initiated either manually via "Execute Workflow" button or via a chat message using the "When chat message received" trigger.
2.  **Document Loading (Manual trigger):** If the workflow is triggered manually, it starts by setting the file URL in Google Drive, downloading a file (e.g., Bitcoin whitepaper), and loading its data.
3.  **Data Processing (Manual trigger):** The document is split into smaller chunks using the "Recursive Character Text Splitter". Embeddings are generated for each chunk using OpenAI's embeddings.
4.  **Vector Storage (Manual trigger):** The chunks and their embeddings are stored in a Pinecone vector store.
5.  **Query Processing (Chat trigger):** If the workflow is triggered by a chat message, it sets a maximum number of chunks to be retrieved. It uses the user's question to query the Pinecone vector store and retrieves the top matching chunks.
6.  **Context Preparation:** The retrieved chunks are prepared and concatenated into a context string using the "Prepare chunks" node.
7.  **Answer Generation:** The context, along with the user's question, is sent to an OpenAI chat model to generate an answer and identify the relevant chunks.
8.  **Citation Composition:** The workflow composes citations based on the chunks used to generate the answer.
9.  **Response Generation:** Finally, the answer and citations are formatted into a response which can be sent to the user.

## Services:
-   Google Drive
-   OpenAI
-   Pinecone

## Hashtags:
#n8n #automation #chatbot #documentQA #vectorstore

# RAG Workflow For Company Documents stored in Google Drive

## Use cases:

*   **HR Question Answering:** Employees can ask questions about company policies, benefits, or procedures, and the workflow will use the indexed documents to provide accurate answers.
*   **Onboarding New Employees:** New hires can quickly find information about the company, its structure, and internal processes through a conversational interface.
*   **Internal Knowledge Base Search:** Staff can easily search for information within the company's documentation, even if they don't know the exact document name or location.

## How it works:

1.  **Google Drive Monitoring:** The workflow is triggered when a new file is created or an existing file is updated in a specified Google Drive folder.
2.  **Document Download:** The newly created/updated file is downloaded from Google Drive.
3.  **Data Loading and Splitting:** The downloaded file is loaded using the "Default Data Loader". The document is split into smaller chunks using "Recursive Character Text Splitter".
4.  **Embedding Generation:** The text chunks are converted into embeddings using the "Embeddings Google Gemini" node and the Google Gemini API.
5.  **Vector Store Insertion:** The embeddings, along with the corresponding text chunks, are stored in a Pinecone vector database using the "Pinecone Vector Store" node.
6.  **Chat Interface:** The "When chat message received" node triggers when a chat message is sent to the agent.
7.  **AI Agent Execution:** The "AI Agent" receives the user's question and uses "Vector Store Tool" to query relevant documents from the Pinecone database by retrieving relevant documents.
8.  **Retrieval and Response:** The retrieved documents and the user's question are passed to "Google Gemini Chat Model" to generate the final answer.

## Services:

*   Google Drive
*   Google Gemini API (PaLM)
*   Pinecone Vector Database

## Hashtags:

#n8n #RAG #GoogleDrive #Pinecone #Gemini #HRAutomation #KnowledgeBase

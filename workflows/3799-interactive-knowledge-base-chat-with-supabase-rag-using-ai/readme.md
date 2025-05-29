# Google Drive File Ingestion to Supabase for Knowledge Base

## Use Cases

- **Automated Knowledge Base Updates:** Automatically ingest and process files (PDF, TXT, CSV, XLSX, RTF, DOC) uploaded to a specific Google Drive folder, updating a Supabase-based knowledge base with the content.
- **Document Content Indexing and Retrieval:** Extract text from various file types, create embeddings, and store them in a Supabase vector store for efficient semantic search and retrieval.
- **Chatbot Integration:** Use the ingested knowledge to power a chatbot that can answer questions based on the content of the documents in Google Drive.

## How it Works

1.  **Trigger:** The workflow is triggered when a new file is created or an existing file is updated in a specified Google Drive folder ("File Created" and "Update to File" nodes).
2.  **File Processing Loop:** The "Loop Over Items" node iterates through the files to be processed.
3.  **File Validation:** The "Set File ID" node sets the file ID, then "Validate File" checks if the file exists and routes the workflow.
4.  **Duplicate Check:** The "Check for Duplicates" node queries a Supabase database to check if the file already exists. If a duplicate is found, a notification is sent via Slack ("Slack Duplicate Notification" node).
5.  **Data Extraction and Transformation:**
    *   The "Download File" node retrieves the file content from Google Drive.
    *   The "Switch" node routes the file to the appropriate "Extract from File" node based on the file type (PDF, TXT, CSV, XLSX, RTF, DOC).
    *   For CSV and XLSX files, the "Extract from CSV" and "Extract from XLSX" nodes are used, and their data is aggregated using "Aggregate" and inserted into Supabase tables using "Insert Table Rows".
    *   For text based file types, the content is sent directly to the "Supabase Vector Store".
6.  **Knowledge Base Update:** The extracted data is then summarized using "Summarize" to extract key information, the summarized information is used to then create vector embeddings using the "Embeddings OpenAI" node, which is then saved in the "Supabase Vector Store". The vector store is used to semantically search and retrieve data to provide more accurate answers for a RAG AI agent using the "RAG AI Agent" node.
7.  **Error Handling:** If an error occurs during processing, the "Set Error Type" node sets the error type, and an error notification is sent via Gmail ("Error Notification" node).

## Services

-   Google Drive
-   Supabase
-   OpenAI
-   Gmail
-   Slack (optional, for duplicate notifications)

## Hashtags

#n8n #automation #knowledgebase #googledrive #supabase #rag #openai

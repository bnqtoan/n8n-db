# AI Agent To Chat With Files In Supabase Storage

## Use cases:

- **Automated Document Processing:** Automatically process and vectorize documents stored in Supabase storage, making them searchable and usable for AI-powered applications.
- **AI-Powered Chatbot:** Build a chatbot that can answer questions based on the content of documents stored in Supabase, providing users with quick access to information.
- **Real-time Document Updates:** Keep the vector store synchronized with changes in Google Drive, ensuring the chatbot always has access to the latest information.

## How it works:

This workflow automates the process of indexing documents stored in Supabase Storage and Google Drive, enabling an AI agent to chat with the content of those files. It consists of three main scenarios: processing files from Supabase Storage, processing files from Google Drive upon creation or modification, and handling chat interactions.

**Scenario 1: Adding new files from Supabase storage**

1.  **Get All Files:** Fetches a list of files from a specified Supabase Storage bucket.
2.  **Get All Files:** Retrieves all records from the "files" table in Supabase.
3.  **Aggregate:** Aggregates the data to facilitate comparison with the files fetched from storage.
4.  **Loop Over Items:** Processes each file individually.
5.  **If:** Checks if the file already exists in the Supabase "files" table and if the file name is not ".emptyFolderPlaceholder".
6.  **Download:** Downloads the file from Supabase Storage.
7.  **Upload File:** Uploads the downloaded file to LlamaParse for parsing.
8.  **Get Processing Status:** Checks the parsing status with LlamaParse.
9.  **Is Job Ready?:** Routes the workflow based on the parsing status (PENDING, ERROR, CANCELED, SUCCESS). If parsing is pending the workflow waits. If there is an error the workflow stops.
10. **Get Parsed Data:** Retrieves the parsed data from LlamaParse.
11. **Set Text:** Stores the parsed text content.
12. **Create File record:** Creates a record in the Supabase "files" table with the file's name and storage ID.
13. **Merge Text:** Merges text for Default Data Loader
14. **Insert into Supabase Vectorstore:** Inserts the vectorized document into the Supabase vector store.
15. **Default Data Loader:** Loads data for Recursive Character Text Splitter.
16. **Recursive Character Text Splitter:** Splits text into smaller chunks.
17. **Embeddings OpenAI:** Generates embeddings for text using OpenAI.

**Scenario 2: AI agent**

1.  **Webhook:** Listens for incoming webhook requests (chat messages).
2.  **Edit Fields:** Extracts the session ID and message from the webhook request.
3.  **AI Agent:** Uses the OpenAI Chat Model to generate a response based on the input message and the knowledge base.
4.  **OpenAI Chat Model:** Chooses the OpenAI model.
5.  **Simple Memory:** Buffers conversation history for context.
6.  **Supabase Vector Store:** Retrieves relevant documents from the Supabase vector store.
7.  **Embeddings OpenAI:** Generates embeddings using OpenAI.
8.  **Merge:** Merges the incoming webhook data.

**Scenario 3: Adding new files from Google Drive**

1.  **File Created/Updated:** Triggers when a file is created or updated in a specific Google Drive folder.
2.  **Set File ID:** Sets the file ID and extension.
3.  **Delete Old Doc Rows:** Deletes any existing document rows in Supabase associated with the Google Drive file ID.
4.  **Download File:** Downloads the file from Google Drive.
5.  **Upload File1:** Uploads the downloaded file to LlamaParse for parsing.
6.  **Get Processing Status1:** Checks the parsing status with LlamaParse.
7.  **Is Job Ready?1:** Routes the workflow based on the parsing status (PENDING, ERROR, CANCELED, SUCCESS). If parsing is pending the workflow waits. If there is an error the workflow stops.
8.  **Get Parsed Data1:** Retrieves the parsed data from LlamaParse.
9.  **Set Text3:** Stores the parsed text content.
10. **Create File record1:** Creates a record in the Supabase "files" table with the file's name and Google Drive ID.
11. **Insert into Supabase Vectorstore1:** Inserts the vectorized document into the Supabase vector store.
12. **Default Data Loader1:** Loads data for Recursive Character Text Splitter.
13. **Recursive Character Text Splitter1:** Splits text into smaller chunks.
14. **Embeddings OpenAI3:** Generates embeddings for text using OpenAI.

## Services:

-   Supabase
-   Google Drive
-   OpenAI
-   LlamaParse

## Hashtags:

#n8n #automation #workflow #AI #Supabase

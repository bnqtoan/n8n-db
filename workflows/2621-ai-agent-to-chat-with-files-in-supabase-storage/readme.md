# AI Agent To Chat With Files In Supabase Storage

## Use cases:

1.  **Automated Document Processing:** Automatically process and vectorize new files uploaded to a Supabase storage bucket, making them available for AI-powered querying without manual intervention.
2.  **AI-Powered Customer Support:** Enable a chatbot to answer customer questions by retrieving information from a repository of product manuals, FAQs, and support documents stored in Supabase.
3.  **Knowledge Base Chatbot:** Build a chatbot that can answer questions based on a collection of internal documents, such as company policies, training materials, and project documentation.

## How it works:

This workflow automates the process of adding new files to Supabase storage, extracting their content, vectorizing the data, and storing it in a Supabase vector store for AI-powered querying. Additionally, it includes an AI agent flow that can answer questions based on the vectorized data.

1.  **Fetch File List from Supabase Storage:** Retrieves a list of files from a specified Supabase storage bucket using the "Get All files" node ( Supabase -> HTTP Request)
2.  **Compare and Filter Files:** The files retrieved from storage are compared to the existing list in the Supabase `files` table, managed by the "Aggregate," "Get All Files" (Supabase) and "Loop Over Items" nodes. This excludes duplicates and placeholder files, ensuring only unprocessed files are handled.
3.  **Handle File Downloads:** Downloads new files using detailed storage configurations for public/private access using the "Download" node(HTTP Request).
4.  **File Type Processing:** A "Switch" node directs files to specific processing paths based on their type (PDF or TXT).
    *   PDF files are processed with the "Extract Document PDF" node.
    *   TXT files are directly passed to the next step through "Merge" node.
5.  **Content Chunking:** The "Recursive Character Text Splitter" node breaks large text data into smaller chunks (default 500 tokens) with overlap to retain context.
6.  **Vector Embedding Creation:** The "Embeddings OpenAI" node generates vectorized embeddings for the processed content, including file metadata.
7.  **Store Vectorized Data:** The "Insert into Supabase Vectorstore" node saves the vectorized data into a Supabase vector store.
8. **AI Agent flow**
    * User send the text message ("When chat message received")
    * "AI Agent" node receive the message
    * "Vector Store Tool1" fetchs the content from "Supabase Vector Store" using the embedding generated with "Embeddings OpenAI2" node
    * "OpenAI Chat Model2" node generate the response based on the user text message and fetched content

## Services:

*   Supabase: For storage and database functionalities.
*   OpenAI: For generating embeddings and chat completions.

## Hashtags:

#n8n #automation #Supabase #OpenAI #vectorstore #langchain #AI

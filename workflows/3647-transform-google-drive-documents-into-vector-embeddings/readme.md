# Vector DB Loader from Google Drive

## Use cases:

- **Automated Document Processing for Knowledge Bases:** Automatically process and index documents (PDF, TXT, JSON) stored in a specific Google Drive folder, creating a vector database for semantic search and retrieval.
- **Content Ingestion Pipeline for AI Applications:** Ingest content from Google Drive, convert it into vector embeddings, and store it in a PostgreSQL database for use in AI applications like chatbots or recommendation systems.
- **Scheduled Data Updates for Machine Learning Models:** Regularly update a vector database with new or modified documents from Google Drive to keep machine learning models trained on the latest information.

## How it works:

1.  **Trigger:** The workflow starts either manually (When clicking ‘Test workflow’) or on a schedule (Schedule Trigger).
2.  **Search Google Drive:** It searches a specific Google Drive folder (n8n Workflow JSON Files) for files.
3.  **Loop Through Files:** It iterates through each file found in the folder.
4.  **Download File:** Downloads each file from Google Drive.
5.  **Switch File Type:** Determines the file type (PDF, TXT, JSON) based on its MIME type.
6.  **Extract Content:** Extracts content from the file based on its type, using the appropriate "Extract from" node (Extract from PDF, Extract from Text, or Extract from JSON).
7.  **Text Splitting:** Splits the extracted text into smaller chunks using the Recursive Character Text Splitter.
8.  **Default Data Loader:** Loads default data.
9. **Generate Embeddings:** Creates vector embeddings of the extracted content using OpenAI Embeddings.
10. **Store in Vector Database:** Stores the embeddings and document metadata in a PostgreSQL database (Postgres PGVector Store).
11. **Move File:** Moves the processed file to a "vectorized" folder in Google Drive.

## Services:

-   Google Drive
-   PostgreSQL (with PGVector extension)
-   OpenAI

## Hashtags:

#n8n #automation #googleDrive #vectorDatabase #openai #pgvector

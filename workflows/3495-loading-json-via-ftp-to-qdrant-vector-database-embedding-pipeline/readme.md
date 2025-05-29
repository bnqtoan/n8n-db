# Qdrant Vector Database Embedding Pipeline

## Use cases:

- **Document Semantic Search:** Index a collection of JSON documents stored on an FTP server into a Qdrant vector database. This enables semantic search capabilities, allowing users to find documents based on the meaning of their content rather than keyword matching.
- **AI-Powered Chatbots:** Process data from JSON files to train AI chatbots. The pipeline transforms and indexes the data into a vector database, which the chatbot uses to retrieve relevant information and generate responses.
- **Knowledge Base Creation:** Automate the creation of a knowledge base by extracting information from JSON files, embedding the content, and storing it in a Qdrant vector database. This facilitates efficient information retrieval and analysis.

## How it works:

1. **Trigger:** The workflow starts with a manual trigger node ("When clicking ‘Test workflow’").
2. **List Files:** An FTP node ("List all the files") lists all JSON files in a specified directory on the FTP server.
3. **Loop Through Files:** A "Loop over one item" node iterates through the list of JSON files obtained from the FTP server.
4. **Download File:** For each file, an FTP node ("Downloading item") downloads the JSON file in binary format.
5. **Embeddings OpenAI**: An OpenAI node ("Embeddings OpenAI") generates embeddings from the files.
6. **Default Data Loader:** the "Default Data Loader" node converts JSON files into a document format compatible with embeddings.
7. **Character Text Splitter (Optional):** Splits the content of the JSON document into smaller chunks based on a separator ("chunk_id"). This step might be useful for normalizing the chunk size before embedding.
8. **Store in Vector DB:** The "Qdrant Vector Store" node stores the embedded chunks (with metadata) into a Qdrant vector database for semantic retrieval. The node is configured to insert data in batches of 100.

## Services:

-   **Qdrant:** A vector database used for storing and querying embeddings.
-   **OpenAI:** Provides text embedding models to generate vector representations of text.
-   **FTP:** Used to access and retrieve JSON files from an FTP server.

## Hashtags:

#n8n #automation #vectorDatabase #Qdrant #OpenAI #semanticSearch

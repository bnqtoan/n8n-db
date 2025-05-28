# Store Notion's Pages as Vector Documents into Supabase with OpenAI

## Use Cases:

1.  **Building a Knowledge Base:** Automatically ingest and store content from Notion pages into a Supabase database to create a searchable knowledge base, enabling efficient information retrieval.
2.  **AI-Powered Chatbots:** Use the stored vector embeddings to power AI chatbots. The chatbot can use the embeddings to find the most relevant information in your Notion pages and provide accurate answers to user queries.
3.  **Content Analysis and Insights:** Analyze the content of Notion pages to identify trends, patterns, or important topics using vector embeddings for semantic search and clustering.

## How it works:

This workflow automates the process of extracting content from Notion pages, generating embeddings, and storing them in a Supabase database.

1.  **Notion Page Added Trigger:** The workflow starts when a new page is added to a specified Notion database.
2.  **Retrieve Page Content:** The content of the newly added Notion page is fetched.
3.  **Filter Non-Text Content:** Filters out media content (images and videos) to focus on text.
4.  **Summarize Content:** The remaining text blocks are concatenated into a single text document.
5.  **Create Metadata and Load Content:** Attaches metadata (page ID, creation time, title) to the content.
6.  **Token Splitter:** Splits the text into smaller chunks to optimize embedding generation.
7.  **Generate Embeddings:** OpenAI's API creates vector embeddings for each text chunk.
8.  **Supabase Vector Store:** Stores the original text, metadata, and generated vector embeddings into a Supabase table.

## Services:

*   Notion
*   OpenAI
*   Supabase

## Hashtags:

#n8n #Notion #Supabase #OpenAI #VectorDatabase #Automation #KnowledgeBase

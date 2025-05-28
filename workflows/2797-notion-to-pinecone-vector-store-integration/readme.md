# Prod: Notion to Vector Store - Dimension 768

## Use cases

- **Knowledge Base Indexing:** Automatically index new pages added to a Notion database in a vector store for semantic search and retrieval, allowing users to quickly find relevant information.
- **Chatbot Integration:** Use the vector store to provide context to a chatbot, enabling it to answer user queries based on the content of Notion pages.
- **Personalized Content Recommendations:** Recommend related Notion pages to users based on the semantic similarity of their current page with others in the database.

## How it works

1.  **Notion Page Trigger:** The workflow starts with a "Notion - Page Added Trigger" node, which listens for new pages created in a specific Notion database ("Embeddings").
2.  **Retrieve Page Content:** When a new page is detected, the "Notion - Retrieve Page Content" node fetches the content of the Notion page.
3.  **Filter Non-Text Content:** A "Filter Non-Text Content" node filters out non-text blocks such as images and videos from the retrieved content.
4.  **Concatenate Text Blocks:** The "Summarize - Concatenate Notion's blocks content" node concatenates the text content of all remaining blocks into a single string.
5.  **Create metadata and load content:** The "Create metadata and load content" node prepares metadata related to the Notion page (page ID, creation time, and page title) and loads content to the document.
6.  **Token Splitter:** The "Token Splitter" splits the document into smaller chunks to avoid exceeding the context window limitations of the Gemini model.
7.  **Generate Embeddings:** The "Embeddings Google Gemini" node uses the Google Gemini (PaLM) API to generate embeddings for each chunk of text.
8.  **Store in Vector Store:** Finally, the "Pinecone Vector Store" node stores the generated embeddings and the associated metadata in a Pinecone vector store for efficient similarity search.

## Services

-   **Notion API:** Used to monitor new pages and retrieve their content.
-   **Google Gemini (PaLM) API:** Used to generate embeddings for the text content.
-   **Pinecone:** Used as a vector database to store embeddings and metadata.

## Hashtags

#n8n #automation #Notion #VectorStore #Embeddings

# Agent Milvus tool

## Use cases:

*   **AI-Powered Knowledge Base:** This workflow can be used to create a knowledge base from web articles. An AI Agent can answer question based on the data stored in Milvus.
*   **Research Assistant:** Researchers can use this workflow to ingest articles, and ask an AI assistant about these articles.

## How it works:

1.  **Fetch Essay List**: It fetches a list of essay URLs from a specified webpage.
2.  **Extract Essay Names**: Extracts the URLs to essays from the HTML content using CSS selectors.
3.  **Split Out Into Items**: Splits the extracted essay URLs into individual items for processing.
4.  **Limit to first 3**: Limits the number of essays to the first 3, for faster processing
5.  **Fetch Essay Texts**: For each essay URL, it fetches the content of the essay.
6.  **Extract Text Only**: Extracts the main text content from the fetched HTML, removing unnecessary elements like images and navigation.
7. **Default Data Loader**: Loads the extracted text content into a suitable format for use with Langchain.
8. **Embeddings OpenAI**: uses the OpenAI Embeddings to create vector embeddings from the content, it requires an OpenAI account.
9.  **Milvus Vector Store**: Inserts the extracted text and their embeddings into a Milvus vector database, to store vector embeddings.
10. **Milvus Vector Store as tool**: It configures the Milvus Vector Store as a tool for the AI Agent, allowing it to retrieve relevant information.
11. **OpenAI Chat Model**: Selects the OpenAI Chat Model to use with the Agent.
12. **AI Agent**: This node setup an AI Agent using the data retrieved from the milvus vector store.
13. **When Chat Message Received**: It triggers the workflow when a chat message is received, likely from a user interacting with the AI Agent.

## Services:

*   [Paul Graham's Website](http://www.paulgraham.com/articles.html)
*   Milvus (Vector Database)
*   OpenAI API

## Hashtags:

#n8n #automation #AI #Milvus #KnowledgeBase

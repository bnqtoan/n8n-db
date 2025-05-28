# Chat with GitHub OpenAPI Specification using RAG (Pinecone and OpenAI)

## Use cases:

- **GitHub API Support Chatbot:** Allows users to ask questions about the GitHub API and receive answers based on the official OpenAPI specification.
- **Internal Documentation Assistant:** Helps internal teams quickly find information and understand how to use specific endpoints of the GitHub API.
- **Educational Tool:** Provides a way for developers to learn about the GitHub API by asking natural language questions and getting relevant documentation snippets.

## How it works:

This workflow creates a chatbot that answers questions about the GitHub API using Retrieval-Augmented Generation (RAG) techniques. It consists of two main parts:

1.  **Indexing content in the vector database:**
    - A "When clicking ‘Test workflow’" node triggers the workflow.
    - The "HTTP Request" node fetches the GitHub OpenAPI specification from a given URL.
    - The "Recursive Character Text Splitter" splits the content into smaller chunks.
    - The "Default Data Loader" loads the data.
    - "Generate Embeddings" node generates embeddings for each chunk using OpenAI.
    - The "Pinecone Vector Store" node stores these embeddings in a Pinecone vector database.

2.  **Querying and response generation:**
    - The "When chat message received" node listens for incoming chat messages via webhook.
    - "Generate User Query Embedding" node generates an embedding for the user's query using OpenAI.
    - The "Pinecone Vector Store (Querying)" node searches the Pinecone vector database for relevant chunks based on the query embedding.
    - The "AI Agent" uses "Vector Store Tool" to retrieves the information. It also uses "OpenAI Chat Model" to generate the response.
    - "Window Buffer Memory" node stores previous conversations to keep context of the conversation.
    - The "OpenAI Chat Model1" node generates the final response to the user based on the retrieved information and the system message.

## Services:

-   **GitHub API:** Used to fetch the OpenAPI specification.
-   **OpenAI:** Used for generating embeddings and generating responses.
-   **Pinecone:** Used as a vector database to store and query the OpenAPI specification embeddings.

## Hashtags:

#n8n #automation #RAG #chatbot #OpenAI #Pinecone #GitHubAPI

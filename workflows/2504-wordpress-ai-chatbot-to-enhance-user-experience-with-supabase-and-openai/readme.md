# RAG & GenAI App With WordPress Content

## Use cases:

1.  **Website Chatbot:** Implement a chatbot on your WordPress website that answers user queries based on the site's content. The chatbot uses a Retrieval-Augmented Generation (RAG) approach, fetching relevant content and generating informative responses.
2.  **Content Summarization:** Automatically summarize new or updated WordPress posts and pages for internal use or to provide quick previews for users.
3.  **Knowledge Base Enhancement:** Improve the searchability and accessibility of your WordPress knowledge base by creating embeddings of your content and enabling semantic search capabilities.

## How it works:

This workflow automates the process of creating and updating embeddings for your WordPress website content, enabling a RAG-based GenAI application.

1.  **Initial Embedding (Workflow 1 - triggered manually):**

    *   Retrieves all posts and pages from your WordPress site.
    *   Filters content to include only published and unprotected material.
    *   Converts HTML content to Markdown.
    *   Splits the content into smaller chunks (tokens).
    *   Generates embeddings for each chunk using OpenAI's embedding model.
    *   Stores the embeddings and metadata in a Supabase vector store (documents table).
    *   Logs the workflow execution in a Supabase table (n8n\_website\_embedding\_histories).
2.  **Upsert Embeddings (Workflow 2 - triggered on a schedule):**

    *   Runs periodically to check for updated content.
    *   Retrieves posts and pages modified after the last workflow execution.
    *   Filters content to include only published and unprotected material.
    *   Converts HTML content to Markdown.
    *   Splits the content into smaller chunks.
    *   Generates embeddings for each chunk using OpenAI.
    *   Checks if the document already exists in the Supabase vector store.
    *   If the document exists, deletes the old embedding and inserts the new one.
    *   If it's a new document, inserts the embedding into the Supabase vector store.
    *   Logs the workflow execution.
3.  **Chat Functionality (Workflow 3 - triggered by a webhook):**

    *   Receives chat messages from a website user via webhook.
    *   Retrieves relevant documents from the Supabase vector store based on the chat input using semantic search.
    *   Formats the retrieved documents and chat input.
    *   Sends the formatted input to an OpenAI chat model (AI Agent) to generate a response. The prompt includes system message that forces the response to always include all metadata (url, content\_type, publication\_date, and modification\_date).
    *   Uses Postgres Chat Memory to keep the context of the conversation, for now this is disabled
    *   Responds to the webhook with the generated response.

## Services:

*   WordPress: Retrieves posts and pages.
*   OpenAI: Generates embeddings and chat completions.
*   Supabase: Stores embeddings in a vector store and workflow execution logs.
*   Postgres: stores chat histories

## Hashtags:

#n8n #automation #workflow #RAG #GenAI #WordPress #OpenAI #Supabase #Chatbot

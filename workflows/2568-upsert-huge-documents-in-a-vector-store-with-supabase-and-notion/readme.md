# RAG on living data

## Use cases:

- **Real-time Knowledge Base Updates:** Automatically update a knowledge base stored in Notion and use it to answer questions via a chatbot. This is useful for keeping documentation or FAQs current.
- **Dynamic Chatbot for Internal Support:** Create a chatbot that uses a Notion database as its source of truth, ensuring the support team always has access to the latest information.
- **Automated Content Indexing and Retrieval:** Index content from Notion pages into a vector store, enabling efficient retrieval of relevant information based on semantic similarity.

## How it works:

This workflow automates the process of extracting data from a Notion database, embedding it into a vector store, and using it to answer questions via a chatbot. Here's a breakdown:

1.  **Data Source (Notion):** The workflow is triggered either by a schedule (polling for updates every minute using the "Schedule Trigger" node) or, when enabled, by the "Notion Trigger" when a page is updated in the specified database. The "Get updated pages" node retrieves pages that have been updated within the last minute.
2.  **Data Extraction:** The "Get page blocks" node retrieves all content blocks from the updated Notion pages.
3.  **Data Preparation:** The "Concatenate to single string" node combines the content from the blocks into a single string.
4.  **Vector Embedding:**
    *   The "Delete old embeddings if exist" node deletes any existing embeddings related to the updated Notion page.
    *   The "Token Splitter" node splits the content into smaller chunks.
    *   The "Embeddings OpenAI" node uses OpenAI's API to generate embeddings for these content chunks.
    *   The "Supabase Vector Store" node stores the embeddings and metadata (Notion ID, name) in a Supabase vector store.
5.  **Question Answering:**
    *   The "When chat message received" node triggers the chatbot when a message is received.
    *   The "Supabase Vector Store1" retrieves embeddings relevant to the user's question from the Supabase vector store.
    *   The "Vector Store Retriever" fetch relevant documents using the vector store to find the most similar embeddings.
    *   The "OpenAI Chat Model" uses OpenAI's chat model (gpt-4o) to generate an answer based on the retrieved context.
    *   The "Question and Answer Chain" formats the question and answer for the user.

## Services:

-   **Notion:** Used as the data source for extracting content.
-   **OpenAI:** Used for generating embeddings and answering questions.
-   **Supabase:** Used as a vector store for storing and retrieving embeddings.

## Hashtags:

#n8n #RAG #automation #Notion #OpenAI #Supabase #chatbot #knowledgebase

# OpenAI Personal Shopper with RAG and WooCommerce

## Use cases:

- **Personal Shopping Assistant:** Allows customers to interact with a chatbot that understands their needs and recommends products from a WooCommerce store. The bot can extract product information from customer input and search the WooCommerce store based on keywords, price ranges, and SKUs.
- **Customer Support Chatbot:** Provides instant answers to customer inquiries about store information like opening hours, address, and contact details using a RAG (Retrieval-Augmented Generation) system powered by a vector database.
- **Product Discovery and Recommendation:** Helps users discover products they might not have found otherwise by interpreting their natural language requests and filtering the WooCommerce catalog accordingly.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received (`When chat message received` node).
2.  **Session Management:** A unique session ID is created and associated with each chat session (`Edit Fields`).
3.  **Information Extraction:** The `Information Extractor` node uses an OpenAI model to analyze the user's input and determine if they are looking for a product. If so, it extracts relevant information such as keywords, price ranges, and SKUs.
4.  **AI Agent:** An AI Agent decides, based on extracted information, which tool to use (either WooCommerce search or RAG).
5.  **WooCommerce Integration (Personal Shopper):** If the user is looking for a product, the extracted information is used to query the WooCommerce store (`personal_shopper` node). This node retrieves relevant product information based on the extracted parameters (keyword, min/max price, SKU, stock status).
6.  **RAG System:** If the user asks a general question about the store, the RAG system is used. This involves:
    *   **Querying the Vector Store:** The `RAG` node queries a Qdrant vector store to find relevant documents.
    *   **Retrieval from Qdrant:** The `Qdrant Vector Store` node retrieves the most relevant document chunks from the vector database.
    *   **OpenAI Generation:** The `OpenAI Chat Model1` node generates a response based on the retrieved information.
7.  **Response:** The workflow returns a personalized response to the user.

**RAG System Initialization:**
The workflow also includes a section for setting up the RAG system:
1.  **Google Drive Integration:** The workflow retrieves documents from a specified Google Drive folder (`Google Drive2` and `Google Drive1`).
2.  **Embedding Generation:** The `Embeddings OpenAI3` node generates embeddings for the documents using OpenAI.
3.  **Vector Storage:** The generated embeddings are stored in a Qdrant vector store (`Qdrant Vector Store1`).

## Services:

-   OpenAI API: Used for chat models, embeddings, and information extraction.
-   WooCommerce: Used as the e-commerce platform for product information and search.
-   Qdrant: Used as a vector database to store and retrieve document embeddings for the RAG system.
-   Google Drive: Used to store the documents that are used in the RAG system.

## Hashtags:

#n8n #automation #woocommerce #openai #rag #personalshopper

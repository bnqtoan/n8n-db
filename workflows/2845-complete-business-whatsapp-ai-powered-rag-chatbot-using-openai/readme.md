# Business WhatsApp AI RAG Chatbot

## Use cases:

- **Customer Support Automation:** Provide instant answers to customer inquiries about products, services, and troubleshooting, reducing the workload on human support agents.
- **Product Information Retrieval:** Allow customers to quickly access detailed product information, specifications, and comparisons through a conversational interface.
- **Personalized Shopping Assistance:** Offer tailored recommendations and guidance based on customer needs and preferences, enhancing the shopping experience.

## How it works:

This workflow creates an AI-powered chatbot for WhatsApp that utilizes Retrieval-Augmented Generation (RAG) to provide informed responses based on a knowledge base stored in a Qdrant vector store.

1.  **Webhook Setup (Verify & Respond):** The workflow begins with two Webhook nodes ("Verify" and "Respond") configured to handle incoming messages from the WhatsApp Business API. The "Verify" webhook handles the initial verification request from Meta, while the "Respond" webhook receives user messages.
2.  **Message Validation:** The "is Message?" node checks if the incoming data from the "Respond" webhook contains a user message. If it doesn't contain a text message, the workflow triggers the "Only message" node, which sends a message to the user notifying that the user can only send text messages.
3.  **AI Agent Interaction:** The "AI Agent" node, powered by Langchain, receives the user's text message and generates a response based on the provided system prompt and the retrieved knowledge base.
4.  **Knowledge Retrieval (RAG):** The "RAG" (Retrieval-Augmented Generation) tool is central to the chatbot's ability to provide informed answers. It retrieves relevant information from the Qdrant vector store based on the user's query and feeds it to the AI Agent. The vector store uses embedding generated with OpenAI. The "OpenAI Chat Model" node serves as the language model for the tool, and "Retrive Qdrant Vector Store" is the RAG's Vector Store. The "Embeddings OpenAI2" creates the embeddings for the vector store retrieval.
5.  **Memory Management:** The "Window Buffer Memory" node stores the conversation history, enabling the AI Agent to provide contextually relevant responses.
6.  **Response Delivery:** Finally, the "Send" node sends the generated response back to the user via the WhatsApp Business API.
7.  **Knowledge Base Population:** A separate branch of the workflow handles the creation and maintenance of the knowledge base.
    *   It starts with a "Manual Trigger" node.
    *   It creates and refresh a collection in Qdrant. The "Create collection" node creates a new collection in Qdrant, while the "Refresh collection" node deletes previous content to insert new knowledge.
    *   The "Get folder" node retrieves files from a specified folder in Google Drive.
    *   The "Download Files" node retrieves the content of the file.
    *   The "Embeddings OpenAI" node generates embeddings for the documents, and the "Token Splitter" node splits the long documents into smaller chunks. The "Default Data Loader" is required to load the binary from Google Drive to the vector store.
    *   Finally, the "Qdrant Vector Store" node stores the document embeddings in the Qdrant vector store for later retrieval by the RAG tool.

## Services:

-   WhatsApp Business API
-   Qdrant Vector Store
-   Google Drive
-   OpenAI API (for embeddings and chat model)

## Hashtags:

#n8n #automation #whatsapp #chatbot #rag #langchain

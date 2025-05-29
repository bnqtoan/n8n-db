# Advanced Chatbot+Rag Agent

## Use cases:

- **Customer Support Chatbot:**  Answer customer queries about products or services using a knowledge base stored in a vector store (Qdrant). The RAG (Retrieval-Augmented Generation) component ensures responses are informed by the most relevant information.
- **Event Scheduling Assistant:** Allow users to schedule events (e.g., concerts) through a chatbot interface. The workflow can extract event details, check availability using Google Calendar, and confirm bookings.
- **Information Retrieval System:** Build a system that can retrieve and synthesize information from a collection of documents stored in Google Drive, answering complex questions based on the content.

## How it works:

This workflow acts as an advanced chatbot leveraging both Retrieval-Augmented Generation (RAG) and agent-based approaches, along with external tools like Google Calendar.  It can handle different types of requests through webhooks and interact with various services. Here's a breakdown:

1.  **Webhook Triggers:**
    *   `n8n_order` (Webhook): Listens for incoming orders or general inquiries.
    *   `n8n_appointment` (Webhook):  Listens for event scheduling requests.
    *   `n8n_rag` (Webhook): Listens for RAG based question answering requests.

2.  **Initial Data Handling (for orders):**
    *   `API URL Tracking` (HTTP Request): Sends the order data to an external tracking API.
    *   `Tracking response` (Set): Stores the API response.
    *   `Webhook tracking response` (Respond to Webhook): Sends the API response back to the user.

3.  **Calendar Event Scheduling (for appointments):**
    *   `Concert start date` (LLM Chain): Uses an OpenAI Chat Model to extract relevant date/time information from the user's appointment request.
    *   `Structured Output Parser`: Parses the natural language output from the LLM into a structured format.
    *   `Google Calendar`: Checks availability and creates a calendar event.
    *   `Calendar response` (Set): Creates a confirmation message.
    *   `Webhook calendar response` (Respond to Webhook): Sends the confirmation back to the user.

4.  **RAG-based Question Answering:**
    *   `Retrive Agent` (Agent): Takes the user's prompt and decides the best action to take.
    *   `RAG` (Tool Vector Store): Performs a similarity search in the Qdrant vector store to retrieve relevant document chunks.
    *   `OpenAI Chat Model1` (Chat Model): Uses retrieved information to generate a coherent answer.
    *   `Webhook RAG response` (Respond to Webhook): Sends the answer back to the user.

5.  **Vector Store Management:**
    *   `When clicking ‘Test workflow’ (Manual Trigger)`: Used for initial setup and testing.
    *   `Create collection` (HTTP Request): Creates a collection (index) in Qdrant.
    *   `Refresh collection` (HTTP Request): Refreshes the data in Qdrant.
    *   `Get folder` (Google Drive): Retrieves files from a Google Drive folder.
    *   `Download Files` (Google Drive): Downloads the retrieved files.
    *   `Default Data Loader`: Loads the downloaded files as documents.
    *   `Token Splitter`: Splits the documents into smaller chunks for better vectorization.
    *   `Embeddings OpenAI`: Creates vector embeddings of the document chunks using OpenAI.
    *   `Qdrant Vector Store`: Stores the embeddings and document chunks in Qdrant.

## Services:

-   Google Calendar
-   Google Drive
-   OpenAI
-   Qdrant (Vector Database)
-   Any API called by the HTTP Request nodes

## Hashtags:

#n8n #chatbot #RAG #automation #LLM

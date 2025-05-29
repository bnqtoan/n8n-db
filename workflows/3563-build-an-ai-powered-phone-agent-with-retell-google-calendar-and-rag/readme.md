# AI Phone Agent with RetellAI

## Use Cases

- **Customer Service Automation:** Automate responses to common customer inquiries, such as product information, store hours, and return policies, freeing up human agents for more complex issues.
- **Appointment Scheduling:** Allow customers to book appointments directly through the phone, integrating with Google Calendar to manage availability and confirmations.
- **Lead Qualification:** Automatically collect and summarize key information from phone conversations, such as contact details, needs, and interests, for sales teams to follow up on.

## How it Works

This workflow automates an AI-powered phone agent using RetellAI and n8n. Here's a breakdown:

1.  **Webhook Trigger (n8n_call):** Receives incoming call events from RetellAI.
2.  **Filter:** Distinguishes between `call_ended` and `call_analyzed` events.
3.  **Set call fields:** Sets various fields with information from the call, such as the transcript, duration, and phone numbers.
4.  **Extract key points:** Uses an OpenAI Chat Model to analyze the call transcript and extract key information, generating a summary.
5.  **Telegram:** Sends the call summary and extracted details to a Telegram chat.
6.  **RAG-based Information Retrieval:**
    *   **Webhook Trigger (n8n_rag_function):** Receives queries from RetellAI for information retrieval.
    *   **Retrieve Agent:** Uses an OpenAI Chat Model, along with data retrieved via RAG, to create an answer based on the Retell query, using a Qdrant vector store for information retrieval.
    *   **Respond to Webhook:** Sends the generated answer back to RetellAI.
7.  **Appointment Booking:**
    *   **Webhook Trigger (n8n_check_available):** Receives date requests from RetellAI to be scheduled on Google Calendar.
    *   **Concert start date:** Converts the date into a suitable format for the Google Calendar.
    *   **Google Calendar:** Create an event in Google Calendar with the converted start and end dates.
8.  **Vector Store Management:**
    *   **Manual Trigger:** Allows manual triggering of the vector store update process.
    *   **Create collection:** Create a collection on Qdrant Vector Store
    *   **Refresh collection:** Clears the existing data from the Qdrant vector store.
    *   **Get folder:** Retrieves files from a specified Google Drive folder.
    *   **Download Files:** Downloads files from Google Drive to the workflow.
    *   **Embeddings OpenAI:** Creates embeddings for the downloaded files using OpenAI.
    *   **Qdrant Vector Store:** Inserts the data, with embeddings, into the Qdrant vector store.

## Services

-   **RetellAI:** AI phone agent platform.
-   **OpenAI:** Language model for analysis, summarization, and information retrieval.
-   **Telegram:** Messaging platform for sending call summaries.
-   **Google Calendar:** Calendar service for appointment scheduling.
-   **Google Drive:** Cloud storage for document retrieval to vector store.
-   **Qdrant:** Vector database for storing document embeddings.

## Hashtags

#n8n #automation #AIphoneagent #RetellAI #RAG #appointmentbooking

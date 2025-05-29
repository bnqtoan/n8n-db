# Build a Chatbot, Voice Agent and Phone Agent with Voiceflow, Google Calendar and RAG

## Use cases:

- **Customer Support Automation:** Build a chatbot that answers customer queries about order status, appointment scheduling, and product information using a knowledge base.
- **Automated Appointment Scheduling:** Allow customers to schedule appointments through a chatbot or voice agent, automatically creating events in Google Calendar.
- **Voice-Enabled Personal Assistant:** Create a voice agent integrated with a phone system to provide information on-demand using RAG (Retrieval-Augmented Generation) from a vector store.

## How it works:

1.  **Webhook Triggers:** The workflow starts with three webhook triggers (`n8n_order`, `n8n_appointment`, `n8n_rag`) that receive requests from a service like Voiceflow.
2.  **Order Tracking (n8n\_order):**
    *   When the `n8n_order` webhook is triggered, it sends the order number and email to an external API (`API URL Tracking`) to retrieve order status.
    *   The API response is then formatted into a message (`Tracking response`) and sent back to the user via a webhook response (`Webhook tracking response`).
3.  **Appointment Scheduling (n8n\_appointment):**
    *   When the `n8n_appointment` webhook is triggered, it extracts the appointment date from the request.
    *   `OpenAI Chat Model3` is used to convert the date to a compatible format for Google Calendar and add 1 hour to the start date for the end date.
    *   The formatted dates are then parsed using the `Structured Output Parser` node into a structured object with `start` and `end` properties.
    *   A Google Calendar event is created using the parsed dates.
    *   A confirmation message (`Calendar response`) is sent back to the user via a webhook response (`Webhook calendar response`).
4.  **RAG-based Information Retrieval (n8n\_rag):**
    *   When the `n8n_rag` webhook is triggered, it receives a question from the user.
    *   The question is passed to `Retrive Agent` that uses OpenAI's `gpt-4o-mini` model to provide accurate and helpful information about products, troubleshooting tips, and general support using RAG (Retrieval-Augmented Generation).
    *   The response is then sent back to the user via a webhook response (`Webhook RAG response`).
5. **Vector Store Management:**
    *   A manual trigger initiates the process of updating the vector store (Qdrant).
    *   It first creates or refresh a collection (based on configured URLs) in Qdrant to ensure that the vector store is current.
    *   The workflow retrieves files from a specified folder in Google Drive, downloads their content, and converts them to text.
    *   The text is then split into smaller chunks, embedded using OpenAI, and inserted into the Qdrant vector store for later retrieval.

## Services:

*   Voiceflow
*   Google Calendar
*   OpenAI
*   Qdrant
*   Google Drive
*   External API for order tracking

## Hashtags:

#n8n #chatbot #automation #voiceagent #rag

# Agente IA Restaurante [template]

## Use cases:

1.  **Automated Customer Service:** Handle customer inquiries about menus, hours, location, and delivery options through various channels like WhatsApp, Instagram, and Facebook.
2.  **Order Taking and Management:** Allow customers to place orders via chat interfaces, process payments, and provide delivery estimates.
3.  **Lead Generation and Follow-Up:** Identify potential leads, register them, and schedule follow-up messages to convert them into customers, including personalized offers and reminders.

## How it works:

1.  **Receiving Inquiries:** The workflow starts by listening to incoming messages from various sources, including webhooks for WhatsApp, Instagram, Facebook, a dedicated webhook for sending images, one for the address and another one for the order.
2.  **Message Type Handling:** The workflow determines the type of message received (text, image, audio, PDF) and processes it accordingly.
3.  **AI-Powered Response Generation:**
    *   Utilizes Langchain's OpenAI integration to generate responses based on customer inquiries.
    *   Integrates tools like a calculator, HTTP requests (for fetching data), and vector stores (for knowledge retrieval) to provide accurate and context-aware answers.
4.  **Channel-Specific Delivery:** Formats the response according to the appropriate type, markup the message and send the response back through the original channel (WhatsApp, Instagram, Facebook), choosing between WAAPI, Evolution API, etc.
5.  **Lead Management:** Saves lead information in Supabase, schedules follow-up messages, and blocks or unlocks AI interaction based on predefined criteria.
6.  **Data Persistence:** Stores conversation history in a Postgres database for context and future interactions.
7.  **RAG implementation**: Reads the files in google drive, splits the text and vectorize the data, after that it uploads the vectorestore in supabase to keep the bot well informed.

## Services:

*   **Supabase:** Used for storing lead data, conversation history, timeout settings and RAG data.
*   **Langchain OpenAI:** Provides the AI models for generating responses and understanding customer inquiries.
*   **WhatsApp API (WAAPI):** Sends and receives WhatsApp messages.
*   **Evolution API:** Another service for sending messages to WhatsApp.
*   **Facebook API:** Sends and receives Facebook messages.
*   **Instagram API:** Sends and receives Instagram messages.
*   **Asaas:** Used for creating customers and payment links.
*   **Mapbox:** Used for calculating distance and delivery estimates.
*   **Google Drive:** Used to read the data to feed the RAG implementation
    

## Hashtags:

#n8n #automation #restaurant #AI #chatbot #whatsapp #instagram #facebook #leadgeneration

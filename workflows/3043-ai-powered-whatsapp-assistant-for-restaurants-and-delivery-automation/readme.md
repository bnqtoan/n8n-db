# DELIVERY HAMBURGUERIA MVP

## Use cases:

- **Automated Customer Service:** Provides an AI-driven chatbot to handle customer inquiries, take orders, and provide delivery updates.
- **Document Management and Q\&A:** Ingest and process documents (like menus or promotions) stored in Google Drive, enabling the chatbot to answer questions about them.
- **Personalized Recommendations:** Leverages customer data and order history to provide personalized menu recommendations and promotions.

## How it works:

1.  **Trigger:** The workflow is initiated either by a new message received via a WhatsApp integration (Evolution API) or by file creation/update in Google Drive.
2.  **Authentication:** Authenticates the user and checks if human assistance is required based on Redis data.
3.  **Chat Session Management:** Manages chat sessions using Supabase to store and retrieve conversation history.
4.  **Document Processing (if triggered by Google Drive):**
    *   Downloads files from Google Drive.
    *   Extracts text from various file types (PDF, Excel, Documents).
    *   Splits the text into smaller chunks.
    *   Embeds text chunks using OpenAI Embeddings.
    *   Stores embeddings in a Supabase vector store for similarity search.
5.  **AI-Powered Chatbot:**
    *   Utilizes OpenAI Chat Models for natural language understanding and generation.
    *   Uses Langchain tools to extend the chatbot's capabilities:
        *   **busca\_documentos:** Searches the Supabase vector store for relevant documents.
        *   **Calculadora:** Performs calculations (e.g., order total).
        *   **busca\_cliente:** Fetches customer information.
        *   **busca\_endereco:** Fetches the addres information.
        *   **envia\_comanda:** tool to send the order.
	    *   **salvar\_cliente:** Save new costumers
    *   Manages conversation memory using Postgres Chat Memory.
6.  **Order Processing:** The chatbot can take orders, calculate totals, and potentially send order confirmations via Evolution API.
7.  **Dynamic Voice Generation:**
    *   Can convert text responses into speech using ElevenLabs API.
    *   Sends the generated audio via Evolution API.
8.  **Data Storage:** Uses Supabase and Redis to store customer data, chat history, vector embeddings, and session information.
9.  **Disable Message:** Disable message on specific time, using Wait and Supabase

## Services:

-   **Evolution API:** WhatsApp integration.
-   **Google Drive:** Document storage.
-   **OpenAI:** Language model and embeddings.
-   **Supabase:** Database for storing chat history, customer data, and vector embeddings.
-   **Redis:** Caching and session management.
-   **ElevenLabs:** Text-to-speech.
-   **Postgres:** Database to store data.

## Hashtags:

#n8n #automation #chatbot #AI #delivery

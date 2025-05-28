# petshop 4

## Use Cases:

- **Customer Service Automation:** Automate interactions with customers for a pet shop, answering inquiries, scheduling appointments (e.g., grooming or vet visits), and providing information about products or services.
- **Document Processing and Knowledge Base:** Automatically process documents (like PDFs, Excel sheets, or text files) related to pet care, extract relevant information, and store it in a vector database for efficient retrieval by a chatbot or AI assistant.
- **Financial Transaction Monitoring:** Monitor payment events for pet shop services (e.g., received payments), update the payment status in a database, and trigger actions like sending confirmation emails.

## How it works:

This workflow automates various tasks for a pet shop, incorporating document processing, customer service, and financial transaction monitoring. Here's a simplified breakdown:

1.  **Google Drive Monitoring**: It watches for new or updated files in a Google Drive folder using "File Created" and "File Updated" triggers.

2.  **Document Processing**:
    *   The workflow downloads the file from Google Drive using the "Download File" node.
    *   It extracts text from the file using the "Extract Document Text", "Extract PDF Text" or "Extract from Excel" nodes, depending on the file type.
    *   The extracted text is then split into smaller chunks using "Character Text Splitter" to manage the size of data processed at once.
    *   "Embeddings OpenAI1" generate embeddings, and then insert information into Supabase using the "Insert into Supabase Vectorstore" node.

3.  **AI Customer Service Agent**:
    *   The workflow is triggered by incoming webhooks ("Webhook EVO"), simulating customer messages.
    *   It connects to a Supabase database to retrieve relevant customer data and configurations.
    *   It uses an AI Agent ("Atendente") powered by OpenAI Chat Models to understand the customer's intent and provide appropriate responses.
    *   The AI Agent can use tools like a calculator, calendar, email, and workflow, which are chained with Google Calendar, Gmail Tool, and Supabase.

4.  **Payment Processing**:

    *   The "Webhook" node listens for payment-related events.
    *   Upon receiving an event, it queries a Postgres database to retrieve the payment ID using "busca payment id".
    *   It updates the payment status in the database using "atualiza status pagamento".
    *   Based on the updated status, it potentially triggers further actions or notifications.

5.  **Audio Generation**
    *   If the character count is low, it calls ElevenLabs to generate an audio from the extracted text.
    *   It sends the message in audio.

## Services:

*   Google Drive
*   OpenAI
*   Supabase
*   Redis
*   Postgres
*   ElevenLabs
*   Evolution API
*   Google Sheets
*   Gmail

## Hashtags:

#n8n #automation #petshop #AI #chatbot

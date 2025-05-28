# Bitrix24 Open Chanel RAG Chatbot Application Workflow example with Webhook Integration

## Use cases:

- **Automated Customer Support:**  A company uses a Bitrix24 Open Channel to handle customer inquiries. This workflow automates the process by using a RAG (Retrieval-Augmented Generation) chatbot to answer questions based on a knowledge base of documents. This reduces the workload on human agents by providing instant answers to common questions.
- **Document Retrieval in Chat:** Employees can ask questions about internal documents directly within the Bitrix24 Open Channel.  The chatbot retrieves relevant information from stored files (PDFs, etc.) and provides concise answers, improving information accessibility and efficiency.
- **Onboarding Assistance:**  New employees joining a company that uses Bitrix24 can use the Open Channel to ask questions about company policies, procedures, or other onboarding materials. The RAG chatbot provides instant access to this information, aiding the onboarding process.

## How it works:

1. **Bitrix24 Handler (Webhook):** Listens for incoming events (messages, chat joins, app installs, bot deletions) from a Bitrix24 Open Channel via a webhook.
2. **Credentials:** Stores and retrieves sensitive data such as CLIENT_ID, CLIENT_SECRET, application_token, domain, and access_token from the incoming request.
3. **Validate Token:** Checks if the application token is valid. If invalid, an error response is sent.
4. **Route Event:** Determines the type of event received from Bitrix24 (e.g., `ONIMBOTMESSAGEADD`, `ONIMBOTJOINCHAT`, `ONAPPINSTALL`, `ONIMBOTDELETE`) and routes the workflow accordingly.
5. **Process Message:** Extracts the message content, dialog ID, bot ID, and user ID from the event data. If the message is "what's hot," it provides a canned response. Otherwise, it repeats the user's message, demonstrating basic chatbot functionality.
6. **Process Join:** Sends a welcome message with a menu to the chat when a user joins.
7. **Process Install:** Registers the bot with Bitrix24, providing details such as the bot's name, type, and event handlers.
8. **Question and Answer Chain:** This node receives user input and, using the context from the vector store, generates an appropriate response based on available documents using a Google Gemini Chat Model.
9. **Vector Store Retriever:** Retrieves relevant context from the vector store using embeddings generated from the user's question.
10. **Prepare Output Parameters:** Formats the chatbot's response into a JSON structure suitable for sending back to Bitrix24.
11. **Send Message/Send Join Message:** Sends the formatted message back to the Bitrix24 Open Channel.
12. **Subworkflow (Register Bot):** Uploads files to the vector store for Open line chanel bot.
13. **Success Response/Error Response:** Sends a JSON response back to Bitrix24 indicating success or failure.
14. **Process Delete:** Handles the bot deletion event.
15. **Vector Store:** Download files and move files to vector stored folder
16. **Google Gemini Chat Model:** AI model for generation output

## Services:

- **Bitrix24:** CRM and collaboration platform providing the Open Channel for chat interaction.
- **Ollama:** Embeddings used for semantic search
- **Google Gemini Chat Model:** Large language model used for generating conversational responses.
- **Qdrant:** Vector database for storing and retrieving document embeddings.

## Hashtags:

#n8n #automation #chatbot #bitrix24 #RAG

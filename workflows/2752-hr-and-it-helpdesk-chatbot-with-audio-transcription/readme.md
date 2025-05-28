# HR & IT Helpdesk Chatbot with Audio Transcription

## Use Cases:

- **Employee Policy Q&A:** Allows employees to ask questions about HR policies, IT procedures, or company guidelines through a Telegram chatbot. The chatbot retrieves information from a pre-built knowledge base of internal documents.
- **Automated IT Support:** Provides initial support for common IT issues by understanding user queries and offering solutions based on the internal knowledge base.
- **Accessibility via Voice Input:** Enables employees to ask questions via voice messages, which are then transcribed and processed by the chatbot, increasing accessibility for users who prefer not to type.

## How it works:

1.  **Data Ingestion:** On workflow execution, the workflow downloads internal policy documents (e.g., employee handbook) from a specified URL using the "HTTP Request" node.  The "Extract from File" node extracts the text content from the PDF document.
2.  **Vector Store Creation:** The extracted text is then processed to create a vector store using PostgreSQL. The text is split into smaller chunks and converted into embeddings using OpenAI.
3.  **Telegram Trigger:** The workflow listens for incoming messages from a Telegram bot using the "Telegram Trigger" node.
4.  **Message Type Verification:** The "Verify Message Type" node checks if the incoming message is text or audio (voice).
    *   If the message is text, it's directly passed to the next step.
    *   If the message is audio, the "Telegram" node retrieves the audio file. Then, the "OpenAI" node transcribes the audio into text.
    *   If the message is of an unsupported type, a default message is sent back to the user.
5.  **AI Agent Interaction:** An "AI Agent" node receives the transcribed or text message, leveraging a system message to define its role as an HR and IT helpdesk assistant.  The agent uses a vector store tool to access the HR/IT policies knowledge base and a chat memory to maintain context.
6.  **Response Generation and Delivery:** The agent processes the user's question, retrieves relevant information from the vector store, and generates a response.  Finally, the "Telegram" node sends the chatbot's response back to the user in Telegram.

## Services:

*   Telegram API
*   OpenAI API
*   PostgreSQL

## Hashtags:

#n8n #automation #chatbot #HR #IT #AI #Telegram

# OpenAI Assistant workflow: upload file, create an Assistant, chat with it!

## Use cases:

- **Automated Customer Support:**  Create an assistant that answers customer questions about a specific product or service by uploading relevant documentation. For example, a festival assistant that answers questions about schedules, artists and locations.
- **Internal Knowledge Base:** Build an internal assistant for employees to quickly find information from company documents, policies, or training materials.
- **Interactive Document Summarization:** Allow users to ask questions about long documents (e.g., research papers, legal contracts) and receive concise, relevant answers.

## How it works:

This workflow automates the process of creating and interacting with an OpenAI Assistant.

1.  **Get File (Google Drive):** Retrieves a file (e.g., a document about a Music Festival) from Google Drive. It converts the file to PDF format if it's a Google Docs document.
2.  **Upload File to OpenAI:** Uploads the retrieved file to OpenAI. The purpose is set to "assistants" to make it available for the assistant to use.
3.  **Create new Assistant (OpenAI):** Creates a new OpenAI Assistant with a specified name, model (GPT-4-turbo-preview), description, instructions, and tools (knowledge retrieval). This node configures the assistant's behavior, including its role, response style, and the documents it can access. It references the uploaded file to enable knowledge retrieval.
4.  **Chat Trigger:** This node creates a webhook that listens for incoming messages or questions from users.
5.  **OpenAI Assistant:** Sends the user's input from the Chat Trigger to the specified OpenAI Assistant and receives the assistant's response.
6. **Sticky Notes:** Provides guide and extra resources

## Services:

-   Google Drive
-   OpenAI

## Hashtags:

#n8n #OpenAI #Assistant #Automation #Chatbot

# Personal Assistant

## Use cases:

- **Automated Email Dispatch for Suppliers:** A user can request the system to send an email to a supplier by simply providing the supplier's name and the message. The workflow automatically retrieves the supplier's email from a Google Sheet and sends the email via Gmail.
- **Personal Assistant for Scheduling:** The workflow could be extended to schedule meetings with suppliers. The user would provide the supplier's name, desired date/time, and meeting details, and the system would handle the email communication.
- **Customer service:** The workflow retrieves customer contact information from Google Sheets based on the user's input, enabling personalized support interactions.

## How it works:

1.  **Entry Point:** The workflow starts with a `Chat Trigger`, which receives the user's request via chat.
2.  **Personal Email Assistant (AI Agent):** The message is then passed to the `Personal Email Assistant` node, an AI Agent powered by Langchain. The AI agent processes the message and uses the `Thinker` node to determine the necessary steps.
3.  **Thinker Node:** The `Thinker, think before executing.` node helpes the AI agent to analyze if it has all the information needed to complete the user's request.
4.  **Supplier Information Retrieval:** The AI may use the `Supplier database` node (Google Sheets Tool) to search for the supplier's email address if the user only provided the supplier's name. It queries a Google Sheets document named "Proveedores" (Suppliers) and sheet "Hoja 1" (Sheet 1) based on "Nombre del Proveedor" (Supplier Name).
5.  **MCP Client Tool:** Connects to the MCP (Message Control Protocol) Server.
6.  **Email Sending:** The MCP server sends the email via Gmail. The `Send message by Gmail` node receives the recipient's email, subject, and message content from the AI. It then uses the provided Gmail credentials to send the email.
7.  **AI Model:** The AI agent uses `AI Model Open AI` to process the information and the `Chat Memory` to store previous conversation turns and maintain the conversation history.

## Services:

*   Google Sheets: Used as a database to store supplier names and contact information.
*   Gmail: Used to send emails.
*   OpenAI: Used to provide language model capabilities for the AI agent.

## Hashtags:

#n8n #automation #emailAssistant #langchain #googleSheets

# Proxmox Custom AI Agent

## Use cases:

1.  **Automated VM Management**: Allow users to create, start, stop, delete, and configure virtual machines on their Proxmox server simply by sending commands in natural language through a chat interface.
2.  **Proxmox API Command Generation**: Simplifies interacting with the Proxmox API by automatically generating the necessary API calls based on user intent, eliminating the need for manual API command construction.
3.  **Proxmox Information Retrieval and Summarization**: Retrieve details about existing Proxmox installations and configurations, providing summaries and explanations of complex API responses in an easy-to-understand format.

## How it works:

1.  **Trigger**: The workflow is initiated by a chat message (e.g., via Telegram, a webhook, or a chat trigger).
2.  **AI Agent (Proxmox API Command Generation)**: The AI Agent interprets the user's input and generates Proxmox API commands, leveraging Proxmox API Documentation, Proxmox API Wiki, and Proxmox Tool. It formulates the correct `response_type` (HTTP method), `url` (API endpoint), and `details` (payload) based on the request.
3.  **Output Parsing**: The Structured Output Parser ensures the AI's output adheres to a predefined JSON schema, which is then auto-fixed to maintain consistency.
4.  **Switch**: The Switch node routes the workflow based on the `response_type` (GET, POST, PUT/Update, DELETE, OPTIONS, or INVALID).
5.  **HTTP Request**: Based on the identified operation (determined in the Switch node), this node executes the request from the generated url.
6.  **Response Structuring (GET)**: Extracts the desired information from the API response and combines all fields into a single string
7.  **AI Agent (Proxmox Information Output Expert)**: Uses the formatted data from HTTP Request (GET) or the confirmation from the HTTP Request (POST, PUT, DELETE, OPTIONS) to provide a meaningful explanation of the result, response and data from proxmox.
8.  **Final Output**: Response formated to hide sensitive data and display meaningful information for user.

## Services:

*   Proxmox VE
*   Google Gemini (PaLM) API
*   Telegram API (optional)

## Hashtags:

#n8n #automation #proxmox #API #virtualization

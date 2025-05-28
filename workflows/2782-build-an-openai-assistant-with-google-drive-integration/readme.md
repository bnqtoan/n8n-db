# Build an OpenAI Assistant with Google Drive Integration

## Use cases:

- **Travel Agency Chatbot:** Allows a travel agency to create a custom chatbot that answers customer questions about their services, using information stored in Google Drive documents.
- **Automated Document Q&A:** Enables users to build an AI assistant that can answer questions based on specific documents (e.g., company policies, product manuals) stored in Google Drive.
- **Customer Support Automation:** Facilitates the automation of customer support by providing an AI assistant trained on Google Drive documentation to handle common inquiries.

## How it works:

This workflow automates the process of creating and updating an OpenAI Assistant with data from a Google Drive document, and then allows users to interact with the assistant via chat. Here's a breakdown:

1.  **Trigger:** The workflow starts with either a manual trigger ("When clicking ‘Test workflow’") or a chat message trigger ("When chat message received").
2.  **Create/Get Assistant (Manual Trigger):** If triggered manually, the workflow creates or retrieves an OpenAI Assistant using the "OpenAI" node, defining its name, description, and instructions. This assistant is designed to provide information specific to the "Travel with us" travel agency.
3.  **Download Google Drive Document:** The "Google Drive" node downloads a specified Google Docs file (converted to PDF) containing information for the assistant.
4.  **Upload File to OpenAI:** The "OpenAI2" node uploads the downloaded PDF file to OpenAI as a file object.
5.  **Update Assistant with File ID:** The "OpenAI1" node updates the OpenAI Assistant, associating it with the uploaded file ID. This allows the assistant to access the information in the document.
6.  **Chat interaction (Chat message trigger):** When triggered by a chat message, the "OpenAI Assistent" node interacts with the pre-built assistant to fetch data, using a memory buffer to hold previous interactions. The final response will be provided back to the user.

## Services:

-   Google Drive
-   OpenAI

## Hashtags:

#n8n #OpenAI #GoogleDrive #Automation #Chatbot

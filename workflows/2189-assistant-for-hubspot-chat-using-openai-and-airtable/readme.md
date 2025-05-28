# OpenAI Assistant for Hubspot Chat

## Use cases:

- **Automated Customer Support:**  Use an OpenAI Assistant to automatically respond to customer inquiries received through HubSpot chat, providing instant answers and resolving common issues.
- **Lead Qualification:**  Analyze chat conversations to identify promising leads based on keywords, questions, and sentiment, then automatically update HubSpot records.
- **Information Retrieval:**  Enable the assistant to search external databases or APIs (like ListaFirme.ro in this case) to provide customers with relevant information about companies, tracking numbers, or other data points directly within the chat.

## How it works:

1.  **HubSpot Chat Trigger:** The workflow is triggered by a new message in a HubSpot chat thread via webhook.
2.  **Message Retrieval:** The workflow retrieves the content of the new HubSpot message.
3.  **Check User Role** It is checked if the message author is from user side.
4.  **Database Lookup (Airtable):** The workflow searches an Airtable database to see if a corresponding OpenAI thread ID already exists for this HubSpot thread ID. This database maintains the link between HubSpot conversations and OpenAI threads.
5.  **Thread Creation (If Necessary):** If no OpenAI thread ID is found:
    *   A new thread is created in OpenAI, and the HubSpot message is added as the initial user message.
    *   The new OpenAI thread ID is saved in Airtable, linked to the HubSpot thread ID.
6.  **Run OpenAI Assistant:**  An OpenAI Assistant is invoked to process the message from Hubspot and use tools to respond.
7.  **Run Status Monitoring:** The workflow repeatedly checks the status of the OpenAI run.
8.  **Action Handling:**
    *   If the run requires action (e.g., a function call), the workflow executes the necessary action. Currently the assistant calls function from ListaFirme.ro
    *   The result of the action is submitted back to the OpenAI assistant.
9.  **Final Response:** Once the OpenAI run is completed, the assistant's response is posted back to the HubSpot chat thread.

## Services:

-   **HubSpot:** CRM platform for managing customer conversations.
-   **OpenAI:** AI platform for natural language processing and assistant creation.
-   **Airtable:** Database for storing corresponding OpenAI thread ID for Hubspot Thread ID.
-   **ListaFirme.ro:** Romanian company database API.

## Hashtags:

#n8n #openai #hubspot #automation #chatbot

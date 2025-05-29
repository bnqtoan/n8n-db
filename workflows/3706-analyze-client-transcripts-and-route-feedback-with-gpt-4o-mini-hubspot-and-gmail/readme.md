# Automate Client Issue

## Use cases:

- **Automatically log meeting notes from client conversations into HubSpot:** This workflow can capture key discussion points from client calls (e.g., from Fireflies.ai) and save them as meeting notes within the corresponding contact's profile in HubSpot, ensuring a complete interaction history.
- **Route client feedback to the appropriate department:** By analyzing client transcripts, the workflow can identify the topic of discussion (e.g., product, invoicing, support) and automatically forward the conversation to the relevant team via email, improving response times and internal coordination.
- **Summarize client conversations for quick review:** The workflow can condense lengthy client transcripts into concise summaries, allowing customer success managers or account executives to quickly grasp the main points of a conversation without reading the entire transcript.

## How it works:

1.  **Trigger:** The workflow starts when a new client transcript is submitted via a Form Trigger ("Enter Client Transcript"). This form captures the client's email address and the conversation transcript.
2.  **Set Email Addresses:** Sets static email addresses for internal departments to route client feedback to the correct department.
3.  **Summarization:** The transcript is passed to a Summarization node using a Langchain chain to create a brief summary of the conversation.
4.  **HubSpot Contact Search:** The client's email address is used to search for the corresponding contact in HubSpot.
5.  **HubSpot Meeting Notes:** If a contact is found, the summarized conversation is added as meeting notes to the contact's record in HubSpot.
6.  **Route to Department:** The "Router Agent" node, powered by a Langchain agent, analyzes the conversation transcript and determines which department should be informed about the client's feedback. It decides whether the feedback is related to product, invoicing, support, or commercial matters.
7.  **Completion Output:** The routed department from the `Router Agent` node is displayed using the `Form` node.
8.  **Send Email:** The workflow sends an email to the designated department via Gmail, including the client's email address and the conversation transcript.

## Services:

-   **HubSpot:** CRM platform for managing customer relationships and storing contact information.
-   **OpenAI:** Used for text summarization and routing.
-   **Gmail:** Email service for sending notifications to internal departments.

## Hashtags:

#n8n #automation #CRM #HubSpot #Langchain

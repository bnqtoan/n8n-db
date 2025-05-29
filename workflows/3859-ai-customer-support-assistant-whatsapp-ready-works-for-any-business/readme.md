# AI Customer-Support Assistant · WhatsApp Ready · Works for Any Business

## Use cases:

- **Automated Customer Support:** Provides instant answers to customer queries on WhatsApp, reducing the workload on human agents.
- **Website Information Retrieval:**  Helps customers find information about products, services, policies, and other details available on a company's website.
- **Lead Qualification:**  Engages with potential customers, answers their questions, and directs them to human agents for further assistance if needed.

## How it works:

1.  **WhatsApp Trigger:** The workflow starts when a customer sends a message to the WhatsApp account.
2.  **AI Agent:** The message is passed to an AI Agent (powered by Langchain) that uses tools to understand the request and formulate a response.
    - It uses `list_links` to find relevant links on the company website based on the customer's query.
    - It uses `get_page` to extract the text content from those links.
    - It uses OpenAI's `gpt-4o-mini` chat model to generate an answer based on the extracted information.
    - It uses Postgres as memory storage to keep context from previous messages.
3.  **24-hour window check:** Checks if the conversation is within the 24-hour window for free-form responses on WhatsApp.
4.  **If:** A condition node to determine if the message is within the WhatsApp 24-hour window.
5.  **cleanAnswer:** Cleans the AI Agent's answer by removing Markdown formatting, converting URL formats, and collapsing excessive blank lines.
6.  **Send Pre-approved Template Message to Reopen the Conversation:** If outside the 24-hour window, sends a pre-approved template message to reopen the conversation.
7.  **Send AI Agent's Answer:** Sends the cleaned answer back to the customer via WhatsApp.

## Services:

-   **WhatsApp:**  For receiving customer messages and sending responses.
-   **OpenAI:**  For natural language processing and response generation.
-   **n8n-nodes-langchain:** For memory capabilities with Postgres
-   **lemolex.app.n8n.cloud:** For internal links and fetching web page text.
-   **Postgres:**  Database for storing user session data.

## Hashtags:

#n8n #automation #AI #customersupport #whatsapp

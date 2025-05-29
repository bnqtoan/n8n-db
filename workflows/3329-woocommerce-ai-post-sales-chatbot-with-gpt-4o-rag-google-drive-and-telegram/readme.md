# WooCommerce AI Chatbot Workflow for Post-Sales Support

## Use cases:

- **Automated Customer Support:** Provides instant answers to customer inquiries about order status, tracking information, shipping details, and terms of service.
- **Order Tracking and Management:** Enables customers to quickly retrieve tracking numbers and order details by simply providing their order number and email address.
- **Escalation to Human Agent:** Seamlessly escalates complex or unresolved queries to a human operator via Telegram for personalized assistance.

## How it works:

1.  **Message Reception:** The workflow starts when a chat message is received via the "When chat message received" trigger node.
2.  **AI Agent Processing:** The "Post-Sales Agent" node, powered by a Large Language Model (LLM) like GPT-4o-mini, analyzes the customer's message, determines the intent, and formulates a response. This node uses memory to keep track of the conversation.
3.  **Tool Execution:** The AI Agent uses various tools to fulfill the request:
    *   **WooCommerce Tools:** Retrieves order details, customer information, and other relevant data from WooCommerce using nodes like "get\_order," "get\_orders," and "get\_user."
    *   **Tracking Information:** Uses the "get_tracking" tool, which calls a separate workflow via the "When Executed by Another Workflow" trigger, to fetch tracking information based on the order number from a WooCommerce order tracking plugin. The "Get tracking" node (HTTP Request) in that workflow interacts with the WooCommerce REST API to retrieve the shipment tracking information.
    *   **Knowledge Base:** Answers questions about terms and conditions, shipping policies, etc., using the "ToS" tool. This tool utilizes a vector store ("Qdrant Vector Store") populated with data from Google Drive. The Google Drive nodes ("Get folder" and "Download Files") retrieve the documents, which are then split ("Token Splitter") and vectorized using OpenAI embeddings ("Embeddings OpenAI1") before being stored in Qdrant.
    *   **Human Assistance:** If the AI Agent cannot resolve the issue, the "human\_assistance" tool sends the query to a Telegram channel for a human operator to handle.
4.  **Response Delivery:** The final response is sent back to the customer (implicit in the "When chat message received" trigger).

## Services:

*   WooCommerce
*   OpenAI
*   Google Drive
*   Telegram
*   Qdrant Vector Database

## Hashtags:

#n8n #woocommerce #ai #chatbot #customersupport

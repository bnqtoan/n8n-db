# WhatsApp Sales AI Agent for Yamaha Powered Loudspeakers

## Use cases:

*   **Product Information:** Customers can ask questions about Yamaha Powered Loudspeakers and receive accurate answers extracted from the product brochure.
*   **Troubleshooting:** Provide assistance with common issues or direct users to relevant resources, such as the Yamaha website or contact information.
*   **Lead Qualification:** Gather customer inquiries and provide automated initial responses, allowing sales teams to focus on qualified leads.

## How it works:

1.  **Download Product Brochure:** The workflow starts by downloading the Yamaha Powered Loudspeakers brochure PDF from a specified URL using an HTTP Request node.
2.  **Extract Text Content:** The PDF content is extracted using the "Extract from File" node to obtain the text data.
3.  **Create Product Catalog Vector Store:** It prepares the product brochure for use by the AI.
    *   It splits the text into smaller chunks using "Recursive Character Text Splitter."
    *   It loads the text into a suitable format using "Default Data Loader."
    *   It uses "Embeddings OpenAI1" to generate vector embeddings of the chunks.
    *   Finally, it stores the vector embeddings in an in-memory vector store ("Create Product Catalogue"). This vector store acts as a searchable knowledge base.
4.  **WhatsApp Trigger:** The workflow is triggered when a user sends a message to the configured WhatsApp number.
5.  **Message Type Handling:**
    *   The "Handle Message Types" switch node checks if the incoming message is a text message.
    *   If the message is not text, a pre-defined response is sent to the user using the "Reply To User1" node, informing them that only text messages are supported.
6.  **AI Sales Agent:**
    *   The customer's message is sent to the "AI Sales Agent" node.
    *   The AI agent has a system message that instructs it to act as a sales assistant for Yamaha Powered Loudspeakers.
    *   A "Window Buffer Memory" node is used to maintain conversation history with each user, identified by their WhatsApp number.
    *   The AI agent uses the "Vector Store Tool" to query the product catalog vector store created earlier.
    *   The AI Agent then formulates a response based on the user's query and the information retrieved from the product brochure.
7.  **Reply to User:** Finally, the AI Agent's response is sent back to the user via the "Reply To User" node.

## Services:

*   **WhatsApp:** Used for receiving messages from and sending responses to users.
*   **OpenAI:** Used for generating text embeddings and powering the AI sales agent.

## Hashtags:

#n8n #automation #workflow #whatsapp #ai #salesagent

# Chat with OpenAI Assistant and Fictional Country Capitals

## Use cases:

1.  **Interactive Chatbot with Knowledge of Fictional Worlds:** Users can engage in conversations with an OpenAI assistant that can provide information about fictional countries and their capitals.
2.  **Tool Integration for Specific Data Retrieval:** Demonstrates how to integrate external tools (in this case, a sub-workflow) into an OpenAI assistant workflow to retrieve specific data on demand.
3.  **Learning and Experimentation:** Serves as a template for exploring how to combine Langchain's OpenAI integration with n8n's workflow capabilities, memory management, and tool integrations.

## How it works:

1.  **Chat Trigger:** The workflow is initiated when a chat message is received via the "When Chat Message Received" trigger node.
2.  **OpenAI Assistant Interaction:** The message is sent to the OpenAI Assistant node, configured with a specific assistant ID ("asst\_BWy0154vMGMdrX7MjCYaYv6a"). The assistant processes the message and generates a response.
3.  **Memory Management:** The "Simple Memory" node uses a memory buffer window to maintain context within the conversation, allowing for more coherent and relevant responses from the assistant.
4.  **Tool Integration - Country Capitals:**
    *   The "Tool to call the workflow below" node defines a tool named "country\_capitals\_tool". This tool triggers a sub-workflow (defined by the current workflow ID).
    *   The sub-workflow checks if the query is "list". If it is, it returns a list of supported fictional countries.
    *   If the query is a specific country, the sub-workflow attempts to find and return the capital of that country.
5.  **Tool Integration - Date and Time:**
    *   The "Tool: Get current date and time" node defines a tool named "date\_tool".
    *   When triggered, it returns the current date and time in ISO format.

## Services:

*   **OpenAI:** For natural language processing and assistant capabilities.
*   **n8n** for handling the main process.

## Hashtags:

#n8n #automation #OpenAI #chatbot #langchain

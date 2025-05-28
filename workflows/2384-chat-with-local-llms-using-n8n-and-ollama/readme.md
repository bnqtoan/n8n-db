# Chat with local LLMs using n8n and Ollama

## Use cases

- **Personal AI Assistant:** Build a custom chatbot for personal use, answering questions and providing information based on locally hosted LLMs.
- **Code Generation:** Use the workflow to generate code snippets or troubleshoot programming problems by querying a locally hosted LLM.
- **Document Summarization:** Process and summarize large documents locally without relying on external services or transferring sensitive data.

## How it works

This workflow enables you to interact with locally hosted Large Language Models (LLMs) through n8n's chat interface, leveraging Ollama for LLM management.

1.  **When chat message received:** The workflow is triggered when a user sends a message through the n8n chat interface.
2.  **Chat LLM Chain:** The message is passed to the "Chat LLM Chain" node, which acts as a bridge between the chat message and the LLM.
3.  **Ollama Chat Model:** The chain sends the user's prompt to the Ollama server, which uses the configured LLM to generate a response. The response is then sent back through the chain.
4.  The LLM's response is then displayed in the n8n chat interface.

## Services

-   **Ollama:** A tool for running and managing open-source large language models locally.

## Hashtags

#n8n #automation #LLM #Ollama #LocalAI

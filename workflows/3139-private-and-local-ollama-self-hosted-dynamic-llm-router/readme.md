# 🔐🦙🤖 Private & Local Ollama Self-Hosted LLM Router

## Use cases:

1.  **Intelligent Chatbot:** Create a chatbot that can intelligently select the most appropriate local LLM for different types of queries, such as answering general knowledge questions, solving math problems, or providing coding assistance.
2.  **Document Analysis Automation:** Automatically route documents to the `granite3.2-vision` model for data extraction and analysis, streamlining processes like invoice processing or report generation.
3.  **Personalized AI Assistant:** Build a local AI assistant that adapts to user needs by dynamically choosing the best LLM for tasks like translation, summarization, or image analysis, all while keeping data private.

## How it works:

1.  **Chat Trigger:** The workflow starts with a "When chat message received" trigger node, which listens for incoming chat messages.
2.  **LLM Router (Agent Node):** The user's input is sent to an "LLM Router" node, which uses an agent designed to classify the prompt and select the most suitable Ollama model (e.g., qwq, llama3.2, phi4, qwen2.5-coder, granite3.2-vision, llama3.2-vision) based on a defined decision framework. The `systemMessage` define the different classification rules.
3.  **Dynamic LLM Selection:** The LLM Router outputs the chosen LLM model's name in a JSON format.
4.  **AI Agent with Dynamic LLM:** An "AI Agent with Dynamic LLM" node receives the original user input and the dynamically selected LLM model.
5.  **Ollama LLM Execution:** The chosen LLM is called via the "Ollama Dynamic LLM" node or "Ollama phi4" node, which interacts with a locally running Ollama instance to generate a response.
6.  **Chat Memory:** Conversation memory is maintained using "Router Chat Memory" and "Agent Chat Memory" nodes, ensuring context is preserved across multiple interactions.
7.  **Response:** The LLM's response is then returned to the user (though the destination for this response isn't explicitly defined in this workflow, it would typically be sent back to the chat interface).

## Services:

*   Ollama (Local LLM server)

## Hashtags:

#n8n #automation #workflow #Ollama #LLM #PrivateAI

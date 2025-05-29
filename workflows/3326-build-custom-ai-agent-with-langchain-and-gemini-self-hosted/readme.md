# Build Custom AI Agent with LangChain & Gemini (Self-Hosted)

## Use cases:

- **Personal AI Companion:** Create a personalized AI chatbot with a specific persona (e.g., a witty girlfriend, a helpful assistant) for engaging in natural language conversations.
- **Language Learning Partner:** Design an AI agent that responds in a target language (e.g., Chinese in this case) to facilitate language practice and cultural exchange.
- **Customized Customer Support:** Develop a self-hosted AI customer service agent with a defined brand voice and knowledge base to handle common inquiries.

## How it works:

This workflow sets up a custom AI agent powered by Google Gemini, LangChain, and n8n. Here's a breakdown:

1.  **When Chat Message Received:** The workflow is triggered when a chat message is received. This node handles the initial input from the user and allows configuring the chat interface (title, etc.).
2.  **Store conversation history:** This node maintains a memory of the conversation history, which is crucial for context and coherence.
3.  **Construct & Execute LLM Prompt:** This is the core logic of the agent. It takes the user's input and the conversation history and formats them into a prompt for the language model. The prompt is dynamically created using a template that defines the agent's persona and conversation rules. In this case the agent will respond in Chinese and act like a girlfriend. It uses LangChain's `PromptTemplate` and `ConversationChain`.
4.  **Google Gemini Chat Model:** This node sends the constructed prompt to the Google Gemini API to generate a response based on the model's capabilities and the defined prompt.
5.  The workflow then loops back with the new output to the `Store Conversation History` node in order to add it to the memory.

## Services:

-   **Google Gemini API:** Used for generating responses based on the input prompt and defined persona.
-   **LangChain:** Used to handle the AI model prompt, memory and chain of the chat.

## Hashtags:

#n8n #automation #langchain #gemini #aiagent

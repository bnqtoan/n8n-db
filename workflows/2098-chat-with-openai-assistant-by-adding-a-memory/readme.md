# My Workflow

## Use cases

- **AI Chatbot with Memory:** This workflow creates a simple AI chatbot that remembers previous conversations within a defined context window, allowing for more personalized and contextual interactions.
- **Assistant with Tools:** It allows the definition of assistants that can use tools, like a calculator, to provide more accurate answers.

## How it works

1.  **Chat Trigger:** The workflow starts when a chat message is received via a webhook (`When chat message received` node). The message content and a session ID are extracted.
2.  **Memory Handling:** The workflow uses a Langchain `MemoryBufferWindow` to maintain a short-term memory of the conversation. This allows the OpenAI assistant to refer back to earlier parts of the conversation for context.
3.  **OpenAI Assistant Call:** The chat message is sent to an OpenAI Assistant (`OpenAI` node) for processing. The node is configured with the assistant ID (`asst_HDSAnzsp4WqY4UC1iI9auH5z`) that defines what type of AI persona is being used.
4.  **Calculator Tool:** If the OpenAI assistant determines that a calculation is needed, it can utilize the Calculator tool.
5.  **The Memory:** The messages are then saved into memory for context.

## Services

-   **OpenAI:** Used for natural language processing and generating responses.
-   **n8n Cloud:** Used for chat trigger.

## Hashtags

#n8n #automation #langchain #openai #chatbot

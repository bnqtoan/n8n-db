# Telegram AI Langchain bot

## Use cases:

- **AI-Powered Telegram Assistant:** Users can interact with an AI assistant directly through Telegram to get answers to questions, receive helpful information, and engage in natural language conversations.
- **Automated Image Generation:** Users can request the bot to generate images using DALL-E 3 based on text prompts provided in the Telegram chat. This can be used for creative content generation or visualization of ideas.
- **Personalized Chat Experience:** The bot remembers previous interactions within a session, providing a more context-aware and personalized conversation experience.

## How it works:

1.  **Listens for Telegram Events:** The workflow starts by listening for incoming messages in a Telegram chat using the "Telegram Trigger" node.
2.  **AI Agent Processing:** The user's message is passed to an "AI Agent" node, which uses a Large Language Model (LLM) to understand the message and generate a response. The agent is configured with system instructions to act as a helpful AI assistant, format messages for Telegram, and handle Telegram bot commands. It also has access to tools for specific tasks.
3.  **Memory Management:** The "Window Buffer Memory" node stores the chat history, allowing the AI Agent to maintain context and provide more relevant responses.
4.  **Tool: DALL-E 3 Image Generation:** If the user asks to draw something, the "Dall-E 3 Tool" is triggered. This tool calls an "Execute Workflow Trigger" node which executes a sub-workflow. This sub-workflow then sends the query to the "Generate image in Dall-E 3" node, which uses the OpenAI API to create an image based on the user's prompt.
5.  **Image delivery:** The generated image URL is sent back to the user in the Telegram chat using the "Telegram" node.
6.  **Response Formatting and Delivery:** The AI Agent's output is formatted for Telegram using HTML tags, and any special characters are escaped. The "Telegram" node sends the formatted response back to the user.
7.  **Error Handling:** If any errors occur during the AI Agent processing, the "Correct errors" node sends the error message to the user via Telegram.

## Services:

-   **Telegram API:** Used for receiving messages and sending responses, including text and images.
-   **OpenAI API:** Used for AI language model processing (chat completion) and image generation with DALL-E 3.

## Hashtags:

#n8n #telegrambot #ai #automation #langchain

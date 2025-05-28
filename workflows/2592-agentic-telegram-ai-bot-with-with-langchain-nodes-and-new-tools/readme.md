# Agentic Telegram AI bot with LangChain nodes and new tools

## Use cases:

- **AI-Powered Telegram Assistant:** Users can interact with an AI assistant directly through Telegram for various tasks, such as answering questions, providing information, and generating creative content.
- **Automated Image Generation:** The bot can generate images based on user prompts using DALL-E 3 and deliver them directly within the Telegram chat.
- **Personalized User Experience:** The bot remembers the user's name and chat history to provide more personalized and context-aware responses.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot (via the "Listen for incoming events" node).
2.  **AI Agent:** The "AI Agent" node receives the user's message and uses a system message to define its role as a helpful assistant and address the user by name. The system message instructs the agent to call the Dall-E tool, if the user asks for an image.
3.  **Memory Management:** The "Window Buffer Memory" node stores the conversation history to provide context for future interactions.
4.  **Language Model:** An "OpenAI Chat Model" node (GPT-4o) process the input from agent node, the previous messages in conversation and formulate a response, then pass it back to the Agent node
5.  **Image Generation (Optional):** If the user asks for an image, the AI Agent uses the Generate image in Dalle Tool to call the OpenAI API to generate an image based on the prompt, then the image URL is extracted.
6.  **Telegram Response:** The "Send final reply" node sends the AI-generated response back to the user via Telegram. If the image was generated, the url to that image is added to the final response. The "Send back an image" node sends the Dall-E-generated image to the user via Telegram.

## Services:

-   Telegram API
-   OpenAI API (DALL-E 3)

## Hashtags:

#n8n #automation #telegrambot #ai #langchain

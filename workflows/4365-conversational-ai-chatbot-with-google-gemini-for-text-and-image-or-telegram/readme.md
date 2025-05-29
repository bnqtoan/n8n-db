# Telegram Chatbot with Gemini Image Generation

## Use cases:

- **Customer Support:** Automate responses to frequently asked questions and generate visual aids for troubleshooting.
- **Content Creation:** Generate images based on user requests for social media posts, presentations, or marketing materials.
- **Interactive Storytelling:** Allow users to interact with a story by requesting images of characters, scenes, or events.

## How it works:

1.  **Input and Session Management:** The workflow starts with a Telegram Trigger node (`userInput`) that captures user messages from Telegram. The `sessionData` node extracts and stores information like the message text, session ID, language, and username.
2.  **Memory and Conversational Context:** The `conversationStore` stores the entire conversation history for each user. The `memoryRetriever` node retrieves relevant parts of the conversation based on the current need, and the `latestContext` node formats this context for use in response generation.
3.  **Intent Processing and Prompt Generation:** The `inputProcessor` node uses a Langchain LLM Chain with Google Gemini (`GeminiModel1`) to analyze the user's intention (generate, chat, or other) and the type of content requested (text or image). The `intentHandler` node routes the workflow based on the detected intention. The `generatePrompt`, `chatPrompt`, and `otherPrompt` nodes provide predefined prompts that guide the Gemini model to generate appropriate responses. The `buildPrompt` node constructs the final prompt by combining the selected prompt with user input.
4.  **Core of Generation and Conversation Management:** The `ChatCore` node uses the Google Gemini model (`GeminiModel`) to generate either text responses or image generation prompts, incorporating the context and instructions. The `conversationMemory` node saves the conversation to maintain coherence.
5.  **Content Classification and User Delivery:** The `contentType` node classifies the output as either text or image based on the intent. If the output is text, it's sent directly to the user via the `sendTextMessage` node. If the output is an image, the `errorPreprocessor` and `textCleaner` nodes prepare the prompt for image generation. The `imageGeneration` node calls the Gemini image generation API. The `imageBuilder` node converts the image data into a binary file, and finally, the `sendImage` node sends the image to the user via Telegram.

## Services:

-   Telegram
-   Google Gemini (via Google Palm API)

## Hashtags:

#n8n #automation #chatbot #imagegeneration #telegram

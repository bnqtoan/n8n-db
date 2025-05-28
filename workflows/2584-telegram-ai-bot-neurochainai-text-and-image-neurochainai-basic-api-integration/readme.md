# NeurochainAI Basic API Integration

## Use cases:

- **AI-Powered Telegram Bot:** Allows users to interact with AI models through a Telegram bot, enabling them to ask questions, generate text, or create images using simple commands.
- **Automated Content Generation:**  Automatically generate images or responses based on user prompts received through Telegram.
- **Personal Assistant:**  Integrate an AI assistant into Telegram for quick information retrieval, creative writing, or image generation directly within the chat interface.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Switch:** Evaluates the message received by the Telegram trigger, depending on the message the workflow continues with the flux command for image generation, it uses the Rest API or it uses the DM Text (Direct message)
3.  **Code1 (Message Cleaning):** If the message starts with "/flux", this node removes the prefix and any extra spaces, extracting the user's prompt for image generation.
4.  **Telegram2 (Processing Indicator):** Sends a "⌛" emoji to the Telegram chat to indicate that the prompt is being processed.
5.  **NeurochainAI - Flux (Image Generation):** Sends the cleaned prompt to the NeurochainAI API to generate an image. The API parameters include the model, prompt, image size, quality, and seed.
6.  **Code (URL Extraction):** Extracts the generated image URL from the NeurochainAI API response.
7.  **HTTP Request3 (Image Retrieval):** Retrieves the actual image data from the generated URL.
8.  **Telegram1 (Image Sending):** Sends the generated image back to the user in the Telegram chat with the original prompt as the caption.
9.  **Telegram4 (Delete Indicator Message):** Deletes the "⌛" message.
10. **Switch1 (Error Handling):** If the image generation failes it executes this node.
11. **Telegram6 (Error Message):** Sends a "*Prompt too short*" message back to the user in the Telegram chat
12. **Telegram7 (Delete Indicator Message):** Deletes the "⌛" message.
13. **TYPING - ACTION (Action to User):** Indicates to user that the bot is typing.
14. **NeurochainAI - Rest API (Text Generation):** Sends the user's prompt to the NeurochainAI API to generate a response. The API parameters include the model, prompt, temperature, and other settings.
15. **AI Response (Response sending):** Sends the AI generated response back to the user.
16. **Switch2 (Error Handling):** Handles errors such as "No response from worker" or "Prompt too short" and sends the user an appropriate error message via Telegram.
17. **No response (Error Message):** Sends a "*No response from worker*" message back to the user in the Telegram chat
18. **Prompt too short (Error Message):** Sends a "*Prompt too short*" message back to the user in the Telegram chat

## Services:

*   Telegram Bot API
*   NeurochainAI API

## Hashtags:

#n8n #automation #telegrambot #AI #imagegeneration

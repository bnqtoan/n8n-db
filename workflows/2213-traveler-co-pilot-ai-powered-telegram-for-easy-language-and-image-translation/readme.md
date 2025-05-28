# Traveler co-pilot v1

## Use cases:

- **Real-time Travel Assistance:** A traveler can send a message via Telegram (text or image), and the workflow automatically translates the message to a preferred language, processes the request (e.g., identify an object in image) and sends a helpful response back to the traveler in text or audio format.
- **Multilingual Communication:** A user can communicate in their native language, and the workflow will translate it into the language understood by the recipient (or a service), facilitating seamless communication across language barriers.
- **Image Understanding and Assistance:** A traveler can send a photo of a landmark or sign, and the workflow can identify the object, translate any text, and provide relevant information or assistance related to the image.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message (text or image) to the Telegram bot.
2.  **Settings:** This node is used to configure the flow and sets up necessary parameters, e.g. the language to translate to, or the preferred LLM.
3.  **Switch:** The workflow uses a switch node to control the flow.
4.  **Language Translation Choice:** Based on the configuration in the `Settings` node, the workflow determines whether to use the `OpenAI2` or the `Anthropic Chat Model1` node for the response.
5.  **AI Models:**
    *   **OpenAI2:** For generic text-based questions and translation.
    *   **Anthropic Chat Model1:** Used when an image has been sent, allowing the AI to understand what it's shown in the image and respond accordingly.
6.  **Translation and Response:** The chosen model can do an automatic language detection and translation or process an image, the flow then replies to the user in text format.
7. **Text to Speech:** Converts the answer text into speech.
8.  **Telegram Reply:** The workflow sends the generated text or audio as a message back to the user on Telegram.

## Services:

-   Telegram
-   OpenAI
-   Anthropic

## Hashtags:

#n8n #automation #telegrambot #travel #ai

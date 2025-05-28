# Telegram AI-bot

## Use cases:
- **Personal AI Assistant:** Users can interact with an AI-powered chatbot directly within Telegram to get answers to questions, generate creative content, or receive personalized recommendations.
- **Automated Image Generation:** Users can request the bot to generate images based on textual prompts, enabling quick creation of visual content for various purposes.
- **Multilingual Customer Support:** The bot can automatically detect the user's language and provide responses in the same language, facilitating communication for a diverse user base.

## How it works:
1.  The workflow is triggered by a **Telegram Trigger** node, which listens for incoming messages to the Telegram bot.
2.  The **PreProcessing** node sets the default text to empty string to ensure the workflow doesn't break when there is no text message.
3.  The **Settings** node defines configuration parameters such as the OpenAI model's temperature, token length, a system command which defines the bot's persona, and bot typing status. It also extracts user-related information from the Telegram message.
4.  A **Send Typing action** node sends a typing or upload_photo action to let the user know that the bot is working.
5.  The **Merge** node merges the data from the Settings and Telegram trigger nodes.
6.  The **CheckCommand** node uses a Switch node to route the workflow based on the received message.
    -   If the message starts with "/start", a **Greeting** node uses OpenAI to generate a welcome message in the user's language.
    -   If the message starts with "/image ", a **Create an image** node uses OpenAI to generate an image based on the prompt after the command.
    -   If the message does not start with "/" a **Chat_mode** node utilizes OpenAI's chat completion endpoint to generate a response based on the user's message and predefined system command.
    -   If none of the commands above are detected an **Send error message** node sends a message to inform the user about supported commands.
7.  The generated text or image from OpenAI will be sent to the user with the help of **Text reply**, **Send image** and **Send error message** nodes.

## Services:
-   Telegram API
-   OpenAI API

## Hashtags:
#n8n #TelegramBot #AIAutomation #Chatbot #ImageGeneration

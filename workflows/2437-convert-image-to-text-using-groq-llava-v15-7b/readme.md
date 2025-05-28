# GROQ LLAVA V1.5 7B

## Use Cases

*   **Automated Image Description for Telegram:** Automatically describe images sent to a Telegram bot, providing quick summaries for accessibility or content management.
*   **Content Moderation Enhancement:** Integrate image descriptions into content moderation workflows, enabling faster identification of inappropriate content.
*   **Educational Tool:** Use the bot to describe images for educational purposes, helping users learn about visual content.

## How it works

1.  **Telegram Trigger:** The workflow starts when a user sends a message (image) to a Telegram bot.
2.  **Receive the File:** It retrieves the file ID of the image sent to the Telegram bot.
3.  **Convert the image file to base64:** The image file from telegram is converted into a base64 string. This is necessary for sending the image data to the Groq API.
4.  **HTTP Request GROQ LLAVA:** The workflow sends a POST request to the Groq LLAVA API, including the base64-encoded image and a prompt to describe the image in detail. Requires setting the `Authorization` header with your Groq API token.
5.  **Get only the text:** Extracts the generated text description from the Groq API response.
6.  **Telegram send the text:** The bot sends the generated image description back to the user in the Telegram chat.

## Services

*   Telegram Bot API
*   Groq LLAVA API

## Hashtags

#n8n #automation #imageRecognition #telegram #groq

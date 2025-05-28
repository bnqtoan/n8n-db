# My Workflow

## Use cases:

- **Automated Image Analysis in Telegram Groups:** This workflow can be used to automatically analyze images posted in a Telegram group and provide feedback, such as identifying objects or detecting inappropriate content.
- **Content Moderation Bot:** It can be implemented as a content moderation tool, where the bot analyzes images for specific elements and flags them for review if certain criteria are met.
- **Image Tagging Assistant:** Users can send images to the bot, and the workflow will analyze the image and suggest relevant tags based on the content.

## How it works:

1.  **Telegram Trigger ("Get the Image"):** The workflow starts when a message is received in a Telegram chat. It's configured to listen for messages and download any attached images.
2.  **Switch Node ("Switch ( image or not )"):** This node checks if the received message contains a photo. If a photo exists, the workflow proceeds to analyze it; otherwise, it sends an error message.
3.  **Image Analysis ("Analyze image"):** If an image is present, it is sent to OpenAI for analysis. The image is converted to base64 format before being sent to the OpenAI API.
4.  **Send Analysis Result ("Send Content for the Analyzed image"):** The content is sent back to the Telegram chat.
5.  **Error Handling ("Wait" and "Update Telegram Error Message"):** if user send any content that not an image it display a message to the user: Please Upload an Image

## Services:

-   Telegram API: Used to receive messages with images and send analysis results.
-   OpenAI API: Used to analyze the content of the images.

## Hashtags:

#n8n #automation #telegrambot #imageanalysis #openai

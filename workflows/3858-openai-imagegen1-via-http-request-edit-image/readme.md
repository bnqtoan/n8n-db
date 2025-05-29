# OpenAI ImageGen1 Template

## Use cases:

- **Image Editing via Chat:** Users can upload an image and send a text prompt through a chat interface to edit the image using OpenAI's image editing capabilities.
- **Automated Content Creation:** Create unique images for social media, marketing materials, or blog posts based on user-provided images and text descriptions.
- **Personalized Art Generation:** Generate personalized artwork based on user input, allowing for creative exploration and customization.

## How it works:

This workflow allows users to edit images using OpenAI's ImageGen v1 API through a chat interface.

1.  **When chat message received:** The workflow starts when a chat message is received. The node is configured to allow file uploads and accepts any MIME type.
2.  **API KEY:** A Set node defines the OpenAI API Key, stored as a string.
3.  **HTTP Request:** The workflow sends a POST request to the OpenAI API (`https://api.openai.com/v1/images/edits`) with the image and prompt. The "image" data from the chat trigger is sent as form binary data. The prompt will be the chat input text. Other parameters such as the model type, the number of images, the image size and image quality are also sent to the API. The `Authorization` header is set to use the OpenAI API key.
4.  **Convert to File:** The base64 encoded image (`data[0].b64_json`) received from the OpenAI API is converted to a binary file.

## Services:

-   **OpenAI:** Utilizes the OpenAI API for image editing (specifically the `/v1/images/edits` endpoint).

## Hashtags:

#n8n #OpenAI #ImageEditing #Automation #AICreativity

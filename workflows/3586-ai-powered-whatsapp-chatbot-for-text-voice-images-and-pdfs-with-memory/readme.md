# AI-Powered WhatsApp Chatbot for Text, Voice, Images & PDFs

## Use cases:

- **Customer Support:** Automatically answer customer queries, provide information about products or services, and guide users through common troubleshooting steps via WhatsApp.
- **Content Summarization:** Allow users to send documents, images, or voice notes to the chatbot and receive a concise summary of the content. This could be useful for quickly understanding the gist of a lengthy PDF or an image.
- **Accessibility Enhancement:** Provide image descriptions for visually impaired users, enabling them to understand the content of images shared via WhatsApp. Similarly, voice message transcription can help users who are hearing impaired.

## How it works:

1.  The workflow starts with a "WhatsApp Trigger" node, which listens for incoming messages on your WhatsApp Business account.
2.  A "Switch" node determines the type of incoming message (text, audio, image, or document) and routes the workflow accordingly.
3.  Depending on the media type, the workflow performs the following:
    *   **Text:** The text is extracted.
    *   **Audio:** The audio file is downloaded, transcribed using the OpenAI API, and the transcribed text is extracted.
    *   **Image:** The image is downloaded, analyzed using the OpenAI API to generate a description, and this description is extracted.
    *   **Document:** If the document is a PDF, it's downloaded, and the text is extracted from it. If not, sends an error message.
4.  The extracted text is passed to an "AI Agent" node powered by Langchain and OpenAI, which processes the message and generates a response, considering previous conversations through a "Memory Buffer Window".
5.  If the original input was audio, the AI generated response is converted into audio using OpenAI.
6.  Finally, the generated text or audio response is sent back to the user via WhatsApp.

## Services:

-   WhatsApp Business API
-   OpenAI API (for image analysis, transcription, and text generation)
-   Langchain
-   Meta's Graph API

## Hashtags:

#n8n #whatsapp #chatbot #ai #automation

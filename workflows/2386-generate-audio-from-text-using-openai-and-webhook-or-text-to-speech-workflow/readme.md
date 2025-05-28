# Generate audio from text using OpenAI - text-to-speech Workflow

## Use cases:

- **Automated Voice Notifications:** Generate audio messages from text to send notifications via phone calls or messaging apps.
- **Content Creation:** Convert written articles or blog posts into audio formats for podcasts or accessibility purposes.
- **Interactive Voice Response (IVR) Systems:** Create dynamic voice prompts for IVR systems based on real-time data.

## How it works:

1.  **Webhook Trigger:** The workflow starts when it receives a POST request at the specified webhook URL (`/generate_audio`).
2.  **Text Extraction:** The `Webhook` node receives the POST request, extracts the `text_to_convert` from the request body, and passes it to the next node.
3.  **OpenAI Text-to-Speech:** The `OpenAI` node uses the OpenAI API to convert the extracted text into audio. It uses the "fable" voice, as configured.
4.  **Respond to Webhook:** The `Respond to Webhook` node sends the generated audio back as a binary response to the original HTTP request.

## Services:

-   OpenAI API: Used for text-to-speech conversion.

## Hashtags:

#n8n #automation #textToSpeech #OpenAI #audioGeneration

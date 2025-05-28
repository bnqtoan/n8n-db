# My Workflow

## Use cases:

*   **AI-Powered WhatsApp Chatbot:** Automate customer support by understanding and responding to user queries via WhatsApp, using AI to analyze different message types (text, image, audio, video).
*   **WhatsApp-Based Information Retrieval:** Allow users to ask questions via WhatsApp, with the chatbot summarizing information from the web (e.g., Wikipedia) and providing concise answers.
*   **Automated Content Analysis and Response:** Build a system to automatically analyze incoming WhatsApp media (images, videos, audio) using AI, extract relevant information, and respond to the user based on the analysis.

## How it works:

1.  **WhatsApp Trigger:** The workflow starts when a new message is received via WhatsApp.
2.  **Split Out Message Parts:** The incoming message is split into individual parts for processing.
3.  **Redirect Message Types:** A switch node determines the type of the incoming message (audio, video, image, or text) and routes it to the appropriate processing branch.
4.  **Media Processing (Audio, Video, Image):**
    *   The workflow retrieves the URL of the media file (audio, video, or image) from WhatsApp.
    *   The media file is downloaded using an HTTP Request node.
    *   Google Gemini is used to transcribe audio messages, describe video messages, or analyze image messages.
5.  **Text Processing:**
    *   For text messages, the message content is passed to a Text Summarizer to get a concise summary.
6.  **AI Agent Interaction:**
    *   The extracted and processed information from all message types is passed to an AI Agent. The agent uses this data to generate a suitable response.
    *   The Wikipedia tool is available to the AI Agent for retrieving additional information.
7.  **Respond to User:** The AI Agent's response is sent back to the user via WhatsApp.
8.  **Memory Management:** Window Buffer Memory to improve AI Agent interaction.

## Services:

*   WhatsApp
*   Google Gemini API
*   Wikipedia API

## Hashtags:

#n8n #automation #whatsapp #chatbot #ai #gemini #langchain

# 🌍 AI WhatsApp Translator + Voice Transcriber with HubSpot Integration

## Use cases:

1.  **Multilingual Customer Support:** Automatically translate incoming WhatsApp messages from customers into the agent's preferred language, and vice versa for replies. This allows businesses to serve a global customer base without needing multilingual support staff.

2.  **Voice Message Transcription and Analysis:** Transcribe voice messages received via WhatsApp and analyze the content using AI to identify customer sentiment, extract key information, and route inquiries to the appropriate department.

3.  **Lead Capture and CRM Integration:** Automatically capture new leads from WhatsApp conversations, create contact entries in HubSpot, and send personalized follow-up messages.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a new message is received via a WhatsApp webhook.
2.  **Sender Identification:** The workflow checks who sent the message (identifying if it's from "Your Number" or not).
3.  **Media Handling (Audio):** If the message contains audio, the workflow retrieves the media file, converts it into a suitable format, and transcribes it using OpenAI.
4.  **Translation and Text Classification:** The message text (or the transcribed audio) is translated into the desired language (Language Map) using OpenAI and then passed to text classifiers.
5.  **AI Agent for Response:** AI agents (using Langchain) generate responses based on the translated and classified text.
6.  **Contact Lookup/Creation:** The workflow searches for the contact in HubSpot. If not found, it creates a new contact (Create Contact) and sends a notification.
7.  **WhatsApp Reply:** The generated response is sent back to the user via the WhatsApp API. The workflow also has logic for reacting to messages with flags and other features.
8.  **Execution Deletion:** This workflow also include a section to delete executions on a daily basis to prevent the n8n instance from overload.

## Services:

*   WhatsApp API
*   OpenAI
*   HubSpot
*   Groq

## Hashtags:

#n8n #automation #whatsapp #ai #hubspot

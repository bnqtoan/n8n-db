# AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs

## Use cases:

*   **Voice-based virtual assistant:** Enables users to interact with an AI assistant using their voice, suitable for scenarios like hands-free control, accessibility, or in-car assistance.
*   **Automated customer support:** Implements a voice-enabled chatbot for handling customer inquiries, providing information, or resolving simple issues via voice interaction.
*   **Interactive voice learning tool:** Creates an engaging learning experience by allowing users to ask questions and receive voice-based answers and explanations.

## How it works:

1.  **Webhook:** Listens for incoming HTTP POST requests at the `/voice_message` endpoint, triggered when a user sends a voice message.
2.  **OpenAI - Speech to Text:** Transcribes the incoming voice message (binary data) into text using OpenAI's speech-to-text API.
3.  **Get Chat:** Retrieves the previous context of the conversation with the user from the Memory Manager to maintain continuity.
4.  **Aggregate:** Aggregates all the contextual information which is retrieved from the `Get Chat` node.
5.  **Basic LLM Chain:** Passes the transcribed text along with the aggregated context to the Google Gemini Chat Model to generate a relevant response. The prompt uses the previous conversation to maintain context.
6.  **Insert Chat:** Stores the user's message and the AI's response in the Memory Manager, updating the conversation history.
7.  **Limit:** Limits the amount of request to be sent to ElevenLabs.
8.  **ElevenLabs - Generate Audio:** Uses the ElevenLabs API to convert the AI-generated text response into speech. It requires setting up custom authentication with the ElevenLabs API key and specifying the desired voice ID.
9.  **Respond to Webhook:** Sends the generated audio data back to the user as a response to the initial webhook request.
10. **Window Buffer Memory:** Buffer used for the memory manager.

## Services:

*   **OpenAI:** For speech-to-text transcription.
*   **Google Gemini:** For generating conversational responses.
*   **ElevenLabs:** For text-to-speech conversion.

## Hashtags:

#n8n #AI #VoiceChat #Automation #LLM

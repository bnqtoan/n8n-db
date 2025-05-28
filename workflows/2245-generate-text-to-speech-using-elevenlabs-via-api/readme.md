# Elevenlabs Text-to-Speech API Endpoint

## Use cases:

- **Automated Voiceover Generation:** Generate voiceovers for videos, podcasts, or presentations programmatically using Elevenlabs' text-to-speech service.
- **Real-time Voice Response System:** Integrate with chatbots or voice assistants to provide dynamic, voice-based responses to user queries.
- **Accessibility Tools:** Create accessible content by converting text into speech for users with visual impairments.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a POST request is sent to the `/generate-voice` webhook endpoint. The request should include `voice_id` and `text` in the request body.
2.  **Input Validation:** An "If" node checks if the `voice_id` and `text` parameters exist in the request body.
3.  **Elevenlabs API Request:** If the parameters are valid, an HTTP Request node sends a POST request to the Elevenlabs API (`https://api.elevenlabs.io/v1/text-to-speech/{{$json.body.voice_id}}`) to generate the speech. The `voice_id` is dynamically inserted into the URL, and the `text` is included in the request body. The request uses a custom authentication which require you to create a new custom authentication entry with the following JSON structure:
    ```json
    {
      "headers": {
        "xi-api-key": "your-elevenlabs-api-key"
      }
    }
    ```
    Replace `"your-elevenlabs-api-key"` with your actual Elevenlabs API key.
4.  **Success Response:** If the Elevenlabs API call is successful, the generated audio data is returned to the user via the "Respond to Webhook" node with a binary content type.
5.  **Error Handling:** If the `voice_id` or `text` parameters are missing, the workflow responds with a JSON error message: `{"error": "Invalid inputs."}`.

## Services:

-   [Elevenlabs](https://elevenlabs.io/): A text-to-speech service used to generate speech from text.

## Hashtags:

#n8n #automation #texttospeech #elevenlabs #API

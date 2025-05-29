# 🌍 AI Translator for WhatsApp – Translate Voice & Text Automatically

## Use Cases

- **Real-time Translation for International Communication:** Automatically translate incoming WhatsApp messages, whether text or voice, from any language into your preferred language, facilitating seamless conversations with international contacts.
- **Multilingual Customer Support:** Implement an automated customer support system that understands and responds to queries in multiple languages, ensuring comprehensive assistance for a global customer base.
- **Language Learning Assistant:** Use the workflow to translate unfamiliar phrases or words encountered in WhatsApp messages, enhancing your language learning experience.

## How it works

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node, which listens for incoming messages to your WhatsApp number via a service like Twilio.
2.  **Determine Message Origin:** The `Who Sent?` node identifies the sender and routes the message accordingly.
3.  **Format Phone:** The phone is formatted for international codes.
4.  **Filter by Country:** `Filter the Country` filters messages based on the phone number.
5.  **Determine message type Audio / Text:** If it's an audio message (detected by the `Audio` or `Audio1`, `Audio2` If nodes):
    *   The workflow retrieves the audio file using `GET Media` node(s).
    *   The audio file is converted into a usable format via `Convert to File` node(s).
    *   The `OpenAI` node transcribes the audio into text.
6.  **Translate Message:**
    *   The `Text Classifier` node attempts to classify the text.
    *   Then the translation is performed via one of the `AI Agent` nodes using an `OpenAI Chat Model` or `Groq Chat Model`, `Calculator` and `Think` Tool, translating the message into the desired language.
7.  **Respond via WhatsApp:** Finally, the translated text is sent back to the original sender via the `WhatsApp` node, utilizing the Twilio API.

## Services

-   WhatsApp (via Twilio or similar service)
-   OpenAI API (for translation and transcription)

## Hashtags

#n8n #automation #whatsapp #translation #ai

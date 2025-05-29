# Chinese Translator

## Use Cases
1. **Language Learning Support**: Automatically translate English messages into Chinese with pinyin and English explanations for language learners.
2. **Bilingual Customer Support**: Provide instant translations between English and Chinese for customer service interactions via Line messaging.
3. **Cross-Language Communication**: Enable real-time bidirectional translation for users communicating across English and Chinese languages.

## How It Works
1. **Line Webhook Trigger**: The workflow starts when a user sends a message via Line, triggering the "Line Webhook" node.
2. **Loading Animation**: The "Line Loading Animation" node activates to show a progress indicator to the user while processing the request.
3. **Translation via OpenRouter**: The "Use OpenRouter" node sends the message to OpenRouter's API, which processes the translation (Chinese to English or English to Chinese) and provides pinyin and explanations.
4. **Response Delivery**: The translated result is formatted and sent back to the user via the "Line Reply" node, completing the interaction.

## Services
- **Line Messaging API** (for sending/receiving messages and showing loading animations)
- **OpenRouter API** (for language translation using AI models like Qwen)

## Hashtags
#n8n #automation #workflow #language-translation #chatbot

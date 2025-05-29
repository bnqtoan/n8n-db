# Chinese Translator

## Use cases
1. **Language Translation Requests** - Automatically translate text messages between Chinese and English directly in LINE chat, providing pinyin and detailed translations for learners.
2. **Image Text Analysis** - Process images containing Chinese text and return digital text with pronunciation guides and translations.
3. **Multilingual Support Chatbot** - Serve as an educational assistant in language learning communities, handling both text and image-based translation queries.

## How it works
1. **Trigger**: Starts when users send messages via LINE (text/image/voice)  
2. **Loading Indicator**: Shows animation in LINE to confirm processing  
3. **Message Routing**:
   - *Text*: Uses Qwen-2.5-72B model via OpenRouter to create translations with pinyin  
   - *Images*: Converts image to base64 and uses Qwen-VL model for OCR+translation  
   - *Unsupported types*: Returns "not supported" message
4. **Response**: Replies through LINE with formatted translation results  

## Services
- **LINE Messaging API** (messaging & media handling)
- **OpenRouter.ai** (LLM processing through Qwen models)
- **LINE Media API** (image content retrieval)

## Hashtags
#n8n #translation #chatbot #AI #automation

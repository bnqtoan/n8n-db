# AI Document Assistant via Telegram + Supabase

## Use cases:

1.  **Chatbot Interaction:** Users can interact with a Telegram bot to ask questions. The bot uses Google Gemini to generate responses, leveraging weather data (via OpenWeatherMap) and information from user-uploaded documents.
2.  **Document Upload and Embedding:** Users can upload PDF documents to the Telegram bot. The workflow extracts the text, generates embeddings using Google Gemini, and stores them in a Supabase vector store.
3.  **Personal AI Document Assistant:** Individuals can create a personalized assistant that can answer questions about their uploaded documents. This can be used for research, studying, or quick information retrieval from large documents.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message or document to the Telegram bot.
2.  **Command Router:** Determines whether the user sent a text message or a document (PDF file).
3.  **Document Processing (if a document is sent):**
    *   The PDF file is downloaded from Telegram.
    *   The text is extracted from the PDF.
    *   The extracted text is split into smaller chunks.
    *   Embeddings are generated for each chunk using Google Gemini.
    *   The embeddings and text chunks are stored in a Supabase vector store.
    *   A message is sent to the user confirming that the document has been saved.
4.  **Chatbot Interaction (if a text message is sent):**
    *   The user's message is passed to the AI Agent node, which uses Google Gemini to generate a response.
    *   The AI Agent can use several tools like weather data via OpenWeatherMap, answering question with a vector store using Supabase and the memory buffer.
    *   The response is then sent back to the user via Telegram, after a cleaning and splitting process to avoid Telegram HTML issues.

## Services:

*   Telegram API: Used for bot communication.
*   Google Gemini API: Used for language model capabilities (chat and embeddings).
*   Supabase: Used as a vector store to store and search document embeddings.
*   OpenWeatherMap API: Used for fetching weather data (optional).

## Hashtags:

#n8n #automation #workflow #telegrambot #AI

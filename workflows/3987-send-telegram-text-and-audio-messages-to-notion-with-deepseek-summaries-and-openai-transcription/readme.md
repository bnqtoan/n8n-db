# Telegram Text, Voice Note or Audio file to Notion Database

## Use cases:
- **Personal Note-Taking:**  Users can quickly save text messages, voice notes, or audio files received on Telegram directly to a Notion database for personal organization and retrieval.
- **Meeting Minutes Capture:**  Archive important discussions and action items from Telegram group chats into a structured Notion database.
- **Content Curation:** Automatically save interesting articles, ideas, or inspiration shared via Telegram to a Notion database for later review and use.

## How it works:
1.  The workflow starts with a "Telegram Trigger" node, which listens for new messages, voice notes, or audio files sent to a Telegram bot or channel.
2.  A "Switch" node then routes the incoming data based on the type of content received from Telegram.
3.  Depending on the content type the flow take one of three routes:
    *   **Text Content:** The content is directly sent to an AI Agent to create a summary and then sent to a first Notion database.
    *   **Voice Note or Audio File:** The content is sent to OpenAI, wich extracts text from the content and sends it to a second Notion database.
    *   **A third path:** The content is sent to DeepSeek Chat Model and then to AI Agent and Notion to save the data.
4.  Finally, the processed information is then saved to the appropiate Notion database.

## Services:
-   Telegram
-   Notion
-   OpenAI
-   DeepSeek

## Hashtags:
#n8n #Telegram #Notion #Automation #NoteTaking

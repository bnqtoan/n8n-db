# TelegramRichOutput

## Use cases:

- **Automated Content Delivery:** This workflow can be used to automatically send content, including text, images, audio, and video, to a Telegram chat from other applications or services.
- **Notification System:** Receive rich notifications from various systems (e.g., monitoring tools, CI/CD pipelines) in a Telegram chat, with support for long messages split into chunks.
- **Media Aggregation and Sharing:** Automatically share media files (images, audio, videos) extracted from a text source to a Telegram channel, making it easy to distribute content from different sources.

## How it works:

1.  **Trigger:** The workflow is triggered when executed by another n8n workflow, receiving `chatId` and `output` as input.
2.  **Extract Links:** The `Extract Links` node parses the input text (`output`) and extracts URLs for images, audio, and video files.
3.  **Conditional branching (No Links):** An `If` node checks if any links are found.
    *   If no links are found, the workflow proceeds to send the message.
    *   If links are found the workflow extracts them for sending as separate messages.
4.  **Split Out the Links:** If links are present, the `Split Out the Links` node splits the array of links into individual items.
5.  **Loop Over Links:** The `Loop Over Links` node processes each link individually.
6.  **Check Link Type:** The `Check Link Type` node determines the type of each link (image, audio, or video) based on the file extension.
7.  **Send Media:** Based on the identified type, the workflow sends the corresponding media file to the specified Telegram chat using the appropriate Telegram node (`Send back an image`, `Send back an audio`, `Send back a video`).
8. **Limit:** The Limit node prevent the workflow from sending too many request at once.
9.  **Conditional branching (Text Length):** An `If text too long` node checks if the length of the input text exceeds 1000 characters.
    *   **Long Text Handling:** If the text is too long, the `Split large text by chunks` node splits it into smaller chunks (<= 1000 characters each).  These chunks are then sent to Telegram via the `Split Out the Chunks`, `Loop Over Text Chunks`, and `Send Text Chunk` nodes.
    *   **Short Text Handling:** If the text is short enough, it's sent directly to Telegram using the `Send Text` node.

## Services:

-   Telegram API

## Hashtags:

#n8n #telegram #automation #workflow #richcontent

# My workflow 4

## Use cases:

- **Personal Content Management:** Automatically save images, text notes, and files sent to a Telegram bot to organized locations in Notion and Google Drive.
- **Team Collaboration:** Allow team members to quickly share documents and notes via Telegram, automatically archiving them in Google Drive and summarizing key information in Google Sheets.
- **Automated Data Backup:** Use a Telegram bot as a simple interface to back up files and notes to Google Drive and Google Sheets.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a message is received by a Telegram bot (using the "Telegram Trigger" node).
2.  **Content Type Router:** The workflow determines the type of content (image, text, or file) contained in the message (using the "Content Type Router" node).
3.  **Image Processing:**
    *   **Download Telegram Image:** If the content is an image, it's downloaded from Telegram (using the "Download Telegram Image" node).
    *   **Convert to Base64:** Image is converted to base64 format.
    *   **Upload to ImgBB:** The image is uploaded to ImgBB for hosting.
    *   **Add Image to Notion:** Then the ImgBB URL and caption will be added to a Notion page as toggle.
4.  **Text Processing:**
    *   **Add Text to Notion:** If the content is text, it's added as a heading to a specified Notion page (using the "Add Text to Notion" node).
5.  **File Processing:**
    *   **Download Telegram File:** If the content is a file, it's downloaded from Telegram (using the "Download Telegram File" node).
    *   **Upload to Google Drive:** The file is uploaded to a specific folder in Google Drive (using the "Upload to Google Drive" node).
    *   **Record in Google Sheets:** Information about the file (name, uploader, size, type, creation date, and Drive link) is recorded in a Google Sheets spreadsheet (using the "Record in Google Sheets" node).
6.  **Completion Notification:**
    *   **Send Completion Message:** Finally, a confirmation message is sent back to the Telegram user (using the "Send Completion Message" node).

## Services:

*   Telegram
*   Notion
*   ImgBB
*   Google Drive
*   Google Sheets

## Hashtags:

\#n8n \#telegram \#automation \#notion \#googleDrive

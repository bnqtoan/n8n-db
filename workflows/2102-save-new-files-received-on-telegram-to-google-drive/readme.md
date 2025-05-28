# Save new Files received on Telegram to Google Drive

## Use cases:

- **Automatic Backup of Telegram Files:** Automatically save important documents, images, or other files received via Telegram to a designated folder in Google Drive for backup and safekeeping.
- **Centralized File Storage:** Consolidate files shared on Telegram with other files in Google Drive, enabling easy access and management from a single location.
- **Team Collaboration:** Allow team members to share files via Telegram, which are automatically stored in a shared Google Drive folder, facilitating collaboration and version control.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a new message is received on Telegram via the "On new Telegram Message" node. It's configured to listen for messages and download any attached files.
2.  **File Check:** The "If Message contains a File" node checks if the received Telegram message contains a file (document). It verifies if the `message.document` property exists in the message data.
3.  **Upload to Google Drive:** If a file is present, the "Upload File to GDrive" node uploads the file to a specified folder within Google Drive. It uses the file name from the Telegram message (`message.document.file_name`) and saves it to the folder with ID `11gyG2TvG0sqCG202CN-w9rloGW-CzKBc` (named "Demos").

## Services:

-   Telegram
-   Google Drive

## Hashtags:

#n8n #Telegram #GoogleDrive #FileAutomation #Backup

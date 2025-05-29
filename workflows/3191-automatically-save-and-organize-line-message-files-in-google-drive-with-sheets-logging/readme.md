# Line Save File to Google Drive and Log File's URL

## Use cases
1. **User-Uploaded File Management**  
   Automatically organize files sent by users via LINE Messenger into date-based or file-type-based folders in Google Drive. Ideal for customer support teams or community platforms managing user-submitted content.

2. **Automated Media Backup**  
   Archive media files (images, videos, audio) shared in LINE group chats to predefined Google Drive folders while maintaining an audit log in Google Sheets with direct file URLs.

3. **Content Moderation Workflow**  
   Restrict uploads to specific file types (e.g., only JPG/PNG images) and provide immediate feedback to users via LINE when unsupported formats are detected.

## How it works
The workflow operates in 4 key stages:

1. **Event Handling & Configuration**  
   - Starts with a LINE webhook receiving file messages
   - Retrieves dynamic configuration from Google Sheets (storage rules, allowed file types, reply settings)

2. **Folder Structure Management**  
   - Creates date-based folders (e.g., "20240315") if enabled
   - Creates file-type subfolders (e.g., "image", "video") if enabled
   - Merges folder paths based on configuration flags

3. **File Processing**  
   - Validates file type against allowed formats from config
   - Downloads file content from LINE's API
   - Uploads to Google Drive in the determined folder structure

4. **Post-Upload Actions**  
   - Logs file metadata (name, type, URL, timestamp) to Google Sheets
   - Sends confirmation/error messages to LINE users when enabled

Key nodes: `Validate File Type`, `Create Date Folder`, `Upload File to Google Drive`, and `Log File Details to Google Sheet`.

## Services
- **LINE Messaging API** (File reception and replies)
- **Google Drive** (File storage and folder management)
- **Google Sheets** (Configuration storage and upload logging)

## Hashtags
#n8n #GoogleDrive #LINE #FileAutomation #Workflow

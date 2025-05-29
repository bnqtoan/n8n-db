# WhatsApp Media Downloader Workflow

## Use cases:

- **Automatic Media Backup:** Automatically download and store media files (images) received via WhatsApp for backup purposes.
- **Content Moderation:** Download media files for analysis and moderation to identify inappropriate content.
- **Custom Integrations:** Integrate WhatsApp media with other applications or services that require access to the media files.

## How it works:

1.  **Trigger WhatsApp Media:** The workflow starts when a new WhatsApp message containing media (specifically images) is received. This is achieved using the "WhatsApp Trigger" node, which listens for updates on the WhatsApp account.
2.  **Fetch Media Download URL:** The "Fetch Media Download URL" node extracts the media ID from the incoming WhatsApp message and uses it to request a private download URL for the media file from the WhatsApp API.
3.  **Download Media File:** The "Download Media File" node uses the obtained URL to download the actual media file (image) from WhatsApp's servers. The node is configured to return the full response including the file content.

## Services:

-   WhatsApp API

## Hashtags:

#n8n #automation #WhatsApp #media #downloader

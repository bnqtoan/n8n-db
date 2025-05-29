# Upload video to drive via google script

## Use cases:

*   **Automated Video Upload and Renaming:** Automatically upload a video from a specified URL to Google Drive and rename it based on predefined naming conventions.
*   **Content Distribution Workflow:** Integrate with content creation or distribution platforms to automatically upload and organize video assets in Google Drive upon publication.
*   **Backup and Archiving:** Use the workflow as part of a video backup strategy, automatically moving and renaming video files to Google Drive for safekeeping.

## How it works:

1.  **Manual Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered within n8n.
2.  **Send URL to GDrive Script and Upload:** The "Send URL to GDrive Script and Upload" node takes a video URL (currently hardcoded as "https://example.com/path/to/your.mp4") and a secret, then sends it as a JSON payload via a POST request to a specified Google Script web app URL. This script is assumed to handle the actual video upload to Google Drive.
3.  **Rename Uploaded Video:** After the Google Script uploads the video, the "Rename Uploaded Video" node uses the `driveUrl` (assumed to be returned by the previous node) to rename the uploaded video file in Google Drive to "Music Video 1".

## Services:

*   Google Drive
*   Google Apps Script

## Hashtags:

#n8n #googleDrive #automation #videoUpload #googleAppsScript

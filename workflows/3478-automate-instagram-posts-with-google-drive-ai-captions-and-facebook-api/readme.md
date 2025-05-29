# Automate Instagram Posts with Google Drive, AI Captions & Facebook Graph API

## Use cases:

- **Automated Content Publishing:** Automatically post content (photos, videos, carousels) from a designated Google Drive folder to Instagram, ideal for businesses or influencers who want to streamline their social media posting process.
- **AI-Powered Caption Generation:** Generate engaging captions for Instagram posts using AI, saving time and effort while maintaining a consistent brand voice.
- **Content Scheduling and Management:** Use Google Sheets as a content calendar to organize posts, captions, and media links, providing a centralized hub for Instagram content management.

## How it works:

1.  **Google Drive Trigger:** The workflow starts when a new file (photo, video, or carousel) is uploaded to a specific folder in Google Drive.
2.  **Download File from Google Drive:** The uploaded file is downloaded from Google Drive.
3.  **AI Caption Generation:** OpenAI generates an Instagram caption based on the file name and a predefined prompt. This creates engaging and relevant captions.
4.  **Save to Google Sheets:** The file name, AI-generated caption, media URL, and thumbnail URL are saved to a Google Sheet, creating a content record and source for the next step.
5.  **Facebook Graph API (Media Upload):** The Facebook Graph API retrieves the media URL, caption, and other information from Google Sheets to prepare the post on Instagram.
6.  **Facebook Graph API (Publish Post):** Finally post to Instagram.

## Services:

-   Google Drive: For media file storage and triggering the workflow.
-   OpenAI: For generating captions using AI.
-   Google Sheets: For storing post data (captions, media URLs) and managing content.
-   Facebook Graph API: For publishing content to Instagram.

## Hashtags:

#n8n #automation #instagram #socialmedia #contentcreation

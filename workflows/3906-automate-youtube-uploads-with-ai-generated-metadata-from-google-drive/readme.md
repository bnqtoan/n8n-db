# YT New Video Upload

## Use cases:

-   **Automated YouTube Content Publishing:** Automatically upload new videos from a Google Drive folder, generate descriptions and tags, and update the video metadata on YouTube.
-   **Content Repurposing:** Extract transcripts from YouTube videos to generate summaries, titles, and tags, facilitating content repurposing efforts.
-   **Hands-Free YouTube Management:** Streamline the video publishing process, minimizing manual effort and ensuring consistent metadata across uploads.

## How it works:

1.  **Trigger:** The workflow is triggered when a new file is created in a specific folder in Google Drive ("New Video?" node).
2.  **Download Video:** The "Download New Video" node downloads the newly created video file from Google Drive.
3.  **Upload Video:** Then the file gets uploaded to Youtube.
4.  **Token Setup:** Apify token is setted for transcript extraction.
5.  **Get Transcript:** Then the transcript is pulled from Youtube
6.  **Format Transcript:** The "Adjust Transcript Format" node formats the transcript data extracted from the YouTube video using the Apify actor.
7.  **Create Description:** The "Create Description" node uses the OpenAI model to generate a detailed and concise summary (with paragraphs) for the YouTube video description based on the transcript.
8.  **Generate Youtube Title:** The "YT Title" node uses the OpenAI model to generate an SEO-optimized YouTube title based on the transcript.
9.  **Generate Youtube Tags:** The "YT Tags" node uses the Google Gemini model to generate an SEO-optimized YouTube tags based on the transcript.
10. **Update Metadata:** The "Update Video's Metadata" node updates the uploaded video's title, description, and tags on YouTube using the generated content.
11. **Delete file:** The "Delete File from Upload Folder" node deletes the video from Google Drive.

## Services:

-   Google Drive
-   YouTube
-   OpenAI
-   Apify

## Hashtags:

#n8n #automation #youtube #googleDrive #contentCreation

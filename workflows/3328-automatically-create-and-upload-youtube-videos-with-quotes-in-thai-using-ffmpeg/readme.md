# AutoClip – Automatically Generate Video Clips and Upload to YouTube

## Use cases:

- **Content Creation:** Automatically generate daily motivational or educational video clips for social media platforms like YouTube, Instagram, or TikTok.
- **Marketing Automation:** Create short promotional videos showcasing product features or customer testimonials for marketing campaigns.
- **Personalized Video Generation:** Generate personalized video messages for clients or team members using quotes, background music, and video clips.

## How it works:

1.  **Data Retrieval:** The workflow starts by retrieving quotes from a Google Sheet ("Quotes\_status") and listing video and music background files from specified Google Drive folders.
2.  **Data Processing & Random Selection:** It then retrieves data for video and music files from separate Google Sheets, merges the data (quotes, video, and music), and randomly selects one of each.
3.  **File Download & Local Storage:** The selected video and music files are downloaded from Google Drive and saved locally as "video1.mp4" and "music1.mp3," respectively.
4.  **Overlay Text Preparation:** A quote and author are prepared as overlay text using custom fonts and styling, to later be added to the video.
5.  **Video Generation with FFmpeg:** FFmpeg is used to combine the video and music files, add the overlay text, and generate a final video clip named "output.mp4". The FFmpeg command scales the video to 1080x1920, crops it, overlays it on a black background, adds the text overlay, and adjusts the audio volume.
6.  **YouTube Upload:** The generated video is uploaded to YouTube using the YouTube API's resumable upload feature. The video title and description are populated with the selected quote and author.
7.  **Status Updates:** Finally, the workflow updates the Google Sheets ("Quotes\_status" and "video\_backgroud\_list") with the YouTube video URL and status updates (e.g., marking the quote and background video as "DONE").

## Services:

-   Google Sheets
-   Google Drive
-   YouTube API
-   FFmpeg (requires local installation on the n8n server)

## Hashtags:

#n8n #automation #videoediting #youtube #contentcreation

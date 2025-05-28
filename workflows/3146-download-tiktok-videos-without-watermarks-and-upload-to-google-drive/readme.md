# Tiktok Downloader

## Use cases:

- **Content Archiving:** Automatically download TikTok videos for personal archiving or backup purposes.
- **Offline Viewing:** Download TikTok videos to watch them later offline, especially useful during travel or in areas with limited internet connectivity.
- **Content Creation (with permission):** Download videos (with proper permission from the creator) for use in remixes, compilations, or other creative projects.

## How it works:

This workflow automates the process of downloading TikTok videos without watermarks. Here's a step-by-step breakdown:

1. **Trigger:** The workflow is manually triggered by clicking 'Test workflow'.
2. **Get TikTok Video Page Data:**  The workflow sends an HTTP request to a specified TikTok video URL. The User-Agent is set to mimic a browser to avoid bot detection. The full HTML response and headers are captured.
3. **Scrape raw video URL:** The workflow parses the HTML content from the previous step to find the direct video URL. It uses a regular expression to extract the JSON data within the `<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"...>` tag, where the video URL is located. Cookies are also extracted.
4. **Output video file without watermark:** Another HTTP request is made, this time directly to the extracted video URL.  The cookies and User-Agent from the previous steps are included in the headers to bypass TikTok's download restrictions and prevent watermarks. The response is saved as a file.
5. **Upload to Google Drive (Optional):**  The downloaded video file is uploaded to a specified folder in Google Drive. The filename is automatically set to the TikTok video ID.
6. **Set file permissions to public with link (Optional):**  The workflow sets the file permissions on Google Drive to allow anyone with the link to view the video.

## Services:

- **TikTok:** The workflow scrapes video data from TikTok URLs.
- **Google Drive:** (Optional) The workflow uploads the downloaded video to Google Drive and changes the sharing settings.

## Hashtags:

#n8n #automation #tiktok #downloader #nodewatermark

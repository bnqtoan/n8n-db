# Google Drive to Instagram, TikTok, and YouTube

## Use Cases

- **Automated Content Distribution:** Automatically upload videos from a specific Google Drive folder to multiple social media platforms, saving time and effort in manual posting.
- **Content Repurposing:** Repurpose video content by generating platform-specific descriptions and distributing them to Instagram, TikTok, and YouTube simultaneously.
- **Error Monitoring and Notifications:** Receive Telegram notifications when video uploads fail due to network issues or other errors, enabling quick troubleshooting and resolution.

## How it Works

1.  **Google Drive Trigger:** The workflow starts when a new file (video) is created in a specified Google Drive folder ("Influencersde").
2.  **Google Drive Download:** The workflow downloads the newly created video file from Google Drive.
3.  **Read video from Google Drive:** Saves a local copy of the downloaded video file.
4.  **Get Audio from Video:** Extracts the audio from the downloaded video using OpenAI.
5.  **Generate Description for Videos in Tiktok and Instagram:**  Uses OpenAI to generate a title/description for the video based on the extracted audio, using a predefined prompt and examples to tailor the description for social media.
6.  **Read Video from Google Drive:** Reads the video file from the local store, preparing it for upload. (this step happens 3 times in parallel for tiktok, instagram and youtube)
7.  **Upload Video and Description to Tiktok/Instagram/YouTube:** Uploads the video to TikTok, Instagram, and YouTube using the generated description via the `upload-post.com` API.
8.  **Error Handling:** If any error occurs during the process, it triggers the "Error Trigger," which checks if the error is related to DNS issues. If not, a notification is sent via Telegram to alert the user.

## Services

-   **Google Drive:** Cloud storage service for storing and triggering the workflow with new video uploads.
-   **OpenAI:** AI platform for transcribing audio and generating video descriptions.
-   **Telegram:** Messaging app for receiving error notifications.
-   **upload-post.com:** Third-party service to upload the same video to tiktok, instagram and youtube.

## Hashtags

#n8n #automation #socialmediamarketing #contentcreation #googledrive

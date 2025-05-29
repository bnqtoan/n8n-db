# Automated Video Creation and Social Media Posting Workflow

## Use Cases:

- **Content Creation for Social Media:** Automatically generate and post videos on various social media platforms like TikTok, Instagram, Facebook, and YouTube, streamlining content creation efforts.
- **Marketing Campaign Automation:** Create videos based on trending topics and user-generated prompts, then distribute them across multiple channels for broader reach and engagement.
- **Educational Content Generation:** Develop educational videos using automated scripts and visuals, ideal for online courses or informative social media content.

## How it works:

1.  **Topic Generation and Scheduling:** The workflow starts with a scheduled trigger that pulls data (prompt, caption, title/topic) from a Google Sheet, or it can automatically generate new topic ideas using an OpenAI Chat Model.

2.  **Content Creation:**
    *   **Script Generation**: An OpenAI model generates a video script based on the generated or pulled topics.
    *   **Image Generation**: An HTTP Request node uses the script to generate an image using a Text-to-Image service.
    *   **Video Prompt Generation**: Another OpenAI model creates a video prompt, and an HTTP request is made to generate a video, followed by a wait time.
    *   **Audio Generation**: A sound prompt is generated, converted to audio using a Text-to-Sound service, stored in Google Drive with access permissions, and then merged with other relevant data.

3.  **Video Rendering and Approval:** The workflow renders the video using Creatomate, waits for rendering completion, and retrieves the final video. A switch node checks the video status; if rendering fails, a notification email is sent.

4.  **Approval Process:**
    *   **Approval Email**: Sends an approval email with the video link.
    *   **Webhook**: Captures the approval or rejection via a webhook.
    *   **Google Sheet Update**: Updates the Google Sheet to reflect the approval/rejection status.

5.  **Social Media Posting:**
    *   **Video Download**: The workflow downloads the approved video.
    *   **Platform Posting**: The video is then posted to various social media platforms, including TikTok, Instagram, Facebook, and YouTube. Instagram utilizes a container creation and publishing process.

## Services:

-   **Google Sheets:** Used for storing and retrieving video ideas, scripts, and tracking approval status.
-   **OpenAI:** Generates video scripts, image prompts, and sound prompts.
-   **Creatomate:** Renders the video.
-   **TikTok API:** Posts videos to TikTok.
-   **Facebook Graph API:** Used for posting to Facebook and Instagram.
-   **YouTube API:** Uploads videos to YouTube.
-   **Google Drive:** Stores the generated audio files.
-   **Email (Gmail):** Sends approval requests and failure notifications.

## Hashtags:

#n8n #automation #videocreation #socialmedia #contentmarketing

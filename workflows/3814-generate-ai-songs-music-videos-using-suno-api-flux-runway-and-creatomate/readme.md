# Music Generation Workflow

## Use cases:

- **Automated Music Creation:** Generate music tracks, cover images, and promotional videos from user input or ideas fetched from the internet.
- **Content Creation for Social Media:** Automatically create music and videos suitable for platforms like TikTok or Instagram.
- **Personalized Music Generation:** Tailor music generation to specific user preferences gathered through Telegram interactions.

## How it works:

1.  **Trigger:** The workflow starts either from a Telegram message containing a music idea or a Google Sheets trigger indicating a new track to process.
2.  **Idea Input:** If triggered by Telegram, it processes text or transcribes voice notes, setting the input as "text."
3.  **AI Music Agent:** Uses OpenAI to generate music ideas, leveraging tools like Google Sheets to append new tracks and SerpAPI to browse the internet for ideas.
4.  **Lyrics Generation:** Uses OpenAI to generate lyrics for the music track.
5.  **Music Generation API:** Sends the lyrics to a music generation API (details unspecified in the JSON) to create an audio track.
6.  **Status Checks:** Waits for the music generation to complete and checks its status using HTTP requests.
7.  **Audio Processing:** Once completed, downloads the audio track and uploads it to Google Drive.
8.  **Cover Image and Video Generation:** Employs the Gemini AI model to generate prompts for cover images and videos.
9.  **Image and Video Generation:** Uses HTTP requests to generate cover images in 1:1 and 3:1 ratios.
10. **Video Creation:** Converts the 3:1 image to video.
11. **Asset Upload:** Uploads the cover images and video to Google Drive, with an intermediate step using Kraken.io for URL retrieval.
12. **Video Rendering and Upload:** Renders the audio track with the video to create a music video. Uploads the final music video to Google Drive.
13. **Data Update:** Updates Google Sheets with the URLs of the audio track, cover images, and video.
14. **Notifications:** Sends status updates and video URLs to the user via Telegram.

## Services:

-   **Telegram:** For user input and status updates.
-   **Google Sheets:** For tracking music ideas, confirming tracks, and storing URLs.
-   **Google Drive:** For storing audio tracks, cover images, and videos.
-   **OpenAI:** For music idea and lyrics generation.
-   **Gemini AI:** For cover image and video prompts.
-   **SerpAPI:** For browsing the internet for music ideas.
-   **Kraken.io:** For cover image URL retrieval.
-   **Music Generation API:** External API for music track generation. (Details need to be specified.)
-   **Video Generation API:** External API for converting images to video. (Details need to be specified.)

## Hashtags:

#n8n #automation #musicgeneration #ai #contentcreation

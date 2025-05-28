# AI Automated TikTok/Youtube Shorts/Reels Generator

## Use cases:

-   Automatically generate short-form videos for TikTok, YouTube Shorts, or Instagram Reels to promote job opportunities or resume-building tips.
-   Create engaging content to attract a wider audience on social media platforms using AI-generated visuals and captions.
-   Batch create content for social media, diversifying the platforms you can outreach on.

## How it works:

1.  **Loads Data from Google Sheets:** Reads video ideas and environment prompts from a specified Google Sheet.
2.  **Generates Video Captions (OpenAI):** Uses OpenAI to generate five unhinged, entertaining TikTok captions based on the loaded idea.
3.  **Generates Image Prompts (OpenAI):** Expands the captions into detailed, hyper-realistic prompts optimized for Qubico/flux1-dev image generation using OpenAI.
4.  **Generates Images (PiAPI - Flux):** Generates realistic images from the prompts using the PiAPI service with the Flux model.
5.  **Generates Videos (PiAPI - Kling):** Creates short videos from the generated images using the PiAPI service with the Kling model.
6.  **Generates Voice-Over Script (OpenAI):** Generates a funny script using OpenAI that relates to the captions.
7.  **Generates Voice-Over (Eleven Labs):** Converts the script into a voice-over using the Eleven Labs API.
8.  **Combines Videos, Captions, and Voice-Over:** Merges the generated videos, captions, and voice-over URLs into a single item.
9.  **Renders Final Video (Creatomate):** Uses Creatomate to combine the video clips, captions, and voice-over into a final rendered video.
10. **Uploads to Google Drive:** Uploads the rendered video and voice-over to Google Drive.
11. **Updates Google Sheet:** Updates the Google Sheet with the final video link and token usage statistics.
12. **Notifies on Discord:** Sends a notification to a Discord channel with the link to the newly created video.

## Services:

-   Google Sheets
-   OpenAI
-   PiAPI (Flux and Kling models)
-   Eleven Labs
-   Google Drive
-   Creatomate
-   Discord

## Hashtags:

#n8n #automation #AI #videoGenerator #socialMediaContent

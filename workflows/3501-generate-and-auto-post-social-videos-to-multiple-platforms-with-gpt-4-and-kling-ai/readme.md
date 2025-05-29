# 💥AI Social Video Generator with GPT-4, Kling & Blotato —Auto-Post to Instagram, Facebook, TikTok, Twitter & Pinterest - vide

## Use cases:

- **Automated Social Media Content Creation:** Automatically generate and post engaging videos across multiple social media platforms, saving time and effort for social media managers.
- **Content Repurposing:** Transform existing text prompts or ideas into short-form videos with voice-overs and captions, ideal for repurposing blog posts or articles.
- **Rapid Video Prototyping:** Quickly create video prototypes for marketing campaigns, educational content, or product demos, enabling faster experimentation and iteration.

## How it works:

This workflow automates the creation and distribution of short videos across multiple social media platforms, starting from a simple text prompt.

1.  **Trigger: Telegram Prompt:** The workflow is initiated by a Telegram message containing a prompt for video generation and caption idea.
2.  **Extract Prompt & Caption:** Extracts the video prompt and caption from the Telegram message.
3.  **Transform Prompt for Kling (GPT-4):** Uses GPT-4 to refine the video prompt, optimizing it for Kling AI's video generation capabilities.
4.  **Generate Video via Kling API:** Generates a video using the refined prompt via the Kling API.
5.  **Wait for Video Generation:** Pauses the workflow until the video generation is complete.
6.  **Get Generated Video URL:** Retrieves the URL of the generated video from the Kling API.
7.  **Generate Voice-Over Script:** Generates a short voice-over script (around 20 words) using GPT-4, based on the provided caption idea.
8.  **Convert Script to Audio (TTS):** Converts the voice-over script into an audio file using OpenAI's text-to-speech capabilities.
9.  **Upload Audio to Cloudinary:** Uploads the generated audio file to Cloudinary.
10. **Merge Audio + Video:** Combines the video from Kling and the voice-over audio using the JSON2Video API.
11. **Wait for Audio/Video Fusion:** Pauses the workflow until the video and audio are merged.
12. **Get Video URL with Audio:** Retrieves the URL of the merged video from JSON2Video.
13. **Wait Before Captioning:** Adds a short delay before applying captions.
14. **Add Captions/Subtitles to Video:** Adds professional-looking captions/subtitles to the video using JSON2Video.
15. **Wait for Caption Render:** Pauses the workflow until the captions are rendered.
16. **Get Final Video URL (Audio + Captions):** Retrieves the URL of the final video with audio and captions.
17. **Generate Social Caption from Voiceover:** Generates a social media caption based on the voice-over script using GPT-4.
18. **Generate YouTube-Style Title:** Generates a catchy YouTube title using GPT-4.
19. **Save Video Metadata to Google Sheets:** Saves the video metadata (title, prompt, URL, description) to a Google Sheet for tracking.
20. **Send Final Video to Telegram:** Sends the final video to a specified Telegram chat for review or reuse.
21. **Send Caption Link via Telegram:** Sends the social media caption and a link to the video in Telegram.
22. **Assign Social Media IDs:** Assigns account IDs for various social media platforms used by Blotato.
23. **Upload Video to Blotato:** Uploads the video to Blotato.
24. **Post to various social media:** The workflow publishes the video with the generated title/description to Instagram, YouTube, TikTok, Facebook Page, Threads, Twitter (X), LinkedIn, Bluesky, and Pinterest using the Blotato API.

## Services:

-   Telegram
-   GPT-4 (via Langchain)
-   Kling AI (via piapi.ai)
-   Cloudinary
-   JSON2Video
-   Google Sheets
-   Blotato

## Hashtags:

#n8n #automation #AISocialVideo #videoGeneration #socialMediaMarketing

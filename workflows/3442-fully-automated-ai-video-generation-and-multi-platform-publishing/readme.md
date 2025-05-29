# AI-Powered Short-Form Video Generator with OpenAI, Flux, Kling, and ElevenLabs and upload to all social networks

## Use cases:

- **Automated Content Creation for Social Media:** Generate engaging short-form videos for platforms like TikTok, Instagram, YouTube, Facebook, and LinkedIn, based on ideas fetched from a Google Sheet.
- **Job Hunting/Resume Content Generation:** Create unique, attention-grabbing videos about job searching or resume building, leveraging AI to produce both the visuals and the script.
- **Hands-Free Social Media Marketing:** Automate the entire video creation and posting process, from idea to finished product, reducing manual effort and ensuring consistent content output.

## How it works:

1.  **Idea Sourcing:** The workflow starts by fetching video ideas and environment prompts from a specified Google Sheet.
2.  **Caption Generation:** OpenAI is used to generate five entertaining TikTok captions based on the video idea. These captions follow a "Problem > Action > Reward" structure.
3.  **Image Prompt Generation:**  OpenAI creates detailed image prompts tailored for the Flux AI model, based on the generated captions and environment prompts, optimizing for a realistic, first-person POV style.
4.  **Image Generation with Flux:** The Flux AI model (via the PiAPI service) generates images based on the prompts. The workflow checks for failures and retries if necessary.
5.  **Video Generation with Kling:**  The generated images are then converted into short videos using the Kling AI model (also via PiAPI). Parameters like duration and camera control are specified. Again, the workflow incorporates failure checks and retry logic.
6.  **Voiceover Script Generation:** OpenAI is used to generate a funny, edgy script that corresponds to the video captions.
7.  **Voiceover Generation with ElevenLabs:** The generated script is converted into a voiceover using ElevenLabs, and the audio file is uploaded to Google Drive.
8.  **Video and Audio Merging:** The video clips, captions, and voiceover are combined.
9.  **Final Video Rendering with Creatomate:**  The individual video clips, captions, and voiceover are sent to Creatomate. The final video is rendered based on a predefined template, and the result is downloaded.
10. **Social Media Uploading:** The final video is uploaded to Google Drive, and then uploaded to social media plateforms using upload-post.com.
11. **Google Sheet Update:** The Google Sheet is updated with the video's details (dimensions, models used, costs, link to the final video) and marks the idea as completed.
12. **Discord Notification:**  A notification is sent to a Discord channel to alert the user that the video is ready.

## Services:

*   Google Sheets
*   OpenAI
*   PiAPI (Flux, Kling)
*   ElevenLabs
*   Google Drive
*   Creatomate
*   Discord
*   upload-post.com

## Hashtags:

\#n8n \#automation \#videomarketing \#AI \#contentcreation

# My Workflow

## Use cases:

- **Automated Content Creation for Social Media:**  Transform popular Reddit threads into engaging videos for platforms like TikTok or YouTube Shorts.  The workflow automatically finds trending discussions, generates a voiceover, and combines it with relevant stock footage.
- **Hands-Free Video Production:** Ideal for content creators who want to produce videos without manual editing. Provide a Reddit link and the workflow will do the rest, from fetching content to rendering the final video.
- **Educational Video Generation:**  Quickly create short, informative videos based on Reddit discussions on various topics.  This can be useful for educational channels or internal training materials.

## How it works:

1. **Trigger:** The workflow starts with a Webhook or manual trigger ("When clicking ‘Test workflow’") which receives a Reddit link, desired video length, and TTS (Text-to-Speech) settings.
2. **Reddit Content Extraction:** The Reddit URL is converted to a Reddit API URL. The workflow then retrieves a Reddit token, fetches the content of the Reddit thread (title, comments).
3. **Comment Summarization and TTS Generation:**  The text is limited and sent to OpenAI (ChatGPT) to summarize the Reddit comments. OpenAI also generates the TTS audio based on the summarized text, using the specified voice and speed.
4. **Video Clip Sourcing:**  Pexels API is used to find stock video clips relevant to the Reddit thread. The workflow extracts URLs for 3 video clips.
5. **Media Upload:** The videos and generated TTS audio are uploaded to Shotstack.
6. **Timeline Creation:** The workflow combines the video clips and TTS audio into a timeline using a `Code` node to define the video sequence and timing.
7. **Video Rendering:** The timeline is sent to Shotstack for rendering. The workflow then polls Shotstack until the video is rendered and retrieves the video URL.
8. **Final output:** The workflow responds to the initial Webhook with the URL of the generated video.

## Services:

-   **Reddit API**: Used to fetch thread content.
-   **OpenAI (ChatGPT)**: Used for text summarization and text-to-speech (TTS) generation.
-   **Pexels API**: Used to source stock video clips.
-   **Shotstack**: Used to generate video content.

## Hashtags:

#n8n #automation #videogeneration #contentcreation #socialmedia

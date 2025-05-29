# My Workflow

## Use cases:

- **Automated Video Content Creation:** Automatically generate short videos from a Baserow database, ideal for social media content, tutorials, or marketing materials.
- **AI-Powered Script Generation and Refinement:** Use AI to generate video scripts, improve prompts, and structure output for video rendering, enhancing the quality and relevance of video content.
- **Dynamic Video Creation with External APIs:** Integrate with services like Runway, HeyGen, and CaptionsAI to create videos with AI avatars, generate captions, and utilize image generation, allowing for dynamic and personalized video content.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a new entry is added to a Baserow database via a webhook.
2.  **Data Processing and Script Type Check:** The data from the webhook is processed, and the workflow determines the script type ("ai gen" or manual).
3.  **AI Script Generation (if applicable):**
    -   If the script type is "ai gen," the workflow uses an OpenAI Chat Model to generate a video script using a Basic LLM Chain and Structured Output Parser.
    -   The script is then split into scenes.
4.  **Scene Processing and Enhancement:**
    -   Each scene is processed to potentially improve the prompt using the "Leo - Improve Prompt" node.
    -   Depending on the BackgroundType, it either creates a video with Runway or generates/uses an image.
5.  **Avatar/Captions Integration:**
    -   The workflow checks if a HeyGen avatar is needed and creates a video with the avatar using the HeyGen API if required.
    -   It uses CaptionsAI to generate captions for the video.
6.  **Video Rendering and Status Checks:**
    -   The workflow renders the video using the "json2video" service.
    -   It continuously checks the rendering status until the video is ready.
7.  **Final Video URL Update:** Once the video is successfully rendered, the FinalVideoURL in the Baserow database is updated.
8.  **Error Handling:** Throughout the process, error handling is implemented using "continueErrorOutput" to attempt to recover from failures and logging errors.

## Services:

-   **Baserow:** Used as a database to store video topics, scripts, and settings.
-   **OpenAI:** Utilized for AI-powered script generation and content improvement via the OpenAI Chat Model.
-   **Runway:** Employed for video creation based on generated scenes and images.
-   **HeyGen:** Used for creating videos with AI avatars.
-   **CaptionsAI:** Utilized for generating captions for the videos.
-   **json2video:** Service for rendering video.
-   **Leo:** Used to improve prompt and get imageId

## Hashtags:

#n8n #automation #videoGeneration #AI #workflow

# AI-Powered YouTube Shorts Automation: Create & Publish with OpenAI & ElevenLabs

## Use Cases:

- **Automated Content Creation:** Generate YouTube Shorts content from idea to publishing without manual intervention, saving time and resources.
- **AI-Driven Marketing:** Leverage AI to create engaging short videos for marketing campaigns, driving traffic and increasing brand awareness.
- **Content Repurposing:** Quickly transform existing blog posts, articles, or scripts into visually appealing video content.

## How it works:

This workflow automates the process of creating and publishing YouTube Shorts using AI and several services. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow starts with a "Telegram Trigger" node, initiating the process when a message is received via Telegram.
2.  **Idea Generation:** An "AI Agent" node takes the trigger data and brainstorms video ideas using OpenAI. Conversation memory is tracked.
3.  **Idea Approval:** A series of "If" nodes and "Telegram" nodes handle idea approval. The user receives video ideas via Telegram and can approve or deny them.
4.  **API Key Check:** It verifies the API Keys. If not set, it sends a message via telegram and stops.
5.  **Content Creation:** Once an idea is approved, the workflow proceeds to generate a video script using OpenAI ("Ideator 🧠"). This script is then converted to audio ("Convert Script to Audio" using an HTTP Request) and chunked ("Chunk Script").
6.  **Image Generation:** Based on the script, image prompts are generated using OpenAI ("Image Prompter 📷"). Then it requests the images.
7.  **Video Generation:** The workflow combines the generated audio and images to create video segments.
8.  **Video Assembly:** The segments are uploaded, and an HTTP request merges videos and audio and generates a render JSON.
9.  **Creatomate Integration:** Sends data to Creatomate, an online video editing platform.
10. **Final Video Approval:** Then sends the video to the user for final approval via Telegram.
11. **Base64 conversion** Converts the video to Base64
12. **YouTube Upload:** Upon approval, the video is automatically uploaded to YouTube using the "YouTube" node.
13. **Notification:** Finally, a "Telegram" node sends a notification confirming the successful video upload.

## Services:

-   **OpenAI:** Used for video idea generation, script creation, and image prompting.
-   **ElevenLabs:** The workflow uses HTTP request to generate audio from text with ElevenLabs
-   **Cloudinary:** The workflow uses HTTP request to store the video
-   **Creatomate:** Used to generate video using HTTP request
-   **Telegram:** Used for triggering the workflow, receiving ideas, approving content, and receiving notifications.
-   **YouTube:** Used for automatically uploading the generated video content.

## Hashtags:

#n8n #automation #youtube #ai #contentcreation #marketing

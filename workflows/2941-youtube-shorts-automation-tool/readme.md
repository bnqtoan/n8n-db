# YouTube Shorts Automation Tool

## Use Cases:

- **Automated Content Creation:** Generates YouTube Shorts content from chat messages, ideal for quickly producing videos on trending topics or answering audience questions.
- **Marketing and Social Media Management:** Streamlines the process of creating short-form video content for marketing campaigns, freeing up time for other tasks.
- **Educational Content Generation:** Transforms educational snippets or facts into engaging YouTube Shorts for online learning platforms or channels.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received (`When chat message received` node).
2.  **Script Generation:** The initial chat message is sent to an LLM (`Script Prompter`) to refine the input. The refined input is sent to (`Script Organizer`), then forwarded to a (`Script Generator`) to generate a video script.
3.  **Content Outline:** The generated script is used to create an outline (`Outliner` node), which is then split into individual parts (`Split Out` node).
4.  **Image Prompting:** Each part of the outline is passed to an AI image generator (`Image Prompter`) to generate prompts for images.
5.  **Image Retrieval:** The image prompts are used to request images (`Request Image` node), and then the workflow waits for the images to be generated (`Wait For Image` node). The images are then retrieved (`Get Image` node).
6.  **Video Generation:** A video is requested (`Request Video` node) using the script and images. The workflow waits for the video to be generated (`Wait For Video` node) before retrieving it (`Get Video` node).
7.  **Cloudinary Upload:** The video is uploaded to Cloudinary (`Upload to Cloudinary` node) to be used for video editing.
8.  **Aggregation & Merging:** The Cloudinary upload and generated video are combined (`Aggregate` and `Merge` nodes) to create a JSON object.
9.  **Editor JSON Creation:** The merged JSON data is used to create a JSON file compatible with a video editor (`Create Editor JSON` and `Set JSON Variable` nodes).
10. **Video Editing & Rendering:** The JSON is sent to a video editor service (`Editor` node). The workflow waits for the video to be rendered (`Rendering` node) and retrieves the final video (`Get Final Video` node).
11. **Final Video Delivery:** The final video is ready for use (the workflow currently ends here, but could be extended to upload the video directly to YouTube).

## Services:

-   Cloudinary
-   OpenAI (or other AI-based Image generation service)
-   Video Editing Service (external service requiring JSON input)

## Hashtags:

#n8n #YouTubeShorts #Automation #ContentCreation #VideoMarketing

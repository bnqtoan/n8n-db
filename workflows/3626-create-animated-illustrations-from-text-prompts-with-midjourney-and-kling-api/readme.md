# Motion-illustration Workflow Generated with Midjourney and Kling API

## Use cases:

- **Social Media Content Creation:** Automatically generate engaging video content from text prompts and images for platforms like Instagram, TikTok, or YouTube Shorts.
- **Promotional Material Generation:** Quickly create short, eye-catching videos for advertising campaigns or product demonstrations.
- **Illustrative Storytelling:** Produce animated stories or visual narratives based on given prompts and visual styles.

## How it works:

This workflow automates the process of creating short motion illustrations using the Midjourney and Kling APIs via PiAPI.

1.  **Trigger:** The workflow starts when you manually click the "Test workflow" button.
2.  **Image Generation (Midjourney):**
    *   A prompt is sent to the Midjourney API ("Basic Prompt" node) via PiAPI to generate an image based on the provided text.
    *   The workflow then retrieves the task ID from Midjourney.
    *   The workflow repeatedly checks the status of the image generation task ("Midjourney Image Generator" and "Get Data Status"). If not completed, the workflow waits ("Wait for Image Generation").
3.  **Image Selection:** Once the image generation is complete, one image url is randomly selected from the temporary image urls array in the "Get Image" node.
4.  **Video Generation (Kling):**
    *   The selected image URL and a prompt are sent to the Kling API ("Kling Video Generator" node) via PiAPI.
    *   The workflow then retrieves the task ID from Kling.
    *   The workflow repeatedly checks the status of the video generation task ("Get Video" and "Verify Data Status"). If not completed, the workflow waits ("Wait for Video Generation").
5.  **Result:** Once the video is generated, the workflow extracts the final video URL, including a watermark-free version, from the API response ("Get Final Video URL").

## Services:

-   **PiAPI:** Acts as a bridge to access Midjourney and Kling APIs.
-   **Midjourney:** An AI art generation tool that creates images from textual descriptions.
-   **Kling:** An AI video generation tool that creates videos from image and text prompt.

## Hashtags:

#n8n #automation #AI #MotionIllustration #VideoGeneration
